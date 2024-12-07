import React from 'react'

const LocationSearchPanel = ({...props}) => {
    const location = [
        '1953, Police Line Road, Shobha Purwa, Near Bright Future Public School Bahraich, UP 271801',
        '150B, Police Line Road, Near Bright Future Public School Bahraich, UP 271804',
        '023D, Police Line Road, Shobha Purwa, Near Bright Future Public School Bahraich, UP 271301',
        '1953, Police Line Road, Shobha Purwa, Near Bright Future Public School Bahraich, UP 271801',
    ]
  return (
    <div>
        {
            location.map((elem, index)=> {
                return (
                    <div 
                    onClick={() => {props.setVehiclePanelOpen(true)
                        props.setPanelOpen(false)}
                    }
                     key={index} className='cursor-pointer flex items-center gap-3 my-2 p-2 border-2 border-gray-50 active:border-black rounded-xl'>
            <h2 className='w-16 h-8 flex items-center justify-center bg-[#eee] rounded-full'><i className="ri-map-pin-fill"></i></h2>
            <h3 className='font-medium'>
                {elem}
            </h3>
        </div>
                )
            })
        }
    </div>
  )
}

export default LocationSearchPanel