import {useState} from 'react'
import axios from 'axios';

const Product = (props) => {
  const {products,setProducts} = props;
  const [title,setTitle] = useState("");
  const [price,setPrice] = useState(0); 
  const [description,setDescription] = useState("");

  const onSubmitHandler = (e) => { 
    e.preventDefault(); 
    axios.post('http://localhost:8000/api/product', {
      title,
      price,
      description
    })
      .then(res=>{
        console.log(res); 
        console.log(res.data); 
        setProducts([...products,res.data])
      })
      .catch(err=>console.log(err))
  }
  return (
    <div className='d-flex flex-column w-50 mx-auto'>
      <h1>Product Manager</h1>
      <form onSubmit={onSubmitHandler}>
        <p className='bg-light w-50 mx-auto d-flex justify-content-between p-2'>
          <label>Title</label>
          <input type="text" onChange={ (e) => setTitle(e.target.value)}/>
        </p>
        <p className='bg-light w-50 mx-auto d-flex justify-content-between p-2'>
          <label>Price</label>
          <input type="text" onChange={ (e) => setPrice(e.target.value)}/>
        </p>
        <p className='bg-light w-50 mx-auto d-flex justify-content-between p-2'>
          <label>Description</label>
          <input type="text" onChange={ (e) => setDescription(e.target.value)}/>
        </p>
        <input className="btn btn-light w-25" type="submit" value="Create"/>
      </form>
      
    </div>
  )
}

export default Product;