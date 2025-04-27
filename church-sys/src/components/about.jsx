import React from "react";
import { Link } from "react-router-dom";
import { Handshake, BarChart, Briefcase } from "lucide-react";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-x-hidden">
      
      {/* Hero Section */}
      <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-blue-50">
        <div className="absolute inset-0">
          <img
            src="https://img.freepik.com/free-photo/close-up-beautiful-christ-cathedral_1268-15663.jpg?t=st=1745685834~exp=1745689434~hmac=49bb086d29d3a9546ac0a31483e63a495072d66273e782713f88669b1b353d0f&w=1380"
            alt="Church Background"
            className="w-full h-full object-cover brightness-75"
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-light mb-3 animate-fadeIn">
            Welcome to Our Church Community
          </h2>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-6 animate-fadeInDelay">
            About Our Church
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-gray-200 mb-10 animate-fadeInDelay2 px-2">
            A place where faith, love, and community come together to make a difference.
          </p>
        </div>
      </div>

      {/* About Content Section */}
      <section className="w-full py-20 bg-white px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-blue-700 animate-fadeIn">
            Our Mission & Values
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed animate-fadeInDelay">
            Our church is committed to nurturing faith, serving others, and fostering a supportive community. We believe in bringing people closer to God and to each other through prayer, worship, and outreach.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* Unity */}
            <div className="bg-blue-50 p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 text-center animate-fadeInDelay4">
              <Handshake size={48} className="text-blue-700 mb-4 mx-auto"/>
              <h3 className="text-xl font-bold text-blue-800 mb-1">Unity in Faith</h3>
              <p className="text-gray-600 text-sm">
                We are united as one body in Christ, growing together through worship, fellowship, and service.
              </p>
            </div>

            {/* Growth */}
            <div className="bg-blue-50 p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 text-center animate-fadeInDelay5">
              <BarChart size={48} className="text-blue-700 mb-4 mx-auto"/>
              <h3 className="text-xl font-bold text-blue-800 mb-1">Spiritual Growth</h3>
              <p className="text-gray-600 text-sm">
                We focus on growing spiritually through God’s Word, personal reflection, and deepening our relationship with Him.
              </p>
            </div>

            {/* Outreach */}
            <div className="bg-blue-50 p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 text-center animate-fadeInDelay6">
              <Briefcase size={48} className="text-blue-700 mb-4 mx-auto"/>
              <h3 className="text-xl font-bold text-blue-800 mb-1">Outreach & Service</h3>
              <p className="text-gray-600 text-sm">
                We are passionate about serving our local and global communities, offering help to those in need and sharing God's love.
              </p>
            </div>
          </div>

          {/* Call-to-Action Button */}
          <div className="mt-16 text-center">
            <Link
              to="/services"
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-4 px-10 rounded-full shadow-xl transition-all duration-300 text-lg animate-bounce"
            >
              Learn More About Our Services
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
