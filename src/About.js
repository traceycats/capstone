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
                computer science and chemistry. </p>
                <h3>interdisciplinary research</h3>
                <p>Research has shown that chemistry would benefit from an interdisciplinary approach, especially in terms of chemistry education. 
                Some researchers say that connecting chemistry to more “everyday” examples could help students understand the more complex concepts in chemistry (Sjöström, & Talanquer, V). 
                Combining my knowledge of computer science with my knowledge of chemistry, I set out to create a simple web app that would introduce ways that chemistry concepts could be 
                considered interdisciplinary.</p>
                <p>I chose a website/web app for a couple of reasons. One being that I am most familiar with them, as web design is how I first became interested in programming, and it is 
                where I have most of my experience. The other reason is that I believe they are generally more accessible than mobile applications, as they are not device specific 
                and do not require a mobile device. Another reason is that research has shown that interactive media can be beneficial to students when it comes to understanding 
                material that may be more difficult to visualize (Martinez, et al). Most research works with technologies such as virtual reality and eye tracking technology (Bernholt, et al). A website would be a much more simple way to implement interactive media. However, there has been evidence that just making a game out of
                learning can benefit students. An article published in the Journal of Research in Science Technology details a study which found that gamification of class material has benefits 
                to cognition, retention, and motivation (Hu, et al). Adding game like elements to my website, such as achievements for navigating to certain pages, experience points for 
                scrolling, or hidden easter eggs, can encourage users to stay a little while longer and interact with the content more.
                </p>
                <h3>process of building the website</h3>
                <p>In the beginning I wanted to make a periodic table website, going into detail about each element's use. I quickly realized this would be near impossible given the time available to work on it, so I decided
                 to focus on concepts that I struggled with in general chemistry. In my preliminary research I found that gamification of learning often helps students, so I wanted to make a website that would incorporate
                  game-like elements. I consulted my old notes as well as online textbooks to make mini lessons, and found a way each concept appeared in real life.</p>
                <h3>image removed</h3>
                <p class="imageText">The planned design of this website, made using Figma</p>
                <p>After starting to build my project, I had struggled with having to have a lot of repeated mark-up in my HTML, which was tedious and not best practice. I decided to try and use this project 
                to learn React, which is a JavaScript library used and maintained by Facebook. I read a lot of the documentation to help me get a good understanding before jumping in. This did end up making the process of building
                 the website easier, however I ran into new issues. My plan for achievements was to have pop ups, but no matter what I tried they would not work in production. I could also not figure out how to have a variable 
                 update and re-render the page. I ended up leaving these out of the submitted work, but I plan on returning in the future to try and make these features functional. There was one small element of gamification 
                 that I was able to go primitively, which is the "easter egg" alerts if the user clicks on the scientist emoji logo or the test tube emoji.</p>
                <h3>so... what?</h3>
                <p>This project has personally helped me bridge gaps in my disciplines. Not only that, it is only a small example of how computer science can benefit computer science. 
                In an article exploring interdisciplinary projects in computer science and chemistry, researchers discussed how students from both departments worked together to develop software for a spectrometer. 
                They found that the computer science students not only learned skills relevant to their field, but also expanded their knowledge of chemistry in the process (Woo, et al). Computer science has the potential to open up huge 
                possibilities for chemistry, especially in terms of education. My website, for example - personally making it helped deepen my understanding of some chemistry concepts, as well as connected the dots between things I did not 
                previously realize as chemistry at work!  Another article dealing with chemistry education discusses the use of virtual learning labs compared to physical lab, and researchers found that virtual labs have the potential to 
                help students with foundational knowledge, especially in instances where there are complex machines and methods (Simoneta, et al). Giving the students a virtual “playground” where there were no time constraints, risk of 
                breaking something, or limited attempts, allowed them to spend that energy actually absorbing the fundamentals of the lab. This shows that software can help students who find chemistry intimidating, by allowing them to explore in a “safe” environment.</p>
                <p>Although most of my project and research focused on chemistry education, the benefits of computer science in chemistry does not stop there. Software being used in the lab can always be optimized and further 
                developed to help scientists with their work. For example, the freeware Gabedit, a graphical user interface for computational chemistry software (Allouche). Making software easier to navigate through graphical 
                interface helps scientists keep their focus on their projects. Another more complex project called Q-Chem, allows for many different facilities, including molecule modeling and computerized calculations (Epifanovsky, et al). 
                Software like Q-Chem helps scientists avoid tedious and easily automated tasks like calculations, which also helps them prevent mathematical human error. Computer science opens up scientists' time and brain power to think 
                about moving forward, rather than focusing on getting their math right. </p>
                <p>Overall, this project was a learning experience and an exploration of my skills. I have discovered that I enjoy sharing chemistry with people, that working with new programming libraries is fun and frustrating simultaneously,
                 and that my interdisciplinarity is wide reaching and full of potential. </p>
                <p>I hope you enjoyed :) Check out the references page for sources.</p>
                <button onClick={closeAbout} class="closeButton">close</button>
            </div>
        </div>
        }
        </>
        );
    }

