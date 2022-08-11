import React from 'react';

import {useLocation} from "react-router-dom";
function EditComp(props) {
  //const [user, setUser] = useState([]);
const location = useLocation();
console.log(location.state.user);

const saveData=()=>{
  
}
 
  return (
    <div className='container'>
     <h1>Name:{props.name}</h1>
     <p> Email:{props.email}</p>
     <p>Phone:{props.phone}</p>
     <p>comapany:{props.company}</p>
     <p>Website:{props.website}</p>
     <p>Address:{props.address}</p>
     <button onClick={() => saveData()}>Save</button>
    </div>
  )  
}

export default EditComp;