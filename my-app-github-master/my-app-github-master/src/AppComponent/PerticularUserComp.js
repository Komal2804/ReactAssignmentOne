import React, { useState } from 'react';
import "./UserDetailsComp.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function PerticularUserComp(props) {
    const navigate = useNavigate();
    props.callback("Ojassoft");
    const onEdit = (event, props) => {
        // console.log(props);
        
        navigate('/EditComp', { state: { user: props } });
        
    }
    const onDelete=()=>{
        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      }) 
    }
    return (
        <div className='container'>
            <table className="userdata">
                <tr>

                    <td className='imgurl'>
                        <img src={props.url}></img>
                    </td>
                    <td>
                        <tr><th> {props.name}</th></tr>

                        <tr> <td><b>Email:</b> {props.email}</td></tr>

                        <tr> <td><b>Phone:</b> {props.phone}</td></tr>

                        <tr> <td><b>Company:</b> {props.company.name}</td></tr>

                        <tr> <td><b>Website:</b> {props.website}</td></tr>

                        <tr> <td><b>Address:</b> {props.address.street},{props.address.suite},{props.address.city},{props.address.zipcode}</td></tr>
                    </td>
                    <td><button onClick={(e) => onEdit(e, props)}>Edit</button>
                    </td> 
                    <td><button onclick={onDelete}>Delete</button> </td>
                    </tr>
            </table>
        </div>
    )
}

export default PerticularUserComp