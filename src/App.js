
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import AllRest from './Components/AllRest/AllRest';
import View from './Components/ViewRest/View';
import { Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
          <Routes>
            {/*http://localhost:3000 - all restaurnt view*/}
            <Route path='/' element={<AllRest/>}/>
            <Route path='/view/:id' element={<View/>}/>
          </Routes>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
