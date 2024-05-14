import { useEffect, useMemo, useState } from "react";
import { getRequest } from "../../axios";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../appSlice";

const useFetchProductDescription = ({ productId }) => {
  const [productDescription, setProductDescription] = useState([]);
  const dispatch = useDispatch();
  const cacheResult = useSelector((store) => store.app);

  useEffect(() => {
    if (cacheResult[productId]) {
      setProductDescription(cacheResult[productId]);
    } else {
      fetchProductDescription();
    }
  }, [productId]);

  const fetchProductDescription = useMemo(
    () => async () => {
      try {
        const prodDescResponse = await getRequest("/products/" + productId);
        setProductDescription(prodDescResponse?.data);
        dispatch(
          cacheResults({
            [productId]: prodDescResponse?.data,
          })
        );
      } catch (error) {
        console.error("Error fetching product details", error);
      }
    },
    [productId]
  );

  return productDescription;
};

export default useFetchProductDescription;
