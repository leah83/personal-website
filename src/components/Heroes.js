import React from "react";
import lisa from "../media/Lisa_Fernandes.jpeg"
import '../styles/Heroes.css';
const Heroes = () => {
    return (
      <section id="home" className="about-me">
        <div className="profile-image">
          <img src={lisa} alt="Lisa" className="profile-image" />
        </div>
        <div className="content">
          <div><h1>Hello! I'm Lisa Fernandes</h1></div>
          <div className="description">
            <p>
              As an aspiring AI Engineer with a passion for blending human creativity with machine
              intelligence, I am driven by the pursuit of innovation and technical excellence.
              My background in Computer Science has equipped me with a deep understanding of 
              both theoretical and practical aspects of technology, enabling me to explore and develop
              cutting edge solutions.
            </p>
            
            <h3>My Expertise Includes:</h3>
            <ul>
              <li>Full-Stack Development: Building robust and scalable web applications.</li>
              <li>Machine Learning & Deep Learning: Desiging and implementing models to solve complex problems.</li>
              <li>Natural Language Processing: Leveraging AI to understand and generate human language.</li>
            </ul>
            
            <p className="personal-note">
              When I'm not coding or exploring new technological advancements, you'll find me curled up with a good
              book, baking, or learning new characters in Japanese. My passion for learning and creativity extends 
              beyond the digital realm, driving me to continually seek out new experiences and knowledge.
            </p>
          </div>
        </div>
        {/* 
        
        <div className="content">
          
          
        </div> */}
      </section>
    );
  };
  
  export default Heroes;