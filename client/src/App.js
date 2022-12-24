import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Form from './Components/Form';
import List from './Components/List';
import Display from './Components/Display';
import Update from './Components/Update';

function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<List/>}/>
          <Route path='/pets/new' element={<Form/>}/>
          
          <Route path='/pets/:id/edit' element={<Update/>}/>
          <Route path='/pets/:id' element={<Display/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
