/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { history } from '../redux'

const InputView = () => {
  const [user, setUser] = useState('')
  const onChange = (e) => {
    const newUser = e.target.value
    setUser(newUser)
  }
  return (
    <div>
      <input id="input-field" type="text" value={user} onChange={onChange} />
      <button id="search-button" type="button" onClick={() => history.push(`/${user}`)}>
        Go to repo
      </button>
    </div>
  )
}

InputView.propTypes = {}

export default InputView

// /dashboard/

// Внутри должно быть три элемента

// div с id="title" и текстом Dashboard
// ссылка(реакт) с навигацией /dashboard/profile/aea4272a-232b-436d-beaf-0edebae2c172 и текстом "Go To Profile"
// ссылка(реакт) с навигацией /dashboard/main и текстом "Go To Main"
