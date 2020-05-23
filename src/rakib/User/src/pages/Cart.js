import React, {Component} from "react";
import axios from'axios'
import {Link} from "react-router-dom";

const CartDet = props => (

    <tr>
        <td>{props.product.name}</td>
        <td>{props.product.description}</td>
        <td> Price : {props.product.price}</td>
        <td> {props.product.category}</td>
        <td> {props.product.from}</td>
        <td> {props.product.state}</td>
        <td> Discount : {props.product.discount}% OFF</td>
        <button className='btn btn-danger'>REMOVE</button>


    </tr>



);


export default class Cart extends Component{
    constructor(props) {
        super(props);

        this.state={
            carts:[],
            name:'',
            description:'',
            price:0,
            category:'',
            from:'',
            state:'',
            discount:0
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/cart/')
            .then(response => {
                this.setState({carts  : response.data})
            })
            .catch(error => {
                console.log(error);
            })
    }
    details(){
        return this.state.carts.map(currentProduct => {
            return <CartDet product={currentProduct} key={currentProduct._id}/>;
        })



    }
    total(){
         const price=this.state.carts.reduce((total,cart)=> total+cart.price,0);
        const discount=this.state.carts.reduce((total,cart)=> total+cart.discount,0);

        return price - discount
    }


    render() {
        return(

            <div>
                <h3>Logged sensors</h3>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th>Sensorname</th>
                        <th>Location</th>
                        <th>SmokeLevel</th>
                        <th>Co2level</th>
                        <th>Active Status</th>
                        <th>Sensorname</th>
                        <th>Location</th>

                    </tr>
                    </thead>
                    <tbody>
                    <p>{ this.details() }</p>
                    </tbody>
                </table>

                {/*<div>*/}
                {/*    {this.state.carts.filter(products => products.price >0).map(filteredPerson => (*/}
                {/*        <li>*/}
                {/*            {filteredPerson.price}*/}
                {/*        </li>*/}
                {/*    ))}*/}
                {/*</div>*/}
                <h2>Total :{this.total()}</h2>
                <button className='btn btn-primary'>Payment</button>
            </div>



        )
    }
}