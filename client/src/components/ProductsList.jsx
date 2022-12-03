import {useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ProductsList = (props) => {
  const {products,setProducts} = props;

  useEffect(() => { 
    axios.get("http://localhost:8000/api/products")
    .then((res)=> {
      console.log(res.data); 
      setProducts(res.data);
    })
    .catch(err=> console.log(err))
  },[])
  return (
    <div>
      {
        products.map((product,index) => { 
        return <div key={index} className="border border-info w-25 mx-auto mb-2">
          <Link to={`/${product._id}`}>{product.title}</Link>
          </div>
      })}
    </div>
  )
}

export default ProductsList