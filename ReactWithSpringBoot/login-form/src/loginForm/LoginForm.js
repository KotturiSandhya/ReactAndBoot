import React, {Component} from 'react';
import './LoginForm.css';
import {NavLink} from 'react-router-dom';
import Logo from '../assets/logo.jpg';
import axios from 'axios';

class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state ={
                email: '',
                password: ''
        }
    
    }
    

    submitForm = (e) => {
        // var headers = {
        //     'Content-Type': 'application/json'
        // }
        e.preventDefault();
        var product = {
            email: this.refs.email.value,
            password: this.refs.password.value
        }
        alert("Name: "+this.refs.email.value+" Password: "+this.refs.password.value);
        this.refs.email.value="";
        this.refs.password.value="";       
        axios.post("http://localhost:8080/login", product).then(res => {
            console.log(res);
            alert(res.data);
        });
    }

    handleChange = event => {
        this.setState({
          [event.target.name] : event.target.value
        });
    }

    render(){
        return(
            <div className="background">
                <div className="container">
                    <div className="divClass"> 
                        <div className="logoArea">
                            <img src={Logo} alt="Logo"/>
                        </div>
                        <form onSubmit={this.submitForm} className="form">
                            <div className="height:100%;">
                                <h3 className="label">Email: </h3>
                                <input type="text" className="textDiv" name="email"  ref="email" onChange={this.handleChange}/>
                            </div>
                            <div className="height:100%;">
                                <h3 className="label">Password: </h3>
                                <input type="password" className="textDiv" name="password" ref="password" onChange={this.handleChange}/>
                            </div>
                            <input type="submit" className="btn btn-primary submit" value="Submit"/>
                            <NavLink to="/register" className="submit">Register</NavLink>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm;
