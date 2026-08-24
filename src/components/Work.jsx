import React from 'react'
import work1 from '../assets/work1.png'
import work2 from '../assets/work2.png'
import work3 from '../assets/work3.png'
import work4 from '../assets/work4.png'
import work5 from '../assets/work5.png'
import work6 from '../assets/work6.png'

const Work = () => {

  var images =[
    {url:work1, top:"50%", left:"50%" , isActive:true},
    {url:work2, top:"56%", left:"44%" , isActive:false},
    {url:work3, top:"45%", left:"56%" , isActive:false},
    {url:work4, top:"60%", left:'53%' , isActive:false},
    {url:work5, top:"43%", left:"40%" , isActive:false},
    {url:work6, top:"65%", left:"55%", isActive:false},
  ]
  return (
    <div className="w-full"> 
      <div className="relative max-w-7xl mx-auto text-center  ">
        <h1 className=" text-[40vw] leading-none  tracking-tight font-medium  " >work</h1>
        <div className='absolute top-0 w-full h-full'>
          {images.map((elem, index) => (elem.isActive && (<img className="absolute rounded-lg  translate-x-[-50%] translate-y-[-50%] w-60" src={elem.url} style={{top:elem.top,left:elem.left}} alt="" />)))}
        </div>
      </div>
    </div>
  )
}

export default Work
