// import React from 'react';

import Footer from './footer'; // 👈 import Footer at the top

const Jobs = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-between bg-cover bg-center text-white p-8"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/close-up-beautiful-christ-cathedral_1268-15663.jpg?t=st=1745685834~exp=1745689434~hmac=49bb086d29d3a9546ac0a31483e63a495072d66273e782713f88669b1b353d0f&w=1380')`,
      }}
    >
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="bg-black bg-opacity-60 p-8 rounded-lg max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-4">Job Opportunities</h2>
          <p className="mb-4 text-lg leading-relaxed">
            Interested in serving within our church ministries or community programs? 
            Explore open roles where you can share your gifts and talents to strengthen our mission.
          </p>
          <p className="text-lg leading-relaxed">
            We offer opportunities in administration, teaching, outreach, and more. Join our team and make a difference!
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Jobs;

  