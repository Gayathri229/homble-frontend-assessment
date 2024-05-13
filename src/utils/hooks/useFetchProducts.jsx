import { useEffect, useMemo, useState, useCallback } from "react";
import { getRequest } from "../../axios";

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = useCallback( async () => {
    try {
      const response = await getRequest("/products");
      console.log(response);
      // const sortedProducts = response?.data?.sort(
      //   (a, b) => a.selling_price - b.selling_price
      // );
      setProducts(response?.data);
    } catch (error) {
      console.error("Error fetching response", error);
    }
  },[]);

  const memoizedProducts = useMemo(() => {
    console.log("memoized function");
    return products;
  }, [products]);

  const sortedProducts = useMemo(
    () =>
      memoizedProducts
        ?.slice()
        .sort((a, b) => a.selling_price - b.selling_price),
    [memoizedProducts]
  );

  return sortedProducts;
};

export default useFetchProducts;
