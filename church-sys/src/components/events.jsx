// import React from 'react';

// const Events = () => {
//   return (
//     <div>
//       <h2>Upcoming Events</h2>
//       <ul>
//         <li>April 30: Community Outreach</li>
//         <li>May 5: Youth Worship Night</li>
//         <li>May 12: Mother's Day Celebration</li>
//       </ul>
//     </div>
//   );
// };

// export default Events;
import React from 'react';

const Events = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white p-8"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/close-up-beautiful-christ-cathedral_1268-15663.jpg?t=st=1745685834~exp=1745689434~hmac=49bb086d29d3a9546ac0a31483e63a495072d66273e782713f88669b1b353d0f&w=1380')`,
      }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-lg max-w-3xl text-center">
        <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
        <p className="mb-4 text-lg leading-relaxed">
          Join us for worship services, community outreach, youth gatherings, and seasonal celebrations.
          Our events are designed to bring our community together in faith, fun, and service.
        </p>
        <p className="text-lg leading-relaxed">
          Check out the event calendar to participate and invite your family and friends!
        </p>
      </div>
    </div>
  );
};

export default Events;
