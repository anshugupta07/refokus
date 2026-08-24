import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
const App = () => {
  return (
    <div className="w-full  select-none h-full bg-zinc-900 text-white ']" >

      <Navbar/>
      <Work/>
      <Stripes/>
    </div>
  )
}

export default App
