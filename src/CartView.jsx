// import React from "react";
// import { AiOutlineStar } from "react-icons/ai";
// import { AiFillStar } from "react-icons/ai";

// const CartView = () => {
//   const flowers = [
//     {
//       id: 1,
//       name: "Fresh Flower Bouquet",
//       price: 4000,
//       image: "/images/Radiance-31.99-35.99-39.99.webp",
//       description:
//         "This fresh flower bouquet combines vibrant colors and delicate fragrances to brighten any room or occasion. Perfect for birthdays, celebrations, or just because.",
//       deliveryFee: 1500,
//     },
//   ];

//   const reviews = [
//     {
//       id: 1,
//       name: "Yusuf",
//       date: "May 15, 2024",
//       rating: 4,
//       size: "16.g",
//       color: "Red",
//       design: "Classic Wrap",
//       text: `The flower bouquet was absolutely stunning and even more beautiful in person. The vibrant mix of colors and the elegant arrangement made it the perfect gift for my friend's birthday. The delivery was prompt, and the flowers arrived fresh and fragrant. I'll definitely be ordering again!`,
//       image: "/images/Radiance-31.99-35.99-39.99.webp",
//     },
//     {
//       id: 2,
//       name: "Yusuf",
//       date: "May 15, 2024",
//       rating: 4,
//       size: "16.g",
//       color: "Pastel Pink",
//       design: "Paper Wrap",
//       text: `I was genuinely impressed by the quality and care put into the bouquet. The flowers were fresh and lasted for days. The packaging was lovely, and it brought a big smile to my mom's face. Highly recommended for anyone looking for a thoughtful floral gift.`,
//       image: "/images/Radiance-31.99-35.99-39.99.webp",
//     },
//     {
//       id: 3,
//       name: "Yusuf",
//       date: "May 15, 2024",
//       rating: 4,
//       size: "16.g",
//       color: "Pastel Pink",
//       design: "Paper Wrap",
//       text: `I was genuinely impressed by the quality and care put into the bouquet. The flowers were fresh and lasted for days. The packaging was lovely, and it brought a big smile to my mom's face. Highly recommended for anyone looking for a thoughtful floral gift.`,
//       image: "/images/Radiance-31.99-35.99-39.99.webp",
//     },
//   ];
//   return (
//     <div className="min-h-screen  px-4 py-8 font-sans mx-10">
//       <h2 className="text-2xl font-semibold">Your Cart.</h2>
//       <p className="text-gray-600">
//         Review and manage the items in your shopping cart.
//       </p>

//       {flowers.map((flower) => (
//         <div key={flower.id} className="flex  gap-6">
//           <div className="w-1/2 flex items-center justify-center">
//             <img
//               src={flower.image}
//               alt={flower.name}
//               className="object-cover rounded-lg w-full  max-h-96"
//             />
//           </div>

//           <div className="w-1/2 space-y-3">
//             <p className="text-xs text-gray-500 mt-10">Product</p>
//             <div className="flex items-center gap-2 text-sm text-gray-800 bg-green-100 border px-2 py-1 w-fit rounded">
//               🚚 Delivery fee
//               <span className="bg-gray-900 px-1 py-1 rounded text-xs text-gray-100">
//                 ₦{flower.deliveryFee}
//               </span>
//             </div>

//             <h3 className="text-xl">{flower.name}</h3>

//             <div className="flex items-center gap-1">
//               <span className="text-yellow-400 bg-black rounded-md p-2">
//                 <AiFillStar />
//               </span>
//               <span className="text-yellow-400 bg-black rounded-md p-2">
//                 <AiFillStar />
//               </span>
//               <span className="text-yellow-400 bg-black rounded-md p-2">
//                 <AiFillStar />
//               </span>
//               <span className="text-yellow-400 bg-black rounded-md p-2">
//                 <AiFillStar />
//               </span>
//               <span className="p-2 bg-black text-yellow-400 rounded-md">
//                 <AiOutlineStar />
//               </span>
//               <span className="p-1  ml-2 border rounded-md font-bold">2.4</span>
//             </div>
//             <div className="flex items-center gap-4">
//               <div className="text-sm font-medium">
//                 Price:
//                 <span className="text-lg border border-gray-300 p-1 ml-1 rounded">
//                   ₦{flower.price}
//                 </span>
//               </div>
//               <span className="font-bold text-lg text-gray-400">|</span>
//               <div className="flex items-center gap-2">
//                 <span>Quantity:</span>
//                 <div className="flex items-center border border-gray-300 rounded px-2">
//                   <button className="text-lg">+</button>
//                   <span className="px-2">1</span>
//                   <button className="text-lg">-</button>
//                 </div>
//               </div>
//             </div>

