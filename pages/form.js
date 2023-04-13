import { useMultistepForms } from "@/useMultistepForms"
import UserForm from "./UserForm"
import Address from "./Address"
import Accountform from "./Accountform"
import { useState } from "react"
import Education from "./Education"
import Secondaryedu from "./Secondaryedu"
import Diploma from "./Diploma"



const INITIAL_DATA = {
firstname:"",
lastname:"",
maidenname:"",
Title:"",
Status:"",
Address:"",
Phone:"",
dob:"",
Placeofbirth:"",
nationality:"",
age:"",
nin:"",
skype:"",
drivinglicense:"",
securityquestion:"",
age:"",
street:"",
state:"",
city:"",
zip:"",
email:"",
password:"",
primaryeducation:"",
primaryeducationyear:"",
prevocationalyear:"",
primaryeducationpassed:"",
primaryeducationfailed:"",
secondareducationyear:"",
prevocationalpassed:"",
prevocationalfailed:"",
schoolcert:"",
highschoolcert:"",
formone:"",
formtwo:"",
formthree:"",
formfour:"",
subject1:"",
subject2:"",
subject3:"",
subject4:"",
subject5:"",
subject6:"",
subject7:"",
subject8:"",
subject9:"",
subject10:"",
grade1:"",
grade2:"",
grade3:"",
grade4:"",
grade5:"",
grade6:"",
grade7:"",
grade8:"",
grade9:"",
grade10:"",
secondarycertificate:"",
secondaryexambody:"",
secondaryeducountry:"",
secondaryeducationyear:"",
secondaryeducationpassed:"",
secondaryeducationfailed:"",
technicaluniversity:"",
technicalqualification:"",
technicalduration:"",
technicallevel:"",
diploma:"",
advanceddiploma:"",
graduatediploma:"",
pgdiploma:"",
other:"",
diplomauni:"",
diplomaqualification:"",
diplomaduration:"",
diplomalevel:"",
tetiaryuni:"",
tetiaryqualification:"",
tetiaryduration:"",
tetiarylevel:""







}

function form (){
    const [data, setData] = useState(INITIAL_DATA)

    function updateField(fields){
        setData(prev => {
            return {...prev, ...fields}
        })

    }
    const {
        steps, currentStepIndex, step, isFirstStep, back, next, isLastStep
    }  = useMultistepForms([
        <Accountform {...data} updateField={updateField}/>,
        <UserForm {...data} updateField={updateField}/>, 
        <Address {...data} updateField={updateField}/>, 
        <Education {...data} updateField={updateField}/>, 
        <Secondaryedu {...data} updateField={updateField}/>, 
        <Diploma {...data} updateField={updateField}/>, 
    ])

    function onSubmit(e){
        e.preventDefault()
       if (!isLastStep) return next()
       alert("Succesful account creation")
    }
    return <div className="text-black" style={{
        position: "relative",
        backgroundColor: " white",
        border: "1px solid black",
        padding: "1rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
    }}>

    <form onSubmit={onSubmit}>
            <div style={{position: "absolute", top: ".5rem", right: ".5rem"}}>
            {currentStepIndex +1}/{steps.length}
            </div>
            {step}
            <div style={{marginTop:"1rem", display: "flex", gap:".5rem", justifyContent:"flex-end", }}>
            {!isFirstStep && <button onClick={back} type="button">back</button>}
            <button type="submit" >
            {isLastStep ? "finish" : "Next"}</button>
            </div>
    </form>
    
    
    </div>
} export default form