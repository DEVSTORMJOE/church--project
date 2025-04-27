import React from 'react';
import Footer from "./Footer";

const Jobs = () => {
  return (
    <div className="cont mt-8">
      <div
        className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white p-8"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-photo/close-up-beautiful-christ-cathedral_1268-15663.jpg?t=st=1745685834~exp=1745689434~hmac=49bb086d29d3a9546ac0a31483e63a495072d66273e782713f88669b1b353d0f&w=1380')`,
        }}
      >
        <div className="bg-black bg-opacity-60 p-8 rounded-lg max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-4">Job Opportunities</h2>
          <p className="mb-4 text-lg leading-relaxed">
            Interested in serving within our church ministries or community programs? Explore open roles where you can share your gifts and talents to strengthen our mission.
          </p>
          <p className="text-lg leading-relaxed">
            We offer opportunities in administration, teaching, outreach, and more. Join our team and make a difference!
          </p>
        </div>
      </div>

      {/* Job Listings */}
      <div className="py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Job Role 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Administrative Assistant</h3>
            <p className="text-gray-700 mb-4">Help manage church operations and provide support to ministry leaders. Strong organizational and communication skills are required.</p>
            <p className="text-gray-600 mb-4">
              <strong>Responsibilities:</strong> Scheduling meetings, managing church calendar, supporting ministry events, handling church correspondence.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Requirements:</strong> Experience in office management or administration, proficiency with office software, and a heart for serving.
            </p>
            <a href="mailto:info@church.com" className="text-blue-700 hover:text-blue-800">Apply Now</a>
          </div>

          {/* Job Role 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Youth Pastor</h3>
            <p className="text-gray-700 mb-4">Lead our youth ministry with passion, mentoring and guiding the next generation in their walk with Christ. Previous experience in youth ministry is a plus.</p>
            <p className="text-gray-600 mb-4">
              <strong>Responsibilities:</strong> Preaching, organizing youth events, providing counseling, and fostering spiritual growth in the youth group.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Requirements:</strong> Strong leadership skills, a deep faith, experience in youth ministry, and a love for working with young people.
            </p>
            <a href="mailto:info@church.com" className="text-blue-700 hover:text-blue-800">Apply Now</a>
          </div>

          {/* Job Role 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Community Outreach Coordinator</h3>
            <p className="text-gray-700 mb-4">Join our team in making a difference in the community through outreach programs, organizing events, and connecting with local organizations.</p>
            <p className="text-gray-600 mb-4">
              <strong>Responsibilities:</strong> Planning and executing outreach events, managing community partnerships, and coordinating volunteer efforts.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Requirements:</strong> Strong communication and organizational skills, experience in community engagement, and a passion for helping others.
            </p>
            <a href="mailto:info@church.com" className="text-blue-700 hover:text-blue-800">Apply Now</a>
          </div>

          {/* Job Role 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Worship Leader</h3>
            <p className="text-gray-700 mb-4">Lead our worship team and guide the congregation in powerful worship experiences that connect hearts to God.</p>
            <p className="text-gray-600 mb-4">
              <strong>Responsibilities:</strong> Leading worship during services, developing the worship team, and collaborating with the pastoral team to enhance worship service.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Requirements:</strong> Experience leading worship, proficiency with instruments or vocals, and a passion for worship.
            </p>
            <a href="mailto:info@church.com" className="text-blue-700 hover:text-blue-800">Apply Now</a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Jobs;
