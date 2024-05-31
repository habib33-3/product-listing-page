const useProducts = async () => {
  const products = fetch("https://fakestoreapi.com/products");
  return products;
};

export default useProducts;
