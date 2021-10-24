import './App.css';
import Header from '../../components/Header/header';
import backGround from '../../assets/backgroundLoop.mp4';
import Entry from '../../components/entry/entry';
import familyPic from '../../assets/me.jpg';
import trailRide from '../../assets/trailRide.jpg';
import Quals from '../../components/quals/quals';

function App() {
  

  var whoAmITitle = "Who Am I?"
  var whoAmISection = "The term 'who am I' can be defined in many different ways like, I'm a brother, a son or even just a student(almost graduate) looking to start his career in the IT industry. I like to create a good relationship with my co-workers, to bond with them making the workspace more comfortable for everyone. I'm a 21-year-old man who loves what he does, I love learning new things any chance I can get specifically from my elder's as they have more experience and more stories to share. In the future, I'm looking to share my own experience's through teaching. I want to be able to teach maths, physics and computer science at schools that may not get the privilege of this learning, and through all, I hope to inspire kids to do well and further their aspiration's."

  var myHobbyTitle = "My Hobbies"
  var myHobbySection = "I have a few cool hobbies! I love taking my bike out on trail rides! I love playing my guitar! I love reading books! I play probably way too many video games! and..... ahhh... I think that's it really. Here's a picture we took on a trail ride a few months ago."

  

  return (
    <div className="App">
      <Header/>
      <video id="mainMenu__videoPlayer" class="mainMenu__backgroundVideo" width="1920" height="1080" autoPlay muted loop>
        <source src={backGround} type="video/mp4"/>
      </video>
      <div class="mainMenu__overVideoText">
        <h2>Theory is when you know everything, but nothing works. Practice is when you don't know anything, yet everything works. In Programming we combine theory and practice; nothing works and we don't know why.</h2>
      </div>
      <Entry id="whoAmI" title={whoAmITitle} paragraph ={whoAmISection} picture ={familyPic} order={"right"}/>
      <Entry id="myHobbies" title={myHobbyTitle} paragraph ={myHobbySection} picture ={trailRide} order={"left"}/>
      <Quals/>
    </div>
  );
}

export default App;
