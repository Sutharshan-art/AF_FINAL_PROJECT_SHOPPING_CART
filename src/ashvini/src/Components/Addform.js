import React, {Component} from 'react';
import Title from './Title'

export default class Login extends Component {
    render() {
        return (
            <section className="log">
                <Title title="Add Product"/>
                <form className="logform">
                    <table>
                        <tr>
                            <td><label>Product Name </label></td>
                            <td><input type="text" placeholder="Product name" required/></td>
                        </tr>
                        <tr></tr>
                        <tr></tr>
                        <tr>
                            <td><label>Description </label></td>
                            <td><textarea></textarea></td>
                        </tr>
                        <tr></tr>
                        <tr></tr>
                        <tr>
                            <td><label>Price</label></td>
                            <td><input type="text" required/></td>
                        </tr>
                        <tr></tr>
                        <tr></tr>
                        <tr>
                            <td><label>Shipping From</label></td>
                            <td><input type="text" required/></td>
                        </tr>
                        <tr></tr>
                        <tr></tr>
                        <tr>
                            <td><label>State</label></td>
                            <td><select>
                                <option>New</option>
                                <option>Used</option>
                            </select></td>
                        </tr>
                        <tr></tr>
                        <tr></tr>
                        <tr>
                            <td><label>Discount</label></td>
                            <td><input type="text" required/></td>
                        </tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                    </table>
                    <button type="submit" className="btn-primary">ADD PRODUCT</button>
                </form>
            </section>
        );
    }
}
