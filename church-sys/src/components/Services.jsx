import React from 'react';
import Footer from './footer';

function Services() {
  return (
    <div className="bg-gray-50 py-10 px-6 md:px-20 min-h-screen">
      {/* Services Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-800 mb-4">
          Our Services
        </h1>
        <p className="text-gray-600 text-md md:text-lg mb-8">
          At our church, we offer a variety of services to support and nurture our community. Here are the services we provide along with guiding scriptures.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service 1: Worship Services */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Worship Services</h3>
          <p className="text-gray-600 mb-4">
            Join us every Sunday for a powerful time of worship and reflection, where we come together to honor God.
          </p>
          <p className="text-gray-600 font-semibold text-sm">
            <strong>Verse:</strong> "Let everything that has breath praise the Lord." - Psalm 150:6
          </p>
        </div>

        {/* Service 2: Bible Study */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Bible Study</h3>
          <p className="text-gray-600 mb-4">
            Our Bible study groups meet weekly to dive deeper into God's word, strengthening our understanding and relationship with Christ.
          </p>
          <p className="text-gray-600 font-semibold text-sm">
            <strong>Verse:</strong> "Your word is a lamp to my feet and a light to my path." - Psalm 119:105
          </p>
        </div>

        {/* Service 3: Community Outreach */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Community Outreach</h3>
          <p className="text-gray-600 mb-4">
            We are committed to serving our local community through various outreach programs, showing love and compassion to those in need.
          </p>
          <p className="text-gray-600 font-semibold text-sm">
            <strong>Verse:</strong> "Let us not love with words or speech but with actions and in truth." - 1 John 3:18
          </p>
        </div>

        {/* Service 4: Counseling & Prayer */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Counseling & Prayer</h3>
          <p className="text-gray-600 mb-4">
            Our pastoral team is available to offer counseling and prayer support for anyone in need of guidance or emotional comfort.
          </p>
          <p className="text-gray-600 font-semibold text-sm">
            <strong>Verse:</strong> "Cast all your anxiety on him because he cares for you." - 1 Peter 5:7
          </p>
        </div>

        {/* Service 5: Youth Ministry */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Youth Ministry</h3>
          <p className="text-gray-600 mb-4">
            We offer a variety of programs for young people to grow in their faith, build meaningful relationships, and impact their communities.
          </p>
          <p className="text-gray-600 font-semibold text-sm">
            <strong>Verse:</strong> "Don't let anyone look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith, and in purity." - 1 Timothy 4:12
          </p>
        </div>

        {/* Service 6: Volunteer Opportunities */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Volunteer Opportunities</h3>
          <p className="text-gray-600 mb-4">
            There are plenty of ways to serve and make a difference in our church community. We encourage everyone to get involved and share their gifts.
          </p>
          <p className="text-gray-600 font-semibold text-sm">
            <strong>Verse:</strong> "Each of you should use whatever gift you have received to serve others, as faithful stewards of God’s grace in its various forms." - 1 Peter 4:10
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
