import React, { Component } from 'react';
import '../style/components/product.css'

class Product extends Component{
    constructor(props){
        super(props);
        this.handleChangea = this.handleChangea.bind(this);
        this.handleChangeb = this.handleChangeb.bind(this);
        this.handleChangec = this.handleChangec.bind(this);
        this.handleChanged = this.handleChanged.bind(this);
        this.state ={
            name:'', price:'', stock:'', size_id:'', sale_id:'',color_id:'', item_id:'', errorMessage:''
        };
    }

    handleInputChange = (event) => {      
        const target = event.target;
        const name = target.name;      
        this.setState({
            [name]: target.value
        });      
    }    
    handleChangea = (event) => {      
        const target = event.target;
        const name = target.name;      
        this.setState({
            [name]: target.value
        });      
    } 
    handleChangeb = (event) => {      
        const target = event.target;
        const name = target.name;      
        this.setState({
            [name]: target.value
        });      
    } 
    handleChangec = (event) => {      
        const target = event.target;
        const name = target.name;      
        this.setState({
            [name]: target.value
        });      
    } 
    handleChanged = (event) => {      
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
                'Authorization': 'Basic '+localStorage.getItem("user")
            },
            body: JSON.stringify({
                name: this.state.name,
                price: this.state.price,
                stock: this.state.stock,
                size_id: this.state.size,
                sale_id: this.state.sale,
                color_id: this.state.color,
                item_id: this.state.item
            })
        };

        fetch('http://localhost:8080/product', requestOptions)
        .then(response => {
            if(response.ok){
                response.json().then(data =>{ 
                    this.setState({errorMessage: ''})                   
                    this.props.history.push("/products");
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
            
            <div className="product">
            <form className="product_form" onSubmit={this.handleSubmit}>
               <input 
                    type="text" 
                    name="name"
                    placeholder="Enter name"
                    onChange={this.handleInputChange} />

               <input 
                    type="number"
                    step="any" 
                    name="price" 
                    placeholder="Enter price"
                    onChange={this.handleInputChange} />
                <input 
                    type="number" 
                    name="stock"
                    placeholder="Enter stock"
                    onChange={this.handleInputChange} />
            
                <table className="table">
                    <tbody>
                    
                    <tr>
                    <td>
                    <div id="size_column" >
                        <label> <input className="dot" type="radio" name="size" checked={this.state.size === "1"} onChange={this.handleInputChange} value="1"/>xs</label>
                        <label> <input className="dot" type="radio" name="size" checked={this.state.size === "2"} onChange={this.handleInputChange} value="2"/>s</label>
                        <label> <input className="dot" type="radio" name="size" checked={this.state.size === "3"} onChange={this.handleInputChange} value="3"/>m</label>
                        <label> <input className="dot" type="radio" name="size" checked={this.state.size === "4"} onChange={this.handleInputChange} value="4"/>l</label>
                        <label> <input className="dot" type="radio" name="size" checked={this.state.size === "5"} onChange={this.handleInputChange} value="5"/>xl</label></div>
                        
                    </td>
                    </tr>
                    </tbody>
                
                
                <tbody>
                <tr>
                <td>
                <div id="sale_column">
                       <label><input className="dot" type="radio" name="sale" checked={this.state.sale === "1"} onChange={this.handleChangeb} value="1"/>on sale</label>
                       <label><input className="dot" type="radio" name="sale" checked={this.state.sale === "2"} onChange={this.handleChangeb} value="2"/>not on sale</label></div>
                    </td>
                    </tr>
                    </tbody>
                    <tbody>
                    
                    <tr>
                    <td>
                    <div id="item_column">
                        <label> <input className="dot" type="radio" name="item" checked={this.state.item === "1"} onChange={this.handleChangec} value="1"/>bluza</label>
                        <label> <input className="dot" type="radio" name="item" checked={this.state.item === "2"} onChange={this.handleChangec} value="2"/>pantalone</label>
                        <label> <input className="dot" type="radio" name="item" checked={this.state.item === "3"} onChange={this.handleChangec} value="3"/>haljina</label>
                        <label> <input className="dot" type="radio" name="item" checked={this.state.item === "4"} onChange={this.handleChangec} value="4"/>suknja</label>
                        <label> <input className="dot" type="radio" name="item" checked={this.state.item === "5"} onChange={this.handleChangec} value="5"/>jakna</label></div>
                    </td>
                    </tr>
                    </tbody>
                    <tbody>                   
                    <tr>
                    <td>
                    <div id="color_column">
                        <label> <input className="dot" type="radio" name="color" checked={this.state.color === "1"} onChange={this.handleChanged} value="1"/>bela</label>
                        <label> <input className="dot" type="radio" name="color" checked={this.state.color === "2"} onChange={this.handleChanged} value="2"/>crna</label>
                        <label> <input className="dot" type="radio" name="color" checked={this.state.color === "3"} onChange={this.handleChanged} value="3"/>crvena</label>
                        <label> <input className="dot" type="radio" name="color" checked={this.state.color === "4"} onChange={this.handleChanged} value="4"/>zelena</label>
                        <label> <input className="dot" type="radio" name="color" checked={this.state.color === "5"} onChange={this.handleChanged} value="5"/>plava</label>
                        <label> <input className="dot" type="radio" name="color" checked={this.state.color === "6"} onChange={this.handleChanged} value="6"/>zuta</label>
                        <label> <input className="dot" type="radio" name="color" checked={this.state.color === "7"} onChange={this.handleChanged} value="7"/>ljubicasto</label>
                        <label> <input className="dot" type="radio" name="color" checked={this.state.color === "8"} onChange={this.handleChanged} value="8"/>sareno</label></div>
                    </td>
                    </tr>
                    </tbody>              
                </table>
                <input type="submit" value="Add product" className="submit" />
                <label className="error">{this.state.errorMessage}</label>
               </form>
           </div>
      
        
        )
    };
}
export default Product;