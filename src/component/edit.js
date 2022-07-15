import React ,{useEffect, useState} from 'react'
import '../style/new.scss'
import Sidebar from './sidebar'
import Navbar from './navbar'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined'
import axios from 'axios'
import db from '../db'
import { useNavigate, useParams } from 'react-router-dom'
function Edit({ title}) {
   

const EditUser =()=>{

    const params = useParams()

    useEffect(()=>{
        
        const getData =async()=>{
                let res = await axios.get(`${db}findUser/${params.userId}`)
                setUsername(res.data.username)
                setAge(res.data.age)
                setAddress(res.data.address)
                setMobile(res.data.mobile)
                setEmail(res.data.email)
                setCountry(res.data.country)
                setOptions(res.data.status)
                setFile(res.data.image)
                setImage(res.data.image)
        }
        getData()
    },[])


  const nav = useNavigate()

  const[file,setFile] = useState()
  const[image,setImage] = useState()
  const[username,setUsername] = useState('')
  const[age,setAge] = useState('')
  const[mobile,setMobile] = useState('')
  const[address,setAddress] = useState('')
  const[email,setEmail] = useState('')
  const[country,setCountry] = useState('')
  const[options,setOptions] = useState('active')
  
 const formdata = new FormData()

 formdata.append("image",file)
 formdata.append("username",username)
 formdata.append("age",age)
 formdata.append("mobile",mobile)
 formdata.append("address",address)
 formdata.append("email",email)
 formdata.append("country",country)
 formdata.append("status",options)

  const handleSubmit=async(e)=>{
    e.preventDefault()
    const res = await axios.put(`${db}edituser/${params.userId}`,formdata)
    if(res.status === 200){
      nav('/users')
    }

  }

  const handleImage = (e)=>{
    setFile(e.target.files[0]);
    setImage('')
  }
  return (
    <div className='new'>
      <Sidebar/>
      <div  className='newContainer'>
        <Navbar/>
        <div className='top'>
          <h1>{title}</h1>
        </div>
        <div className='bottom'>
          <div className='left'>

            <img src={image?image : file? URL.createObjectURL(file) :'https://www.portmelbournefc.com.au/wp-content/uploads/2022/03/avatar-1.jpeg'} alt='' className=''/>
          </div>
          <div className='right'>
            <form onSubmit={handleSubmit}>
              <div className='formInput'>
                <label htmlFor='file'>
                 Image: <DriveFolderUploadOutlinedIcon className='icon'/>
                </label>
                <input type='file' id='file' onChange={handleImage} accept='*/image' style={{display:'none'}}/>
               </div>
              <br/>
             
              <select onChange={e=>setOptions(e.target.value)} value={options} style={{cursor:"pointer"}}>
                <option value='active'>active</option>
                <option value='passive'>passive</option>
              </select>
              


              <div className='formInput' >
                <label>Username</label>
                <input type='text' placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
              </div>
              <div className='formInput' >
                <label>Age</label>
                <input type='text' placeholder='age' value={age}  onChange={(e)=>setAge(e.target.value)}/>
              </div>
              <div className='formInput' >
                <label>Email</label>
                <input type='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              <div className='formInput' >
                <label>Mobile</label>
                <input type='text' placeholder='Mobile' value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
              </div>
              <div className='formInput' >
                <label>Address</label>
                <input type='text' placeholder='Address' value={address} onChange={(e)=>setAddress(e.target.value)}/>
              </div>
              <div className='formInput' >
                <label>Country</label>
                <input type='text' placeholder='Country'value={country}  onChange={(e)=>setCountry(e.target.value)}/>
              </div>
 
              
              <button type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}


const EditProduct =()=>{

  let params = useParams()
    useEffect(()=>{
        
        const getData =async()=>{
                let res = await axios.get(`${db}findproduct/${params.productId}`)
                setHead(res.data.title)
                setCategory(res.data.category)
                setPrice(res.data.price)
                setDescription(res.data.description)
           
                setOptions(res.data.status)
                setFile(res.data.image)
                setImage(res.data.image)
        }
        getData()
    },[])


  const nav = useNavigate()

    const [image,setImage] = useState('')
  const[file,setFile] = useState()
  const[head,setHead] = useState('')
  const[category,setCategory] = useState('')

  const[price,setPrice] = useState('')

  const[description,setDescription] = useState('')
  const[options,setOptions] = useState('available')
  
 const formdata = new FormData()

 formdata.append("image",file)
 formdata.append("title",head)
 formdata.append("category",category)
 formdata.append("price",price)
 formdata.append("description",description)
 formdata.append("status",options)


const handleImage = (e)=>{
    setFile(e.target.files[0]);
    setImage('')
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()
    const res = await axios.put(`${db}editproduct/${params.productId}`,formdata)
    if(res.status === 200){
      nav('/products')
    }

  }
  return (
    <div className='new'>
      <Sidebar/>
      <div  className='newContainer'>
        <Navbar/>
        <div className='top'>
          <h1>{title}</h1>
        </div>
        <div className='bottom'>
          <div className='left'>
            <img src={image ? image : file? URL.createObjectURL(file) :'https://www.portmelbournefc.com.au/wp-content/uploads/2022/03/avatar-1.jpeg'} alt='' className=''/>
          </div>
          <div className='right'>
            <form onSubmit={handleSubmit}>
              <div className='formInput'>
                <label htmlFor='file'>
                 Image: <DriveFolderUploadOutlinedIcon className='icon'/>
                </label>
                <input type='file' id='file' onChange={handleImage} accept='*/image' style={{display:'none'}}/>
               </div>
              <br/>
             
              <select onChange={e=>setOptions(e.target.value)} value={options} style={{cursor:"pointer"}}>
                <option value='available'>available</option>
                <option value='soldout'>soldout</option>
              </select>
              


              <div className='formInput' >
                <label>Title</label>
                <input type='text' placeholder='title' value={head} onChange={(e)=>setHead(e.target.value)}/>
              </div>
              <div className='formInput' >
                <label>Category</label>
                <input type='text' placeholder='category' value={category} onChange={(e)=>setCategory(e.target.value)}/>
              </div>
              <div className='formInput' >
                <label>Price</label>
                <input type='text' placeholder='price' value={price} onChange={(e)=>setPrice(e.target.value)}/>
              </div>
              <div className='formInput' >
                <label>Description</label>
                <input type='text' placeholder='description' value={description} onChange={(e)=>setDescription(e.target.value)}/>
              </div>
              
 
              
              <button type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
  return(
    <>
    {
     title == "Edit Product"?
     <EditProduct/>: 
      <EditUser/>

}
    </>
  )
}

export default Edit