import React from 'react'
import Button from './Button'

function Product({val }) {
  return (

    <div className="w-full h-80 py-20 text-white">
            <div
                onMouseEnter={() => mover(count)}
                className="max-w-7xl mx-auto flex items-center justify-between"
            >
                <h1 className="text-5xl font-semibold">{val.title}</h1>
                <div className="dets w-1/3">
                    <p className="mb-10">{val.description}</p>
                    <div className="flex items-center gap-5">
                        {val.live &&    <Button />}
                        {val.case && <Button title='Case study' />}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Product