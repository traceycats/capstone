import AcidBase from './AcidBase';
import Thermodynamics from './Thermodynamics';
import Intermolecular from './Intermolecular';
import { useState } from 'react';

export default function Lessons() {

    // acid base toggle
    const [showAcid, setShowAcid] = useState(false);
    
    const toggleAcid = event => {
        setShowAcid(!showAcid)
        setShowInter(false)
        setShowTherm(false)
    }

    // thermodynamics toggle
    const [showTherm, setShowTherm] = useState(false);
    
    const toggleTherm = event => {
        setShowTherm(!showTherm)
        setShowAcid(false)
        setShowInter(false)
    }

    // intermolecular toggle
    const [showInter, setShowInter] = useState(false);
    
    const toggleInter = event => {
        setShowInter(!showInter)
        setShowAcid(false)
        setShowTherm(false)
    }


    return (
        <div id="lessons">
            <div id="lessonButtons">
                <button class="lessonButton" onClick={toggleInter}>what are intermolecular forces?</button>
                <button class="lessonButton" onClick={toggleAcid}>what's an acid and what's a base?</button>
                <button class="lessonButton" onClick={toggleTherm}>what does thermodynamics even mean?</button>
            </div>
                {showAcid && <AcidBase />}
                {showInter && <Intermolecular />}
                {showTherm && <Thermodynamics />}
       
        </div>
    );
}