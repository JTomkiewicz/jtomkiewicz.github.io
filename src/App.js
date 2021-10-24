import './App.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="d-flex h-100 text-center text-white bg-dark body-div">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Header />
        <div>Hello world</div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
