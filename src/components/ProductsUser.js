import React, { Component } from 'react';
import Table from '../components/Table';
import '../style/common/getall.css';

class ProductsUser extends Component {
    constructor(props) {
        super(props);
        this.state = {products: [],errorMessage:''};
    }
 
    addBasket = (id) => {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic '+ localStorage.getItem("user")
                },
                body: JSON.stringify({
                    product: id,
                })
            };
            fetch("http://localhost:8080/3/addProductBasket", requestOptions)
            .then(response => {
                if(response.ok){
                    response.json().then(data =>{ 
                        this.setState({errorMessage: ''})                       
                    });
                }else{
                    response.text().then(message => this.setState({errorMessage:message}))
                }
            })
            .catch(error => console.log(error))
        };
    

    componentDidMount(){
        if(localStorage.getItem("user") === null) {
            this.props.history.push("/login");
        } else {
            const requestOptions = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':'Basic '+ localStorage.getItem("user")
                }
            };
            fetch("http://localhost:8080/products", requestOptions)
            .then(response => {
                if(response.ok) {
                    response.json().then(data =>
                        this.setState({products: data}))
                    
                }else {
                    response.text().then(message => alert(message))
                }
            })
            .catch(error => console.log(error))
        }    
    }
  

    render() {

        const heading=["Id", "Name", "Price", "Stock", "Size", "Sale", "Color", "Item", ""];
        const buttons=[{name: "Add", action: this.addBasket, class: "btn-update"}];
    return (      
        <div className="products_wrapper">
            <input className="btn_add" type="button" onClick={()=>this.a()} value="Basket"/>        
             {
                    this.state.products && 
                    <Table heading={heading} data={this.state.products} buttons={buttons}></Table>
                    
                } 
                
            </div>
    )
}  
};    
export default ProductsUser;