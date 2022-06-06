import React from 'react'
import './App.css';
import ShoppingListContainer from './containers/ShoppingListContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './fixed_components/header';
import NewItemContainer from './containers/NewItemContainer';
import { useEffect, useState } from 'react';
import LoginForm from './containers/LoginForm';
import NewUserForm from './components/Login/NewUserForm';
import NewUserAndFamilyForm from './components/Login/NewUserAndFamilyForm';

function App() {

  const [usersList, setUsersList] = useState([])
  const [user, setUser] = useState(null);
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)

  const fetchUsers = function(){
    fetch(`http://localhost:8080/users`)
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => setUsersList(data))
  }

  useEffect(() => {
    fetchUsers()
    setTimeout(() => {
        setLoading(false)
    }, 2000)
}, [])


  const login = details => {
    console.log(details);

    for(let i=0; i<usersList.length; i++){
      if (details.email == usersList[i].email && details.password == usersList[i].password){
        console.log("Logged in")
        setUser(usersList[i])
      }  
    }
    console.log("details do not match")
    setError("details do not match")
}

  const logout = () => {
    console.log("Logout")
    setUser(null);
  }

  return (

    <div className='app'>
      <Router>
      {user != null ?
      <div className='header-holder'>
        <Header logout={logout} user={user}/>
        <div className='content'>
          <Switch>
            <Route exact path={`/family-list`}>
              <ShoppingListContainer user={user}/>
            </Route>
            <Route exact path="/new-item">
              <NewItemContainer user={user}/>
            </Route>
            <Route exact path="/settings">
              {/* <SettingsContainer /> */}
            </Route>
          </Switch>
        </div>
      </div>
    : <Switch>
        <Route exact path={"/login"}>
         <LoginForm login={login} error={error} loading={loading} />
         </Route>
         <Route exact path={"/new-user"}>
           <NewUserForm />
         </Route>
         <Route exact path={"/new-user-and-family"}>
           <NewUserAndFamilyForm />
         </Route>
      </Switch>}
    </Router>
    </div>




    // <Router>
    //   <div className='header-holder'>
    //     <Header />
    //     <div className='content'>
    //       <Switch>
    //         <Route exact path={"/family-list"}>
    //           <ShoppingListContainer />
    //         </Route>
    //         <Route exact path="/new-item">
    //           <NewItemContainer />
    //         </Route>
    //         <Route exact path="/settings">
    //           {/* <SettingsContainer /> */}
    //         </Route>
    //       </Switch>
    //     </div>
    //   </div>
    // </Router>
  );
}

export default App;
