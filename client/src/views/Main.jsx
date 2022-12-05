import {useState} from 'react'
import Product from '../components/Product'
import ProductsList from '../components/ProductsList'

const Main = (props) => {
  const [products,setProducts] = useState([]);
  const removeFromDom = productId => { 
    setProducts(products.filter(product => product._id !== productId))
  }
  return (
    <div>
      <Product products={products} setProducts={setProducts} />
      <hr />
      <ProductsList products={products} setProducts={setProducts} removeFromDom={removeFromDom}/>
    </div>
  )
}

export default Main; 