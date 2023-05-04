import About from "./About";
import { useState } from "react";
import References from "./References";

export default function Footer() {

  const [openAbout, setShowA] = useState(false)
  const [openReferences, setShowR] = useState(false)

  const toggleAbout = event => {
    setShowA(!openAbout);
    console.log("open about " + openAbout)
  }

  const toggleReferences = event => {
    setShowR(!openReferences)
    console.log("open references")
  }

  return (
    <footer>
      a capstone project by tracey burruss
      <br/>Virginia Commonwealth University // UNIV 499 // Spring 2023
      <div id="infoButtonContainer">      
        <button onClick ={toggleAbout}>read more</button>
        {openAbout && <About />}
        <button onClick={toggleReferences}>references</button>
        {openReferences && <References />}
      </div>
      <small>All emojis designed by OpenMoji – the open-source emoji and icon project. License: CC BY-SA 4.0</small>
    </footer>
  );
}