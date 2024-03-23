import React, { useEffect } from "react";
import "./Home.scss";
import Logo from "../../assets/test/LogoBlanc400px2.png";

function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "particles.js";
    script.src = "app.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main id="home">
      <div className="pageHome" id="particles-js">
      <span></span>
        <div className="pageHome__text"> <img src={Logo} alt="" /> <h1>Laura MALGHEM Développeuse WEB</h1> </div>
            
      </div>

    </main>
  );
}

export default Home;
