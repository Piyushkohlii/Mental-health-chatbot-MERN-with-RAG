import { useNavigate } from "react-router-dom";
import SoulTalkcta from "../assets/SoulTalkCTA.jpg"
import { useEffect } from "react";
import AOS from "aos";

const SoulTalkCTA = () => {

    const navigate = useNavigate();
      useEffect(() => {
              AOS.init({
                  duration: 500,
                  once: false
              });
          }, []);

    return (
        <section className="relative text-white py-24 pt-60 px-6 z-20 rounded-t-3xl"
        data-aos="fade-up">

            <img
                src={SoulTalkcta}
                className="absolute inset-0 w-full h-full object-cover
                [mask-image:linear-gradient(to_bottom,transparent,black_25%)]
                [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_25%)]"
            />
            {/* Dark overlay */}
            {/* <div className="absolute inset-0 bg-black/50"></div> */}
            
            <div className="absolute inset-0 h-15 bg-gradient-to-b from-gray-100 to-transparent"></div>
            
            <div className="relative z-10 pb-20 max-w-4xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-4xl font-bold mb-6">
                    Ready to Talk?
                </h2>

                {/* Description */}
                <p className="text-blue-100 mb-10 text-lg">
                    Start a conversation with SoulTalk and take the first step toward better mental wellness.
                    Your AI companion is always here to listen.
                </p>

                {/* Button */}
                <button
                    onClick={() => navigate("/chat")}
                    className="bg-white text-black font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 hover:scale-105 transition"
                >
                    Start Chatting
                </button>

            </div>
        </section>
    );
};

export default SoulTalkCTA