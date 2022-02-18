import React, { useState, useCallback, useContext } from "react";
import "./Home.scss";
import { myContext } from "../context/context";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { fetchHomeFoods, foods } = useContext(myContext);

  const fetchFoodHandler = useCallback(() => {
    fetchHomeFoods(searchTerm);
  }, [searchTerm, fetchHomeFoods]);

  return (
    <div className="home">
      <div className="home-text">
        <h1>
          Food, Desserts and Drinks <span>Application</span>
        </h1>
      </div>
      <div className="home-search">
        <input type="text" placeholder="Type a meal name..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button onClick={fetchFoodHandler}>Search</button>
      </div>
      <div className="home-loading"></div>
      <div className="home-grid">
        {foods ? (
          foods.map((food) => (
            <div className="home-food" key={food["recipe"]["calories"]}>
              <img src={food["recipe"]["image"]} alt="#" />
              <div className="home-labeling">
                <h4>{food["recipe"]["label"]}</h4>
              </div>
            </div>
          ))
        ) : (
          <h2>No Foods found! try another word...</h2>
        )}
      </div>
    </div>
  );
};
export default Home;
