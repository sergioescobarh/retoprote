import React from 'react'

export default function Search({search,setSearch,setProducts,initialProducts}) {
  const searcher = (event) => {
    setSearch(event.target.value);
    console.log(event.target.value);
    
    const newProducts = initialProducts.filter((e)=>{
      const newSearch = search.toLowerCase()
      return e.title.includes(newSearch)
    });
    setProducts(newProducts)

  };


  return (
    <><input type="text" onChange={searcher}/></>
  )
}
