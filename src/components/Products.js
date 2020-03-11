import React, { Component } from 'react';
import Table from '../components/Table';
import '../style/common/getall.css';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {products: []};
    }

    url = () => {
        this.props.history.push("/admin/product");}
      
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
            fetch("http://localhost:8080/products", requestOptions)
            .then(response => {
                if(response.ok) {
                    response.json().then(data =>
                        this.setState({products: data})    
                    )
                }else {
                    response.text().then(message => alert(message))
                }
            })
            .catch(error => console.log(error))
        }    
    }
     
    deleteProduct = (id) => {
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic '+localStorage.getItem("user")},
        };
        fetch("http://localhost:8080/productDelete/"+id, requestOptions)
        .then(response => {
            if (response.ok) {
                response.json().then(data => 
                    this.setState({products: this.state.products.filter(product => product.id!==data.id)})
                );
            }else {
                response.text().then(message => alert(message))
            }
        })
        .catch(error => console.log(error))
    }

    render() {
        const heading=["Id", "Name", "Price", "Stock", "Size", "Sale", "Color", "Item", "", ""];
        const buttons=[
            {name: "Update", action: this.updateProduct, class: "btn-update"}, 
            {name: "Delete", action: this.deleteProduct, class: "btn-update"}];
    return (
        <div className="products_wrapper">
    
              <input className="btn_add" type="button" onClick={()=>this.url()} value="Add new product"/>    
             {
                    this.state.products && 
                    <Table heading={heading} data={this.state.products} buttons={buttons}></Table>
                    
                } 
                
            </div>
    )
}  
};    
export default Products;