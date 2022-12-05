import {useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ProductsList = (props) => {
  const {removeFromDom,products,setProducts} = props;
  const deleteProduct = (productId) => { 
    axios.delete(`http://localhost:8000/api/products/${productId}`)
      .then(res=>{
        removeFromDom(productId)
      })
      .catch(err=>console.log(err))
  }

  useEffect(() => { 
    axios.get("http://localhost:8000/api/products")
    .then((res)=> {
      // console.log(res.data); 
      setProducts(res.data);
    })
    .catch(err=> console.log(err))
  },[])
  return (
    <div>
      {
        products.map((product,index) => { 
        return <div key={index} className="w-25 mx-auto mb-2">
          <Link to={`/${product._id}`} className="btn btn-outline-primary">{product.title}</Link>
          <Link className='ms-1 btn btn-outline-warning' to={`/edit/${product._id}`}>Edit</Link>
          <button className='ms-1 btn btn-outline-danger' onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
          </div>
      })}
    </div>
  )
}

export default ProductsList