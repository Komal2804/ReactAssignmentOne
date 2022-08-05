import React, { useEffect ,useState } from 'react'
import axios from 'axios'
 import "./UserDetailsComp.css"


function UserDetailsComp() {

  const [namesArray, setNamesArray] = useState([]);
  const [user, setUser] = useState([]);
  useEffect ( () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUser(response.data);
        let namesTempArray = [];
        for (let i = 0; i < user.length; i++) {
          namesTempArray.push(user[i].name);
         
        }
        setNamesArray(namesTempArray);
         console.log(namesArray);
      })
  },[])

  return (
    <>
      {
        <div >
        {user.map((value , key)=>{
          // namesArray.push(value.name);
          return(
            <div className='tbldata'>
            <table>
            <tr key={key} className="userdata">
              <tr><th>Name : {value.name}</th></tr>  

             <tr> <td>Email:  {value.email}</td></tr>

             <tr> <td>Phone: {value.phone}</td></tr>

             <tr> <td>Company: {value.company.name}</td></tr>

             <tr> <td>Website: {value.website}</td></tr>
              
             <tr> <td>Address:{value.address.street},{value.address.suite},{value.address.city},{value.address.zipcode}</td></tr>
            </tr>
            </table>
            </div>
          )
        })}
      
      </div>
      /* <div className='container'>
        <div className='row'>
          {
            user.map((value) => {
              return (

                <div className="card mb-3" style={{ width: "18rem" }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src="https://avatars.dicebear.com/v2/avataaars/{{username}}.svg?options[mood][]=happy" className="card-img-top" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h1 >{value.name}</h1>
                        <p >Email : {value.email}</p>
                        <p >Phone :{value.phone}</p>
                        <p >Company : {value.company.name}</p>
                        <p >Website : {value.website}</p>
                        <p >Address : {value.address.street},{value.address.suite},{value.address.city},{value.address.zipcode}</p>

                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div> */}
      

    </>
  )
}

export default UserDetailsComp