import React from "react";
import "./cardContainer.scss";
import { useEffect, useState } from "react";
import Card from "../molecules/Cards";
import Search from "../molecules/Search";
const API = "https://fakestoreapi.com/products";

export default function CardContainer() {
  const [products, setProducts] = useState([]);
  // to deliver to the search var without fetching the API again
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);setAllProducts(data);
      });
  }, []);

  const [search, setSearch] = useState("");

  return (
    <>
      <h1 className="title">Productos</h1>

      <span>
        {" "}
        <Search
          search={search}
          setSearch={setSearch}
          setProducts={setProducts}
          allProducts={allProducts}
          setAllProducts={setAllProducts}
        />
      </span>

      <div className="container">
        {products.map((e) => (
          <Card image={e.image} title={e.title} price={e.price} key={e.id}/>
        ))}
      </div>
    </>
  );
}
