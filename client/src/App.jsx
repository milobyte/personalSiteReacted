import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './styles.css';
import Header from './components/Header';
import Intro from './components/Intro'
import ContactInfo from './components/ContactInfo';
import Bottom from './components/Bottom';
import Navbar from './components/Navbar'
import WorkEntry from './components/WorkEntry';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* My Work */}
      <Header />
      <Navbar />
      <Intro />
      <WorkEntry />
      <ContactInfo />
      <Bottom />
  
    </div>
    
  );
}

export default App;
