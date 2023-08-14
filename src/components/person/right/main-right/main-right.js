import React from "react";
import Bio from "../Bio/Bio";
import Knownfor from "../knownfor/KnownFor";

export default function Mainright({ id }) {
  return (
    <div>
      <Bio id={id} />
      <Knownfor id={id} />
    </div>
  );
}
