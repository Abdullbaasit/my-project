"use client";
import { ParentDesign } from "./component/sneaker/TextFile";
import { ImageSlider } from "./component/sneaker/button";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid md:grid-cols-2 gap-10 items-center">
      <ImageSlider />
      <ParentDesign />
    </main>
  );
}