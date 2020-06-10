/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Header = () => {
  const { username, reponame } = useParams()
  if (username && reponame) {
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
  return (
    <div>
      <div id="repository-name"> {username} </div>
      <Link id="go-back" to="/">
        {' '}
        Back to search{' '}
      </Link>
    </div>
  )
}

export default React.memo(Header)
