import ProductCards from "@/components/ProductsCards/ProductCards";
import { getAllProducts } from "@/utils/api";

const HomePage = async () => {
  const products = await getAllProducts();

  return (
    <>
      <ProductCards products={products} />
    </>
  );
};

export default HomePage;
