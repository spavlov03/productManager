import {useEffect,useState} from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'

const ProductUpdate = (props) => {
  const {id} = useParams();
  const [firstName,setFirstName] = useState(); 
  const [lastName,setLastName] = useState();
  const navigate = useNavigate();

  useEffect(()=> { 
    axios.get(`http://localhost:8000/api/product/edit/${id}`)
      .then(res=> { 
        setFirstName(res.data.firstName); 
        setLastName(res.data.lastName); 
      })
      .cath(err=>console.log(err))
  },[])

  

  return (
    <div>ProductUpdate</div>
  )
}

export default ProductUpdate