import React from 'react'

const Stripe = ({ val }) => {
  return (
        <div className='flex h-20 w-[16.6667vw] min-w-[16.6667vw] items-center justify-between border-b border-r border-t border-gray-700 px-5 py-3'>
            <img src={val.url} alt="" />
            <span className='font-semibold'>{val.number}</span>
        </div>
  )
}

export default Stripe