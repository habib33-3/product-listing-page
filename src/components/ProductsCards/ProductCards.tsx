"use client";

import { useMemo } from "react";
import ProductCard from "./ProductCard/ProductCard";

interface ProductCardsProps {
  products: ProductType[];
  searchQuery: string;
}

const ProductCards = ({ products, searchQuery }: ProductCardsProps) => {
  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [products, searchQuery]);

  return (
    <div>
      <div className="flex  flex-wrap items-center justify-center gap-10 mt-10 pb-10">
        {filteredProducts.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
