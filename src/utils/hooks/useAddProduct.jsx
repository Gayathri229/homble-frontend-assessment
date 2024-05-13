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
      const response = await postRequest(url, data);
      setProductName("");
      setProdDescription("");
      setAllergenInfo("");
      console.log("product added successfully", response);
    } catch (error) {
      console.error("Error adding product", error);
    }
  };
  
  return handleAddProduct;
};

export default useAddProduct;
