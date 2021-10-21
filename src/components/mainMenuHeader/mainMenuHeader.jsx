import React, { Component } from "react";
import logo from '../../assets/logo1.png'
import "./mainMenuHeader.css"

class MainMenuHeader extends Component {
    render() {

        document.addEventListener('scroll', function (e) {
            const rect = document.getElementById("mainMenu__videoPlayer").getBoundingClientRect();
            if (rect.bottom <= 10) {
                document.getElementById("header").style.filter = "invert(1)"
            } else {
                document.getElementById("header").style.filter = "invert(0)"
            }


        });


        return (
            <div class='header' id="header">
                <div class="header__leftDiv">
                    <a href="/">
                        <img src={logo} alt="Logo" />
                    </a>
                    <a class="header__text" href="#mainMenu__videoPlayer">
                        <h1>James Hulena</h1>
                    </a>

                </div>

                <div class="header__innerDiv">
                    <h1>
                        <a class="header__text" href="#whoAmI">Who am I?</a>
                    </h1>
                    <h1>
                        <a class="header__text" href="#myHobbies">My Hobbies</a>
                    </h1>
                    <h1>
                        <a class="header__text" href="#myQualifications"> My Qualifications</a>
                    </h1>
                </div>

                <h1>
                    <a class="header__text" href="/Contact">Contact</a>
                </h1>
            </div>
        );
    }
}




export default MainMenuHeader;