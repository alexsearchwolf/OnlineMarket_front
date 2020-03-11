import * as serviceWorker from './serviceWorker';

import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Login from './components/auth/Login';
import HomeAdmin from './components/home/HomeAdmin';
import HomeUser from './components/home/HomeUser';
import Header from './components/Header';
import Footer from './components/Footer';
import Users from './components/Users';
import User from './components/User';
import Signin from './components/Signin';
import Products from './components/Products';
import Product from './components/Product';
//import Update from './components/Update';
import UpdateUser from './components/UpdateUser';
import ProductsUser from './components/ProductsUser';
//import BasketUser from './components/Basket';

ReactDOM.render(
    <Router>
        <Fragment>
        <Header></Header>
          <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/signin" component={Signin}/>
          <Route path="/admin/home" component={HomeAdmin}/>   
          <Route path="/user/home" component={HomeUser}/>            
          <Route path="/admin/users" component={Users}/> 
          <Route path="/products" component={Products}/> 
          <Route path="/admin/product" component={Product}/> 
          <Route path="/admin/adduser" component={User}/> 
          
          <Route path="/admin/updateUser" component={UpdateUser}/>
          <Route path="/user/products" component={ProductsUser}/>
        
          <Route exact path="/" component={App} />
          </Switch>
        <Footer></Footer>
      </Fragment>
    </Router>, document.getElementById('root'));
serviceWorker.unregister();


 /* <Route path="/user/basket" component={BasketUser}/>
 <Route path="/admin/update" component={Update}/>*/