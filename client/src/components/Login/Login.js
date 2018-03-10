import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Login extends React.Component {
	constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            message: ''            
        }
    }


    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state)
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {email, password} = this.state;
        console.log(this.state);

 axios.post('/api/auth/login', { email, password })
      .then((result) => {
        sessionStorage.setItem('jwtToken', result.data.token);
        sessionStorage.setItem('email', email);
        this.setState({ message: '' });
//        this.props.history.push('/')
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.setState({ message: 'Login failed. Email or password not match' });
        }
      });
  }
    

    render() {
  const { email, password, message } = this.state;        
    	return(
	        <form onSubmit={this.onSubmit} className="container">

          {message !== '' &&
            <div class="alert alert-warning alert-dismissible" role="alert">
              { message }
            </div>
          }
	        <h1> Login</h1>
	        <div className="form-group"></div>
	        <label htmlFor="email">Email:</label>

	        <input onChange={this.onChange} id="email" type="text" placeholder="Enter email" name="email" className="form-control" />

	        <div className="form-group"></div>
	        <label htmlFor="password">Password:</label>

	        <input onChange={this.onChange} id="password" type="password" placeholder="Enter Password" name="password" className="form-control" />

	        <div className="form-group"></div>
	        <br />
	        <button type="submit" className="btn btn-primary">LogIn</button>
	        </form>
	    )
    }
}
export default Login;