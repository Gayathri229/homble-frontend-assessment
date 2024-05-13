import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { getRequest } from "../../axios";

const useFetchProductDescription = () => {
  const { productId } = useParams();
  const [productDescription, setProductDescription] = useState([]);

  useEffect(() => {
    fetchProductDescription();
  }, [productId]);

  const fetchProductDescription = async () => {
    try {
      const prodDescResponse = await getRequest("/products/" + productId);
      console.log(prodDescResponse);
      setProductDescription(prodDescResponse?.data);
    } catch (error) {
      console.error("Error fetching product details", error);
    }
  };

  const memoizedProductDesc = useMemo(
    () => productDescription,
    [productDescription]
  );
  
  return memoizedProductDesc;
};

export default useFetchProductDescription;
