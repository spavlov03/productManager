import './App.css';
import Main from './views/Main'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Product from './components/Product';
import ProductDetails from './components/ProductDetails'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/"/>
          <Route element={<ProductDetails />} path="/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
