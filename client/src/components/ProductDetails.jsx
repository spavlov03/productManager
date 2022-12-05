import axios from 'axios';
import {useState,useEffect} from 'react'
import { useParams,Link,useNavigate } from 'react-router-dom'


const ProductDetails = (props) => {
  const [product,setProduct] = useState({})
  const {id} = useParams();
  const navigate = useNavigate();
  useEffect(() => { 
    axios.get(`http://localhost:8000/api/products/${id}`)
    .then(res=> {
      // console.log(res.data); 
      setProduct(res.data);
    })
    .catch(err=>console.log(err));
  },[])
  const deleteProduct = (productId) => { 
    axios.delete(`http://localhost:8000/api/products/${productId}`)
      .then(()=>{
        navigate("/")
      })
      .catch(err=>console.log(err))
  }
  return (
    <div className='mt-2 p-2 bg-light w-25 mx-auto'>
      <p className='fw-bold'>{product.title}</p>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <Link className='ms-1 btn btn-outline-warning' to={`/edit/${product._id}`}>Edit</Link> 
      <button className='btn btn-outline-danger' onClick={(e) => {deleteProduct(product._id)}} >Delete</button>
    </div>
  )
}

export default ProductDetails