import React, { Component } from "react";
import logo from '../../assets/logo1.png'
import "./contactsHeader.css"

class ContactsHeader extends Component {
    render() {

        


        return (
            <div class='header' id="header">
                <div class="header__leftDiv">
                    <a href="/">
                        <img src={logo} alt="Logo" />
                    </a>
                    <a class="header__text" href="/#videoPlayer">
                        <h1>James Hulena</h1>
                    </a>

                </div>

                <div class="header__innerDiv">
                    <h1>
                        <a class="header__text" href="/#whoAmI">Who am I?</a>
                    </h1>
                    <h1>
                        <a class="header__text" href="/#myHobbies">My Hobbies</a>
                    </h1>
                    <h1>
                        <a class="header__text" href="/#myQualifications"> My Qualifications</a>
                    </h1>
                </div>

                <h1>
                    <a class="header__text" href="/Contact">Contact</a>
                </h1>
            </div>
        );
    }
}




export default ContactsHeader;