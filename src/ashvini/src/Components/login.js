import React, {Component} from 'react';
import Title from './Title'

export default class Login extends Component {
    render() {
        return (
            <section className="log">
                <Title title="Login"/>
                <form className="logform">
                    <table>
                        <tr>
                            <td><label>User Type </label></td>
                            <td><select>
                                <option>Adminitrator</option>
                                <option>Store Manager</option>
                                <option>Customer</option>
                            </select></td>
                        </tr>
                        <tr></tr>
                        <tr></tr>
                        <tr>
                            <td><label>User Name </label></td>
                            <td><input type="text" placeholder="User name" required/></td>
                        </tr>
                        <tr></tr>
                        <tr></tr>
                        <tr>
                            <td><label>Password </label></td>
                            <td><input type="password" placeholder="Enter password" required/></td>
                        </tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                    </table>
                        <button type="submit" className="btn-primary">LOGIN</button>
                </form>
            </section>
        );
    }
}
