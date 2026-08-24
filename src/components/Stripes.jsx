import React from "react";
import Stripe1 from "../assets/stripsvg1.svg";
import Stripe2 from "../assets/stripsvg2.svg";
import Stripe3 from "../assets/stripsvg3.svg";
import Stripe from "./Stripe";
const Stripes = () => {
  var stripes = [
    { url: Stripe1, number: 48 },
    { url: Stripe2, number: 2 },
    { url: Stripe3, number: 11 },
    { url: Stripe1, number: 48 },
    { url: Stripe2, number: 2 },
    { url: Stripe3, number: 11 },
  ];
  return (
    <div className="flex   mt-30 items-center">
      {stripes.map((elem, index) => (
        <Stripe key={`${elem.url}-${index}`} val={elem} />
      ))}
    </div>
  );
};

export default Stripes;
