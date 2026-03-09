import { useEffect } from "react";
import AOS from "aos";
import { FaComments, FaUserFriends, FaBrain } from "react-icons/fa";

const SoulTalkWorks = () => {

    useEffect(() => {
        AOS.init({
            duration: 700,
            once: false
        });
    }, []);

    const steps = [
        {
            icon: <FaComments className="text-3xl text-blue-500" />,
            title: "Start a Conversation",
            desc: "Click the start chat button and begin your journey toward better mental wellness."
        },
        {
            icon: <FaUserFriends className="text-3xl text-red-500" />,
            title: "Share Your Thoughts",
            desc: "Talk openly with SoulTalk about your feelings, worries, or daily stress."
        },
        {
            icon: <FaBrain className="text-3xl text-pink-400"  />,
            title: "Get AI Guidance",
            desc: "Receive helpful responses, coping suggestions, and supportive conversations."
        }
    ];

    return (
        <section className="bg-gray-100 py-24 px-6">
            <div className="max-w-6xl mx-auto text-center">

                {/* Title */}
                <h2 className="text-4xl font-bold text-[#0582e9] mb-4">
                    How It Works
                </h2>

                <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
                    Getting support with SoulTalk is simple. Follow these three easy
                    steps to start meaningful conversations and improve your mental wellbeing.
                </p>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-10">

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 120}
                            className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg hover:border-blue-400 hover:-translate-y-1 transition"
                        >

                            {/* Icon circle */}
                            <div className="w-17 h-17 mx-auto mb-6 flex items-center justify-center rounded-full bg-blue-100">
                                {step.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-sm">
                                {step.desc}
                            </p>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default SoulTalkWorks;