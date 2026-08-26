import React from "react";
import { motion } from "motion/react";
import Stripe1 from "../assets/stripsvg1.svg";
import Stripe2 from "../assets/stripsvg2.svg";
import Stripe3 from "../assets/stripsvg3.svg";
import Stripe from "./Stripe";

const Stripes = () => {
  const stripes = [
    { url: Stripe1, number: 48 },
    { url: Stripe2, number: 2 },
    { url: Stripe3, number: 11 },
    { url: Stripe1, number: 48 },
    { url: Stripe2, number: 2 },
    { url: Stripe3, number: 11 },
  ];

  return (
    <div className="relative mt-20 w-full overflow-hidden py-20">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
      >
        {[...stripes, ...stripes].map((item, index) => (
          <Stripe key={`${item.number}-${index}`} val={item} />
        ))}
      </motion.div>
    </div>
  );
};

export default Stripes;
