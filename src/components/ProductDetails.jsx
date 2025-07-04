import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = ({products}) => {
  const { productId } = useParams();
  const navigate = useNavigate();


  const product = products.find((p) => p.id === parseInt(productId));


  return (
    <div className="p-8 bg-gray-900 min-h-screen flex flex-col items-center">
      <div className="max-w-md bg-white rounded-lg  p-6">
      <h1 className="text-center text-xl font-bold py-2">Product Details</h1>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <h1 className="text-3xl font-bold mb-2 text-center">{product.title}</h1>
        <p className="text-lg text-gray-600 mb-4 text-center">
          Price: <span className="font-semibold">${product.price}</span>
        </p>
        <p className="text-gray-800 mb-6 text-center">{product.description}</p>
        <button
          className="w-full py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;