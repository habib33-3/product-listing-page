"use client"

import Image from "next/image";
import DetailsModal from "./DetailsModal/DetailsModal";
import { useState } from "react";

const ProductCard = ({ product }: { product: ProductType }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { image, title, price, rating } = product;

  return (
    <div className="relative w-full lg:w-96 h-[400px] bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300 group flex flex-col items-center justify-around">
      <div className="relative h-3/5 w-full">
        <Image
          alt={title}
          src={image}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-contain rounded-t-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg">
          <h1 className="text-3xl text-white font-bold text-center px-2">
            {title}
          </h1>
          <button onClick={()=>setIsOpen(true)} className="mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-300">
            Details
          </button>
        </div>
      </div>
      <div className="p-4  flex flex-col justify-between items-center w-full">
        <div className="flex justify-between items-center mb-2">
          <div className="text-xl font-semibold">${price.toFixed(2)}</div>
          <div className="bg-green-500 text-white text-sm font-medium px-2 py-1 rounded-full">
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
