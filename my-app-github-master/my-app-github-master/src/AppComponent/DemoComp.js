import React from 'react'

function DemoComp() {
    const [user,setUser]= useState([])
    const fetchUsers=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
           setUser(response.data)
          // console.log(response);
        })
        }
  return (
    <div>DemoComp</div>
    
  )
}

export default DemoComp