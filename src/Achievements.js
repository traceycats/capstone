import { default as sample } from './sample.svg';
// import { toast } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";


export default function Achievements() {

    return(
        <div id="achievements">
            <img src={sample} class="locked" alt="sample achievement"></img>
            {/* <img src={thermo} class={style}></img>
            <img src={scientist} class={style}></img> */}
        </div>
    )
}

// export const notify = () => {
//     toast("achievement unlocked!", {
//         icon: "🧪",
//         position: toast.POSITION.BOTTOM_RIGHT
//     })
// }
