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
import NewProjectContainer from './NewProjectContainer'
import GoalContainer from './GoalContainer'
import RegisterContainer from './RegisterContainer'
import LoginContainer from './LoginContainer'

class App extends Component {// is it possible to cobine react-router with conditional rendering.
  constructor(props){
    super(props)
    this.state = {
      loggedIn: false,
      projects:[]
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

  login = async (log) => {
  console.log("this is the login param", log);

  const url = process.env.REACT_APP_API_URL + '/api/v1/user/login'

  try {
    const loginResponse = await fetch(url, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(log), 
      headers: {
        'Content-Type': 'application/json'
      }
    })
    // const loginJson = await loginResponse.json()//contains user's id and info

    if (loginResponse.status === 200) { 
      this.setState({
          loggedIn: true
        })
    }

  } catch (err){
      if (err) {
        console.error(err);
    }
  }
}

logout = async () => {
  console.log("hitting the logout function");
  const url = process.env.REACT_APP_API_URL + '/api/v1/user/logout'
  try {
      const logoutResponse = await fetch(url, {
      method:'GET',
      credentials:'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const logoutJson = await logoutResponse.json()
    console.log("logoutJson >>>", logoutJson);
  
  } catch (err){
      if (err) {
        console.error(err);
    }
  }
} 

createProject = async (newProj) => {
  try{
    const createProjectResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/project/', {
        method: 'POST',
        credentials:'include',
        body: JSON.stringify(newProj), // this is how you convert an object to JSON
        headers: {
          'Content-Type': 'application/json'
        }
    })
    const createProjectJson = await createProjectResponse.json()
    if(createProjectResponse.status === 201) {

      // const newArr = this.state.projects
      // newArr.push(createProjectJson.data)
      this.setState({
          // projects: newArr
          projects: [...this.state.projects, createProjectJson.data]
        })
    }
  }catch(err){console.error(err);}
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
      <div className="Nav">
      <Router> 
            <h1>headWay</h1>
            <h5>track your batting average</h5>
            <nav>
              <ul>
                <li>             
                  <Link to="/" > 
                    LandingPage
                  </Link>
                </li>
                <li> 
                  <Link  to="/auth-login" onClick={this.logout}>            
                    Logout
                  </Link>
                </li>
                <li>             
                  <Link to="/auth-register" > 
                    Register
                  </Link>
                </li>
                <li>             
                  <Link to="/auth-login" > 
                    Login
                  </Link>
                </li>
                 <li>             
                  <Link to="/intake" > 
                    Project Sheet
                  </Link>
                </li>
                <li>             
                  <Link to="/goal" > 
                    Goal Sheet
                  </Link>
                </li>
                
              </ul>
            </nav>
           {navButton}

            <Switch>
              <Route path="/auth-register">
                <RegisterContainer register={this.register}/>
              </Route>
              <Route path="/auth-login">
                <LoginContainer login={this.login}/>
              </Route>
              <Route path="/intake">
                <NewProjectContainer createProject={this.createProject}/>
              </Route>
              <Route path="/goal">
                <GoalContainer />
              </Route>
              <Route path="/">
                <LandingPageContainer />
              </Route>
            </Switch>
        </Router>
        </div>
    );
  }
} 

// function Dummy() {
//   return(<h1>Dummy</h1>)
// }


export default App;
