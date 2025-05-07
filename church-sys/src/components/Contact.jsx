import React, { useState } from "react";
import Footer from "./footer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending the form data to a server)
    console.log("Form submitted", formData);
  };

  return (
    <div className="bg-gray-50 py-10 px-6 md:px-20 min-h-screen">
      {/* Contact Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-800 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 text-md md:text-lg mb-8">
          We'd love to hear from you! Feel free to reach out with any questions or prayer requests.
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Church Info */}
      <div className="mt-16 text-center text-gray-600">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Church Information</h2>
        <p>
          <strong>Address:</strong> 123 Church St, Village City, Country
        </p>
        <p>
          <strong>Phone:</strong> (123) 456-7890
        </p>
        <p>
          <strong>Email:</strong> info@church.com
        </p>

        {/* Optional: Embed Google Map */}
        <div className="mt-8 relative" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1322743837117!2d144.9556543153044!3d-37.818271379751836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5e4f0f6c3d%3A0x5045675218cfc20!2sSt%20Patrick's%20Cathedral!5e0!3m2!1sen!2sus!4v1644396814304!5m2!1sen!2sus"
            className="absolute top-0 left-0 w-full h-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Church Location"
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
