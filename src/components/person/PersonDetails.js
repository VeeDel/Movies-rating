import React from "react";

import "./personDetails.css";

import PersonLeft from "./lefft/PersonLeft";
import Mainright from "./right/main-right/main-right";
import { useParams } from "react-router-dom";

export default function PersonDetails() {
  const { id } = useParams();
  return (
    <div className="main-div">
      <PersonLeft id={id} />
      <Mainright id={id} />
    </div>
  );
}
