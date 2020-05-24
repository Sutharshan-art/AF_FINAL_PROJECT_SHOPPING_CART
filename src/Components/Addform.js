import React, {Component} from 'react';
import Title from './Title'
import axios from 'axios';

export default class Login extends Component {
    imagehandler1 = event => {
        this.setState({
            image:event.target.files[0]
        })
    }
    constructor(props) {
        super(props);

        this.findproductname=this.findproductname.bind(this);
        this.finddescription=this.finddescription.bind(this);
        this.findcategory=this.findcategory.bind(this);
        this.findprice=this.findprice.bind(this);
        this.finddiscount=this.finddiscount.bind(this);
        this.findfrom=this.findfrom.bind(this);
        this.findstate=this.findstate.bind(this);
        this.onsubmit=this.onsubmit.bind(this);

        this.state = {
            name:'',
            description:'',
            category:'',
            price:'',
            from:'',
            state:'',
            discount:'',
            categories:[],
            image:''
        }


    }
    componentDidMount() {
        axios.get('http://localhost:5000/product/')
            .then(response => {
                if(response.data.length >0){
                    this.setState({
                        categories:response.data.map(category => category.category),
                        category:response.data[0].category
                    })
                }
            })
    }

    findproductname(e){
        this.setState({
            name: e.target.value
        })
    }

    finddescription(e){
        this.setState({
            description: e.target.value
        })
    }

    findcategory(e){
        this.setState({
            category: e.target.value
        })
    }

    findprice(e){
        this.setState({
            price: e.target.value
        })
    }

    findfrom(e){
        this.setState({
            from: e.target.value
        })
    }

    findstate(e){
        this.setState({
            state: e.target.value
        })
    }

    finddiscount(e){
        this.setState({
            discount: e.target.value
        })
    }

    imagehandler(e){
        this.setState({
            image: e.target.files[0].name
        })
    }
    onsubmit(e){
        e.preventDefault();

        const product = {
            name: this.state.name,
            description: this.state.description,
            category: this.state.category,
            price: this.state.price,
            from: this.state.from,
            state: this.state.state,
            discount: this.state.discount,
            image:this.state.image.name
        }
      //  product.append('image',this.state.image,this.state.image.name);
        console.log(product);

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
        return (
            <section className="log">
                <Title title="Add Product"/>
                <form className="logform">
                    <table>
                        <tr>
                            <td><label>Product Name </label></td>
                            <td><input type="text" placeholder="Product name" required value={this.state.name} onChange={this.findproductname}/></td>
                        </tr>
                        <tr></tr>
                        <tr></tr>
                        <tr>
                            <td><label>Description </label></td>
                            <td><textarea value={this.state.description} onChange={this.finddescription}></textarea></td>
                        </tr>
                        <tr></tr>
                        <tr></tr>
                        <tr>
                            <td><label>Product Category </label></td>
                            <td><input type="text" required value={this.state.category} onChange={this.findcategory}/></td>
                        </tr>
                        <tr></tr>
                        <tr></tr>
                        <tr>
                            <td><label>Price $</label></td>
                            <td><input type="text" required value={this.state.price} onChange={this.findprice}/></td>
                        </tr>
                        <tr></tr>
                        <tr></tr>
                        <tr>
                            <td><label>Shipping From</label></td>
                            <td><input type="text" required value={this.state.from} onChange={this.findfrom}/></td>
                        </tr>
                        <tr></tr>
                        <tr></tr>
                        <tr>
                            <td><label>State</label></td>
                            <td><select value={this.state.state} onChange={this.findstate}>
                                <option>New</option>
                                <option>Used</option>
                            </select></td>
                        </tr>
                        <tr></tr>
                        <tr></tr>
                        <tr>
                            <td><label>Discount $</label></td>
                            <td><input type="text" required value={this.state.discount} onChange={this.finddiscount}/></td>
                        </tr>
                        <tr></tr>
                        <tr></tr>
                        <tr>
                            <td><label>Add image </label></td>
                            <td><input type="file" name='image' onChange={this.imagehandler1}/></td>
                        </tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                    </table>
                    <button type="submit" className="btn-primary" onClick={this.onsubmit}>ADD PRODUCT</button>
                </form>
            </section>
        );
    }
}
