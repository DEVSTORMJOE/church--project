import React from 'react';
import Footer from './Footer';

const Songs = () => {
  return (
    <div className="cont mt-32">
      {/* Hero Section with Background Image */}
      <div
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center p-8"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-photo/top-view-desk-concept-with-musical-theme_23-2148282063.jpg?t=st=1745687058~exp=1745690658~hmac=9a005b2b9d352510b406607a69d466c3b5430bbe386dda42b6211a7dc2d7c5fe&w=1380')`,
        }}
      >
        {/* Dark overlay for better readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative bg-white bg-opacity-10 backdrop-blur-md p-10 rounded-2xl shadow-2xl max-w-3xl text-center animate-fadeIn">
          <h2 className="text-5xl font-extrabold text-yellow-300 mb-6 tracking-wide">
            Worship Songs
          </h2>
          <p className="mb-6 text-lg text-white leading-relaxed">
            Lift your heart to the Lord with songs of worship and praise. Explore our collection of hymns, gospel songs, and modern worship favorites.
          </p>
          <p className="text-lg text-white leading-relaxed italic mb-8">
            “Sing to the LORD a new song; sing to the LORD, all the earth.” — Psalm 96:1
          </p>

          {/* Music Genre List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Hymns */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 text-center">
              <h3 className="text-3xl font-bold text-yellow-300 mb-4">Hymns</h3>
              <p className="text-white text-sm">
                Timeless songs of praise and adoration, rich in history and meaning.
              </p>
            </div>

            {/* Gospel Songs */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 text-center">
              <h3 className="text-3xl font-bold text-yellow-300 mb-4">Gospel Songs</h3>
              <p className="text-white text-sm">
                Uplifting songs that celebrate the Good News of Jesus Christ.
              </p>
            </div>

            {/* Modern Worship */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 text-center">
              <h3 className="text-3xl font-bold text-yellow-300 mb-4">Modern Worship</h3>
              <p className="text-white text-sm">
                Contemporary worship songs that inspire and bring us closer to God.
              </p>
            </div>
          </div>

          {/* Call-to-Action Button */}
          <div className="mt-16">
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-bold py-4 px-8 rounded-full shadow-xl transition-all duration-300 text-lg">
              Explore Our Playlist
            </button>
          </div>
        </div>
      </div>

      {/* Additional Section: Featured Songs */}
      <section className="bg-gray-900 py-20 text-center text-white">
        <h2 className="text-4xl font-extrabold mb-12">Featured Songs</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-yellow-300 mb-3">Amazing Grace</h3>
            <p className="text-sm">A classic hymn that speaks of God's grace and mercy.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-yellow-300 mb-3">How Great is Our God</h3>
            <p className="text-sm">A modern worship anthem that praises the greatness of God.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-yellow-300 mb-3">Oh How I Love Jesus</h3>
            <p className="text-sm">A traditional gospel song celebrating the love of Jesus.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Songs;
