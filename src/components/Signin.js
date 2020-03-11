import React, { Component } from 'react';
import '../style/components/auth/register.css';

class Signin extends Component{
    constructor(props){
        super(props);
        this.state ={email:'', name:'', lastname:'', street:'', city:'', pass:'', errorMessage:''};
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
            headers:{
                'Content-Type': 'application/json',               
                'Authorization':'Basic '+ btoa("user2@example.com:pass")
            },
            body: JSON.stringify({
                email: this.state.email,
                pass: this.state.pass,
                name: this.state.name,
                lastname: this.state.lastname,
                street: this.state.street,
                city: this.state.city
            })
        };

        fetch('http://localhost:8080/signin', requestOptions)
        .then(response => {
            if(response.ok){
                response.json().then(data =>{ 
                    this.setState({errorMessage: ''})
                    localStorage.setItem("user", btoa(data.email+":"+data.pass));
                    this.props.history.push("/user/home");
                });
            }else{
                response.text().then(message => this.setState({errorMessage:message}))
            }
        })
        .catch(error => console.log(error))
        event.preventDefault();
    };

    render(){
        return(
            <div className="login">
                <form onSubmit={this.handleSubmit} className="register">
            
             <input 
                    type="text" 
                    name="email"
                    placeholder="Enter email"
                    onChange={this.handleInputChange} />

               <input 
                    type="password" 
                    name="pass" 
                    placeholder="Enter password"
                    onChange={this.handleInputChange} />
                <input 
                    type="text" 
                    name="name"
                    placeholder="Enter name"
                    onChange={this.handleInputChange} />

               <input 
                    type="text" 
                    name="lastname" 
                    placeholder="Enter lastname"
                    onChange={this.handleInputChange} /> 
                <input 
                    type="text" 
                    name="street"
                    placeholder="Enter street"
                    onChange={this.handleInputChange} />

               <input 
                    type="text" 
                    name="city" 
                    placeholder="Enter city"
                    onChange={this.handleInputChange} />
                                    
                <input type="submit" value="Signin" className="submit" />
                <label className="error">{this.state.errorMessage}</label>
            </form>
        
        </div>
        )
    };
}
export default Signin;