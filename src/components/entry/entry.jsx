import React, { Component } from "react";
import "./entry.css"

class Entry extends Component {

    
    


    render() {
        if(this.props.order === "left"){
            return (
                <div class="entry" id={this.props.id}>
                    <h1 class = "entry__title">{this.props.title}</h1>
                    <div class="entry__info">
                        <img class="entry__picture" src={this.props.picture} alt="me" />
                        <p class="entry__text">
                            {this.props.paragraph}
                        </p> 
                    </div>
                </div>
            );
        }else{
            return (
                <div class="entry" id={this.props.id}>
                    <h1 class = "entry__title">{this.props.title}</h1>
                    <div class="entry__info">
                        <p class="entry__text">
                            {this.props.paragraph}
                        </p>
                        <img class="entry__picture" src={this.props.picture} alt="me" />
                    </div>
                </div>
            );
        }
        
    }
}




export default Entry;