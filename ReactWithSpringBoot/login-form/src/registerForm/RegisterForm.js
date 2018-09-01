import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './RegisterForm.css';
class RegisterForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: '', lastName: '', email: '', password: ''
        }
    }
    render(){
        return(
            <div className="registerContainer">
                <div className="rContainer">
                    <header className="title">Register</header>
                    <form className="registerForm" onSubmit={this.submitRegister}>
                        <div className="height:100%;">
                            <h3 className="label">First Name: </h3>
                            <input type="text" name="firstName" className="textDiv" onChange={this.handleChange}/>
                        </div>
                        <div className="height:100%;">
                            <h3 className="label">Last Name: </h3>
                            <input type="text" name="lastName" className="textDiv" onChange={this.handleChange}/>
                        </div>
                        <div className="height:100%;">
                            <h3 className="label">Email: </h3>
                            <input type="text" name="email" className="textDiv" onChange={this.handleChange}/>
                        </div>
                        <div className="height:100%;">
                            <h3 className="label">Password: </h3>
                            <input type="password" name="password" className="textDiv" onChange={this.handleChange}/>
                        </div>
                        <div className="height:100%;">
                            <h3 className="label">Repeat Password: </h3>
                            <input type="text" className="textDiv" ref="verify" onChange={this.verifyPassword}/>
                        </div>
                        <input type="submit" className="btn btn-primary registerSubmit" value="Register"/>
                        <NavLink to="/" className="hyperlink">Back to Login</NavLink>
                    </form>
                </div>
            </div>
        )
    }
    submitRegister = (event) => {
        console.log();
    }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
        console.log(this.state);
    }
    verifyPassword = (event) => {
        if(this.refs.verify.value == this.state.password){
            console.log("matched")
        }else{
            console.log("mismatched")
        }
    }
}

export default RegisterForm;