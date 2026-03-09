
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from 'react-hot-toast'
import { server } from "../main"


const ChatContext = createContext()

export const ChatProvider = ({ children }) => {

    const [messages, setMessages] = useState([])
    const [text, setText] = useState("");
    const [newRequestLoading, setNewRequestLoading] = useState(false)

    async function fetchResponse() {
        if (text === "") return alert("write text")
        setNewRequestLoading(true)
        const message = text
        setText("")
        try {
            const airesponse = await axios.post("http://localhost:8080/chat",
                {message}
            )
            const convo = {
                question: message,
                answer: airesponse.data.response
            }
            setMessages((prev) => [...prev, convo])

            await axios.post(`${server}/api/v1/chat/${selected}/message`,
                {
                    question: message,
                    answer: airesponse.data.response
                },
                {
                    withCredentials: true
                }
            )

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
            const { data } = await axios.get(`${server}/api/v1/chat/all`,
                {
                    withCredentials: true,
                }
            )
            setChats(data);
            if (data.length > 0) {
                setSelected(data[0]._id)
            }
            return data;
        } catch (error) {
            console.log("something went wrong", error)
        }
    }

    useEffect(() => {
        fetchChats()
    }, [])

    const [msgLoading, setMsgLoading] = useState(false)

    async function fetchMessages() {

        if (!selected) {
            setMessages([])
            return
        }

        setMessages([])
        setMsgLoading(true)

        try {

            const { data } = await axios.get(
                `${server}/api/v1/chat/${selected}/messages`,
                { withCredentials: true }
            )

            setMessages(data)

        } catch (error) {

            console.log("Failed to fetch messages:", error)

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
            await axios.post(`${server}/api/v1/chat/new`,
                {},
                {
                    withCredentials: true
                })
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

            const { data } = await axios.delete(
                `${server}/api/v1/chat/${id}`,
                {
                    withCredentials: true
                }
            )

            toast.success(data.message)

            // fetch updated chats
            const updatedChats = await fetchChats()

            // select next available chat
            if (updatedChats.length > 0) {
                setSelected(updatedChats[0]._id)
            } else {
                setSelected(null)
                setMessages([])
            }

        } catch (error) {

            console.log(error)
            toast.error("Something went wrong")

        }
    }

    return (
        <ChatContext.Provider value={{ fetchResponse, messages, text, setText, newRequestLoading, chats, fetchChats, createLoading, createChat, selected, setSelected, msgLoading, setMsgLoading, deleteChat }}>
            {children}
        </ChatContext.Provider>
    )
}

export const ChatData = () => useContext(ChatContext);
