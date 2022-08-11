import "./App.css";
import { Link } from "react-router-dom";


import UserDetailsComp from "./AppComponent/UserDetailsComp";
function App() {
  
  return (
    <div className="App">
    <UserDetailsComp/>
    <nav>
      <Link to="/EditComp">Edit Details</Link>
    </nav>
    
    </div>
  );
};

export default App;
