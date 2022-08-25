import "./App.css";
import { Link } from "react-router-dom";


import UserDetailsComp from "./AppComponent/UserDetailsComp";
function App() {
  const func=(data)=>{
    console.log(data);
  }
  return (
    <div className="App">
    <UserDetailsComp callback={func}/>
    <nav>
      <Link  to="/EditComp">Edit Details</Link>
    </nav>
    
    </div>
  );
};

export default App;
