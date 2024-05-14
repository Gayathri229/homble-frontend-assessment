import { postRequest } from "../../axios";

const useAddProduct = ({productName, prodDescription, allergenInfo, setProductName, setProdDescription, setAllergenInfo}) => {

  const handleAddProduct = async () => {
    try {
      const url = "/products";
      const data = {
        productName: productName,
        productDescription: prodDescription,
        allergenInfo: allergenInfo,
      };
      await postRequest(url, data);
      setProductName("");
      setProdDescription("");
      setAllergenInfo("");
    } catch (error) {
      console.error("Error adding product", error);
    }
  };
  
  return handleAddProduct;
};

export default useAddProduct;
