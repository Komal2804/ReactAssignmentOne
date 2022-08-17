import React from 'react';

import "./EditComp.css";

import { useLocation } from "react-router-dom";
function EditComp(props) {

  const location = useLocation();
  //console.log(location.state.user);
  const onSave = () => {

  }
  const onUpdate=(event)=>{
    debugger;
  }
  return (
    <div className='container'>
      <table className='tbledit'>
        <tr>
          <td><b> Name :</b><input type="text" onChange={(e) => onUpdate(e)} defaultValue={location.state.user.name} /></td>
        </tr>
        <tr>
          <td> <b>Email: </b><input type="text" defaultValue={location.state.user.email} /></td>
        </tr>
        <tr>
          <td><b>Phone:</b> <input type="text" defaultValue={location.state.user.phone} /></td>
        </tr>
        <tr>
          <td><b>Comapany:</b><input type="text" defaultValue={location.state.user.company.name} /></td>
        </tr>
        <tr>
          <td><b> Website:</b><input type="text" defaultValue={location.state.user.website} /></td>
        </tr>
        <tr>
          <td><b>Address:</b> <input type="text" value={location.state.user.address.street}{...location.state.user.address.suite}
            {...location.state.user.address.city}{...location.state.user.address.zipcode} /></td>
        </tr>
        <tr>
          <td><button onClick={onSave}>Save</button></td>
        </tr>
      </table>
    </div>
  )
}

export default EditComp;