import React from 'react'
import FormWrapper from './FormWrapper'


const Secondaryedu = ({updateField
,secondaryexambody,secondarycertificate,secondaryeducountry,
secondaryeducationfailed,secondaryeducationpassed,secondaryeducationyear,
technicaluniversity,technicalqualification,technicalduration,technicallevel}) => {

  return (
    <FormWrapper title="OTHER SECONDARY EDUCATION">

    <label>Certificate</label>
    <input autoFocus required type="text" value={secondarycertificate}
    onChange={e => updateField({secondarycertificate:e.target.value})}/>
    <label>Examining Body</label>
    <input autoFocus required type="text" value={secondaryexambody}
    onChange={e => updateField({secondaryexambody:e.target.value})}/>
    <label>Country</label>
    <input autoFocus required type="text" value={secondaryeducountry}
    onChange={e => updateField({secondaryeducountry:e.target.value})}/>
    <label>Year</label>
    <input autoFocus required type="date" value={secondaryeducationyear}
    onChange={e => updateField({secondaryeducationyear:e.target.value})}/>
    <div className='flex'>
    <div>
    <label>Passed</label>
    <input type='checkbox' value={secondaryeducationpassed} 
    onChange={e => updateField({secondaryeducationpassed:e.target.value})}/>
    
    </div>
    <label>Failed</label>
    <input type='checkbox' value={secondaryeducationfailed} 
    onChange={e => updateField({secondaryeducationfailed:e.target.value})}/>

    </div>

    <br/>
    <h1>TECHNICAL AND VOCATIONAL EDUCATION</h1>
    <label>University/ Awarding Body</label>
    <input autoFocus required type="text" value={technicaluniversity}
    onChange={e => updateField({technicaluniversity:e.target.value})}/>
    <label>Qualification Obtained</label>
    <input autoFocus required type="text" value={technicalqualification}
    onChange={e => updateField({technicalqualification:e.target.value})}/>
    <label>Duration</label>
    <input autoFocus required type="date" value={technicalduration}
    onChange={e => updateField({technicalduration:e.target.value})}/>
    <label>CLASS/LEVEL</label>
    <input autoFocus required type="date" value={technicallevel}
    onChange={e => updateField({technicallevel:e.target.value})}/>
    
    <div className='flex'>
    <div>
    <labe>Passed</labe>
    <input type='checkbox' ></input>
    </div>
    <labe>Failed</labe>
    <input type='checkbox' ></input>
    </div>


   
    </FormWrapper>
  )
}

export default Secondaryedu
