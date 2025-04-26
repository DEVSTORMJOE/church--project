// import React from 'react';

// const Readings = () => {
//   return (
//     <div>
//       <h2>Scripture Readings</h2>
//       <ul>
//         <li>Psalm 23</li>
//         <li>John 3:16</li>
//         <li>Romans 8:28</li>
//       </ul>
//     </div>
//   );
// };

// export default Readings;
import React from 'react';

const Readings = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center p-8"
      style={{
        backgroundImage: `url('https://img.freepik.com/premium-photo/watercolor-opened-torah-scroll-jewish-bible-illustration-with-ears-wheat-eucalyptus-leaves_714656-590.jpg?w=1380')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-3xl text-center animate-fadeIn">
        <h2 className="text-4xl font-extrabold text-yellow-300 mb-6">Scripture Readings</h2>
        <p className="mb-4 text-lg text-white leading-relaxed">
          Dive deeper into the Word of God through our curated scripture readings. 
          Discover daily inspirations, Sunday gospel passages, and reflections to guide your spiritual journey.
        </p>
        <p className="text-lg text-white leading-relaxed italic">
          “Your word is a lamp to my feet and a light to my path.” — Psalm 119:105
        </p>
      </div>
    </div>
  );
};

export default Readings;
