import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
function Card({width , start ,para ,hover}) {
  return (
  <div className={`w-1/2   bg-zinc-800 p-5 rounded-xl ${
                hover ? "hover:bg-violet-600" : ""
            } ${width} min-h-120 flex flex-col justify-between`  }>
    <div className="w-full">
      <div className="w-full items-center justify-between flex">
    <h3>One handinf</h3>
    <IoIosArrowRoundForward/>
    </div>
    <h1 className="text-3xl font-medium mt-5 ">WHat</h1>
    </div>
    <div className="down w-full  ">
      {
        start && (
          <><h1 className="text-6xl font-semibold tracking-tight lea ding-none">Start a Project</h1>
      <button className="rounded-full mt-5 border border-zinc-50 py-2 px-5">Contact Us</button>
          </>
        )
      }
      {
        para && (<p className="text-sm text-zinc-500 font-medium ">Explore what drives our team.</p>)
      }
      
    </div>
    </div>
    )
}

export default Card;
