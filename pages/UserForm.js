import React from 'react'
import FormWrapper from './FormWrapper'

const UserForm = ({email, password, age, updateField}) => {
  return (
    <div className='text-lora p-8 bg-gradient-to-r from-rose-100 to-teal-100'>
    <FormWrapper title="User Details">
      <label>email</label>
      <input className='rounded-md border border-none outline-none' autoFocus required type="text" value={email} onChange={e => updateField({email:e.target.value})}/>
      <label>Password</label>
      <input className='rounded-md border border-none outline-none' autoFocus required type="text" value={password} onChange={e => updateField({password:e.target.value})}/>
       <label>Age</label>
       <input className='rounded-md border border-none outline-none' required min={1} type='number' value={age} onChange={e => updateField({age:e.target.value})}/>
    </FormWrapper>
    </div>
  )
}

export default UserForm
