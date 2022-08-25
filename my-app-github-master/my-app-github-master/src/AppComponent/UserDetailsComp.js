import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./UserDetailsComp.css"
import PerticularUserComp from './PerticularUserComp';

function UserDetailsComp(props) {
  const [user, setUser] = useState([]);
 // props.callback("Ojassoft");
// console.log(props.callback);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUser(response.data);


      })

  }, [])
  

  return (
    <>
      {
        <div >
          {user.map((value, key) => {
            // namesArray.push(value.name);
            let url = "https://avatars.dicebear.com/v2/avataaars/{{" + value.name + "}}.svg?options[mood][]="
            return (
              <PerticularUserComp name={value.name}
                email={value.email}
                phone={value.phone}
                company={value.company}
                website={value.website}
                address={value.address}
                url={url}
                key={value.id}
                callback={props.callback}
              />
            )
          })}

        </div>
      }

    </>
  )
}

export default UserDetailsComp