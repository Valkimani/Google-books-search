

import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Save from "./pages/Save/Save";
import Search from "./pages/Search/Search";

function App() {
     return (
       <div>
          <Router>
          <NavBar/>
          <Switch>
            <Route exact path="/" components={""}/>
            <Route exact path="/save" components={Save}/>
            <Route exact path="/search" components={Search}/>
          </Switch>
       </Router>
  </div>
); 
}

export default App;
