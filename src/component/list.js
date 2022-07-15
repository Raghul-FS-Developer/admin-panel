import React from 'react'
import '../style/list.scss'
import Sidebar from './sidebar'
import Navbar from './navbar'
import Datatable from './datatable'

function List({title,link}) {
  return (
    <div className='list'>
      <Sidebar/>
      <div className='listContainer'>
        <Navbar/>
        <Datatable title={title} link={link}/>
      </div>
    </div>
  )
}

export default List