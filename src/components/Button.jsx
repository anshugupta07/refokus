import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

const Button = () => {
  return (
    <div className="min-w-40 px-4 py-2 bg-zinc-100 text-black items-center justify-between flex rounded-full">
      <span className="text-sm  font-medium">Get Started</span>
      <IoIosReturnRight className="" />
    </div>

  )
}

export default Button
