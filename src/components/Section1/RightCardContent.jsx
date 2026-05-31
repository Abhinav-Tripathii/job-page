import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h2 className='bg-white rounded-full font-semibold h-10 w-10 flex items-center justify-center'>{props.id+1}</h2>
        <div>
            <p className='text-shadow-2xs text-lg leading-normal text-white mb-12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit placeat repellat atque.</p>
            <div className='flex justify-between'>
                <button style={{background:props.color}} className=' text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                <button className=' text-white font-medium px-4 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent
