import { useCallback } from "react";

const useRequest = () => {
  const sendRequest = useCallback(async (getData = () => {}) => {
    const response = await fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    );
    if (!response.ok) {
      throw new Error("Fail to get data!");
    }
    const data = await response.json();
    getData(data);
  }, []);

  return { sendRequest };
};

export default useRequest;
