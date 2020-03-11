import React, { Component } from 'react';
import '../../style/components/auth/register.css';
//import {REGISTER} from "../../service/api";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {name:'', lastname:'',email: '',pass:'', stret:'', city:'', errorMessage:''};
    }

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        
        this.setState({
            [name]: target.value
        });    
    }  
    handleSubmit = (event) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'Basic '+ btoa("user2@example.com"+":"+"pass")
            },
            body: JSON.stringify({
                name: this.state.name,
                lastname: this.state.lastname,
                street: this.state.street,
                city: this.state.city,
                email: this.state.email,
                pass: this.state.pass,
            })
        };
        
        fetch("http://localhost:8080/signin", requestOptions)
        .then(response => {
            if (response.ok) {
                this.setState({errorMessage: ''})
                this.props.history.push("/user/home");        
            }else {
                response.text().then(message => this.setState({errorMessage: message}))
            }
        })
        .catch(error => console.log(error))
        event.preventDefault();

    };
    render() 
    {
        return (
            <div className="login">
                <form onSubmit={this.handleSubmit} className="register">
                <input 
                    type="text" 
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
                <input 
                    type="text" 
                    name="name"
                    placeholder="Enter name"
                    onChange={this.handleInputChange} />
                <br></br>
                <input 
                    type="text" 
                    name="lastname" 
                    placeholder="Enter lastname"
                    onChange={this.handleInputChange} /> 
                <br></br>
                <input 
                    type="text" 
                    name="street"
                    placeholder="Enter street"
                    onChange={this.handleInputChange} />
               <br></br>
               <input 
                    type="text" 
                    name="city" 
                    placeholder="Enter city"
                    onChange={this.handleInputChange} />
                <br></br>                   
                <input type="submit" value="Signin" className="submit" />
                
                <br></br>
                <label className="error">{this.state.errorMessage}</label>
            </form>
        </div>   
           
        )
    }
};
export default Register;