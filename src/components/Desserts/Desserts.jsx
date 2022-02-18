import React, { useEffect, useContext } from "react";
import { myContext } from "../context/context";
import "./Desserts.scss";

export default function Desserts() {
  const { fetchDesserts, desserts } = useContext(myContext);
  useEffect(() => {
    fetchDesserts();
  }, [fetchDesserts]);
  return (
    <div className="desserts">
      {desserts.map((dessert) => (
        <div className="desserts-main" key={dessert["recipe"]["calories"]}>
          <img src={dessert["recipe"]["image"]} alt="#" title={dessert["recipe"]["label"]} />
          <div className="labeling">
            <h4>{dessert["recipe"]["label"]}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}
