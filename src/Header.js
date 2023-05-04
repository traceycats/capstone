import {default as scientist} from './scientist.svg';
import User from './User';

export default function Header() {

        return (
          <header>
              <img src={scientist} id="scientistLogo" alt="a scientist"></img>
              <h1>chem everywhere</h1>
              <User />
              {/* <ToastContainer /> */}
          </header>
        );
    }
    