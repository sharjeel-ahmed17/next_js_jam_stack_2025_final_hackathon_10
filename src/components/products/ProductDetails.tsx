"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const images = [
    "/images/cat1.png",
    "/images/cat2.png",
    "/images/cat3.png",
    "/images/cat1.png",
  ];
  return (
    <div className="flex flex-col md:flex-row p-6 gap-8">
      {/* Image Gallery */}
      <div className="md:w-[50%] flex flex-col md:flex-row gap-4">
        <div className="flex md:flex-col gap-2">
          {images.map((src, index) => (
            <Image width={200} height={200} key={index} src={src} alt="Sofa" className="w-16 h-16 rounded-lg cursor-pointer" />
          ))}
        </div>
        <Image width={200} height={200} src={images[0]} alt="Main Sofa" className="w-full h-[450px] rounded-lg" />
      </div>

      {/* Product Details */}
      <Card className="md:w-[50%]">
        <CardContent className="p-6">
          <h2 className="text-3xl font-semibold">Asgaard Sofa</h2>
          <p className="text-lg text-gray-500">Rs. 250,000.00</p>
          <div className="flex items-center gap-1 my-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-yellow-500 w-5 h-5" fill="yellow" />
            ))}
            <span className="text-gray-500">5 Customer Review</span>
          </div>
          <p className="text-gray-600">Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio...</p>
          
          {/* Size Selection */}
          <div className="mt-4">
            <span className="font-medium">Size</span>
            <div className="flex gap-2 mt-2">
              {['L', 'XL', 'XS'].map((size) => (
                <Button key={size} variant="outline" className="px-4 py-2">{size}</Button>
              ))}
            </div>
          </div>
          
          {/* Color Selection */}
          <div className="mt-4">
            <span className="font-medium">Color</span>
            <div className="flex gap-2 mt-2">
              {['bg-purple-500', 'bg-black', 'bg-yellow-500'].map((color, index) => (
                <div key={index} className={`${color} w-6 h-6 rounded-full cursor-pointer border-2 border-gray-300`}></div>
              ))}
            </div>
          </div>
          
          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center border rounded-lg overflow-hidden">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-1 border-r">-</button>
              <span className="px-4 py-1">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-1 border-l">+</button>
            </div>
            <Button className="px-6 py-2">Add To Cart</Button>
            <Button variant="outline" className="px-6 py-2">+ Compare</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetails;
