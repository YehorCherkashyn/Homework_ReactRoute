/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'

import Head from './head'

const Description = (props) => {
  return (
    <div id="description">
      <ReactMarkdown source={props.project} />
    </div>
  )
}

Description.propTypes = {}

export default Description

// /dashboard/profile/:user

// Внутри должно быть четыре элемента

// ссылка(реакт) с навигацией /dashboard и текстом "Go To Root"
// ссылка(реакт) с навигацией /dashboard/main и текстом "Go To Main"
// div с id="title" и текстом Profile
// div c id="username" и текстом, которые берется из параметра роута(см лекцию)
// надо использовать
