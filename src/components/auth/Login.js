import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../style/components/auth/login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {email:'', pass:'', errorMessage:''};
    }

    handleInputChange = (event) => {      
        const target = event.target;
        const name = target.name;
      
        this.setState({
            [name]: target.value
        });      
    }    
    
    handleSubmit = (event) => {
        localStorage.setItem("user", btoa(this.state.email+":"+this.state.pass))
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'Basic '+ localStorage.getItem("user")
                //'Authorization':'Basic '+ localStorage.setItem("user")
                //'Authorization':'Basic '+ btoa("user2@example.com:pass")
            },
            body: JSON.stringify({
                email: this.state.email,
                pass: this.state.pass
            })
        };
        
        fetch("http://localhost:8080/login", requestOptions)
        .then(response => {
            if (response.ok) {
                response.json().then(data => {
                    this.setState({errorMessage: ''})
                    localStorage.setItem("user", btoa(data.email+":"+data.pass));
                    {
                    if (data.email==="user2@example.com" && data.pass==="pass"){
                        this.props.history.push("/admin/home");}
                    else
                        this.props.history.push("/user/home");}
                    
                });
            }else {
                response.text().then(message => this.setState({errorMessage: message}))
            }
        })
        .catch(error => console.log(error))
        event.preventDefault();

    };
    render() {
    
        return (
            <div className="login">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Enter email"
                        onChange={this.handleInputChange} />
                    <br></br>
                    <input 
                        type="password" 
                        name="pass" 
                        placeholder="Enter password"
                        onChange={this.handleInputChange} />
                    <br></br>                   
                    <input type="submit" value="Login" className="submit" />
                    <br></br>
                    <label className="error">{this.state.errorMessage}</label>
                    <label className="info">If you do not have account, please <Link to='/signin'>register</Link></label>
                </form>
            </div>           
        )
    }
};
export default Login;