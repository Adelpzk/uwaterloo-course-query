import logo from "./logo.svg";
import "./App.css";
import CourseList from "./components/CourseList.js";
import LocationList from "./components/LocationList.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

function App(props) {
  return (
    <>
      <h1> UWaterloo Courses Query</h1>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Courses</Link>
              </li>
              <li>
                <Link to="/doctors">Locations</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/courses">
              <CourseList />
            </Route>
            <Route path="/locations">
              <LocationList />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
