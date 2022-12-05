import './App.css';
import Main from './views/Main'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ProductDetails from './components/ProductDetails'
import ProductUpdate from './components/ProductUpdate';



function App() {
  
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/"/>
          <Route element={<ProductDetails/>} path="/:id"/>
          <Route element={<ProductUpdate />} path="/edit/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
