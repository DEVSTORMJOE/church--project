// import React from 'react';

// const About = () => {
//   return (
//     <div>
//       <h2>About Us</h2>
//       <p>Welcome to our church system. We are a community of faith and service.</p>
//     </div>
//   );
// };

// export default About;
// src/pages/About.jsx
import React from 'react';
import Footer from './footer'; // make sure the filename is lowercase if your file is 'footer.jsx'

const about = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content */}
      <div
        className="flex-grow bg-cover bg-center flex flex-col items-center justify-center text-white p-8"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-photo/close-up-beautiful-christ-cathedral_1268-15663.jpg?t=st=1745685834~exp=1745689434~hmac=49bb086d29d3a9546ac0a31483e63a495072d66273e782713f88669b1b353d0f&w=1380')`,
        }}
      >
        <div className="bg-black bg-opacity-60 p-8 rounded-lg max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-4">Church Announcements</h2>
          <p className="mb-4 text-lg leading-relaxed">
            Stay updated with the latest news and important updates from our church community.
            Announcements regarding events, services, and community programs will be shared here regularly.
          </p>
          <p className="text-lg leading-relaxed">
            Be sure to check back often so you never miss an opportunity to participate and connect with fellow members!
          </p>
        </div>
      </div>

      {/* Footer here */}
      <Footer />
    </div>
  );
};

export default about;

