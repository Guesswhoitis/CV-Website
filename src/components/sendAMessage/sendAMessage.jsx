import React, { Component } from "react";
import { FaArrowAltCircleRight} from "react-icons/fa";
import "./sendAMessage.css"





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
        alert('A name was submitted: ' + this.state.name + this.state.message + this.state.email);
        event.preventDefault();
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
                    <input class="sendAMessage__submit" type="submit" value="Submit"/>
                </form>

            </div>
        );
    }
}
export default SendAMessage;