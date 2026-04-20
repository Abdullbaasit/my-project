"use client";
import { ImageSlider } from "./button";
export const Cardlist = () => {
  return (
    <div className="bg-white py-3 px-10 mt-3">
      <div className="">
        
        <ImageSlider />

        <div className="flex flex-row gap-4 h-20 px-3 overflow-x-auto">
          <img
            src="\assets\images\image-product-1-thumbnail.jpg"
            alt=""
            className="rounded-2xl"
          />
          <img
            src="\assets\images\image-product-2-thumbnail.jpg"
            alt=""
            className="rounded-2xl"
          />
          <img
            src="\assets\images\image-product-3-thumbnail.jpg"
            alt=""
            className="rounded-2xl"
          />
          <img
            src="\assets\images\image-product-4-thumbnail.jpg"
            alt=""
            className="rounded-2xl"
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};
