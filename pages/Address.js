import React from 'react'
import FormWrapper from './FormWrapper'

const Address = ({street, city, state, zip, updateField}) => {
  return (
    <FormWrapper title="Address">
    <label>Street</label>
    <input autoFocus required type="text" value={street} onChange={e => updateField({street:e.target.value})}/>
    <label>City</label>
    <input autoFocus required type="text" value={city} onChange={e => updateField({city:e.target.value})}/>
     <label>State</label>
    <input autoFocus required type="text" value={state} onChange={e => updateField({state:e.target.value})}/>
     <label>zip</label>
    <input autoFocus required type="text" value={zip} onChange={e => updateField({zip:e.target.value})}/>
     
    </FormWrapper>
  )
}

export default Address
