import React from 'react'

const ConfirmRide = ({...props}) => {
    
  return (
    <div>
      <h4 onClick={
        ()=> {
          props.setConfirmRideOpen(false)
        }
      } className='text-center'><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h4>
      <div className='flex items-center justify-between p-2 mb-4'>
      <img className='w-28' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
      <div className='text-right'>
        <h2 className='text-lg font-medium leading-[18px]'>Amit</h2>
        <span className='text-lg font-semibold leading-[16px]'>UP40 AB 7651</span>
        <p className='text-sm text-gray-700 leading-[16px]'>Maruti Suzuki Alto</p>
      </div>
      </div>
      <div className='flex items-center gap-6 border-b p-3 px-4'>
      <i className="ri-map-pin-user-line"></i>
      <div>
        <h4 className='font-medium text-lg'>524/11-A</h4>
        <p className='text-sm text-gray-700'>Kesarganj Bahraich</p>
      </div>
      </div>
      <div className='flex items-center gap-6 border-b p-3 px-4'>
      <i className="ri-map-pin-2-fill"></i>
      <div>
        <h4 className='font-medium text-lg'>850/11-A</h4>
        <p className='text-sm text-gray-700'>Kesarganj Bahraich</p>
      </div>
      </div>
      <div className='flex items-center gap-6 p-3 px-4'>
      <i className="ri-currency-line"></i>
      <div>
        <h4 className='font-medium text-lg'>&#8377;193.20</h4>
        <p className='text-sm text-gray-700'>Cash Cash</p>
      </div>
      </div>
    </div>
  )
}

export default ConfirmRide