import React, { Component } from "react";
import "./quals.css"

class Quals extends Component {

    
    


    render() {
        
            return (
                <div class="quals" id ="myQualifications">
                    <h1 class = "quals__title">My Qualifications</h1>
                    <table>
                        <tr>
                            <th>Institute</th>
                            <th>Qualifications</th>
                            <th>Date</th>
                        </tr>
                        <tr>
                            <td>Victoria University Of Wellington</td>
                            <td>BSc. Major Computer Science</td>
                            <td>2019-2021</td>
                        </tr>
                        <tr>
                            <td>Central Hawkes Bay College</td>
                            <td>NCEA Level 3</td>
                            <td>2013-2018</td>
                        </tr>
                    </table>
                    
                </div>
            );
        }
        
    
}




export default Quals;