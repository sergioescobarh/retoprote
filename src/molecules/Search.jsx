import React from "react";

export default function Search({
  setSearch,
  setItems,
  allItems,
}) {
  const searcher = (event) => {

    const newProducts = allItems.filter((e) => {
      const newSearch = event.target.value.toLowerCase();
      return (e.title||e.name).toLowerCase().includes(newSearch);
    });
    setItems(newProducts);
  };

  return (
    <>
      <input type="text" onChange={searcher}  placeholder="¿Buscas alguno en especial?"/>
    </>
  );
}
