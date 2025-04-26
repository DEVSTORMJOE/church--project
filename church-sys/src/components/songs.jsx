// import React from 'react';

// const Songs = () => {
//   return (
//     <div>
//       <h2>Worship Songs</h2>
//       <ul>
//         <li>How Great Thou Art</li>
//         <li>Way Maker</li>
//         <li>10,000 Reasons</li>
//       </ul>
//     </div>
//   );
// };

// export default Songs;
import React from 'react';

const Songs = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center p-8"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/top-view-desk-concept-with-musical-theme_23-2148282063.jpg?t=st=1745687058~exp=1745690658~hmac=9a005b2b9d352510b406607a69d466c3b5430bbe386dda42b6211a7dc2d7c5fe&w=1380')`,
      }}
    >
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-3xl text-center animate-fadeIn">
        <h2 className="text-4xl font-extrabold text-yellow-300 mb-6">Worship Songs</h2>
        <p className="mb-4 text-lg text-white leading-relaxed">
          Lift your heart to the Lord with songs of worship and praise.
          Explore our collection of hymns, gospel songs, and modern worship favorites.
        </p>
        <p className="text-lg text-white leading-relaxed italic">
          “Sing to the LORD a new song; sing to the LORD, all the earth.” — Psalm 96:1
        </p>
      </div>
    </div>
  );
};

export default Songs;
