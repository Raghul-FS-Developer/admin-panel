import React, { useEffect, useState } from 'react'
import '../style/single.scss'
import Sidebar from './sidebar'
import Navbar from './navbar'
import Chart from './chart'
import List from './table'
import axios from 'axios'
import db from '../db'
import { useNavigate, useParams } from 'react-router-dom'

function Single({domain}) {
 
  const UserSingle =()=>{

  
  const nav = useNavigate()
  const[ data,setData] = useState()

  const params = useParams()
  useEffect(()=>{
    const getData = async () => {

      const res = await axios.get(`${db}finduser/${params.userId}`);
      setData(res.data);


    };
  getData()
  },[])
  
  const handleEdit =(id)=>{
   
     nav(`/users/edit/${id}`)
  }
  return (
    <div className='single'>
      <Sidebar/>
      <div className='singleContainer'>
        <Navbar/>
        <div className='top'>
          <div className='left'>
            <div className='editButton' onClick={()=>handleEdit(data._id)}>Edit</div>
            <h1 className='title'>Information</h1>
            

              
            <div className='item'>
              <img src={data?.image ? data.image : 'https://www.portmelbournefc.com.au/wp-content/uploads/2022/03/avatar-1.jpeg'} alt='' className='itemImg'/>
            <div className='details'>
              <h1 className='itemTitle'>{data?.username}</h1>
              <div className='detailItem'>
                <span className='itemKey'>Email:</span>
                <span className='itemValue'>{data?.email}</span>
              </div>
              <div className='detailItem'>
                <span className='itemKey'>Phone:</span>
                <span className='itemValue'>{data?.mobile}</span>
              </div>
              <div className='detailItem'>
                <span className='itemKey'>Address:</span>
                <span className='itemValue'>{data?.address}</span>
              </div>
              <div className='detailItem'>
                <span className='itemKey'>Country:</span>
                <span className='itemValue'>{data?.country}</span>
              </div>
            </div>
            </div>
        
          </div>
          <div className='right'>
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)"/>
          </div>
        </div>
        <div className='bottom'>
        <h1 className='title'>Last Transactions</h1>
        <List/>
        </div>
      </div>
    </div>
  )
  }

const ProductSingle=()=>{
   
  const nav = useNavigate()
  const[ data,setData] = useState()

  const params = useParams()
  useEffect(()=>{
    const getData = async () => {

      const res = await axios.get(`${db}findproduct/${params.productId}`);
      setData(res.data);


    };
  getData()
  },[])
  
  const handleEdit =(id)=>{
   
     nav(`/products/edit/${id}`)
  }

  return (
    <div className='single'>
      <Sidebar/>
      <div className='singleContainer'>
        <Navbar/>
        <div className='top'>
          <div className='left'>
            <div className='editButton' onClick={()=>handleEdit(data._id)}>Edit</div>
            <h1 className='title'>Information</h1>
            

              
            <div className='item'>
              <img src={data?.image ? data.image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDF9695aEHL20tZNMzJ26nIGr5AYMKr_eaoxXWtDkngU8M8KXhqPQXkhyamMWJ1mvbeYU&usqp=CAU'} alt='' className='itemImg'/>
            <div className='details'>
              <h1 className='itemTitle'>{data?.title}</h1>
              <div className='detailItem'>
                <span className='itemKey'>description:</span>
                <span className='itemValue'>{data?.description}</span>
              </div>
              <div className='detailItem'>
                <span className='itemKey'>Category:</span>
                <span className='itemValue'>{data?.category}</span>
              </div>
              <div className='detailItem'>
                <span className='itemKey'>Price:</span>
                <span className='itemValue'>₹{data?.price}</span>
              </div>
             
            </div>
            </div>
        
          </div>
          <div className='right'>
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)"/>
          </div>
        </div>
        <div className='bottom'>
        <h1 className='title'>Last Transactions</h1>
        <List/>
        </div>
      </div>
    </div>
  )
}

  return(<>
  {domain == 'user' ? 
  <UserSingle/> :
  <ProductSingle/>
}
  </>)
}

export default Single