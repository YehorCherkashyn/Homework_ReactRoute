import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Main = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title"> Main </div>
          <Link to="/dashboard/profile/aea4272a-232b-436d-beaf-0edebae2c172"> Go To Profile</Link>
          <Link to="/dashboard/"> Go To Root </Link>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main

// /dashboard/main

// Внутри должно быть три элемента

// div с id="title" и текстом Main
// ссылка(реакт) с навигацией /dashboard/profile/aea4272a-232b-436d-beaf-0edebae2c172 и текстом "Go To Profile"
// ссылка(реакт) с навигацией /dashboard и текстом "Go To Root"