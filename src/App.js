import './App.css';

import { BrowserRouter, Route, Routes} from 'react-router-dom';
import ContactMe from './components/ContactMe';
import Home from './components/Home';


function App() {

  return (
    <>    
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/contact' element = {<ContactMe/>}/>
        </Routes>
        </BrowserRouter>  

    </>
  );
}

export default App; 
