import React from "react";


function Person({person},{k}) {
       return <h1>k:{k} name: {person.name} age:{person.age}</h1>
}
export default Person