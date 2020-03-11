import React, { Component } from 'react';
import '../../style/home/home.css'

class HomeUser extends Component {
  
render() {

    return (
        <div className="homeUser">
              <form>             
                <button type="submit" formAction="/user/products" method="get">Products</button>
                <br></br>
                <br></br>
                <button type="submit" formAction="/basketUser" method="get">Basket</button>
                <br></br>
                <br></br>
                <button type="btn3">Edit profile</button>
                <br></br>
                <br></br>
                <label className="info">User dashboard</label>
                </form>
        </div> 
        )
      }
    };

  
  export default HomeUser;