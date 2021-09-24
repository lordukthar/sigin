
import './App.css';
import AddUser from './components/pages/AddUser';
import Users from "./components/pages/Users";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import SignIn from './components/pages/SignIn';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import NavBar, {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from "./components/Navigation/NavBar";


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        
        <Switch>
          <Route path="/add_user">
            <AddUser />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <PublicRoute restricted={false} component={Home} path="/" exact />
          <PublicRoute
            restricted={true}
            component={SignIn}
            path="/signin"
            exact
          />
          <PrivateRoute component={Dashboard} path="/dashboard" exact />
        </Switch>
      </Router>

      {/* <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add_user">AddUser</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>

          <hr />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/add_user">
              <AddUser />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
          </Switch>
        </div>
      </Router> */}
    </div>
  );
}

export default App;
