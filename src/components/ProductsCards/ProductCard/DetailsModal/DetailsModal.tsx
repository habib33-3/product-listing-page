import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { IoCloseCircle } from "react-icons/io5";

interface DetailsModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  product: ProductType;
}

const DetailsModal = ({ isOpen, setIsOpen, product }: DetailsModalProps) => {
  if (!isOpen) return null;

  const { category, description,  image, price, title,rating } = product;

  return (
    <div className="fixed inset-0  z-50 pt-10 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
      <div className="rounded-lg  bg-gray-800 overflow-hidden shadow-lg max-w-lg mx-auto transform transition-transform duration-300 scale-100 md:w-96">
        <div className="flex justify-between items-center p-4 pt-7 border-b border-gray-600">
          <h2 className="text-xl font-semibold text-white overflow-wrap break-word">{title}</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <IoCloseCircle className="text-2xl font-bold" />
          </button>
        </div>
        <div className="p-4">
          <div className="relative h-64 w-full mb-4 rounded overflow-hidden">
            <Image
              width={300}
              height={500}
              src={image}
              alt={title}
              className="object-contain object-center w-full h-full"
            />
          </div>
          <div className="overflow-y-auto max-h-80">
            <p className="text-gray-300 mb-2 text-justify p-2">{description}</p>
          </div>
          <div className="flex justify-between items-center w-full mb-2 mt-4">
          <div className="text-xl font-semibold">${price.toFixed(2)}</div>
          <div className="bg-yellow-600 text-white text-sm font-medium px-2 py-1 rounded-full">
            {rating.rate} ★ ({rating.count})
          </div>
        </div>
          <p className="text-sm text-gray-400 capitalize">Category: {category}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
