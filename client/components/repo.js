/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Repo = (props) => {
  return (
    <div>
      <div>
        {props.repo.map(it => {
        return <div key={it.id}> <Link to={`/${props.username}/${it.name}`}> {it.name} </Link> </div>     
      })} 
      </div>
    </div>
  )}

Repo.propTypes = {}

export default Repo

// /dashboard/main

// Внутри должно быть три элемента

// div с id="title" и текстом Main
// ссылка(реакт) с навигацией /dashboard/profile/aea4272a-232b-436d-beaf-0edebae2c172 и текстом "Go To Profile"
// ссылка(реакт) с навигацией /dashboard и текстом "Go To Root"
