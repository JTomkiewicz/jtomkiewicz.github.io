import './App.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <div className="d-flex h-100 text-center text-white bg-dark body-div">
      <div className="cover-container d-flex w-100 h-100 mx-auto flex-column">
        <Header />
        <MainPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
