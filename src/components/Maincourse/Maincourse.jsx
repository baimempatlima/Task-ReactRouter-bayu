import React, { useEffect, useContext } from "react";
import { myContext } from "../context/context";
import "./Maincourse.scss";

const Maincourse = () => {
  const { fetchMaincourse, maincourse } = useContext(myContext);
  useEffect(() => {
    fetchMaincourse();
  }, [fetchMaincourse]);
  return (
    <div className="maincourse">
      {maincourse.map((maincourse) => (
        <div className="maincourse-main" key={maincourse["recipe"]["calories"]}>
          <img src={maincourse["recipe"]["image"]} title={maincourse["recipe"]["label"]} alt="#" />
          <div className="labeling">
            <h4>{maincourse["recipe"]["label"]}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export { Maincourse };
