import { useState } from 'react';

export default function About() {

    const [showAbout, setHide] = useState(true);

    const closeAbout = event => {
        setHide(false);
        console.log("close about")
    }

    return (
        <>
        {showAbout && 
        <div id="infoContainer">
            <div id="about">
            <h2>about this project</h2>
                <p>This website is an interdisciplinary research based project for my capstone class at Virginia Commonwealth University. This project started out as researching issues within my disciplines,
                computer science and chemistry. I found that </p>
                <p>Research has shown that chemistry would benefit from an interdisciplinary approach, especially in terms of chemistry education. 
                Some researchers say that connecting chemistry to more “everyday” examples could help students understand the more complex concepts in chemistry (Sjöström, & Talanquer, V). 
                Combining my knowledge of computer science with my knowledge of chemistry, I would like to create a simple website which will detail how different concepts in general 
                chemistry show up in common, everyday life.</p>
                <p>I chose a website for a couple of reasons. One being that I am most familiar with them, as web design is how I first became interested in programming, and it is 
                where I have most of my experience. The other reason is that I believe they are generally more accessible than mobile applications, as they are not device specific 
                and don’t require a mobile device. The other reason is that research has shown that interactive media can be beneficial to students when it comes to understanding 
                material that may be more difficult to visualize (Martinez, et al). Most research works with technologies such as virtual reality and eye tracking technology (Bernholt, et al). A website would be a much more simple way to implement interactive media. However, there has been evidence that just making a game out of
                learning can benefit students. An article published in the Journal of Research in Science Technology details a study which found that gamification of class material has benefits 
                to cognition, retention, and motivation (Hu, et al). Adding game like elements to my website, such as achievements for navigating to certain pages, experience points for 
                scrolling, or hidden easter eggs, can encourage users to stay a little while longer and interact with the content more.
                </p>
                <p>For this project, I learned the React Javascript library. This required reading a lot of documentation and working through tutorials. </p>
                {/* <img src={design} id="design" alt="basic design of the website, including color palette and buttons"></img> */}
                <button onClick={closeAbout} class="closeButton">close</button>
            </div>
        </div>
        }
        </>
        );
    }

