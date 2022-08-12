import React from 'react';
import "./UserDetailsComp.css";

import { useLocation } from "react-router-dom";
function EditComp(props) {

  const location = useLocation();
  //console.log(location.state.user);

  const saveData = () => {

  }

  return (
    <div className='form'>
      <form onSubmit={this.EditComp}>
        <label>
          Name:
          <input type="text" value={location.state.user.name} /></label><br />
        <label>
          Email: <input type="text" value={location.state.user.email} />
        </label><br />
        <label>
          Phone: <input type="text" value={location.state.user.phone} />
        </label><br />
        <label>
          Comapany: <input type="text" value={location.state.user.company.name} />
        </label><br />
        <label>
          Website: <input type="text" value={location.state.user.website} />
        </label><br />
        <label>
          Address: <input type="text" value={location.state.user.address.street}{...location.state.user.address.suite}
            {...location.state.user.address.city}{...location.state.user.address.zipcode} />
        </label><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default EditComp;