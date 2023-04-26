// import {useState , useEffect } from "react";
// const API = "https://www.superheroapi.com/api.php/9787633674583710/";

// export default function useApiHeros() {
//   let [items, setItems] = useState([]);
//   let [allItems, setAllItems] = useState([]);

//   useEffect(() => {
//     if (items.length === 0 && allItems.length === 0) {
//       let hero = [];
//       for (let i = 1; i <= 10; i++) {
//         fetch(API + i)
//           .then((response) => response.json())
//           .then((data) => hero.push(data));
//       }
//       console.log(hero);
//       setAllItems(hero);
//       setItems(hero);
//     }
//   }, [items,allItems]);

//   return { items, setItems, allItems, setAllItems };
// }
