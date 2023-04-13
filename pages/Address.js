import React from 'react'
import FormWrapper from './FormWrapper'

const Address = ({street, city, state, zip, updateField}) => {
  return (
    <div className='text-lora p-8 bg-gradient-to-r from-rose-100 to-teal-100'>

    <FormWrapper title="Address">
    <label>Street</label>
    <input  className='rounded-md border border-none outline-none'autoFocus required type="text" value={street} onChange={e => updateField({street:e.target.value})}/>
    <label>City</label>
    <input  className='rounded-md border border-none outline-none'autoFocus required type="text" value={city} onChange={e => updateField({city:e.target.value})}/>
     <label>State</label>
    <input className='rounded-md border border-none outline-none' autoFocus required type="text" value={state} onChange={e => updateField({state:e.target.value})}/>
     <label>zip</label>
    <input className='rounded-md border border-none outline-none' autoFocus required type="text" value={zip} onChange={e => updateField({zip:e.target.value})}/>
     
    </FormWrapper>
    </div>
  )
}

export default Address
