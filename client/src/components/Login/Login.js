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
            username: '',
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

        const {username, password} = this.state;
        console.log(this.state);

 axios.post('/api/auth/login', { username, password })
      .then((result) => {
        localStorage.setItem('jwtToken', result.data.token);
        console.log("MY TOKEN", result.data.token)
        this.setState({ message: '' });
//        this.props.history.push('/')
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.setState({ message: 'Login failed. Username or password not match' });
        }
      });
  }
    

    render() {
  const { username, password, message } = this.state;        
    	return(
	        <form onSubmit={this.onSubmit} className="container">

          {message !== '' &&
            <div class="alert alert-warning alert-dismissible" role="alert">
              { message }
            </div>
          }
	        <h1> Login</h1>
	        <div className="form-group"></div>
	        <label htmlFor="username">Username:</label>

	        <input onChange={this.onChange} id="username" type="text" placeholder="Enter Username" name="username" className="form-control" />

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