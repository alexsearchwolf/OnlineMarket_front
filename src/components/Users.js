import React, { Component } from 'react';
import '../style/common/getall.css';
import Table from '../components/Table';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {users: []};
    }

url = () => {
    this.props.history.push("/admin/adduser");}
    

    componentDidMount(){
        if(localStorage.getItem('user') === null) {
            this.props.history.push('/login');
        } else {
            const requestOptions = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic '+localStorage.getItem("user")
                }
            };
            fetch("http://localhost:8080/users", requestOptions)
            .then(response => {
                if(response.ok) {
                    response.json().then(data =>
                        this.setState({users: data})    
                    )
                }else {
                    response.text().then(message => alert(message))
                }
            })
            .catch(error => console.log(error))
        }    
    }
    gotourl = () => {
        this.props.history.push("/admin/update/");
    }

    deleteUser = (id) => {
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic '+localStorage.getItem("user")},
        };
        fetch("http://localhost:8080/userDelete/"+id, requestOptions)
        .then(response => {
            if (response.ok) {
                response.json().then(data => 
                    this.setState({users: this.state.users.filter(user => user.id!==data.id)})
                );
            }else {
                response.text().then(message => alert(message))
            }
        })
        .catch(error => console.log(error))
    }

    updateUser = () => {
        this.props.history.push("/admin/updateUser/");
    }
 /*   updateUser = (id) => { 
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
                street: this.state.users.street,
                city: this.state.users.city
            })
        };
       fetch("http://localhost:8080/userUpdate/"+ id, requestOptions)
       .then(response => {
        if(response.ok) {
            response.json().then(data => {
                this.setState({errorMessage: ''})
                this.props.history.push("/admin/users");
            });
        }else {
            response.text().then(message => this.setState({errorMessage: message}))
        }
    })
    .catch(error => console.log(error))
    }*/
    render() {
        const heading=["Id", "Name", "Lastname", "Email", "Street", "City", "Role", "Suma", "", "", ""];
        const buttons=[
            {name: "Basket", action: this.basketUser, class: "btn-update"},
            {name: "Update", action: this.updateUser, class: "btn-update"}, 
            {name: "Delete", action: this.deleteUser, class: "btn-update"}];
    return (
        <div className="products_wrapper">

               <input className="btn_add" type="button" onClick={()=>this.url()} value="Add new user"/>    
            
                {
                    this.state.users && 
                    <Table heading={heading} InterchangeableText data={this.state.users} buttons={buttons}></Table>
                    
                } 
                
        </div>
    )
}  
};    
export default Users;


