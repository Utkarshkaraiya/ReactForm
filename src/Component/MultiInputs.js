import React, { useState } from 'react'
import "./Multipleinputs.css"
export const MultiInputs = () => {

const [userRegistration, setuserRegistration] = useState({
name:"",
phone:"",
email:"",
hobbies:""



})
const [record, setrecord] = useState([])
const handelInput=(event)=>{
    const name=event.target.name;
    const value=event.target.value
    setuserRegistration({...userRegistration,[name]:value})
}
const handelSubmit=(e)=>{
e.preventDefault();
const newRecord={...userRegistration,id : new Date().getTime().toString()}


setrecord([...record,newRecord])
setuserRegistration({name:"",phone:"",email:"",hobbies:""})

}



    return (
        <form className="form1" onSubmit={handelSubmit}>
            <div>
           <label htmlFor="name"  className="heading">Name</label> 
           <input type="text" name="name" id="name"  
           onChange={handelInput}
           value={userRegistration.name}
           />
        </div>
        <div>
           <label htmlFor="phone" className="heading">Phone number</label> 
           <input type="text" name="phone" id="phone  "
           onChange={handelInput}
           value={userRegistration.phone}/>
        </div>
        <div>
        <label for="email" className="heading">Enter your email:</label>
           <input type="email" id="email" name="email"  
           onChange={handelInput}
           value={userRegistration.email}/>
        </div>
        <div>
           <label htmlFor="hobbies" className="heading">Hobbies</label> 
           <textarea type="text"
           name="hobbies"  id="hobbies"
           onChange={handelInput}
           value={userRegistration.hobbies}>Some text...</textarea>
                   </div>
        <button type="submit">Save</button>
        
        <div>
            {
                record.map((curElem)=>{
                        return(
                            <div className="heading" >
                                <p>{curElem.name}</p>
                                <p>{curElem.phone}</p>
                                <p>{curElem.email}</p>
                                <p>{curElem.hobbies}</p>
                            </div>
                        )
                })
            }
        </div>
        
        </form>
    )
}
