import React, { Component } from "react";
import "./whoAmI.css"
import me from './me.jpg'

class WhoAmI extends Component {
    render() {
        return (
            <div class="whoAmI" id="whoAmI">
                <h1 class = "whoAmI__title">Who Am I?</h1>
                <div class="whoAmI__info">
                    <p class="whoAmI__personalStatement">
                        I am a third year Computer Science student looking to kick start my career in the IT industry as I will be eligible to graduate at the start of November.
                        I love to work with a good team of passionate people who are able to work well together.
                        I want to be able to develop a good relationship with my co-workers.
                        I believe having a good relationship with co-workers promotes productivity and increases morale.
                        I really enjoy learning new things from people who have walked the walk. Being able to utilise more senior people's knowledge is my favourite way to learn.
                        In the future I want to be able to share my experience through teaching.
                        I want to teach maths, physics and computer science at lower decile schools in the hope that I can inspire kids to do well and further their education.
                    </p>
                    <img class="whoAmI__picture" src={me} alt="me" />
                </div>
            </div>


        );
    }
}




export default WhoAmI;