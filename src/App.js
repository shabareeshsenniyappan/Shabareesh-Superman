
import './App.css';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Header from './Components/Header';
import background from './Images/u2.jpg'

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <Header/>
      <Form/>
      <Footer/>

    </div>
  );
}

export default App;
