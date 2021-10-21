import './Contact.css';
import ContactsHeader from '../../components/contactsHeader/contactsHeader';
import backGround from '../../assets/ContactsLoop.mp4';
import { FaLinkedin, FaGithub, FaEnvelope} from "react-icons/fa";
function Contact() {
  
  return (
    <div id="contact" className="Contact">
      <ContactsHeader/>
      <video id="contact__videoPlayer" class="contact__backgroundVideo" width="1920" height="1080" autoPlay muted loop>
        <source src={backGround} type="video/mp4"/>
      </video>


      <div class="contact__mainDisplay">
        <div class ="contact__mainText">
          <h1>Wanna get a hold of me for whatever reason?</h1>
          <p>Maybe it's to talk motorbikes? or maybe it's for me to do some work for you? Whatever it is here are a bunch of links where you can reach me!</p>
        </div>

        <div class="contact__contactInfo">
          
          <a class="contact__contactInfo__text" href="https://www.linkedin.com/in/james-hulena-482367212/"><FaLinkedin/> Linkedin</a>

          <a class="contact__contactInfo__text" href="https://github.com/Guesswhoitis"> <FaGithub/> GitHub</a>
          <p class="contact__contactInfo__text"><FaEnvelope/>Jameshulena1@gmail.com</p>
          

        </div>
      </div>
    </div>
  );
}

export default Contact;
