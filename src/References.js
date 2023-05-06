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

            <p> Allouche. (2011). Gabedit—A graphical user interface for computational chemistry softwares. Journal of Computational Chemistry, 32(1), 174-182. <a href="https://doi.org/10.1002/jcc.21600">doi</a></p>

            <p> Bernholt, Broman, K., Siebert, S., & Parchmann, I. (2019). 
            Digitising Teaching and Learning - Additional Perspectives for Chemistry Education. Israel Journal of Chemistry, 59(6-7), 
            554-564. <a href="https://doi.org/10.1002/ijch.201800090">doi</a></p>

            <p>Caño de las Heras, Kensington-Miller, B., Young, B., Gonzalez, V., Krühne, U., Mansouri, S. S., & Baroutian, S. (2021). 
            Benefits and Challenges of a Virtual Laboratory in Chemical and Biochemical Engineering: Students' Experiences in Fermentation. Journal of Chemical Education, 98(3), 866-875.
            <a href="https://doi.org/10.1021/acs.jchemed.0c01227">doi</a></p>

            <p>Epifanovsky, Gilbert, A. T. B., Feng, X., Mardirossian, N., Coons, M. P., Dempwolff, A. L., Horn, P. R., Jacobson, L. D., Kussmann, J., Lange, A. W., Lao, K. U., Levine, D. S., Morrison, A. F., Plasser, F., 
            Rehn, D. R., Alam, B., Aldossary, A., Andersen, J. H., Begam, K., … Carreras, A. (2021). Software for the frontiers of quantum chemistry: An overview of developments in the Q-Chem 5 package. 
            The Journal of Chemical Physics, 155(8), 084801-084801. <a href="https://doi.org/10.1063/5.0055522">doi</a></p>

            <p>Hu, Gallagher, T., Wouters, P., van der Schaaf, M., Kester, L., Leerstoel Kester, Education and Learning: Development in Interaction, & Leerstoel van Gog. (2022). 
            Game-based learning has good chemistry with chemistry education: A three-level meta-analysis. Journal of Research in Science Teaching, 59(9), 
            1499-1543. <a href="https://doi.org/10.1002/tea.21765">doi</a></p>

            <p>Krylov, Windus, T. L., Barnes, T., Marin-Rimoldi, E., Nash, J. A., Pritchard, B., Smith, D. G. A., Altarawy, D., Saxe, P., Clementi, C., Crawford, T. D., Harrison, R. J., Jha, S., Pande, V. S., & Head-Gordon, T. 
            (2018). Perspective: Computational chemistry software and its advancement as illustrated through three grand challenge cases for molecular science. The Journal of Chemical Physics, 149(18), 
            180901-180901. <a href="https://doi.org/10.1063/1.5052551">doi</a></p>

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

            <p>Stewart, Ken. "laws of thermodynamics". Encyclopedia Britannica,  https://www.britannica.com/science/laws-of-thermodynamics. Accessed 4 May 2023.</p>
            <button onClick={closeReferences} class="closeButton">close</button>
            </div>

        </div>
        }
        </>
    )
}