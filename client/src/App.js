import react from "react";
import { render } from "react-dom";
import {BrowserRouter as Router, Route, Switch} from "react-route-dom";
import NavBar from "./components/Navbar/NavBar";


function App() {
  render (){
     return (
       <Router>
         <div>
          <NavBar/>
          <Switch>
<Route exact path ="/" components={Search} />
<Route exact path ="/search" components={Search} />
<Route exact path ="/saved" components={Saved} />
          </Switch>
         </div>


       </Router>
   
     
  
  );
  }
 
}

export default App;
