import React from 'react'

const VehiclePanel = ({...props}) => {    
  return (
    <div>
        <h5 onClick={
        ()=> {
          props.setVehiclePanelOpen(false)
        }} 
      className='p-1 absolute top-0 w-full text-center'><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>
      <h3 className='font-bold text-xl mb-4 mt-0'>Choose a Vehicle</h3>
      <div onClick={()=> {
        props.setVehiclePanelOpen(false);
        props.setConfirmRideOpen(true)
      }} className='flex items-center justify-between px-3 py-3 border-2 rounded-md active:border-black'>
        <img className='w-24' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
        <div>
          <h4 className='font-medium'>UberGo <span className='text-black'><i className="ri-user-fill">4</i></span></h4>
          <h5 className='text-sm font-medium'>2 min away</h5>
          <p className='text-xs text-gray-600'>Affordable, compact rides</p>
        </div>
        <h3 className='font-semibold text-lg'>&#8377;193.20</h3>
      </div>
      <div onClick={()=> {
        props.setVehiclePanelOpen(false);
        props.setConfirmRideOpen(true)
      }} className='flex items-center justify-between px-3 py-3 border-2 rounded-md active:border-black'>
        <img className='w-24' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTJw6dzEo1MYXOAbONCG1oL82rxU_Bitb-g&s" alt="" />
        <div>
          <h4 className='font-medium'>Moto <span className='text-black'><i className="ri-user-fill">1</i></span></h4>
          <h5 className='text-sm font-medium'>3 min away</h5>
          <p className='text-xs text-gray-600 whitespace-nowrap'>Affordable, Motorcycle rides</p>
        </div>
        <h3 className='font-semibold text-lg'>&#8377;65</h3>
      </div>
      <div onClick={()=> {
        props.setVehiclePanelOpen(false);
        props.setConfirmRideOpen(true)
      }} className='flex items-center justify-between px-3 py-3 border-2 rounded-md active:border-black'>
        <img className='w-24' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
        <div>
          <h4 className='font-medium'>UberAuto <span className='text-black'><i className="ri-user-fill">3</i></span></h4>
          <h5 className='text-sm font-medium'>3 min away</h5>
          <p className='text-xs text-gray-600'>Affordable, auto rides</p>
        </div>
        <h3 className='font-semibold text-lg'>&#8377;118.50</h3>
      </div></div>
  )
}

export default VehiclePanel