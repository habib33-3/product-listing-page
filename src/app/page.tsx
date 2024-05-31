import ProductCards from "@/components/ProductsCards/ProductCards";
import SearchBox from "@/components/ProductsCards/SearchBox/SearchBox";
import { getAllProducts } from "@/utils/api";

const HomePage = async ({
  searchParams,
}: {
  searchParams?: {
    title?: string;
  };
}) => {
  const products = await getAllProducts();

  const title = searchParams?.title || "";

  return (
    <div>
      <SearchBox />
      <ProductCards
        products={products}
        searchQuery={title}
      />
    </div>
  );
};

export default HomePage;
