import React from "react";
import Logo from "../component/Logo";
import Navigation from "../component/Navigation";

const About = () => {
  return (
    <div>
      <Logo />
      {/* Navigation permet de nous faire naviguer entre les navlink */}
      <Navigation />
      {/* Navigation permet de nous faire naviguer entre les navlink */}
      <h1>A propos</h1>
      <p>Réalisation d'un tp pour apprendre les bases de REACT JS </p>
      <br />
      <ul>
        <li>Component</li>
        <li>Appel API</li>
        <li>Props</li>
        <li>States/Effect</li>
      </ul>
    </div>
  );
};

export default About;
