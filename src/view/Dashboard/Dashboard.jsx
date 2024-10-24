import React from 'react'
import Layout from '../../Layout/Layout'
import GameDetailsCard from '../../Components/DashboardComponents/GameDetailsCard'

const Dashboard = () => {
  return (
    <Layout>
     <div className='grid gap-2 p-3 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3'>
        <GameDetailsCard/>
        <div className="bg-slate-100 dark:bg-[#1F2937] max-w-full">game</div>
        <div className="bg-slate-100 dark:bg-[#1F2937] max-w-full">game</div>

     </div>
    </Layout>
  )
}

export default Dashboard