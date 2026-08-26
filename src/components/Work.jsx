import React, { useState } from "react";
import { motion,useMotionValueEvent,useScroll } from "motion/react";
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";
import work4 from "../assets/work4.png";
import work5 from "../assets/work5.png";
import work6 from "../assets/work6.png";


const Work = () => {
  const [images , setImages]=useState([
    { url: work1, top: "50%", left: "50%", isActive: false },
    { url: work2, top: "56%", left: "44%", isActive: false },
    { url: work3, top: "45%", left: "56%", isActive: false },
    { url: work4, top: "60%", left: "53%", isActive: false },
    { url: work5, top: "43%", left: "40%", isActive: false },
    { url: work6, top: "65%", left: "55%", isActive: false },
  ])

const {scrollYProgress}=useScroll();
scrollYProgress.on("change", (data) => {
        function showImages(arr) {
            setImages((prev) =>
                prev.map((item, index) =>
                    arr.indexOf(index) === -1
                        ? { ...item, isActive: false }
                        : { ...item, isActive: true }
                )
            )
        }

        switch (Math.floor(data * 100)) {
            case 0:
                showImages([])
                break
            case 2:
                showImages([0])
                break
            case 3:
                showImages([0, 1])
                break
            case 5:
                showImages([0, 1, 2])
                break
            case 6:
                showImages([0, 1, 2, 3])
                break
            case 8:
                showImages([0, 1, 2, 3, 4])
                break
            case 9:
                showImages([0, 1, 2, 3, 4, 5, 6])
                break
        }
    })


  return (
    <div className="w-full mt-10">
      <div className="relative max-w-7xl mx-auto text-center  ">
        <h1 className=" text-[40vw] leading-none  tracking-tight font-medium  ">
          work
        </h1>
        <div className="absolute top-0 w-full h-full">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img key={index}
                  className="absolute rounded-lg  translate-x-[-50%] translate-y-[-50%] w-60"
                  src={elem.url}
                  style={{ top: elem.top, left: elem.left }}
                  alt=""
                />
              ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
