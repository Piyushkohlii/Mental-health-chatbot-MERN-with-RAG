from flask import Flask, jsonify , request
from flask_cors import CORS
from src.helper import download_embeddings
from langchain_pinecone import PineconeVectorStore
from langchain_groq import ChatGroq
from langchain.chains import create_retrieval_chain
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain_core.prompts import ChatPromptTemplate
from dotenv import load_dotenv
from src.prompt import *
import os

load_dotenv()

CORS_ORIGIN = os.getenv("CORS_ORIGIN")

app = Flask(__name__)
CORS(
    app,
    supports_credentials=True,
    origins=[CORS_ORIGIN]
    )

PINECONE_API_KEY = os.getenv("PINECONE_API_KEY")
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

os.environ["PINECONE_API_KEY"] = PINECONE_API_KEY
os.environ["GROQ_API_KEY"] = GROQ_API_KEY

embedding = download_embeddings()

index_name = "soultalk"

# load existing index

from langchain_pinecone import PineconeVectorStore
#Embed each chunk and upsert the embeddings into your Pinecone index
docsearch = PineconeVectorStore.from_existing_index(
    index_name=index_name,
    embedding=embedding
)

retriever = docsearch.as_retriever(search_type="similarity",search_kwargs={"k":3})

chatModel = ChatGroq(
    model="llama-3.1-8b-instant",
    api_key=os.environ["GROQ_API_KEY"],
    temperature=0
    )

prompt = ChatPromptTemplate.from_messages(
    [
        ("system",system_prompt),
        ("human","{input}"),
    ]
)

question_answer_chain = create_stuff_documents_chain(chatModel,prompt)
rag_chain = create_retrieval_chain(retriever,question_answer_chain)

#-----Mood detection----------

def analyze_mood(message):

    mood_prompt = f"""
You are a mood detection AI.

Analyze the emotional tone of the message.

Return ONLY one word from this list:
happy, sad, anxiety, anger, neutral

Message:
{message}
"""

    result = chatModel.invoke(mood_prompt)

    mood = result.content.strip().lower()

    return mood


@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    msg = data["message"]
    
    if not msg:
        return jsonify({"error": "Message is required"}), 400

    print("User:", msg)

    #----mood detect------
    mood = analyze_mood(msg)
    
    #-----get rag response---------
    response = rag_chain.invoke({"input": msg})

    answer = response["answer"]

    print("AI:", answer)

    return jsonify({
        "response": answer,
        "mood" : mood,
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0",port=8080,debug=True)