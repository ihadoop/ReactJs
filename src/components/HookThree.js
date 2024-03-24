import React,{useState} from "react";
function HookThree(){

    const [username,setUserName]  =useState({firstName:'',lastName:''})

    return <div>
           <label>first Name:</label>
        <input type='text' value={username.firstName} onChange={(e)=>setUserName({...username,firstName: e.target.value})}/>

        <label>last Name:</label><input type='text' value={username.lastName} onChange={(e)=>setUserName({...username,lastName: e.target.value})}/>


        FirstName:{username.firstName}  LastName:{username.lastName}
        <div>{JSON.stringify(username)}</div>
    </div>

}
export default HookThree