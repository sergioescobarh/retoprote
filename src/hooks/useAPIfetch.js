import { useState,useEffect } from "react";

const useAPIfeth = (API) => {
    const [items, setItems] = useState([]);
  // to deliver to the search var without fetching the API again
  const [allItems, setAllItems] = useState([]);
  useEffect(() => {
    function getProducts (API) {
        fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setItems(data);setAllItems(data);
        
    })}
    getProducts(API)}, [API]);
    
  return ([items , setItems , allItems , setAllItems] )
};
export default useAPIfeth;