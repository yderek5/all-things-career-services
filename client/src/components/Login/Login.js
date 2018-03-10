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
        localStorage.setItem('jwtToken', result.data.token);
        console.log("MY TOKEN", result.data.token)
        this.setState({ message: '' });
//        this.props.history.push('/')
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.setState({ message: 'Login failed. email or password not match' });
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
	        <div className="form-group"></div>
          <TextField
          floatingLabelText="Email"
          fullWidth
          onChange={this.onChange} 
          id="email" type="text" 
          name="email" 
          />

	        <div className="form-group"></div>

          <TextField
          floatingLabelText="Password"
          fullWidth
          onChange={this.onChange} 
          id="password" 
          type="password" 
          name="password" 
          />

	        <div className="form-group"></div>
	        <br />
	        <RaisedButton type="submit" onSubmit={this.onSubmit}>Log in</RaisedButton>
	        </form>
	    )
    }
}
export default Login;