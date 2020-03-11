import React, { Component } from 'react';

class UpdateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {users:[],name:'',lastname:'',email:'',password:'', errorMessage:''};
    }

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        
        this.setState({
            users: {...this.state.users, [name]: target.value}
        });    
    } 
    
    componentDidMount() {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic '+localStorage.getItem("user")
            },
        };
            fetch("http://localhost:8080/userUpdate/"+this.props.match.params.id, requestOptions)
            .then(response => response.json())
            .then(data => {
                this.setState({users: data})
            });
   
    }
    handleSubmit = (event) => {
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic '+localStorage.getItem("user")
            },
            body: JSON.stringify({
                name: this.state.users.name,
                lastname: this.state.users.lastname,
                email: this.state.users.email,
                password: this.state.users.password,
            })
        };
        
        fetch("http://localhost:8080/userUpdate/"+this.state.users.id, requestOptions)
        .then(response => 
            {
                if(response.ok) {
                    response.json().then(data => {
                        this.setState({errorMessage: ''})
                        this.props.history.push("/admin/users/");
                    });
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
            {
            this.state.users &&
             <form onSubmit={this.handleSubmit}>
                <div>
                <label>Change name:</label>
                  <input 
                    type="text" 
                    name="name"
                    value={this.state.users.name}
                    onChange={this.handleInputChange} />
                 </div>
                 <div>
                <label>Change lastname:</label>
                  <input 
                    type="text" 
                    name="lastname"
                    value={this.state.users.lastname}
                    onChange={this.handleInputChange} />
                 </div>
                 <div>
                <label>Change email:</label>
                  <input 
                    type="text" 
                    name="email"
                    value={this.state.users.email}
                    onChange={this.handleInputChange} />
                 </div>
                 <div>
                <label>Change password:</label>
                  <input 
                    type="text" 
                    name="password"
                    value={this.state.users.password}
                    onChange={this.handleInputChange} />
                 </div>{
                        
                    }
                
                               
                <input type="submit" value="Change" className="submit" onClick={()=>this.props.history.push("/admin/users")} />
                <input type="button" value="Cancel" className="cancel" onClick={()=>this.props.history.push("/admin/users")} />
               
                <label className="error">{this.state.errorMessage}</label>
            </form>
            }
            </div>  
           
        )
    }
};
export default UpdateUser;