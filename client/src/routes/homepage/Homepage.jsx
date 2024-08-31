import { Link } from "react-router-dom";
import "./homepage.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");

  return (
    <div className="homepage">
      <img src="/orbital.png" alt="" className="orbital" />
      <div className="left">
        <h1>AI ChatBot</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>
          AI ChatBot is a powerful tool that helps you to create, analyze and
          debug your code with ease.
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot" />
          <div className="chat">
            <img
              src={
                typingStatus === "human1"
                  ? "/Human01.jpeg"
                  : typingStatus === "human2"
                  ? "/Human02.jpeg"
                  : "bot.png"
              }
              alt=""
            />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Human:How I can learn to code?",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot:You can learn to code by practicing regularly.",
                2000,
                () => {
                  setTypingStatus("human2");
                },
                "Human2:How I can build a logic for a programming?",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot:You can build a logic for a program by breaking down the problem into smaller parts.",
                2000,
                () => {
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/Aichat.jpeg" alt="" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
