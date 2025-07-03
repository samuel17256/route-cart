import React from "react";
import { useNavigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();

  const products = [
    {
      image: "/images/download.jpeg",
      title: "Cabbage",
      price: 400,
      id: 1,
    },
    {
      image: "/images/download (1).jpeg",
      title: "Garlic",
      price: 600,
      id: 2,
    },
    {
      image: "/images/download (2).jpeg",
      title: "Apple",
      price: 200,
      id: 3,
    },
    {
      image: "/images/download (3).jpeg",
      title: "Mango",
      price: 700,
      id: 4,
    },

    {
      image: "/images/download (4).jpeg",
      title: "Red Rose",
      price: 1000,
      id: 5,
    },
    {
      image: "/images/download (5).jpeg",
      title: "Berries",
      price: 1600,
      id: 6,
    },
    {
      image: "/images/download (6).jpeg",
      title: "Avocado",
      price: 1200,
      id: 7,
    },
    {
      image: "/images/download (7).jpeg",
      title: "Guava",
      price:2700,
      id: 8,
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="flex items-center justify-around p-4 bg-gray-500 text-white">
        <div>
          <h1 className="text-4xl font-bold">My Logo</h1>
        </div>
        <nav className="space-x-4 text-lg">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/about" className="hover:underline">
            About
          </a>
          <a href="/products" className="hover:underline">
            Products
          </a>
        </nav>
      </div>

      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-200">My Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded-lg  bg-white hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => navigate(`/products/${product.id}`)}
            >
              <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded-md mb-4" />
              <h2 className="text-xl font-bold mb-2">{product.title}</h2>
              <p className="text-gray-600">Price: ${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
