import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface DetailsModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  product: ProductType;
}

const DetailsModal = ({ isOpen, setIsOpen, product }: DetailsModalProps) => {
  if (!isOpen) return null;

  const { category, description, id, image, price, rating, title } = product;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-lg mx-auto transform transition-transform duration-300 scale-100">
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            &times;
          </button>
        </div>
        <div className="p-4">
          <Image
            src={image}
            alt={title}
            width={400}
            height={400}
            className="w-full h-64 object-contain object-center mb-4 rounded"
          />
          <p className="text-gray-600 mb-2">{description}</p>
          <p className="text-lg font-bold mb-2 text-gray-800">${price}</p>
          <p className="text-sm text-gray-500">Category: {category}</p>
          <div className="mt-4 flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600 transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