//             <p className="text-sm text-gray-600">{flower.description}</p>

//             <div className="flex flex-col gap-3">
//               <button className="py-2 w-7/12 border border-black rounded-md text-black font-medium">
//                 Buy Now
//               </button>
//               <button className="py-3 bg-black text-white rounded-md font-medium  w-7/12">
//                 Add to cart
//               </button>
//             </div>

//             <div className="relative mt-4">
//               <select className="w-full border border-green-700 outline-none rounded-md px-4 py-3 text-green-700">
//                 <option>Select your location</option>
//                 <option>Lagos</option>
//                 <option>Abuja</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       ))}

//       <div className="flex gap-4 mt-6 items-center text-center">
//         <div className="text-center">
//           <img
//             src="/images/Radiance-31.99-35.99-39.99.webp"
//             alt="Red Roses"
//             className="h-20 w-20 object-contain mx-auto"
//           />
//           <p className="text-sm mt-1">Red Roses</p>
//         </div>
//         <div className="text-center">
//           <img
//             src="/images/Radiance-31.99-35.99-39.99.webp"
//             alt="Sunflowers"
//             className="h-20 w-20 object-contain mx-auto"
//           />
//           <p className="text-sm mt-1">Pink Roses</p>
//         </div>
//         <div className="text-center">
//           <img
//             src="/images/Radiance-31.99-35.99-39.99.webp"
//             alt="Lilies"
//             className="h-20 w-20 object-contain mx-auto"
//           />
//           <p className="text-sm mt-1">Lilies</p>
//         </div>
//       </div>

//       <div className="mt-4 space-x-3 text-sm text-gray-600">
//         <label>
//           <input type="radio" name="zip" /> Vase
//         </label>
//         <label>
//           <input type="radio" name="zip" /> Ribbon
//         </label>
//         <label>
//           <input type="radio" name="zip" /> Vase & Ribbon
//         </label>
//         <label>
//           <input type="radio" name="zip" /> None
//         </label>
//         <p className="text-xs text-gray-400 mt-2">
//           Vase adds ₦1,000.00 extra while ribbon adds ₦500.00
//         </p>
//       </div>

//       <div className="mt-4">
//         <p className="text-gray-900 text-xl font-bold">Description</p>
//         <p className="text-sm text-gray-600 mb-6">
//           Flowers are more than just beautiful petals — they speak a language of
//           love, care, and celebration. Whether it's a vibrant bouquet to
//           brighten someone's day or a soft pastel arrangement for a heartfelt
//           moment, our flowers are handpicked and thoughtfully designed to leave
//           a lasting impression. The flower bouquet was absolutely stunning and
//           even more beautiful in person. The vibrant mix of colors and the
//           elegant arrangement made it the perfect gift for my friend's birthday.
//           The delivery was prompt, and the flowers arrived fresh and fragrant.
//           I'll definitely be ordering agai
//         </p>
//       </div>

//       <div className="mt-6 max-w-2xl  flex flex-col ml-[480px]">
//         <h3 className="text-xl font-semibold">Customer Reviews</h3>

//         <p className="text-gray-500 mb-6 text-sm">Customer's Testimonies</p>

//         {reviews.map((review) => (
//           <div key={review.id} className="mb-10 pb-6">
//             <div className="flex items-center gap-3">
//               <img
//                 src="/images/flowers.jpeg"
//                 alt="User"
//                 className="w-10 h-10 rounded-full object-cover"
//               />
//               <div>
//                 <p className="font-medium">{review.name}</p>
//                 <p className="text-sm text-gray-500">{review.date}</p>
//               </div>
//             </div>

//             <div className="mt-2 flex items-center gap-1">
//               <span className="text-sm font-semibold">Rating:</span>
//               <span className="text-yellow-400 bg-black rounded-md p-2">
//                 <AiFillStar />
//               </span>
//               <span className="text-yellow-400 bg-black rounded-md p-2">
//                 <AiFillStar />
//               </span>
//               <span className="text-yellow-400 bg-black rounded-md p-2">
//                 <AiFillStar />
//               </span>
//               <span className="text-yellow-400 bg-black rounded-md p-2">
//                 <AiFillStar />
//               </span>
//               <span className="p-2 bg-black text-yellow-400 rounded-md">
//                 <AiOutlineStar />
//               </span>
//             </div>

