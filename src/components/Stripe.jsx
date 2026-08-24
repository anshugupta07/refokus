import React from 'react'

const Stripe = ({val}) => {
  return (
    <div className='w-[16.66%] px-5  py-3 border-t border-r flex items-center justify-between border-b border-gray-700'>
        <img src={val.url}/>
        <span className='font-semibold' >{val.number}</span>
        </div>
  )
}

export default Stripe