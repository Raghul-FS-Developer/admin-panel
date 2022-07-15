import React from 'react'
import '../style/home.scss'
import Chart from './chart'
import Featured from './featured'
import Navbar from './navbar'
import Sidebar from './sidebar'
import Table from './table'

import Widgets from './widget'

function Home() {
  return (
    <div className='home'>
      <Sidebar/>
      <div className='homeContainer'>
        <Navbar/>
        <div className='widgets'>
          <Widgets type="user"/>
          <Widgets type="order"/>
          <Widgets type="earning"/>
          <Widgets type="balance"/>
        </div>
        <div className='charts'>
          <Featured/>
          <Chart title='Last 6 Months (Revenue)' aspect={2 / 1}/>
        </div>
        <div className='listContainer'>
          <div className='listTitle'>Latest Transactions</div>
          <Table/>
        </div>
      </div>
    </div>
  )
}

export default Home