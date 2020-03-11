import React, { Component } from 'react';
import '../../style/home/home.css'

class HomeAdmin extends Component {
  
render() {

    return (
        <div className="homeAdmin">
              <form>             
                <button type="submit" formAction="/admin/users">All users</button>
                <br></br>
                <br></br>
                <button type="submit" formAction="/admin/adduser">Add user</button>
                <br></br>
                <br></br>
                <button type="submit" formAction="/products">All products</button>
                <br></br>
                <br></br>
                <button type="submit" formAction="/admin/product">Add product</button>
                <br></br>
                <br></br>
                <label className="info">Admin dashboard</label>
                </form>
        </div> 
        )
      }
    };

  
  export default HomeAdmin;