//             <p className="text-sm text-gray-600 mt-2">
//               Size: <span className="font-semibold">{review.size}</span> |
//               Color: <span className="font-semibold">{review.color}</span> |
//               Design Pattern:
//               <span className="font-semibold">{review.design}</span>
//             </p>

//             <div className="flex gap-3 mt-3">
//               <img
//                 src={review.image}
//                 alt="Flower bouquet"
//                 className="h-24 w-24 rounded-lg border object-cover"
//               />
//               <div className="h-24 w-24 rounded-lg border flex items-center justify-center text-gray-400">
//                 +
//               </div>
//             </div>

//             <p className="text-sm text-gray-700 mt-4">{review.text}</p>
//           </div>
//         ))}
//       </div>
//       <div className="mt-10">
//         <h2 className="text-xl font-medium">Flowers You may like</h2>
//         <p className="text-sm text-gray-600">Similar flowers from the one selected</p>
//         <div className="grid grid-cols-4 gap-6 mt-6 cursor-pointer">
//           <div>
//             <img
//               src="public/images/Radiance-31.99-35.99-39.99.webp"
//               alt=""
//               className="rounded bg-contain w-full"
//             />
//             <div className="flex flex-row justify-between mt-4 text-gray-800">
//               <span>Flower Bouquet</span>
//               <span>N5,000</span>
//             </div>
//           </div>
//           <div>
//             <img src="public/images/Radiance-31.99-35.99-39.99.webp" alt=""   className="rounded bg-contain w-full"/>
//             <div className="flex flex-row justify-between mt-4 text-gray-800">
//               <span>Flower Bouquet</span>
//               <span>N5,000</span>
//             </div>
//           </div>
//           <div>
//             <img src="public/images/Radiance-31.99-35.99-39.99.webp" alt=""   className="rounded bg-contain w-full"/>
//             <div className="flex flex-row justify-between mt-4 text-gray-800">
//               <span>Flower Bouquet</span>
//               <span>N5,000</span>
//             </div>
//           </div>
//           <div>
//             <img src="public/images/Radiance-31.99-35.99-39.99.webp" alt=""   className="rounded bg-contain w-full"/>
//             <div className="flex flex-row justify-between mt-4 text-gray-800">
//               <span>Flower Bouquet</span>
//               <span>N5,000</span>
//             </div>
//           </div>
//           <div>
//             <img src="public/images/Radiance-31.99-35.99-39.99.webp" alt=""   className="rounded bg-contain w-full"/>
//             <div className="flex flex-row justify-between mt-4 text-gray-800">
//               <span>Flower Bouquet</span>
//               <span>N5,000</span>
//             </div>
//           </div>
//           <div>
//             <img src="public/images/Radiance-31.99-35.99-39.99.webp" alt=""   className="rounded bg-contain w-full"/>
//             <div className="flex flex-row justify-between mt-4 text-gray-800">
//               <span>Flower Bouquet</span>
//               <span>N5,000</span>
//             </div>
//           </div>
//           <div>
//             <img src="public/images/Radiance-31.99-35.99-39.99.webp" alt=""   className="rounded bg-contain w-full"/>
//             <div className="flex flex-row justify-between mt-4 text-gray-800">
//               <span>Flower Bouquet</span>
//               <span>N5,000</span>
//             </div>
//           </div>
//           <div>
//             <img src="public/images/Radiance-31.99-35.99-39.99.webp" alt=""   className="rounded bg-contain w-full"/>
//             <div className="flex flex-row justify-between mt-4 text-gray-800">
//               <span>Flower Bouquet</span>
//               <span>N5,000</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartView;

