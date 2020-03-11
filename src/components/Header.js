import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../style/common/header.css';

class Header extends Component {

    logout = () => {
        localStorage.clear(); 
        this.props.history.push("/login");
    }
    home = () => {
        if (localStorage.getItem("user")===btoa("user2@example.com:pass"))
        {
            this.props.history.push("/admin/home");}
        else
            this.props.history.push("/user/home");
        }
    
    render() {
        return (
        <div className="header">
            
            {                
                 localStorage.getItem("user") ?                        
                        <div className="dashboard" onClick={()=>this.home()}>Dashboard</div>             
                :
                <Link className="signin" to="/signin">Signin</Link> 
            }
            <div className="svg">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="28" height="28" viewBox="0 0 28 28">
                <title>go home</title>
            <a href="/" target="_top" cursor="pointer"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></a> </svg>  
            </div>
            
            {                
                 localStorage.getItem("user") ?                        
                        <div className="logout" onClick={()=>this.logout()}>Logout</div>              
                :
                    <Link className="login-button" to="/login">Login</Link>
            }
        </div>
        )
    }
};

export default withRouter(Header);


