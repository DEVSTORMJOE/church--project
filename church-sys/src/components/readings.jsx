import React from 'react';
import Footer from './Footer';

const Readings = () => {
  return (
    <div className="cont mt-8">
      {/* Hero Section with Background Image */}
      <div
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center p-8"
        style={{
          backgroundImage: `url('https://img.freepik.com/premium-photo/watercolor-opened-torah-scroll-jewish-bible-illustration-with-ears-wheat-eucalyptus-leaves_714656-590.jpg?w=1380')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative bg-white bg-opacity-10 backdrop-blur-md p-10 rounded-2xl shadow-2xl max-w-3xl text-center animate-fadeIn">
          <h2 className="text-5xl font-extrabold text-yellow-400 mb-6 tracking-wide">Scripture Readings</h2>
          <p className="mb-6 text-lg text-white leading-relaxed">
            Dive deeper into the Word of God through our curated scripture readings.
            Discover daily inspirations, Sunday gospel passages, and reflections to guide your spiritual journey.
          </p>
          <p className="text-lg text-white leading-relaxed italic mb-8">
            “Your word is a lamp to my feet and a light to my path.” — Psalm 119:105
          </p>
        </div>
      </div>

      {/* Scripture Categories Section */}
      <section className="py-20 bg-blue-500 text-center text-white">
        <h3 className="text-4xl font-extrabold text-yellow-400 mb-12">Scripture Categories</h3>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h4 className="text-3xl font-bold text-yellow-400 mb-4">Daily Inspirations</h4>
            <p className="text-white text-sm">
              Get your daily dose of motivation and spiritual guidance to uplift your soul.
            </p>
          </div>
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h4 className="text-3xl font-bold text-yellow-400 mb-4">Sunday Gospel</h4>
            <p className="text-white text-sm">
              Reflect on the weekly gospel reading and its teachings to guide your week.
            </p>
          </div>
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h4 className="text-3xl font-bold text-yellow-400 mb-4">Inspirational Reflections</h4>
            <p className="text-white text-sm">
              Explore deeper reflections on scripture that challenge and inspire your faith journey.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Scriptures Section */}
      <section className="bg-gray-900 py-20 text-center text-white">
        <h3 className="text-4xl font-extrabold text-yellow-400 mb-12">Featured Scriptures</h3>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-semibold text-yellow-400 mb-4">John 3:16</h4>
            <p className="text-white text-sm">“For God so loved the world, that he gave his only Son...”</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-semibold text-yellow-400 mb-4">Psalm 23</h4>
            <p className="text-white text-sm">“The Lord is my shepherd; I shall not want...”</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-semibold text-yellow-400 mb-4">Romans 8:28</h4>
            <p className="text-white text-sm">“And we know that in all things God works for the good of those who love him...”</p>
          </div>
        </div>
      </section>

      {/* Daily Reflection Section */}
      <section className="bg-gray-800 py-20 text-center text-white">
        <h3 className="text-4xl font-extrabold text-yellow-400 mb-12">Daily Reflection</h3>
        <div className="max-w-3xl mx-auto text-lg">
          <p className="mb-6">
            Take a moment each day to reflect on a passage of scripture. Consider how it applies to your life, and let it guide you.
            Let the Word of God become a source of peace, strength, and guidance as you navigate through your day.
          </p>
          <p className="italic text-white">
            “I have hidden your word in my heart that I might not sin against you.” — Psalm 119:11
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Readings;