import React from "react";
import bag from "/images/Screenshot from 2025-07-05 11-12-57.png";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const CartView = () => {
  return (
    <div className="min-h-screen px-4 py-8 font-sans max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold">Your Cart.</h2>
      <p className="text-gray-600">Review and manage the items in your shopping cart.</p>

      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img
            src={bag}
            alt="Bag"
            className="object-cover rounded-lg w-full max-h-96"
          />
        </div>

        <div className="w-full lg:w-1/2 space-y-3">
          <p className="text-xs text-gray-500 mt-4">Product</p>
          <div className="flex items-center gap-2 text-sm text-gray-800 bg-green-100 border px-2 py-1 w-fit rounded">
            🚚 Delivery fee
            <span className="bg-gray-900 px-1 py-1 rounded text-xs text-gray-100">₦1,500</span>
          </div>

          <h3 className="text-xl">Stylish Bag</h3>

          <div className="flex flex-wrap items-center gap-1">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-yellow-400 bg-black rounded-md p-2">
                <AiFillStar />
              </span>
            ))}
            <span className="p-2 bg-black text-yellow-400 rounded-md">
              <AiOutlineStar />
            </span>
            <span className="p-1 ml-2 border rounded-md font-bold">2.4</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="text-sm font-medium">
              Price:
              <span className="text-lg border border-gray-300 p-1 ml-1 rounded">₦4,000</span>
            </div>
            <span className="font-bold text-lg text-gray-400">|</span>
            <div className="flex items-center gap-2">
              <span>Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded px-2">
                <button className="text-lg">+</button>
                <span className="px-2">1</span>
                <button className="text-lg">-</button>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600">
            This is a stylish and versatile bag perfect for everyday use or casual outings.
          </p>

          <div className="flex flex-col gap-3">
            <button className="py-2 w-full sm:w-7/12 border border-black rounded-md text-black font-medium">
              Buy Now
            </button>
            <button className="py-3 bg-black text-white rounded-md font-medium w-full sm:w-7/12">
              Add to cart
            </button>
          </div>

          <div className="relative mt-4">
            <select className="w-full border border-green-700 outline-none rounded-md px-4 py-3 text-green-700">
              <option>Select your location</option>
              <option>Lagos</option>
              <option>Abuja</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mt-6 items-center justify-center sm:justify-start text-center">
        {["Black", "White", "Blue"].map((color, i) => (
          <div key={i} className="text-center">
            <img src={bag} alt="Color Option" className="h-20 w-20 object-contain mx-auto" />
            <p className="text-sm mt-1">{color}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 space-x-3 text-sm text-gray-600 flex flex-wrap">
        <label><input type="radio" name="zip" /> Design</label>
        <label><input type="radio" name="zip" /> Plane</label>
        <label><input type="radio" name="zip" /> Design and Plane</label>
        <label><input type="radio" name="zip" /> None</label>
        <p className="text-xs text-gray-400 mt-2 w-full">Design adds ₦1,000 extra while Plane adds ₦500.00</p>
      </div>

      <div className="mt-4">
        <p className="text-gray-900 text-xl font-bold">Description</p>
        <p className="text-sm text-gray-600 mb-6">
  Bags are more than just a fashion statement — they're essential companions for everyday life. Whether you're heading to work, school, or a casual outing, our bags are crafted with style, durability, and function in mind. From sleek designs to roomy interiors, each piece is made to carry your world with confidence and ease.
</p>

      </div>

      <div className="mt-6 max-w-2xl flex flex-col mx-auto px-4">
        <h3 className="text-xl font-semibold">Customer Reviews</h3>
        <p className="text-gray-500 mb-6 text-sm">Customer's Testimonies</p>

        <div className="mb-10 pb-6">
          <div className="flex items-center gap-3">
            <img src={bag} alt="User" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="font-medium">Yusuf</p>
              <p className="text-sm text-gray-500">May 15, 2024</p>
            </div>
          </div>

          <div className="mt-2 flex items-center gap-1 flex-wrap">
            <span className="text-sm font-semibold">Rating:</span>
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-yellow-400 bg-black rounded-md p-2">
                <AiFillStar />
              </span>
            ))}
            <span className="p-2 bg-black text-yellow-400 rounded-md">
              <AiOutlineStar />
            </span>
          </div>

          <p className="text-sm text-gray-600 mt-2">
            Size: <span className="font-semibold">16.g</span> | Color:{" "}
            <span className="font-semibold">White</span> | Design Pattern:
            <span className="font-semibold">Classic</span>
          </p>

          <div className="flex flex-wrap gap-3 mt-3">
            <img src={bag} alt="Stylish" className="h-24 w-24 rounded-lg border object-cover" />
            <div className="h-24 w-24 rounded-lg border flex items-center justify-center text-gray-400">+</div>
          </div>

          <p className="text-sm text-gray-700 mt-4">
            This bag is stylish and fits all my essentials. Would definitely recommend it for everyday use.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-medium">Bags You may like</h2>
        <p className="text-sm text-gray-600">Similar bags from the one selected</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6 cursor-pointer">
          {[...Array(8)].map((_, i) => (
            <div key={i}>
              <img src={bag} alt="Bag" className="rounded bg-contain w-full" />
              <div className="flex flex-row justify-between mt-4 text-gray-800">
                <span>Stylish Bag</span>
                <span>₦5,000</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartView;
