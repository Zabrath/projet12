import React, { useEffect } from "react";
import "./Home.scss";
import Logo from "../../assets/test/LogoBlanc400px2.png";

function Home() {
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "particles.js";
  //   script.src = "app.js";
  //   script.async = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <main id="home">
      <div className="testHome" id="particles-js">
        <span className="textHome">Laura MALGHEM <br /><img src={Logo} alt="" /> Développeuse WEB </span>
        
      </div>

    </main>
  );
}

export default Home;
