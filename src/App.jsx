import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css';
import { Numbering, RevenueCard, RevenueCard2 } from './components/revenueCard';
import { People } from './components/People';
import { Dashboard } from './BIgComponents/Dashboard';
import { TotalIncome } from './components/TotalIncome';
import { Mid } from './BIgComponents/Mid';
import { Head } from './components/Head';
import { Sidebar } from './components/sideBar';
import { Right } from './components/RightBar';


function App() {

  return (<div>
    <Head></Head>
    <div className='grid grid-cols-8'>
      <div className='col-span-1'>
        <Sidebar> </Sidebar>
      </div>
      <div className='col-span-5'>
        <Mid ></Mid>
      </div>
      <div className='col-span-2'>
        <Right></Right>
      </div>
      
    </div>
  </div>

  )
}

export default App