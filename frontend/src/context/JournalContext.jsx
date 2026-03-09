import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from 'react-hot-toast'
import { server } from "../main"

const JournalContext = createContext()

export const JournalProvider = ({ children }) => {

    const [journals, setJournals] = useState([]);
    const [loading, setLoading] = useState(false);

    async function createJournal(title, content, mood) {
        setLoading(true);

        try {

            const { data } = await axios.post(
                `${server}/api/v1/journal/new`,
                {
                    title,
                    content,
                    mood
                },
                {
                    withCredentials: true
                }
            );

            toast.success("Journal saved");

            setJournals((prev) => [data, ...prev]);

        } catch (error) {

            toast.error(error.response?.data?.message || "Failed to save journal");

        } finally {

            setLoading(false);

        }
    }

    async function fetchJournals() {

        try {

            const { data } = await axios.get(
                `${server}/api/v1/journal/all`,
                {
                    withCredentials: true
                }
            );

            setJournals(data);

        } catch (error) {

            console.log("Failed to fetch journals", error);

        }

    }
    
    async function getSingleJournal(id) {

    try {

        const { data } = await axios.get(
            `${server}/api/v1/journal/${id}`,
            {
                withCredentials: true
            }
        );

        return data;

    } catch (error) {

        console.log("Failed to fetch journal", error);
        toast.error("Failed to load journal");

    }

}

    async function deleteJournal(id) {

        try {

            const { data } = await axios.delete(
                `${server}/api/v1/journal/${id}`,
                {
                    withCredentials: true
                }
            );

            toast.success(data.message);

            setJournals((prev) =>
                prev.filter((journal) => journal._id !== id)
            );

        } catch (error) {

            toast.error("Failed to delete journal");

        }
    }

    useEffect(() => {
        fetchJournals();
    }, []);

    return (
    <JournalContext.Provider value={{
        journals,
        loading,
        createJournal,
        fetchJournals,
        getSingleJournal,
        deleteJournal
    }}>
        {children}
    </JournalContext.Provider>
)
}




export const JournalData = () => useContext(JournalContext);