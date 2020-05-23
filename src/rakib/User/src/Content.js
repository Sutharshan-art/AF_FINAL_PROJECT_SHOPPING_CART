import React, {Component} from 'react';
import protes from './productdata'

const ProductContext = React.createContext();
// <ProductContext.Provider value={'hello'}

class ProductProvider extends Component{
    state = {
        products:[],
        sortedproducts:[],
        loading: true,
        category:'all'
    };

    componentDidMount() {
        let products = this.formatData(protes);
        this.setState({
            products,
            sortedproducts:products,
            loading:false,

        })
    }

    formatData(protes){
        let tempproducts = protes.map(prote => {
            let id = prote.sys.id;
            let images = prote.fields.images.map(image => image.fields.file.url);

            let product = { ...prote.fields, images, id };
            return product;
        });
        return tempproducts;
    }

    getProduct = slug => {
        let tempProd = [...this.state.products];
        const product = tempProd.find((product) =>product.slug === slug);
        return product;
    }
    handleChange = event => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        console.log(name, value);

        this.setState(
            {
                [name]: value
            },
            this.filterProduct
        );
    };

    filterProduct = () => {
       let {products,category} = this.state;

        let tempProducts = [...products];

        if (category !== "all") {
            tempProducts = tempProducts.filter(product => product.category === category);
        }

        this.setState({
            sortedproducts: tempProducts
        });
        };

    render() {
        return (
            <ProductContext.Provider value={{...this.state, getProduct:this.getProduct,handleChange:this.handleChange}}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}
const ProductConsumer = ProductContext.Consumer;

export function withProductConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <ProductConsumer>
            {value => <Component {...props} context={value}/>}
        </ProductConsumer>
    }
}

export {ProductProvider,ProductConsumer,ProductContext};
