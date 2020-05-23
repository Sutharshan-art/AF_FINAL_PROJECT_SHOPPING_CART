import React, {Component} from "react";
import axios from 'axios'


export default class EachProduct extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
        axios.get('http://localhost:5000/product/' +this.props.match.params._id)
            .then(response =>{
                this.setState({
                    name:response.data.name,
                    description:response.data.description,
                    price:response.data.price,
                    category:response.data.category,
                    from:response.data.from,
                    state:response.data.state,
                    discount:response.data.discount
                })
            })
            .catch(error =>{
                console.log(error)
            })

    }
    onSubmit(){
        const cart = {
            name: this.state.name,
            description: this.state.description,
            category: this.state.category,
            price: this.state.price,
            from: this.state.from,
            state: this.state.state,
            discount: this.state.discount,
        }
        console.log(cart)

        axios.post('http://localhost:5000/cart/addCart',cart)
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
        return (
            <div>
              <div ><br/>
           <    h2>Your shopping cart</h2>
                  <table className='table'>
                     <thead className='thead-light'>

                     <tr>
                         <td>Product Name</td>
                         <td>Quantity</td>
                         <td>Price</td>
                         <td>Category</td>
                         <td>From</td>
                         <td>State</td>
                        <td>Discount</td>
                   </tr>
                 </thead>




                    <tr><td>{this.state.name}</td>
                        <td>{1}</td>
                        <td>{this.state.price}$</td>
                        <td>{this.state.category}</td>
                        <td>{this.state.from}</td>
                        <td>{this.state.state}</td>
                        <td>{this.state.discount} $</td>
                    </tr>


                </table>
              </div>
                <div className='card-body'>
                    <h3>Total price:{this.state.price - this.state.discount} $</h3>
                    <button type='submit' className='btn btn-primary' onClick={this.onSubmit}>Add To Cart</button>
                </div>

          </div>



        )
    }
}