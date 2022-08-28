import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import {ReactComponent as HeroBg} from './images/bg-tablet-pattern.svg'
import Bennefits from './Bennefits';
import Feedbacks from './Feedbacks';
import Shut from './Shut';
import Footer from './Footer';

function App() {
  return (
    <div className="App bg-succes ">
      <div className='top-corner' > <HeroBg />  </div>
      <div className='first-half' >
        <Navbar />
        <Hero />
        <Bennefits />
      </div>
      <Feedbacks />
      <Shut />
      <Footer />
    </div>
  );
}

export default App;
