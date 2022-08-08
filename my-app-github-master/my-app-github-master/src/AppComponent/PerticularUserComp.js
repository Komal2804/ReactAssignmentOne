import React from 'react'
import "./UserDetailsComp.css"
function PerticularUserComp(props) {
    console.log(props.url)
    return (
        <div className='container'>
            <table className="userdata">
                <tr>
                    
                        <td className='imgurl'>
                            <img src= {props.url}></img>
                        </td>
                   <td>
                    <tr><th> {props.name}</th></tr>

                    <tr> <td>Email: {props.email}</td></tr>
                    
                    <tr> <td>Phone: {props.phone}</td></tr>

                    <tr> <td>Company: {props.company.name}</td></tr>

                    <tr> <td>Website: {props.website}</td></tr>

                    <tr> <td>Address: {props.address.street},{props.address.suite},{props.address.city},{props.address.zipcode}</td></tr>
                    </td> </tr>
            </table>
        </div>
    )
}

export default PerticularUserComp