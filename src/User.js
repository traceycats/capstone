import { default as sample } from './sample.svg';
import Achievements from './Achievements';
import { useState } from 'react';

export default function User() {
    const [ showAchievements, setShow ] = useState(false)
    
    const openAchievements = event => {
        setShow(!showAchievements)
        console.log("open achievements")
    }


    function sayOops() {
        alert("don't break me!")
    }

    return (
        <div id="user">
            <button onClick={sayOops} id="userIcon"><img src={sample} alt="test tube" id="testTube"></img></button> 
            <p id="greeting">hello !</p>
            <div id="xp">xp: 0</div>
            <button id="achievementButton" onClick={openAchievements}>achievements</button>
            {showAchievements && <Achievements />}
        </div>
        );
}
