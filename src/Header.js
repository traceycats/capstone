import {default as scientist} from './scientist.svg';

export default function Header() {

        return (
          <header>
              <img src={scientist} id="scientistLogo" alt="a scientist"></img>
              <h1>chem everywhere</h1>
              {/* <User />
              <ToastContainer /> */}
          </header>
        );
    }
    