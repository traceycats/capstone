import { useState } from 'react';

export default function References() {

    const [showReferences, setHide] = useState(true);

    const closeReferences = event => {
        setHide(false);
        console.log("close references")
    }

    return (
        <>
        {showReferences && 
        <div id="infoContainer">
        <div id="references">
            <h2>references</h2>
            <h3>interdisciplinary research</h3>

            <p> Bernholt, Broman, K., Siebert, S., & Parchmann, I. (2019). 
            Digitising Teaching and Learning - Additional Perspectives for Chemistry Education. Israel Journal of Chemistry, 59(6-7), 
            554-564. <a href="https://doi.org/10.1002/ijch.201800090">doi</a></p>

            <p>Hu, Gallagher, T., Wouters, P., van der Schaaf, M., Kester, L., Leerstoel Kester, Education and Learning: Development in Interaction, & Leerstoel van Gog. (2022). 
            Game-based learning has good chemistry with chemistry education: A three-level meta-analysis. Journal of Research in Science Teaching, 59(9), 
            1499-1543. <a href="https://doi.org/10.1002/tea.21765">doi</a></p>

            <p>Sjöström, & Talanquer, V. (2014). Humanizing Chemistry Education: From Simple Contextualization to Multifaceted Problematization. Journal of Chemical Education, 91(8),
             1125-1131. <a href="https://doi.org/10.1021/ed5000718">doi</a></p>

            <p>Martinez, B. L., Kararo, A. T., Parent, K. N., Underwood, S. M., & Matz, R. L. (2021). 
            Creating and testing an activity with interdisciplinary connections: entropy to osmosis. Chemistry Education Research and Practice, 22(3), 
            683-696. <a href="https://doi.org/10.1039/d0rp00353k">doi</a></p>

            <p>  Woo, Hudson, B. T., Mori, J. C., Ngan, E. S. M., Pak, W.-Y., & Haines, R. S. (2007). 
            Interdisciplinary Educational Collaborations: Chemistry and Computer Science. Journal of Chemical Education, 84(6), 
            967-970. <a href="https://doi.org/10.1021/ed084p967">doi</a> </p>

            <h3>lessons research</h3>
            <p>Flowers P., Theopold, K., Langley, R., Robinson W.R., PhD. (2019) Chemistry 2e. OpenStax. <a href="https://openstax.org/books/chemistry-2e/">access online</a></p>
            <button onClick={closeReferences} class="closeButton">close</button>
            </div>

        </div>
        }
        </>
    )
}