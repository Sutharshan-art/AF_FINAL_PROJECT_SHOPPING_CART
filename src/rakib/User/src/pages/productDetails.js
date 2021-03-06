import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const ProductDet = props => (
    <div className={"card w-25"}>
        <div className={"card-body"}>
            <h4>{props.product.name}</h4>
            <p>{props.product.description}</p>
            <p> Price : {props.product.price}</p>
            <p> {props.product.category}</p>
            <p> {props.product.from}</p>
            <p> {props.product.state}</p>
            <p> Discount : {props.product.discount}% OFF</p>
            <Link to={"/EachProduct/"+props.product._id}><button className='btn btn-danger' onClick=''>Add To Cart</button></Link>



    </div>

    </div>
);

class ProductDetails extends Component{
    constructor(props) {
        super(props);

        this.state = {products : [],
            name:'',
            description:'',
            price:0,
            category:'',
            from:'',
            state:'',
            discount:0,
            total:0


        };

        this.onSubmit=this.onSubmit.bind(this);



    }

    componentDidMount() {
        axios.get('http://localhost:5000/product/')
            .then(response => {
                this.setState({products  : response.data})
            })
            .catch(error => {
                console.log(error);
            })
    }

    details(){
        return this.state.products.map(currentProduct => {
            return <ProductDet product={currentProduct} key={currentProduct._id}/>;
        })
    }

    onSubmit(){




        const product = {
            name: this.state.name,
            description: this.state.description,
            category: this.state.category,
            price: this.state.price,
            from: this.state.from,
            state: this.state.state,
            discount: this.state.discount,
        }
        console.log(product)

        axios.post('http://localhost:5000/product/add',product)
            .then(res => console.log(res.data));

        this.setState({
            name:'',
            description:'',
            category:'',
            price:'',
            from:'',
            state:'',
            discount:''
        })
     }

    render() {
        return(
            <div>


                <div className={"row"}>
                   
                    {this.details()}
                </div>
            </div>
        );
    }
}

export default ProductDetails;