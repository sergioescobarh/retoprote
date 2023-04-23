import React from "react";

export default function Search({
  search,
  setSearch,
  setProducts,
  setAllProducts,
  allProducts,
}) {
  const searcher = (event) => {
    setSearch(event.target.value);

    const newProducts = allProducts.filter((e) => {
      const newSearch = event.target.value.toLowerCase();
      return e.title.toLowerCase().includes(newSearch);
    });
    setProducts(newProducts);
  };

  return (
    <>
      <input type="text" onChange={searcher} />
    </>
  );
}
