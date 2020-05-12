import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Dashboard = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title"> Dashboard </div>
          <Link to="/dashboard/profile/aea4272a-232b-436d-beaf-0edebae2c172"> Go To Profile</Link>
          <Link to="/dashboard/main"> Go To Main </Link>
        </div>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard

// /dashboard/

// Внутри должно быть три элемента

// div с id="title" и текстом Dashboard
// ссылка(реакт) с навигацией /dashboard/profile/aea4272a-232b-436d-beaf-0edebae2c172 и текстом "Go To Profile"
// ссылка(реакт) с навигацией /dashboard/main и текстом "Go To Main" 