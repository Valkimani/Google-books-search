
import { Component } from "react";
import {BrowserRouter as Router,Switch} from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";


function App() {
     return (
       <Router>
         <div>
          <NavBar/>
          <Switch>
          </Switch>
         </div>
       </Router>
  );

}

export default App;
