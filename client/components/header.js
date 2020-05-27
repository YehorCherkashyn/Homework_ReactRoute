/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const Header = () => {
  const { username, repo } = useParams()
  return (
    <div>
      <div id="repository-name"> {username} </div>
      <Link id="go-back" to="/">
        {' '}
        Back to search{' '}
      </Link>
      <div>
        <Link id="go-repository-list" to={`/${username}`}>
          {' '}
          Back to repository list{' '}
        </Link>
      </div>
    </div>
  )
}

export default React.memo(Header)
