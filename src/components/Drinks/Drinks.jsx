import React, { useContext, useEffect } from "react";
import { myContext } from "../context/context";
import "./Drinks.scss";

const Drinks = () => {
  const { fetchDrink, drinks } = useContext(myContext);
  useEffect(() => {
    fetchDrink();
  }, [fetchDrink]);
  return (
    <div className="drinks">
      {drinks.map((drink) => (
        <div className="drinks-main" key={drink["recipe"]["calories"]}>
          <img src={drink["recipe"]["image"]} alt="#" title={drink["recipe"]["label"]} />
          <div className="labeling">
            <h4>{drink["recipe"]["label"]}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Drinks;
