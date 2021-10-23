import React, { Component } from "react";
import logo from '../../assets/logo1.png'
import "./header.css"



function checkBoundingBox(rect) {
    if (rect.bottom <= 10) {
        document.getElementById("header").style.filter = "invert(1)"
        document.getElementById("header").style.backgroundColor = "rgba(0, 0, 0, 0.8)"
    } else {
        document.getElementById("header").style.filter = "invert(0)"
        document.getElementById("header").style.backgroundColor = "rgba(31, 31, 31, 0.0)"
    }

}

class Header extends Component {



    render() {
        document.addEventListener('scroll', function (e) {

            if (document.getElementById("mainMenu__videoPlayer") != null) {
                const rect = document.getElementById("mainMenu__videoPlayer").getBoundingClientRect();
                checkBoundingBox(rect);

            } else if (document.getElementById("contact__videoPlayer") != null) {
                const rect = document.getElementById("contact__videoPlayer").getBoundingClientRect();
                checkBoundingBox(rect);
            }
        });


        return (
            <div class='header' id="header">
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
        );
    }
}




export default Header;