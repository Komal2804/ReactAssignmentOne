import React, { useState } from 'react';
import axios from 'axios';
import "./EditComp.css";

import { useLocation } from "react-router-dom";
import UserDetailsComp from './UserDetailsComp';
function EditComp(props) {
  const [users, setUsers] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const location = useLocation();
  //console.log(location.state.user);
  const onUpdate = (e) => {
    let item = { name, email, phone, company, website };
   // console.log("item", item);
    props.func(item);
  }

  return (
    <div className='container'>
      <table className='tbledit'>
        <tr>
          <td><b> Name :</b><input type="text" defaultValue={location.state.user.name} onChange={(e) => { setName(e.target.value) }} /></td>
        </tr>
        <tr>
          <td> <b>Email: </b><input type="text" defaultValue={location.state.user.email} onChange={(e) => { setEmail(e.target.value) }} /></td>
        </tr>
        <tr>
          <td><b>Phone:</b> <input type="text" defaultValue={location.state.user.phone} onChange={(e) => { setPhone(e.target.value) }} /></td>
        </tr>
        <tr>
          <td><b>Comapany:</b><input type="text" defaultValue={location.state.user.company.name} onChange={(e) => { setCompany(e.target.value) }} /></td>
        </tr>
        <tr>
          <td><b> Website:</b><input type="text" defaultValue={location.state.user.website} onChange={(e) => { setWebsite(e.target.value) }} /></td>
        </tr>
        <tr>
          <td><b>Address:</b> <input type="text" defaultValue={location.state.user.address.street}{...location.state.user.address.suite}
            {...location.state.user.address.city}{...location.state.user.address.zipcode} /></td>
        </tr>
        <tr>
          <td><button onClick={onUpdate}>Update</button></td>
        </tr>
      </table>
    </div>
  )
}

export default EditComp;