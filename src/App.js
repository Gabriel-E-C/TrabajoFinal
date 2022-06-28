import './App.css';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetail from './components/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        
        <Routes>
          <Route path='/' element = {<ItemListContainer />} />
          <Route path='/home' element = {<ItemListContainer />} />
          <Route path='/Category/:category' element = {<ItemListContainer />} />
          <Route path='/Item/:id' element = {<ItemDetailContainer/>}/>
        </Routes>
      
        
      </BrowserRouter>
    </>
  );
}

export default App;
