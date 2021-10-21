import './App.css';
import MainMenuHeader from '../../components/mainMenuHeader/mainMenuHeader';
import backGround from './backgroundLoop.mp4';
import Entry from '../../components/entry/entry';
import familyPic from '../../assets/me.jpg';
import trailRide from '../../assets/trailRide.jpg';
import Quals from '../../components/quals/quals';

function App() {
  

  var whoAmITitle = "Who Am I?"
  var whoAmISection = "I am a third year Computer Science student looking to kick start my career in the IT industry as I will be eligible to graduate at the start of November. I love to work with a good team of passionate people who are able to work well together. I want to be able to develop a good relationship with my co-workers. I believe having a good relationship with co-workers promotes productivity and increases morale. I really enjoy learning new things from people who have walked the walk. Being able to utilise more senior people's knowledge is my favourite way to learn. In the future I want to be able to share my experience through teaching. I want to teach maths, physics and computer science at lower decile schools in the hope that I can inspire kids to do well and further their education."

  var myHobbyTitle = "My Hobbies!"
  var myHobbySection = "I have a few cool hobbies! I love taking my bike out on trail rides! I love playing my guitar! I love reading books! I play probably way too many video games! and..... ahhh... I think that's it really. Here's a picture we took on a trail ride a few months ago."

  

  return (
    <div className="App">
      <MainMenuHeader/>
      <video id="videoPlayer" class="mainMenu__backgroundVideo" width="1920" height="1080" autoPlay muted loop>
        <source src={backGround} type="video/mp4"/>
      </video>
      <div class="mainMenu__overVideoText">
        <h2>What you see here is a quick website I made to challenge myself. Its pretty much just a cv with some other information about me.</h2>
      </div>
      <Entry title={whoAmITitle} paragraph ={whoAmISection} picture ={familyPic} order={"right"}/>
      <Entry title={myHobbyTitle} paragraph ={myHobbySection} picture ={trailRide} order={"left"}/>
      <Quals/>
    </div>
  );
}

export default App;
