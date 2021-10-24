import React, { Component } from "react";
// import { postToDb } from './serverComms'
import ReCAPTCHA from "react-google-recaptcha";
import "./sendAMessage.css"


const recapKey = "6LfHkO0cAAAAACTtLl03HCzSLSHYIIT0LMmGXvsk";



class SendAMessage extends Component {

    

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this._reCaptchaRef = React.createRef();
    }

    onRecapChange(value) {
        
    
    }


    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handleMessageChange(event) {
        this.setState({ message: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log("Working");
        if (this._reCaptchaRef.current.getValue() !== null) {
            var letters = /^[A-Za-z]+$/;
            var emailRegex = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/;


            if (!this.state.name.match(letters)) {
                alert("Your name must only contain letters")
            }

            if (!this.state.email.match(emailRegex)) {
                alert("Your email must be of valid format")
            }

            if (!this.state.message.match(letters)) {
                alert("Your message must only contain letters")
            }

            this.postToDb(this.state.name, this.state.email, this.state.message);
            // window.location.reload()
        }else{
            alert("Please Complete Recaptcha")
        }


    }

    postToDb(name,email,message) {

        var dataBaseIp ="http:/james.bombsquad.co.nz";
    
        var dataBasePort="4000";
    
        var toPost = {
            name:name,
            email:email,
            message:message
        }
    
      window.fetch(dataBaseIp+":"+dataBasePort+"/postMessage",{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(toPost)
      })
    }

    render() {
        return (
            <div className="sendAMessage" class="sendAMessage">
                <h1 class="sendAMessage__title">Send me a message</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input class="sendAMessage__inputBox" type="text" value={this.state.name} onChange={this.handleNameChange} />
                    </label>
                    <label>
                        Email:
                        <input class="sendAMessage__inputBox" type="text" value={this.state.email} onChange={this.handleEmailChange} />
                    </label>
                    <label>
                        Message:
                        {/* <input class="sendAMessage__inputBox__message" type="text" value={this.state.message} onChange={this.handleMessageChange} /> */}
                        <textarea name="Text1" cols="40" rows="5" class="sendAMessage__inputBox__message" type="text" value={this.state.message} onChange={this.handleMessageChange}></textarea>
                    </label>
                    <ReCAPTCHA
                        sitekey={recapKey}
                        onChange={this.onRecapChange}
                        ref={this._reCaptchaRef}
                    />
                    <input class="sendAMessage__submit" type="submit" value="Submit" />

                </form>

            </div>
        );
    }
}
export default SendAMessage;