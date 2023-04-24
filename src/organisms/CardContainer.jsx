import React from "react";
import "./cardContainer.scss";
import useAPIfetch from '../hooks/useAPIfetch';
import { useState } from "react";
import Card from "../molecules/Cards";
import Search from "../molecules/Search";
import Modal from '../modal/Modal';
import Button from "../atoms/Button";
const API = "https://fakestoreapi.com/products";


export default function CardContainer() {
  
  const [products , setProducts , allProducts , setAllProducts] = useAPIfetch(API)
  const [search, setSearch] = useState("");
  const [portal,setPortal] = useState(false);
  const handlePortal = ()=> setPortal(!portal);


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
      <div className='button' > <Button  handlePortal={handlePortal} text={'+'}/> </div>
      

      { portal && (<div className="modal"> <Modal> teletransportaciooon </Modal> </div>)}

      

      
    </>
  );
}
