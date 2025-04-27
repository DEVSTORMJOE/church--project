import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-6 px-4 text-center">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white text-purple-600 p-3 rounded-full hover:scale-110 hover:text-indigo-500 transition transform">
          <FaFacebookF className="w-5 h-5" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white text-purple-600 p-3 rounded-full hover:scale-110 hover:text-indigo-500 transition transform">
          <FaTwitter className="w-5 h-5" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white text-purple-600 p-3 rounded-full hover:scale-110 hover:text-indigo-500 transition transform">
          <FaInstagram className="w-5 h-5" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white text-purple-600 p-3 rounded-full hover:scale-110 hover:text-indigo-500 transition transform">
          <FaLinkedinIn className="w-5 h-5" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-white text-purple-600 p-3 rounded-full hover:scale-110 hover:text-indigo-500 transition transform">
          <FaYoutube className="w-5 h-5" />
        </a>
      </div>
      <p className="text-sm">&copy; 2025 YourWebsite. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
