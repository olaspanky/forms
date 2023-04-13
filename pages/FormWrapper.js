import React from 'react'

const FormWrapper = ({title, children}) => {
  return (
    <div>
      <h2 className='font-lora text-lg font-bold text-[20px] lg:text-[50px] p-10' style={{textAlign: "center", margin:0, marginBottom:"2rem"}}>{title}</h2>
      <div className='font-lora' style={{display:"grid", gap:"1rem .5rem", justifyContent:"flex-start", gridTemplateColumns:"auto minmax(auto,400px)"}}>{children}</div>
    </div>
  )
}

export default FormWrapper
