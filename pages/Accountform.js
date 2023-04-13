import React from 'react'
import FormWrapper from './FormWrapper'


const Accountform = ({firstname, lastname, maidenname, title, status, address, phone, email, dob, pob, nationality, nin, skype, drivinglicense, securityquestion, age, updateField}) => {

  return (
    <div className='text-lora p-8 bg-gradient-to-r from-rose-100 to-teal-100'>
    <FormWrapper title="Personal Details">
    <label>Name</label>
    <input  className='rounded-md border border-none outline-none' autoFocus required type="text" value={firstname}
    onChange={e => updateField({firstname:e.target.value})}/>
    <label>Surname</label>
    <input className='rounded-md border border-none outline-none ' autoFocus required type="text" value={lastname}
    onChange={e => updateField({lastname:e.target.value})}/>
    <label>Maiden Name</label>
    <input className='rounded-md border border-none outline-none ' autoFocus required type="text" value={maidenname}
    onChange={e => updateField({maidenname:e.target.value})}/>
    <label>Title</label>
    <input className='rounded-md border border-none outline-none ' autoFocus required type="text" value={title}
    onChange={e => updateField({title:e.target.value})}/>
    <label>Status</label>
    <input className='rounded-md border border-none outline-none ' autoFocus required type="text" value={status}
    onChange={e => updateField({status:e.target.value})}/>
    <label>Address</label>
    <input className='rounded-md border border-none outline-none ' autoFocus required type="text" value={address}
    onChange={e => updateField({address:e.target.value})}/>
    <label>Phone</label>
    <input className='rounded-md border border-none outline-none ' autoFocus required type="text" value={phone}
    onChange={e => updateField({phone:e.target.value})}/>
    <label>Email</label>
    <input className='rounded-md border border-none outline-none' autoFocus required type="text" value={email}
    onChange={e => updateField({email:e.target.value})}/>
    <label>Date of Birth</label>
    <input className='rounded-md border border-none outline-none' autoFocus required type="text" value={dob}
    onChange={e => updateField({dob:e.target.value})}/>
    <label>Place of Birth</label>
    <input className='rounded-md border border-none outline-none' autoFocus required type="text" value={pob}
    onChange={e => updateField({pob:e.target.value})}/>
    <label>Nationality</label>
    <input className='rounded-md border border-none outline-none' autoFocus required type="text" value={nationality}
    onChange={e => updateField({nationality:e.target.value})}/>
     <label>Age</label>
     <input className='rounded-md border border-none outline-none' required min={1} type='number' value={age}
     onChange={e => updateField({age:e.target.value})}/> 
     <label>National id Number</label>
     <input className='rounded-md border border-none outline-none' autoFocus required type="text" value={nin}
     onChange={e => updateField({nin:e.target.value})}/>
     <label>Skype Id</label>
     <input className='rounded-md border border-none outline-none' autoFocus required type="text" value={skype}
     onChange={e => updateField({skype:e.target.value})}/>
     <label>Driving liscence</label>
     <input className='rounded-md border border-none outline-none' autoFocus required type="text" value={drivinglicense}
     onChange={e => updateField({drivinglicense:e.target.value})}/>
     <label>Security Question</label>
     <input className='rounded-md border border-none outline-none' autoFocus required type="text" value={securityquestion}
     onChange={e => updateField({securityquestion:e.target.value})}/>
     
    </FormWrapper>
    </div>
  )
}

export default Accountform
