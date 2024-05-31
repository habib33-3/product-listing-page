import ProductCard from "./ProductCard/ProductCard";

const ProductCards = ({ products }: { products: ProductType[] }) => {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-10">
        {products.map((product) => (
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
