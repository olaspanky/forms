import React from 'react'
import FormWrapper from './FormWrapper'

const UserForm = ({email, password, age, updateField}) => {
  return (
    <FormWrapper title="User Details">
      <label>email</label>
      <input autoFocus required type="text" value={email} onChange={e => updateField({email:e.target.value})}/>
      <label>Password</label>
      <input autoFocus required type="text" value={password} onChange={e => updateField({password:e.target.value})}/>
       <label>Age</label>
       <input required min={1} type='number' value={age} onChange={e => updateField({age:e.target.value})}/>
    </FormWrapper>
  )
}

export default UserForm
