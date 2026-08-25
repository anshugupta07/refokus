import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full'>
        <div className='max-w-6xl flex  gap-3 mx-auto  py-32'>
            <Card width={"basis-1/3"} start={false} para={true}/>
            <Card width={"basis-2/3"} start={true} para={false} hover={"bg-voilet-600"}/>
        </div>
        

    </div>
  )
}

export default Cards