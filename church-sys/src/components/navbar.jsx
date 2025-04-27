// // // src/components/Navbar.jsx
// // src/components/Navbar.jsx
// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Navbar = () => {
//   const navItems = [
//     { path: '/about', label: 'About' },
//     { path: '/announcements', label: 'Announcements' },
//     { path: '/events', label: 'Events' },
//     { path: '/jobs', label: 'Jobs' },
//     { path: '/readings', label: 'Readings' },
//     { path: '/songs', label: 'Songs' },
//   ];

//   return (
//     <nav className="bg-gradient-to-r from-blue-400 to-indigo-600 text-white p-4 shadow-lg">
//       <ul className="flex flex-wrap justify-center gap-4">
//         {navItems.map((item) => (
//           <li key={item.path}>
//             <NavLink
//               to={item.path}
//               className={({ isActive }) =>
//                 `relative text-lg font-semibold transition-all duration-300 px-4 py-2 rounded-full 
//                 ${isActive ? 'bg-yellow-300 text-blue-800' : 'bg-white text-blue-600 hover:bg-yellow-200'}
//                 shadow-sm hover:shadow-md`
//               }
//             >
//               {item.label}
//             </NavLink>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react'; // 🧑 Added User icon from lucide-react

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { path: '/about', label: 'About' },
    { path: '/announcements', label: 'Announcements' },
    { path: '/events', label: 'Events' },
    { path: '/jobs', label: 'Jobs' },
    { path: '/readings', label: 'Readings' },
    { path: '/songs', label: 'Songs' },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="shadow-md">
      {/* Top Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 py-4 px-6 flex items-center justify-between rounded-b-2xl shadow-lg relative">
        {/* Logo Left */}
        <div className="flex items-center gap-3">
          <img
            src="https://via.placeholder.com/60" // Replace with your logo URL
            alt="Institution Logo"
            className="w-14 h-14 object-cover rounded-full border-4 border-white shadow-md"
          />
        </div>

        {/* Institution Name Center */}
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-2xl md:text-3xl font-extrabold text-white tracking-wide">
          OUR LADY OF MERCY CATHOLIC JUJA
        </h1>

        {/* Right side: Profile + Menu */}
        <div className="flex items-center gap-4 text-white z-20">
          {/* Profile Icon */}
          <div className="hover:text-yellow-300 cursor-pointer transition-all duration-300">
            <User size={28} />
          </div>

          {/* Sandwich Menu (only visible on small screens) */}
          <div
            className="hover:text-yellow-300 cursor-pointer transition-all duration-300 md:hidden"
            onClick={toggleMenu}
          >
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav
        className={`bg-blue-50 md:flex md:items-center md:justify-center transition-all duration-500 ease-in-out ${
          menuOpen ? 'block' : 'hidden'
        } md:block`}
      >
        <ul className="flex flex-col md:flex-row items-center gap-4 py-4 px-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative text-lg font-semibold px-5 py-2 rounded-full transition-all duration-300
                   ${
                     isActive
                       ? 'bg-blue-600 text-white shadow-lg'
                       : 'bg-white text-blue-600 hover:bg-blue-200 hover:text-blue-800'
                   }
                   border border-blue-400`
                }
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
