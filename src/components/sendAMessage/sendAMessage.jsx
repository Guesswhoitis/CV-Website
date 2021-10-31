import React, { Component } from "react";
// import { postToDb } from './serverComms'
import ReCAPTCHA from "react-google-recaptcha";
import "./sendAMessage.css"


const recapKey = "6LfHkO0cAAAAACTtLl03HCzSLSHYIIT0LMmGXvsk"; //key for the recaptcha
const submitTimeout = 30; //length of submit button timeout

var time = 0;


class SendAMessage extends Component {

    //Date.now()/1000



    constructor() {
        super()
        this.state = { //stores the users info and message to send to server
            name: '',
            email: '',
            message: '',
            timeToGo:''
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
        

        if ((Date.now() / 1000) - time >= submitTimeout) { // checks if the button is timed out

            time = (Date.now() / 1000)

            if (this._reCaptchaRef.current.getValue() !== null) { //checks recaptcha ref to see if value is empty
                var letters = /^[\.a-zA-Z0-9,!? ]*$/; //regex for checking if everything is a letter, space or some specific characters
                var emailRegex = /^[\.a-zA-Z0-9,!? ]+@[\.a-zA-Z0-9,!? ]+\.[\.a-zA-Z0-9,!? ]+$/; // regex for checking if valid email


                var failed=false;
                if (!this.state.name.match(letters) || this.state.name.length ===0) { //checks if name matches regex and is not empty
                    document.getElementById("sendAMessage_invalidName").style.display = "block";
                    failed=true;
                }

                if (!this.state.email.match(emailRegex) || this.state.email.length ===0) {  //checks if email matches regex and is not empty
                    document.getElementById("sendAMessage_invalidEmail").style.display = "block";
                    failed=true;
                }

                if (!this.state.message.match(letters) || this.state.message.length ===0) {  //checks if message matches regex and is not empty
                    document.getElementById("sendAMessage_invalidMessage").style.display = "block";
                    failed=true;
                }

                if(failed)return;


                document.getElementById("sendAMessage__inputBox__message").value = ""; //sets test inputs to empty
                document.getElementById("sendAMessage__inputBox__name").value = "";
                document.getElementById("sendAMessage__inputBox__email").value = "";

                this.postToDb(this.state.name, this.state.email, this.state.message); //calls method in ServerComms to send data to database
                this.setState({ name: "" });
                this.setState({ email: "" });
                this.setState({ message: "" });

                document.getElementById("sendAMessage__success").style.display = "block";

            } else {
                document.getElementById("sendAMessage__useRecap").style.display = "block";
            }
        } else {
            if (time != 0) { 
                var valToSet = Math.round((Date.now() / 1000) - time); // gets the amount of time elapsed 
                this.setState({timeToGo:valToSet})
                document.getElementById("sendAMessage__submitTime").style.display = "block"
            }
        }




    }

    postToDb(name,email,message) {

        var dataBaseIp ="http://james.bombsquad.co.nz";

        var dataBasePort="4000";

        var toPost = {
            name:name,
            email:email,
            message:message
        };


        window.fetch(dataBaseIp+":"+dataBasePort+"/postMessage",{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(toPost)
      }).then(()=>{
        this.state.name=''
        this.state.email=''
        this.state.message=''
      })


    }

    render() {
        return (
            <div className="sendAMessage" class="sendAMessage">
                <h1 class="sendAMessage__title">Send me a message</h1>
                <h1 id="sendAMessage__success" class="sendAMessage__success">Thank you for getting in contact. I should reply soon!</h1>
                <form onSubmit={this.handleSubmit}>
                    <h2 id="sendAMessage_invalidName" class="sendAMessage__hidden">Please use a valid name</h2>
                    <label>
                        Name:
                        <input id="sendAMessage__inputBox__name" class="sendAMessage__inputBox" type="text" value={this.state.name} onChange={this.handleNameChange} />
                    </label>
                    <h2 id="sendAMessage_invalidEmail" class="sendAMessage__hidden">Please use a valid email address</h2>
                    <label>
                        Email:
                        <input id="sendAMessage__inputBox__email" class="sendAMessage__inputBox" type="text" value={this.state.email} onChange={this.handleEmailChange} />
                    </label>
                    <h2 id="sendAMessage_invalidMessage" class="sendAMessage__hidden">Please use a valid message</h2>
                    <label>
                        Message:
                        {/* <input class="sendAMessage__inputBox__message" type="text" value={this.state.message} onChange={this.handleMessageChange} /> */}
                        <textarea name="Text1" id="sendAMessage__inputBox__message" cols="40" rows="5" class="sendAMessage__inputBox__message" type="text" value={this.state.message} onChange={this.handleMessageChange}></textarea>
                    </label>
                    <h2 id="sendAMessage__useRecap" class="sendAMessage__hidden">Please complete the recaptcha</h2>
                    <ReCAPTCHA
                        sitekey={recapKey}
                        onChange={this.onRecapChange}
                        ref={this._reCaptchaRef}
                    />
                    <h2 id="sendAMessage__submitTime" class="sendAMessage__hidden">You can not submit for {submitTimeout - this.state.timeToGo } seconds</h2>
                    <input class="sendAMessage__submit" type="submit" value="Submit" />

                </form>

            </div>
        );
    }
}
export default SendAMessage;