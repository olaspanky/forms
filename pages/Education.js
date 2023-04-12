import React from 'react'
import FormWrapper from './FormWrapper'


const Education = ({ primaryeducationyear, prevocationalyear, primaryeducationpassed, primaryeducationfailed, prevocationalpassed, 
    prevocationalfailed,schoolcert, highschoolcert, formone, formtwo, formthree, formfour, secondareducationyear,
    subject1, subject2, subject3, subject4, subject5, subject6, subject7, subject8, subject9, subject10, grade1, grade2, grade3,
    grade4, grade5, grade6, grade7, grade8, grade9, grade10, updateField
}) => {
  return (
    <div className='w-full'>
    <FormWrapper title="Education">
    <div className='grid grid-cols-1 lg:grid-cols-12 gap-10'>
    <div className='col-span-6'>
    <div><h1>CPE</h1></div>
    <div className='flex gap-10'>
    <label> Year</label>
    <input autoFocus  type="date" value={prevocationalyear} onChange={e => updateField({prevocationalyear:e.target.value})}/>
    </div>
    <div className='grid grid-cols-2'>


    <div className='col-span-1 '>
    <label className=''>Passed</label>
    <input autoFocus type='checkbox' value={primaryeducationpassed} onChange={e => updateField({primaryeducationpassed:e.target.value})} ></input>
    </div>
    <div className='col-span-1'>
    <label>Failed</label>
    <input autoFocus type='checkbox' value={primaryeducationfailed} onChange={e => updateField({primaryeducationfailed:e.target.value})} ></input>
    </div>
    </div>
    </div>



    <div className='col-span-6'>
    <div><h1>Pre Vocational</h1></div>
    <label> Year</label>
    <input autoFocus  type="date" value={prevocationalyear} onChange={e => updateField({prevocationalyear:e.target.value})}/>
    <div className='grid grid-cols-2'>
    <div className='col-span-1'>
    <label>Passed</label>
    <input autoFocus type='checkbox' value={prevocationalpassed} onChange={e => updateField({prevocationalpassed:e.target.value})} ></input>
    </div>
    <div className='col-span-1'>
    <label>Failed</label>
    <input autoFocus type='checkbox' value={prevocationalfailed} onChange={e => updateField({prevocationalfailed:e.target.value})} ></input>
    </div>
    </div>
    </div>
    </div>
    </FormWrapper>

    <FormWrapper>
    <div className='text-center'><h1>Secondary Education</h1></div>   
    <div className='flex'>
    <label>form 1</label>
    <input type='checkbox' value={formone}  onChange={e => updateField({formone:e.target.value})} />
    <label>form 2</label>
      <input type='checkbox' value={formtwo}  onChange={e => updateField({formtwo:e.target.value})} />
      <label>form 3</label>
      <input type='checkbox' value={formthree}  onChange={e => updateField({formthree:e.target.value})} />
      <label>form 4</label>
      <input type='checkbox' value={formfour}  onChange={e => updateField({formfour:e.target.value})} />
    </div> 
    </FormWrapper>


   <FormWrapper>

    <div className='grid grid-cols-1 lg:grid-cols-2' title="Secondary Education">
    <div className='col-span-1'>
    <div><h1>SC/GSCE</h1></div>
    <div className='flex gap-10'>
    <label>Year</label>
    <input autoFocus  type="date" value={secondareducationyear} onChange={e => updateField({secondaryeducationyear:e.target.value})}/>
    </div>
    

    <div className='grid grid-cols-12 gap-10'>

    <div className='col-span-6'>
    <h1>Subjects</h1>
    <input type='text' value={subject1} onChange={e => updateField({subject1:e.target.value})}></input> <br></br>
    <input type='text' value={subject2} onChange={e => updateField({subject2:e.target.value})}></input> <br></br>
    <input type='text' value={subject3} onChange={e => updateField({subject3:e.target.value})}></input> <br></br>
    <input type='text' value={subject4} onChange={e => updateField({subject4:e.target.value})}></input> <br></br>
    <input type='text' value={subject5} onChange={e => updateField({subject5:e.target.value})}></input> <br></br>
    <input type='text' value={subject6} onChange={e => updateField({subject6:e.target.value})}></input> <br></br>
    <input type='text' value={subject7} onChange={e => updateField({subject7:e.target.value})}></input> <br></br>
    <input type='text' value={subject8} onChange={e => updateField({subject8:e.target.value})}></input> <br></br>
    <input type='text' value={subject9} onChange={e => updateField({subject9:e.target.value})}></input> <br></br>
    <input type='text' value={subject10} onChange={e => updateField({subject10:e.target.value})}></input> <br></br>
    </div>
    <div className='col-span-2'>
    <h1>Grade</h1>
    <input className='w-20'  type='text' value={grade1} onChange={e => updateField({grade1:e.target.value})}></input> <br></br>
    <input className='w-20' type='text' value={grade2} onChange={e => updateField({grade2:e.target.value})}></input> <br></br>
    <input className='w-20' type='text' value={grade3} onChange={e => updateField({grade3:e.target.value})}></input> <br></br>
    <input className='w-20' type='text' value={grade4} onChange={e => updateField({grade4:e.target.value})}></input> <br></br>
    <input className='w-20' type='text' value={grade5} onChange={e => updateField({grade5:e.target.value})}></input> <br></br>
    <input className='w-20' type='text' value={grade6} onChange={e => updateField({grade6:e.target.value})}></input><br></br>
    <input className='w-20' type='text' value={grade7} onChange={e => updateField({grade7:e.target.value})}></input><br></br>
    <input className='w-20' type='text' value={grade8} onChange={e => updateField({grade8:e.target.value})}></input><br></br>
    <input className='w-20' type='text' value={grade9} onChange={e => updateField({grade9:e.target.value})}></input><br></br>
    <input className='w-20' type='text' value={grade10} onChange={e => updateField({grade10:e.target.value})}></input><br></br>
    </div>
    </div>
    </div>


    <div className='col-span-1'>
    <div><h1>SC/GSCE</h1></div>
    <div className='flex gap-10'>
    <label>Year</label>
    <input autoFocus  type="date" value={secondareducationyear} onChange={e => updateField({secondaryeducationyear:e.target.value})}/>
    </div>
    

    <div className='grid grid-cols-12 gap-10'>

    <div className='col-span-6'>
    <h1>Subjects</h1>

    <input type='text' value={subject1} onChange={e => updateField({subject1:e.target.value})}></input> <br></br>
    <input type='text' value={subject2} onChange={e => updateField({subject2:e.target.value})}></input> <br></br>
    <input type='text' value={subject3} onChange={e => updateField({subject3:e.target.value})}></input> <br></br>
    <input type='text' value={subject4} onChange={e => updateField({subject4:e.target.value})}></input> <br></br>
    <input type='text' value={subject5} onChange={e => updateField({subject5:e.target.value})}></input> <br></br>
    <input type='text' value={subject6} onChange={e => updateField({subject6:e.target.value})}></input> <br></br>
    <input type='text' value={subject7} onChange={e => updateField({subject7:e.target.value})}></input> <br></br>
    <input type='text' value={subject8} onChange={e => updateField({subject8:e.target.value})}></input> <br></br>
    <input type='text' value={subject9} onChange={e => updateField({subject9:e.target.value})}></input> <br></br>
    <input type='text' value={subject10} onChange={e => updateField({subject10:e.target.value})}></input> <br></br>
    </div>
    <div className='col-span-1'>
    <h1>Grade</h1>

    <input className='w-20'  type='text' value={grade1} onChange={e => updateField({grade1:e.target.value})}></input> <br></br>
    <input className='w-20' type='text' value={grade2} onChange={e => updateField({grade2:e.target.value})}></input> <br></br>
    <input className='w-20' type='text' value={grade3} onChange={e => updateField({grade3:e.target.value})}></input> <br></br>
    <input className='w-20' type='text' value={grade4} onChange={e => updateField({grade4:e.target.value})}></input> <br></br>
    <input className='w-20' type='text' value={grade5} onChange={e => updateField({grade5:e.target.value})}></input> <br></br>
    <input className='w-20' type='text' value={grade6} onChange={e => updateField({grade6:e.target.value})}></input><br></br>
    <input className='w-20' type='text' value={grade7} onChange={e => updateField({grade7:e.target.value})}></input><br></br>
    <input className='w-20' type='text' value={grade8} onChange={e => updateField({grade8:e.target.value})}></input><br></br>
    <input className='w-20' type='text' value={grade9} onChange={e => updateField({grade9:e.target.value})}></input><br></br>
    <input className='w-20' type='text' value={grade10} onChange={e => updateField({grade10:e.target.value})}></input><br></br>
    </div>
    </div>
    </div>
    
  </div>
  </FormWrapper>    
  

    </div>
  )
}

export default Education
