/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Head from './head'

const Repo = (props) => {
  const { username } = useParams()
  return (
    <div>
      <div>
        {props.repo.map(it => {
        return <div key={it.id}> <Link to={`/${username}/${it.name}`}> {it.name} </Link> </div>     
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
