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

const About = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white p-8"
      style={{
        backgroundImage: `url('80https://img.freepik.com/free-photo/close-up-beautiful-christ-cathedral_1268-15663.jpg?t=st=1745685834~exp=1745689434~hmac=49bb086d29d3a9546ac0a31483e63a495072d66273e782713f88669b1b353d0f&w=13')`,
      }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-lg max-w-3xl text-center">
        <h2 className="text-4xl font-bold mb-4">About Our Church</h2>
        <p className="mb-4 text-lg leading-relaxed">
          Welcome to our Church Management System. Our mission is to build a strong, connected community rooted in faith, love, and service.
          We are dedicated to creating opportunities for worship, learning, and outreach.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          Through this platform, you can stay updated on church announcements, join events, apply for job opportunities, and grow spiritually through readings and songs. 
          We are committed to making your journey with us meaningful and accessible.
        </p>
        <p className="text-lg leading-relaxed">
          Thank you for being part of our family. Together, we can make a difference in each other's lives and in the world around us.
          Join us in worship, fellowship, and community service!
        </p>
      </div>
    </div>
  );
};

export default About;
