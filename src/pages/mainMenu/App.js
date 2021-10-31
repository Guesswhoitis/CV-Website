import './App.css';
import Header from '../../components/header/header';
import backGround from '../../assets/backgroundLoop.mp4';
import Entry from '../../components/entry/entry';
import familyPic from '../../assets/me.jpg';
import trailRide from '../../assets/trailRide.jpg';
import Quals from '../../components/quals/quals';
import Skills from '../../components/skills/skills';
import Footer from '../../components/footer/footer';

function App() {


  var whoAmITitle = "Who Am I?"
  var whoAmISection = "The term 'who am I' can be defined in many different ways like, I'm a brother, a son or even just a student(almost graduate) looking to start his career in the IT industry. I like to create a good relationship with my co-workers, to bond with them making the workspace more comfortable for everyone. I'm a 21-year-old man who loves what he does, I love learning new things any chance I can get specifically from my elder's as they have more experience and more stories to share. In the future, I'm looking to share my own experience's through teaching. I want to be able to teach maths, physics and computer science at schools that may not get the privilege of this learning, and through all, I hope to inspire kids to do well and further their aspiration's."

  var myHobbyTitle = "My Hobbies"
  var myHobbySection = "Over the past years, I’ve had many different hobbies. I’ve raced and built quad-copters, I’ve built computers, I’ve ridden electric longboards. Though more recently I’ve been loving riding my dirt bike a stunning Yamaha WR250F, carving up local trail rides. I’ve been loving playing my guitar, a lovely sounding Tokai Love Rock. Another pass time that I’ve recently taken up is reading books and listening to vinyl, tryna keep some things a little old fashion. Oh, and I also play video games… probably too often, Mostly Escape From Tarkov. And, yeah I think that’s it! Here’s a picture we took on a trail ride a few months ago."



  return (
    <div className="App">
      <Header />
      <video id="mainMenu__videoPlayer" class="mainMenu__backgroundVideo" width="1920" height="1080" autoPlay muted loop>
        <source src={backGround} type="video/mp4" />
      </video>
      <div class="mainMenu__overVideoText">
        <h2>Theory is when you know everything, but nothing works. Practice is when you don't know anything, yet everything works. In Programming we combine theory and practice; nothing works and we don't know why.</h2>
      </div>
      <Entry id="whoAmI" title={whoAmITitle} paragraph={whoAmISection} picture={familyPic} order={"right"} />
      <Entry id="myHobbies" title={myHobbyTitle} paragraph={myHobbySection} picture={trailRide} order={"left"} />
      <div class="mainMenu__skillsAndQuals">
        <Quals />
        {/* <Skills /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
