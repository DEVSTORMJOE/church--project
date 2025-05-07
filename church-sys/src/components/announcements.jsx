import React from 'react';
import Footer from './footer';

const Announcements = () => {
  return (
    <div className="cont mt-8">
      {/* Hero Section with Background Image and Blue Overlay */}
      <div
        className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white p-8"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-photo/close-up-beautiful-christ-cathedral_1268-15663.jpg?t=st=1745685834~exp=1745689434~hmac=49bb086d29d3a9546ac0a31483e63a495072d66273e782713f88669b1b353d0f&w=1380')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content Section */}
        <div className="relative bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg max-w-3xl text-center animate-fadeIn">
          <h2 className="text-5xl font-extrabold text-yellow-400 mb-6 tracking-wide">Church Announcements</h2>
          <p className="mb-6 text-lg leading-relaxed">
            Stay updated with the latest news and important updates from our church community. Announcements regarding events, services, and community programs will be shared here regularly.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            Be sure to check back often so you never miss an opportunity to participate and connect with fellow members!
          </p>
        </div>
      </div>

      {/* Announcements List Section */}
      <section className="bg-blue-800 py-20 text-center text-white">
        <h3 className="text-4xl font-extrabold text-yellow-400 mb-12">Latest Announcements</h3>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Announcement 1 */}
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h4 className="text-3xl font-bold text-yellow-400 mb-4">Sunday Service Schedule</h4>
            <p className="text-white text-sm mb-4">
              Join us for Sunday services at 9:00 AM and 11:00 AM. All are welcome to attend and worship with us.
            </p>
            <p className="text-white text-xs italic">Date: Every Sunday</p>
          </div>
          {/* Announcement 2 */}
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h4 className="text-3xl font-bold text-yellow-400 mb-4">Community Outreach Event</h4>
            <p className="text-white text-sm mb-4">
              Help us spread love and support during our community outreach event. We’ll be collecting donations for the less fortunate.
            </p>
            <p className="text-white text-xs italic">Date: May 15, 2025</p>
          </div>
          {/* Announcement 3 */}
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h4 className="text-3xl font-bold text-yellow-400 mb-4">Bible Study Sessions</h4>
            <p className="text-white text-sm mb-4">
              Join our Bible study groups every Thursday at 7:00 PM for deep spiritual insights and meaningful discussions.
            </p>
            <p className="text-white text-xs italic">Date: Every Thursday</p>
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="bg-blue-700 py-20 text-center text-white">
        <h3 className="text-4xl font-extrabold text-yellow-400 mb-12">Upcoming Events</h3>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Event 1 */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-semibold text-yellow-400 mb-4">Youth Fellowship</h4>
            <p className="text-white text-sm mb-4">
              A special fellowship for youth, including games, discussions, and prayer.
            </p>
            <p className="text-white text-xs italic">Date: June 5, 2025</p>
          </div>
          {/* Event 2 */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-semibold text-yellow-400 mb-4">Marriage Enrichment Seminar</h4>
            <p className="text-white text-sm mb-4">
              A seminar dedicated to strengthening marriages with helpful workshops and inspiring teachings.
            </p>
            <p className="text-white text-xs italic">Date: June 20, 2025</p>
          </div>
          {/* Event 3 */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-semibold text-yellow-400 mb-4">Annual Church Picnic</h4>
            <p className="text-white text-sm mb-4">
              Join us for a fun-filled day of food, games, and fellowship at our annual church picnic.
            </p>
            <p className="text-white text-xs italic">Date: July 4, 2025</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Announcements;
