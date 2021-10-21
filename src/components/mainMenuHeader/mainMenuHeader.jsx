import React, { Component } from "react";
import logo from './logo1.png'
import "./mainMenuHeader.css"

class MainMenuHeader extends Component {
    render() {

        document.addEventListener('scroll', function(e) {
            const rect = document.getElementById("videoPlayer").getBoundingClientRect();
            if(rect.bottom <=10){
                document.getElementById("header").style.filter = "invert(1)"
            }else{
                document.getElementById("header").style.filter = "invert(0)"
            }
            
            
        });


        return (
            <div class='header' id ="header">
                <div class="header__leftDiv">
                    <a href="/">
                        <img src={logo} alt="Logo" />
                    </a>
                    <h1>James Hulena</h1>
                </div>

                <div class="header__innerDiv">
                    <h1>
                        <a class="header__text" href="#whoAmI">Who am I?</a>
                    </h1>
                    <h1>
                        <a class="header__text" href="/goSomewhere">My Hobbies</a>
                    </h1>
                    <h1>
                        <a class="header__text" href="/goSomewhere"> My Qualifications</a>
                    </h1>
                </div>

                <h1>
                    <a class="header__text" href="/goSomewhere">Contact</a>
                </h1>
            </div>
        );
    }
}




export default MainMenuHeader;