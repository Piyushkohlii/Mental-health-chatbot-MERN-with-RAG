import { FaComments, FaBrain, FaBookMedical, FaUserShield } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css"

const SoulTalkHelps = () => {
    useEffect(() => {
        AOS.init({
            duration: 500, // animation duration
        })
    }, [])
    const features = [
        {
            icon: <FaComments className="text-3xl text-blue-500" />,
            title: "Talk Freely",
            desc: "Share your thoughts and feelings in a safe, judgment-free space."
        },
        {
            icon: <FaBrain className="text-3xl text-pink-400" />,
            title: "AI Guidance",
            desc: "Our AI suggests helpful techniques for stress, anxiety, and emotional wellbeing."
        },
        {
            icon: <FaBookMedical className="text-3xl text-purple-500" />,
            title: "Helpful Resources",
            desc: "Access curated mental health resources and exercises anytime."
        },
        {
            icon: <FaUserShield className="text-3xl text-green-400" />,
            title: "Private & Secure",
            desc: "Your conversations remain confidential and secure."
        }
    ];

    return (
        <section className="bg-gray-100 py-20 px-6 text-gray-800">
            <div className="max-w-6xl mx-auto text-center">

                {/* Title */}
                <h2 className="text-4xl font-bold mb-4 text-[#0582e9]">
                    How SoulTalk Helps
                </h2>

                <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                    SoulTalk provides emotional support through intelligent conversations,
                    helpful guidance, and mental wellness resources.
                </p>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {features.map((item, index) => (
                        <div
                            data-aos="fade-up"
                            key={index}
                            className="bg-white rounded-xl p-6 border border-gray-200 
              hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10
              transition duration-300"
                        >

                            {/* Icon */}
                            <div className="flex justify-center mb-4">
                                <div className="bg-blue-100 p-4 rounded-full text[#0582e9] text-3xl">
                                    {item.icon}
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-sm">
                                {item.desc}
                            </p>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default SoulTalkHelps;