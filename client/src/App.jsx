import logo from './logo.svg';
import './styles.css';
import Header from './components/Header';
// import Body from './components/Body'
import ContactInfo from './components/ContactInfo';
import Bottom from './components/Bottom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

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
      {/* <Body /> */}
      <ContactInfo />
      <Bottom />
  
    </div>
    
  );
}

export default App;
