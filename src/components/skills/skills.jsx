import React, { Component } from "react";
import "./skills.css"

class Skills extends Component {

    /**
     * 
     * @returns A table containg my qualifications
     */
    render() {
        
            return (
                <div class="skills" id ="mySkills">
                    <h1 class = "skills__title">My Skills</h1>
                    <table>
                        <tr>
                            <th>Skill</th>
                            <th>Experience</th>
                        </tr>
                        <tr>
                            <td>Software Development</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>- Java</td>
                            <td>3+ years</td>
                        </tr>
                        <tr>
                            <td>- TypeScript/JavaScript</td>
                            <td>3+ years</td>
                        </tr>
                        <tr>
                            <td>- C++</td>
                            <td>2+ years</td>
                        </tr>
                        <tr>
                            <td>- Python</td>
                            <td>1 years</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Mobile Development</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>- Ionic React</td>
                            <td>1 years</td>
                        </tr>
                        <tr>
                            <td>- Ionic Angular</td>
                            <td>1 years</td>
                        </tr>
                        <tr>
                            <td>- React Native</td>
                            <td>1 years</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Web Development</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>- ReactJS</td>
                            <td>1 years</td>
                        </tr>
                        <tr>
                            <td>- ThreeJS</td>
                            <td> &lt; 1 years</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>NodeJS</td>
                            <td>2+ years</td>
                        </tr>
                        <tr>
                            <td>AWS</td>
                            <td>2+ years</td>
                        </tr>
                        <tr>
                            <td>Agile group work</td>
                            <td>1 years</td>
                        </tr>
                    </table>
                    
                </div>
            );
        }
        
    
}




export default Skills;