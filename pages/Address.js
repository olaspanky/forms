import React from 'react'
import FormWrapper from './FormWrapper'

const Address = ({street, city, state, zip, updateField}) => {
  return (
    <div className='text-lora lg:p-8 bg-gradient-to-r from-rose-100 to-teal-100 object-contain overflow-hidden'>
  


         
         <div className="w-full mb-2">
         <h1>STREET:</h1>
            <div className="flex justify-center">
               <input type='text' placeholder="Street"
                  className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
                  autoFocus required value={street}
                  onChange={e => updateField({street:e.target.value})} />
            </div>
         </div>


         
         <div className="w-full mb-2">
         <h1>CITY:</h1>

            <div className="flex justify-center">
               <input type='text' placeholder="City"
                  className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
                  autoFocus required value={city}
                  onChange={e => updateField({city:e.target.value})} />
            </div>
         </div>


         
         <div className="w-full mb-2">
         <h1>STATE:</h1>

            <div className="flex justify-center">
               <input type='text' placeholder="State"
                  className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
                  autoFocus required value={state}
                  onChange={e => updateField({state:e.target.value})} />
            </div>
         </div>


         
         <div className="w-full mb-2">
         <h1>ZIP:</h1>

            <div className="flex justify-center">
               <input type='text' placeholder="ZIP"
                  className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
                  autoFocus required value={zip}
                  onChange={e => updateField({zip:e.target.value})} />
            </div>
         </div>


         
            

         
        

         
        

      </div>
      

  )
}

export default Address
