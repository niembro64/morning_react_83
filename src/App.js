import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./views/Home";
import Second from "./views/Second";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Eric Test</h1>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/second">
          <Second />
        </Route>
      </Switch>
 
    </div>
  );
}

export default App;
