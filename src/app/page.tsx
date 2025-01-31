// import ProductListComp from '@/components/reuseable/ProductGrid'

import Category from "@/components/home/category/Category";
import FeaturedProducts from "@/components/home/featuresProducts/FeaturedProducts";
import Hero from "@/components/home/hero/Hero";
import ImageGallery from "@/components/home/imageGallery/ImageGallery";
import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    <div>
      {/* <div className="flex justify-center">
        <Button
          variant="btnPrimary"
         
        >
          click me
        </Button>
        <Button
          variant="btnSecondary"
         
        >
          secondary
        </Button>
      </div> */}
      <Hero />
      <Category />
      <FeaturedProducts />
      <ImageGallery />
    </div>
  );
};

export default Home;
