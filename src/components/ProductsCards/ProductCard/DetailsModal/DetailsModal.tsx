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

  const { category, description, image, price, title, rating } = product;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
      <div className="rounded-lg bg-gray-800 overflow-auto shadow-lg max-w-2xl mx-auto transform transition-transform duration-300 scale-100 md:w-3/4">
        <div className="flex justify-between items-center p-4 border-b border-gray-600">
          <h2 className="text-lg md:text-xl font-semibold text-white flex-grow overflow-hidden overflow-ellipsis pr-2">
            {title}
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none flex-shrink-0"
          >
            <IoCloseCircle className="text-2xl font-bold" />
          </button>
        </div>
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="relative w-full md:w-1/2 mx-auto p-4 flex flex-col items-center justify-center">
            <Image
              alt={title}
              src={image}
              width={500}
              height={500}
              className="object-center object-contain mx-auto"
            />
          </div>
          <div className="p-4 flex flex-col justify-between items-center w-full md:w-1/2 mx-auto">
            <div>
              <h3 className="text-gray-300 text-sm mb-1 capitalize">Category: {category}</h3>
              <p className="text-gray-400 text-sm text-justify p-3">{description}</p>
            </div>
            <div className="flex justify-between items-center mt-4 w-full">
              <div className="text-xl font-semibold text-white">${price.toFixed(2)}</div>
              <div className="bg-yellow-600 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center">
                <span className="mr-1">{rating.rate} ★</span>
                <span>({rating.count})</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
