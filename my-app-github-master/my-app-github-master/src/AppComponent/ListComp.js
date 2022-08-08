import React, { useEffect ,useState } from 'react'
import axios from 'axios'


function ListComp() {
  const [namesArray, setNamesArray] = useState([]);
  const [user, setUser] = useState([]);
 
  useEffect ( () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUser(response.data)
        // console.log(response);
        let namesTempArray = [];
        for (let i = 0; i < response.length; i++) {
          namesTempArray.push(response[i].name);
         
        }
        setNamesArray(namesTempArray);
         console.log(namesArray);
       
         
      })
  },[])

  return (
    <>
      
    </>
  )
}

export default ListComp;
