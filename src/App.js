import logo from './logo.svg';
import Header from './Header';
import Footer from './Footer';
import Lessons from './Lessons';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h2>real world chemistry</h2>
                <p>this project integrates computer science and chemistry to introduce users to general chemistry concepts, <b>intermolecular forces</b>, <b>acid and bases</b>, and <b>thermodynamics</b>.</p> 
                click on one of the buttons below to begin a lesson! happy learning!
              <Lessons />
      </main>
      <Footer />
    </div>
  );
}

export default App;
