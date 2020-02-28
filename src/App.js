import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  useParams
} from 'react-router-dom'
import LandingPageContainer from './LandingPageContainer'
import IntakeContainer from './IntakeContainer'
import ProjectContainer from './ProjectContainer'
import RegisterContainer from './RegisterContainer'

class App extends Component {// is it possible to cobine react-router with conditional rendering.
  constructor(props){
    super(props)
    this.state = {
      loggedIn: true
    }
  }
  register = async (registerInfo) => {
    console.log("register() in App.js called with the following info", registerInfo);
    const url = process.env.REACT_APP_API_URL + '/api/v1/user/register'

    try {
      const registerResponse = await fetch(url, {
        // INCLUDE THIS credentials: 'include' IN EVERY FETCH CALL
        // this will send your cookie, 
        // this was being done automatically for you in unit 2
        // if you leave it out you will not be authenticated
        credentials: 'include', // sends the cookie
        method: 'POST',
        body: JSON.stringify(registerInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const registerJson = await registerResponse.json()

    } catch (err) {
      if(err) {
        console.error(err)
      }
    }
  }
  render (){
    console.log("this is process.env", process.env);
    const navButton = this.state.loggedIn ?
        <li>             
          Logout
        </li>
        :
        <li>             
          Login/Register
        </li>
    return (
      <Router> 
            <h1>headWay</h1>
            <nav>
              <ul>
                <li>             
                  <Link to="/" > 
                    LandingPage
                  </Link>
                </li>
                <li>             
                  <Link to="/auth-register" > 
                    Register
                  </Link>
                </li>
                 <li>             
                  <Link to="/intake" > 
                    Intake Sheet
                  </Link>
                </li>
                <li>             
                  <Link to="/project" > 
                    Project Sheet
                  </Link>
                </li>
                {navButton}
              </ul>
            </nav>

            <Switch>
              <Route path="/auth-register">
                <RegisterContainer register={this.register}/>
              </Route>
              <Route path="/intake">
                <IntakeContainer />
              </Route>
              <Route path="/project">
                <ProjectContainer />
              </Route>
              <Route path="/">
                <LandingPageContainer />
              </Route>
            </Switch>
        </Router>
    );
  }
} 

// function Dummy() {
//   return(<h1>Dummy</h1>)
// }


export default App;
