import React, { Component } from "react";
import { postToDb } from './serverComms'
import ReCAPTCHA from "react-google-recaptcha";
import "./sendAMessage.css"


const recapKey = "6LfHkO0cAAAAACTtLl03HCzSLSHYIIT0LMmGXvsk"; //key for the recaptcha



class SendAMessage extends Component {

    

    constructor() {
        this.state = { //stores the users info and message to send to server
            name: '',
            email: '',
            message: ''
        };

        this.handleNameChange = this.handleNameChange.bind(this); //links methods
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this._reCaptchaRef = React.createRef();//creates reference to recaptcha
    }


    /**
     * Method for recaptcha running.
     * @param {*} value 
     */
    onRecapChange(value) {
        
    }

    /**
     * Method to handle name text input change
     * @param {*} event 
     */
    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }

    /**
     * Method to handle email text input change
     * @param {*} event 
     */
    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    /**
     * Method to handle the message text textArea change
     * @param {*} event 
     */
    handleMessageChange(event) {
        this.setState({ message: event.target.value });
    }

    /**
     * Handles submit button press.
     * Checks if recaptcha has been completed
     * Checks if name, email, and message are valid text (This is meant to ensure the user can't inject code)
     * sets text input and text area to empty
     * calls method to send data to database
     * 
     * @param {*} event 
     */
    handleSubmit(event) {
        event.preventDefault();
        
        if (this._reCaptchaRef.current.getValue() !== null) { //checks recaptcha ref to see if value is empty
            var letters = /^[\.a-zA-Z0-9,!? ]*$/; //regex for checking if everything is a letter, space or some specific characters
            var emailRegex = /^[\.a-zA-Z0-9,!? ]+@[\.a-zA-Z0-9,!? ]+\.[\.a-zA-Z0-9,!? ]+$/; // regex for checking if valid email


            if (!this.state.name.match(letters)) { //checks if name matches regex
                alert("Your name must only contain letters")
            }

            if (!this.state.email.match(emailRegex)) {  //checks if email matches regex
                alert("Your email must be of valid format")
            }

            if (!this.state.message.match(letters)) {  //checks if message matches regex
                alert("Your message must only contain letters")
            }

            document.getElementById("sendAMessage__inputBox__message").value = ""; //sets test inputs to empty
            document.getElementById("sendAMessage__inputBox__name").value = "";
            document.getElementById("sendAMessage__inputBox__email").value = "";

            postToDb(this.state.name, this.state.email, this.state.message); //calls method in ServerComms to send data to database
           
        }else{
            alert("Please Complete Recaptcha")
        }

        
    }

    // postToDb(name,email,message) {

    //     var dataBaseIp ="http://james.bombsquad.co.nz";
    
    //     var dataBasePort="4000";
        
    //     var toPost = {
    //         name:name,
    //         email:email,
    //         message:message
    //     };
    

    //     window.fetch(dataBaseIp+":"+dataBasePort+"/postMessage",{
    //     method:'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(toPost)
    //   }).then(()=>{
    //     this.state.name=''
    //     this.state.email=''
    //     this.state.message=''
    //   })

      
    // }

    render() {
        return (
            <div className="sendAMessage" class="sendAMessage">
                <h1 class="sendAMessage__title">Send me a message</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input id="sendAMessage__inputBox__name" class="sendAMessage__inputBox" type="text" value={this.state.name} onChange={this.handleNameChange} />
                    </label>
                    <label>
                        Email:
                        <input id="sendAMessage__inputBox__email" class="sendAMessage__inputBox" type="text" value={this.state.email} onChange={this.handleEmailChange} />
                    </label>
                    <label>
                        Message:
                        {/* <input class="sendAMessage__inputBox__message" type="text" value={this.state.message} onChange={this.handleMessageChange} /> */}
                        <textarea name="Text1" id="sendAMessage__inputBox__message" cols="40" rows="5" class="sendAMessage__inputBox__message" type="text" value={this.state.message} onChange={this.handleMessageChange}></textarea>
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