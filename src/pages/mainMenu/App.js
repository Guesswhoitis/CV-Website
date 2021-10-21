import './App.css';
import MainMenuHeader from '../../components/mainMenuHeader/mainMenuHeader';
import backGround from './backgroundLoop.mp4'
import WhoAmI from '../../components/whoAmI/whoAmI';
function App() {
  return (
    <div className="App">
      <MainMenuHeader/>
      <video id="videoPlayer" class="mainMenu__backgroundVideo" width="1920" height="1080" autoPlay muted loop>
        <source src={backGround} type="video/mp4"/>
      </video>
      <div class="mainMenu__overVideoText">
        <h2>What you see here is a quick website I made to challenge myself. Its pretty much just a cv with some other information about me.</h2>
      </div>
      <WhoAmI id="whoAmI"/>

    </div>
  );
}

export default App;
