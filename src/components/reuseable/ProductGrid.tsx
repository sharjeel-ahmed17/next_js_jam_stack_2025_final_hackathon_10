'use client';

import { ShoppingCart, Heart, Share2 } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    discount: "-30%",
    image: "/images/cat1.png", // Replace with actual image path
  },
  {
    id: 2,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    image: "/images/cat2.png",
  },
  {
    id: 3,
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    discount: "-50%",
    image: "/images/cat3.png",
  },
  {
    id: 4,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    new: true,
    image: "/images/cat1.png",
  },
];

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg">
      {/* Product Image */}
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />

      {/* Discount or New Label */}
      {product.discount && (
        <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          {product.discount}
        </span>
      )}
      {product.new && (
        <span className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
          New
        </span>
      )}

      {/* Hover Overlay (Now controlled via group-hover) */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="bg-white text-black px-4 py-2 text-sm rounded-md font-semibold">
          Add to cart
        </button>
        <div className="flex gap-4 text-white">
          <button className="flex items-center gap-1 text-sm">
            <Share2 size={16} /> Share
          </button>
          <button className="flex items-center gap-1 text-sm">
            <ShoppingCart size={16} /> Compare
          </button>
          <button className="flex items-center gap-1 text-sm">
            <Heart size={16} /> Like
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500 text-sm">{product.description}</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-black font-bold">{product.price}</span>
          {product.oldPrice && (
            <span className="text-gray-400 line-through">{product.oldPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default function ProductListComp() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold text-center mb-6">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}