import React from 'react';
import './register.css';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';

const styles = {
    block: {
      maxWidth: 250,
    },
    toggle: {
      marginBottom: 16,
    },
    thumbOff: {
      backgroundColor: '#ffcccc',
    },
    trackOff: {
      backgroundColor: '#ff9d9d',
    },
    thumbSwitched: {
      backgroundColor: 'red',
    },
    trackSwitched: {
      backgroundColor: '#ff9d9d',
    },
    labelStyle: {
      color: 'red',
    },
  };

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            mail: ''
        }
    }

    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state)
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {name, email, password, confirmPassword, mail} = this.state;
        console.log(this.state);

        axios.post('/users/register', 
        {name, email, password, confirmPassword, mail})
        .then(res => {
            res.json();
        })
        .catch(err => console.log(err));
    }

    render() {
        return(
        <form onSubmit={this.onSubmit} className="container">
        <div className="form-group"></div>
        <TextField
        floatingLabelText="Name"
        fullWidth
        onChange={this.onChange} 
        id="name" 
        type="text" 
        name="name"
         />
        <div className="form-group"></div>
        <TextField 
        floatingLabelText="Email"
        fullWidth
        onChange={this.onChange} 
        id="email" 
        type="email" 
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
        <TextField
        floatingLabelText="Confirm Password"
        fullWidth
        onChange={this.onChange} 
        id="confirmPassword" 
        type="password" 
        name="confirmPassword"
        />
        <div className="form-group"></div>
        <Toggle
        label="Sign me up for the news letter"
         defaultToggled={true}
         style={styles.toggle}
        />
        <RaisedButton onSubmit={this.onSubmit} type="submit">Register</RaisedButton>
        </form>
        );
    }
}

export default Register;