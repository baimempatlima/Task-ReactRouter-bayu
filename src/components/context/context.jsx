import React, { createContext, useCallback, useState } from "react";
import axios from "axios";

export const myContext = createContext();

export const AppContext = ({ children }) => {
  const [foods, setFoods] = useState([]);
  const [maincourse, setMaincourse] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [desserts, setDesserts] = useState([]);

  const API_ID = "c559d211";
  const APP_KEY = "3e8ae12c02448bc17d504e5f9c00b099";

  const fetchHomeFoods = useCallback((searchTerm) => {
    axios.get(`https://api.edamam.com/search?q=${searchTerm}&app_id=${API_ID}&app_key=${APP_KEY}`).then((res) => {
      console.log(res.data.hits);
      setFoods(res.data.hits);
    });
  }, []);

  const fetchMaincourse = useCallback(() => {
    axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=Main%course&app_id=${API_ID}&app_key=${APP_KEY}&dishType=Main%20course`).then((res) => {
      console.log(res.data.hits);
      setMaincourse(res.data.hits);
    });
  }, []);
  const fetchDesserts = useCallback(() => {
    axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=Desserts&app_id=${API_ID}&app_key=${APP_KEY}&dishType=Desserts`).then((res) => {
      console.log(res.data.hits);
      setDesserts(res.data.hits);
    });
  }, []);
  const fetchDrink = useCallback(() => {
    axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=drinks&app_id=${API_ID}&app_key=${APP_KEY}&dishType=Drinks`).then((res) => {
      console.log(res.data.hits);
      setDrinks(res.data.hits);
    });
  }, []);
  return <myContext.Provider value={{ fetchHomeFoods, foods, fetchMaincourse, maincourse, fetchDrink, drinks, fetchDesserts, desserts }}>{children}</myContext.Provider>;
};
