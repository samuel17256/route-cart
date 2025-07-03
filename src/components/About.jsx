import React from "react";

function About() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="flex items-center justify-around p-4 bg-gray-500 text-white">
        <div>
          <h1 className="text-4xl font-bold flex items-center">
            <span>My Logo</span>
          </h1>
        </div>
        <nav className="space-x-4 items-center text-lg">
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/products" className="hover:underline">Products</a>
        </nav>
      </div>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-200">About My Products</h1>
        <p className="text-lg text-gray-200 mb-6">
          Welcome to our curated collection of products! Each item in our catalog has been carefully selected to ensure the highest quality and value for our customers. Whether you're looking for fresh produce, organic items, or unique goods, we have something for everyone.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border p-4 rounded-lg shadow-md bg-white">
            <h2 className="text-xl font-bold mb-2">Fresh Produce</h2>
            <p className="text-gray-600">
              Our fresh produce includes items like cabbage, garlic, apples, and mangoes. These are sourced from trusted farms to ensure freshness and quality.
            </p>
          </div>
          <div className="border p-4 rounded-lg shadow-md bg-white">
            <h2 className="text-xl font-bold mb-2">Organic Products</h2>
            <p className="text-gray-600">
              We offer a variety of organic products that are free from harmful chemicals and pesticides, ensuring a healthier choice for you and your family.
            </p>
          </div>
          <div className="border p-4 rounded-lg shadow-md bg-white">
            <h2 className="text-xl font-bold mb-2">Affordable Prices</h2>
            <p className="text-gray-600">
              Our products are priced competitively to provide great value without compromising on quality.
            </p>
          </div>
          <div className="border p-4 rounded-lg shadow-md bg-white">
            <h2 className="text-xl font-bold mb-2">Customer Satisfaction</h2>
            <p className="text-gray-600">
              We prioritize customer satisfaction and strive to provide the best shopping experience possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;