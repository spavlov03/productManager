import {useState} from 'react'
import Product from '../components/Product'
import ProductsList from '../components/ProductsList'

const Main = (props) => {
  const [products,setProducts] = useState([])
  return (
    <div>
      <Product products={products} setProducts={setProducts} />
      <hr />
      <ProductsList products={products} setProducts={setProducts} />
    </div>
  )
}

export default Main