import './Contact.css';
import Header from '../../components/header/header';
import backGround from '../../assets/ContactsLoop.mp4';
import { FaLinkedin, FaGithub, FaEnvelope, FaDiscord } from "react-icons/fa";
import SendAMessage from '../../components/sendAMessage/sendAMessage';
import Footer from '../../components/footer/footer';


function Contact() {
  return (
    <div id="contact" className="Contact">
      <Header />
      <video id="contact__videoPlayer" class="contact__backgroundVideo" width="1920" height="1080" autoPlay muted loop>
        <source src={backGround} type="video/mp4" />
      </video>


      <div class="contact__mainDisplay">
        <div class="contact__mainText">
          <h1>Wanna get a hold of me for whatever reason?</h1>
          <p>Maybe it's to talk motorbikes? or maybe you have some work for me to do? Whatever it is here are a bunch of links where you can reach me!</p>
        </div>

        <div class="contact__contactInfo">
          <div class="contact__contactInfo__entry">
            <a class="contact__contactInfo__text" href="https://www.linkedin.com/in/james-hulena-482367212/">Linkedin</a>
            <FaLinkedin />
          </div>

          <div class="contact__contactInfo__entry">
            <a class="contact__contactInfo__text" href="https://github.com/Guesswhoitis">  GitHub</a>
            <FaGithub />
          </div>

          <div class="contact__contactInfo__entry">
            <p class="contact__contactInfo__text">Timbo#0806</p>
            <FaDiscord />
          </div>

          <div class="contact__contactInfo__entry">
            <p class="contact__contactInfo__text">Jameshulena1@gmail.com</p>
            <FaEnvelope />
          </div>

        </div>
      </div>

      <SendAMessage/>
      <Footer/>
    </div>
  );
}

export default Contact;
