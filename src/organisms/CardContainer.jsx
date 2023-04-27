import React from "react";
import "./cardContainer.scss";
import { useState } from "react";
import Card from "../molecules/Cards";
import Search from "../molecules/Search";
import Modal from "../modal/Modal";
import Button from "../atoms/Button";

export default function CardContainer({
  items,
  setItems,
  allItems,
  setAllItems,
}) {
  const [portal, setPortal] = useState(false);
  const handlePortal = () => setPortal(!portal);

  return (
    <>
      <section className="head">
        <h1 className="title">Productos</h1>

        <div>
          {" "}
          <Search setItems={setItems} allItems={allItems} />
        </div>
      </section>

      <div className="container">
        {items.map((e) => (
          <Card image={e.image} title={e.title} price={e.price} key={e.id} />
        ))}
      </div>
      <div className="button">
        {" "}
        <Button handlePortal={handlePortal} text={"+"} />{" "}
      </div>

      {portal && (
        <div className="modal">
          {" "}
          <Modal> teletransportaciooon </Modal>{" "}
        </div>
      )}
    </>
  );
}
