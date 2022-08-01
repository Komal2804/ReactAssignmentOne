import React ,{useState} from 'react'
import axios from 'axios'

function UserDetailsComp() {

    const [user,setUser]= useState([])
    const fetchUsers=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
           setUser(response.data)
          // console.log(response);
        })
        }
    
  return (
    <>
    <div>
    <button className='btn btn-primary' onClick={fetchUsers}>FetchUsers</button>
    </div>
   <div className='container'>
    <div className='row'>
       {
        user.map((value)=>{
            return(
                /*<div className='col-4'>
                <div className="card" style={{width: "18rem"}}>
          <img src="https://avatars.dicebear.com/v2/avataaars/{{username}}.svg?options[mood][]=happy" className="card-img-top" alt="..."/>
           <br/><div className="card-body">
            <h1 className="card-title">{value.name}</h1>
            <p className="card-text">Email : {value.email}</p>
            <p className="card-text">Phone :{value.phone}</p>
            <p className="card-text">Website : {value.website}</p>
          </div>
        </div>
                </div>*/
                <div className="card mb-3" style={{width: "18rem"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://avatars.dicebear.com/v2/avataaars/{{username}}.svg?options[mood][]=happy" className="card-img-top" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <h1 className="card-title">{value.name}</h1>
            <p className="card-text">Email : {value.email}</p>
            <p className="card-text">Phone :{value.phone}</p>
            <p className="card-text">Company : {value.company.name}</p>
            <p className="card-text">Website : {value.website}</p>
            <p className="card-text">Address : {value.address.street},{value.address.suite},{value.address.city},{value.address.zipcode}</p>
           
        
      </div>
    </div>
  </div>
</div>
            )
        })
       }
    </div>
   </div>

    </>
  )
  }

export default UserDetailsComp