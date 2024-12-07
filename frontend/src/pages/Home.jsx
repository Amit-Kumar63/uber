import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { useRef } from 'react'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from '../components/ConfirmRide'

const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false)
  const [confirmRideOpen, setConfirmRideOpen] = useState(false)

  const panelRef = useRef(null)
  const vehiclePanelRef = useRef(null)
  const confirmRideRef = useRef(null)

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: 24,
      })
    }
    else{
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0
      })
    }
  }, [panelOpen])

  useGSAP(()=> {
    if (vehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0%)'
      })
    }else{
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehiclePanelOpen])

  useGSAP(()=> {
    if (confirmRideOpen) {
      gsap.to(confirmRideRef.current, {
        transform: 'translateY(0%)'
      })
    }else{
      gsap.to(confirmRideRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRideOpen])

  const submitHandler = (e) => {
    e.preventDefault();
  }
  return (
    <div className='h-screen'>
        <img className='w-16 absolute top-5 left-5' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'/>
      <div>
      <img className='w-screen h-screen object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='flex flex-col justify-end h-screen top-0 w-full absolute'>
        <div className='h-[30%] bg-white p-5 relative'>
          <h5 onClick={() => setPanelOpen(false)} className={`absolute top-6 right-6 text-2xl ${panelOpen ? 'opacity-100' : 'opacity-0'}`}><i className="ri-arrow-down-wide-line"></i></h5>
        <h4 className='text-3xl font-semibold'>Find a trip</h4>
        <div className='absolute top-[40%] left-10 w-1 h-10 bg-gray-700'></div>
        <form onSubmit={submitHandler}>
          <input 
          value={pickup}
          onClick={() => setPanelOpen(true)}
          onChange={(e) => setPickup(e.target.value)}
          className='mt-4 bg-[#eee] w-full px-12 py-2 text-base'
          placeholder='Add a pick-up location'
          type="text" 
          />
          <input 
          value={destination}
          onClick={() => setPanelOpen(true)}
          onChange={(e) => setDestination(e.target.value)}
          className='mt-3 bg-[#eee] w-full px-12 py-2 text-base'
          placeholder='Enter your destination'
          type="text" 
          />
        </form>
        </div>
        <div ref={panelRef} className='w-full h-[0%] bg-white'>
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanelOpen={setVehiclePanelOpen}/>
        </div>
        <div ref={vehiclePanelRef} className='bg-white w-full fixed z-10 bottom-0 px-3 py-10 pt-14 space-y-2 translate-y-full'>
          <VehiclePanel setVehiclePanelOpen={setVehiclePanelOpen} setConfirmRideOpen={setConfirmRideOpen}/>          
        </div>
        <div ref={confirmRideRef} className='bg-white w-full fixed z-10 bottom-0 px-3 py-10 pt-14 space-y-2 translate-y-full'>
          <ConfirmRide setConfirmRideOpen={setConfirmRideOpen} />
        </div>
      </div>
    </div>
  )
}

export default Home