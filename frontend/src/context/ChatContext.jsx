
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from 'react-hot-toast'


const ChatContext = createContext()

export const ChatProvider = ({ children }) => {

    const [messages, setMessages] = useState([])
    const [text, setText] = useState("");
    const [newRequestLoading, setNewRequestLoading] = useState(false)

    async function fetchResponse() {
        if (text === "") return alert("write text")
        setNewRequestLoading(true)
        setText("")
        try {
            const response = await axios({
                url: "http://localhost:8080/chat",
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                data: {
                    message: text
                }
            })
            const convo = {
                question: text,
                answer: response.data.response
            }
            setMessages((prev) => [...prev, convo])

            const { data } = await axios({
                url: `http://localhost:8000/chat/${selected}`,
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                withCredentials: true,
                data: {
                    message: text,
                    answer: response.data.response,
                }
            },)
        } catch (error) {
            alert("somethig went wrong")
            console.log(error)
        } finally {
            setNewRequestLoading(false)
        }
    }

    const [chats, setChats] = useState([])

    const [selected, setSelected] = useState(null)

    async function fetchChats() {
        try {
            const { data } = await axios({
                url: "http://localhost:8080/chat/api/v1/chat/all",
                method: "GET",
                headers: {
                    "content-type": "application/json",
                },
                withCredentials: true,
            },)
            setChats(data);
            setSelected(data[0]._id)
        } catch (error) {
            console.log("something went wrong", error)
        }
    }

    useEffect(() => {
        fetchChats()
    }, [])

    const [msgLoading, setMsgLoading] = useState(false)

    async function fetchMessages() {
        setMsgLoading(true)
        try {
            const { data } = await axios.get({
                url: `http://localhost:8080/chat/api/chat/${selected}`,
                withCredentials: true,
            });
            setMessages(data)
        } catch (error) {
            console.log(error)
        } finally {
            setMsgLoading(false)
        }
    }

    useEffect(() => {
        fetchMessages()
    }, [selected])


    const [createLoading, setCreateLoading] = useState(false)

    async function createChat() {
        setCreateLoading(true)
        try {
            await axios.post(
                "http://localhost:8080/chat/api/v1/chat/new",
                {},
                {
                    withCredentials: true
                }
                ,)
            await fetchChats();
        } catch (error) {
            if (error.response?.status === 401) {
                toast.error("Please login first")
            } else {
                toast.error("Something went wrong")
            }
            console.log(error)
        } finally {
            setCreateLoading(false)
        }
    }

    async function deleteChat(id) {
        try {
            const { data } = await axios.delete(`http://localhost:8080/chat/api/v1/chat/${id}`, {
                withCredentials:true,
            });
            toast.success(data.message)
            fetchChats()
            window.location.reload()
        } catch (error) {
            console.log(error)
            alert("something went wrong")
        }
    }
    
    return (
        <ChatContext.Provider value={{ fetchResponse, messages, text, setText, newRequestLoading, chats, fetchChats, createLoading, createChat, selected, setSelected, msgLoading, setMsgLoading, deleteChat }}>
            {children}
        </ChatContext.Provider>
    )
}

export const ChatData = () => useContext(ChatContext);
