import axios from 'axios';
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = (props) => {
  const [product,setProduct] = useState({})
  const {id} = useParams();
  useEffect(() => { 
    axios.get(`http://localhost:8000/api/products/${id}`)
    .then(res=> {
      console.log(res.data); 
      setProduct(res.data);
    })
    .catch(err=>console.log(err));
  },[])
  return (
    <div className='mt-2 p-2 bg-light w-25 mx-auto'>
      <p className='fw-bold'>{product.title}</p>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  )
}

export default ProductDetails