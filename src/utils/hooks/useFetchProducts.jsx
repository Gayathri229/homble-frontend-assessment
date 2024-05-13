import { useEffect, useState } from "react";
import { getRequest } from "../../axios";

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getRequest("/products");
      console.log(response);
      const sortedProducts = response?.data?.sort(
        (a, b) => a.selling_price - b.selling_price
      );
      setProducts(sortedProducts);
    } catch (error) {
      console.error("Error fetching response", error);
    }
  };

  return products;
};

export default useFetchProducts;
