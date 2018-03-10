import React from 'react';
import './contact.css';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Contact extends React.Component {
    // set the state equal to what the form will be sending (empty for now)
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }
    // whenver a form field is changed update the state of that target name
    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state)
    }
    // on submit post to the express route where the email is sent  -- THIS WAS A BITCH TO DO
    onSubmit = (e) => {
        e.preventDefault();

        const {name, email, message} = this.state;
        axios.post('/contact/api', {name, email, message})
        .then(res => {
            res.json();
        })
        .catch(err => console.log(err));
    }

    render() {
        return(
            <div>
                <div className="text-center container">
                    <h5>Connecting with you is important to us!</h5>
                    <div className="calendly-inline-widget calendly" data-url="https://calendly.com/allthingscareerconsulting/30min"></div>
                </div>
            <div className="container text-center" id="formArea">
            <h5>Not enough time to chat? <br />Shoot us an email!</h5>

                <form id="contact-form" onSubmit={this.onSubmit} >
                    <div className="form-group">
                        <TextField 
                        floatingLabelText="Whats your name?"
                        fullWidth
                        onChange={this.onChange} 
                        type="text" 
                        name="name"
                        />
                    </div>
                    <div className="form-group">
                        <TextField
                        floatingLabelText="Email"
                        fullWidth
                        onChange={this.onChange} 
                        type="email"
                        name="email" 
                        aria-describedby="emailHelp"
                        />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <TextField
                        hintText="Message"
                        fullWidth
                        onChange={this.onChange} 
                        multiLine
                        rows={2}
                         />
                    </div>
                        <RaisedButton 
                        type="submit"
                        onClick={this.onSubmit}>
                        Submit
                        </RaisedButton>
                </form>


            </div>
        </div>
        );
    }
}

export default Contact;