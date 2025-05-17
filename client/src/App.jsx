import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './styles.css';
import Header from './components/Header';
import Intro from './components/Intro'
import ContactInfo from './components/ContactInfo';
import Bottom from './components/Bottom';
import Navbar from './components/Navbar';
import WorkContainer from './components/workSection/WorkContainer';

function App() {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Miles Stanley</title>

        {/* Favicon */}
        <link rel="icon" href="images/favicon.ico" />
        {/* Google Font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Encode+Sans+Semi+Expanded&family=Press+Start+2P&family=Redressed&family=Josefin+Sans:ital,wght@1,300&family=Libre+Baskerville&family=Quicksand&display=swap" rel="stylesheet" />
      </head>
      <div className="App">
        {/* My Work */}
        <Header />
        <Navbar />
        <Intro />
        <WorkContainer />
        <ContactInfo />
        <Bottom />

      </div>
    </>
  );
}

export default App;
