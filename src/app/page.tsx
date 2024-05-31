import ProductCards from "@/components/ProductsCards/ProductCards";
import SearchBox from "@/components/SearchBox/SearchBox";
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
    <div className="bg-gray-900">
      <h1 className="text-center text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400/80 via-green-500/40 to-teal-600/90 bg-clip-text text-transparent py-4 drop-shadow-lg">
        Products
      </h1>

      <SearchBox />
      <ProductCards
        products={products}
        searchQuery={title}
      />
    </div>
  );
};

export default HomePage;
