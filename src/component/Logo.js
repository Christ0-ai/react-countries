import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      {/* Les images importées depuis la balise img sont accessibles dans "public" */}
      <img src="./favicon.ico" alt="logo react"></img>
      <h3>React World</h3>
    </div>
  );
};

export default Logo;
