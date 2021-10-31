import React, { Component } from "react";
import logo from '../../assets/logo1.png'
import "./footer.css"

class Footer extends Component {


    render() {
        return (
            <div class="footer" id="footer">
                <div class="footer__main">
                    <div class="footer__text">
                        <h2>Hey! You've reached the bottom of my website...Unfortunately there's not much more to see.</h2>
                        <h2>
                            <a class="footer__text" href="/Contact">Well if you want to get in contact jump over to my contact page by clicking this text thing.</a>
                        </h2>
                    </div>
                    <img class="footer__logo" src={logo} alt="Logo" />

                </div>
                <div class="footer__bottom">
                    <div class="header__leftDiv">
                        <a href="/">
                            <img src={logo} alt="Logo" />
                        </a>
                        <h1>
                            <a class="header__text__name" href="/#mainMenu__videoPlayer">James Hulena</a>
                        </h1>

                    </div>

                    <div class="header__innerDiv">
                        <h1>
                            <a class="header__text" href="/#whoAmI">Who am I?</a>
                        </h1>
                        <h1>
                            <a class="header__text" href="/#myHobbies">Hobbies</a>
                        </h1>
                        <h1>
                            <a class="header__text" href="/#myQualifications">Qualifications</a>
                        </h1>
                    </div>

                    <h1>
                        <a class="header__text__contact" href="/Contact">Contact</a>
                    </h1>

                </div>
            </div>
        )
    }
}

export default Footer;