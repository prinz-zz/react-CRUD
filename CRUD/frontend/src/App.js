import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Add from './pages/Add';
import Books from './pages/Books';
import Upadte from './pages/Update';

function App() {
  return (
   <div className='app'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Books/> }/>
        <Route path='/add' element={ <Add/> }/>
        <Route path='/update/:id' element={ <Upadte/> }/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
