import { useEffect, useMemo, useState } from "react";
import { getRequest } from "../../axios";

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = useMemo(
    () => async () => {
      try {
        const response = await getRequest("/products");
        const sortedProducts = response?.data
          ?.slice()
          .sort((a, b) => a.selling_price - b.selling_price);
        setProducts(sortedProducts);
      } catch (error) {
        console.error("Error fetching response", error);
      }
    },
    [products]
  );

  return products;
};

export default useFetchProducts;
