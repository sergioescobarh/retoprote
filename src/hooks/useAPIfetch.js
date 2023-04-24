import { useState,useEffect } from "react";

const useAPIfeth = (API) => {
    const [products, setProducts] = useState([]);
  // to deliver to the search var without fetching the API again
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    function getProducts (API) {
        fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);setAllProducts(data);
        
    })}
    getProducts(API)}, [API]);
    
  return ([products , setProducts , allProducts , setAllProducts] )
};
export default useAPIfeth;