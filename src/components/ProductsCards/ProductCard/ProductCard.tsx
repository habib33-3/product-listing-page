"use client";

import Image from "next/image";
import DetailsModal from "./DetailsModal/DetailsModal";
import { useState } from "react";

const ProductCard = ({ product }: { product: ProductType }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { image, title, price, rating } = product;

  return (
    <div className="relative w-full md:w-80 h-[420px] bg-gradient-to-b from-gray-400 to-stone-500 text-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 group flex flex-col items-center justify-between p-4">
      <div className="relative h-3/5 bg-white w-full mb-4 rounded-t-lg overflow-hidden  ">
        <Image
          alt={title}
          src={image}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-contain rounded-t-lg transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg">
          <h1 className="text-xl font-bold text-center px-2">
            {title}
          </h1>
          <button
            onClick={() => setIsOpen(true)}
            className="mt-4 py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Details
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center w-full">
        <div className="flex justify-between items-center w-full mb-2">
          <div className="text-xl font-semibold">${price.toFixed(2)}</div>
          <div className="bg-yellow-600 text-white text-sm font-medium px-2 py-1 rounded-full">
            {rating.rate} ★ ({rating.count})
          </div>
        </div>
      </div>

      <DetailsModal
        isOpen={isOpen}
        product={product}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default ProductCard;
