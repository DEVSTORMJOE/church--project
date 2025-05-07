import React from "react";
import Footer from "./footer";

function Gallery() {
  // Example gallery images
  const galleryImages = [
    "https://picsum.photos/400/300?random=12",
    "https://picsum.photos/400/300?random=13",
    "https://picsum.photos/400/300?random=14",
    "https://picsum.photos/400/300?random=15",
    "https://picsum.photos/400/300?random=16",
    "https://picsum.photos/400/300?random=17",
    "https://picsum.photos/400/300?random=18",
    "https://picsum.photos/400/300?random=19",
  ];

  return (
    <div className="bg-gray-50 py-10 px-6 md:px-20 min-h-screen">
      {/* Gallery Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-800 mb-6">
          Church Gallery
        </h1>
        <p className="text-gray-600 text-md md:text-lg mb-8">
          Take a look at some of the memorable moments in our church life.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {galleryImages.map((image, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition-all duration-300"></div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
