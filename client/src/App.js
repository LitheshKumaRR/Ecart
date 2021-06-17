import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Modules/layout/Navbar'
import Laptop from './Modules/product/laptops';
import Mobiles from './Modules/product/mobiles';
import Watches from './Modules/product/watches';
import Upload from './Modules/product/upload';
import Login from './Modules/user/login';
import Profile from './Modules/user/profile';
import Signup from './Modules/user/signup';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/mobiles" component={Mobiles} ></Route>
          <Route exact path="/laptops" component={Laptop} ></Route>
          <Route exact path="/watches" component={Watches} ></Route>
          <Route exact path="/login" component={Login} ></Route>
          <Route exact path="/profile" component={Profile} ></Route>
          <Route exact path="/signup" component={Signup} ></Route>
          <Route exact path="/upload" component={Upload} ></Route>
        </Switch>
      </Router>


      
    </div>
  )
}

export default App
