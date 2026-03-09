import { useEffect } from "react";
import AOS from "aos";
import { FaClock, FaLock, FaRobot, FaHeart } from "react-icons/fa";

const SoulTalkBenefits = () => {

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false
    });
  }, []);

  const benefits = [
    {
      icon: <FaClock className="text-blue-500"/>,
      title: "Available 24/7",
      desc: "SoulTalk is always available whenever you need someone to talk to."
    },
    {
      icon: <FaLock className="text-green-400" />,
      title: "Private & Confidential",
      desc: "Your conversations remain secure and private so you can speak freely."
    },
    {
      icon: <FaRobot className="text-cyan-400"/>,
      title: "AI-Powered Support",
      desc: "Get intelligent responses and helpful suggestions powered by advanced AI."
    },
    {
      icon: <FaHeart className="text-red-500"/>,
      title: "Judgment-Free Space",
      desc: "Express your feelings openly without fear of judgment."
    }
  ];

  return (
    <>
    <section className="bg-gray-100 py-24 pb-40 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-4xl font-bold text-[#0582e9] mb-4">
          Why Choose SoulTalk
        </h2>

        <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
          SoulTalk is designed to provide emotional support in a safe,
          intelligent, and accessible way whenever you need it.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {benefits.map((benefit, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg hover:border-blue-400 hover:-translate-y-1 transition"
            >

              {/* Icon */}
              <div className="w-17 h-17 mx-auto mb-6 flex items-center justify-center rounded-full bg-blue-100 text-3xl">
                {benefit.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm">
                {benefit.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
      
    </section>
   

    </>
  );
};

export default SoulTalkBenefits;