import React from "react";
import Countries from "../component/Countries";
import Logo from "../component/Logo";
import Navigation from "../component/Navigation";

const Home = () => {
  return (
    <div>
      <Logo />
      {/* Navigation permet de nous faire naviguer entre les navlink */}
      <Navigation />
      {/* Navigation permet de nous faire naviguer entre les navlink */}
      <Countries />
    </div>
  );
};

export default Home;
