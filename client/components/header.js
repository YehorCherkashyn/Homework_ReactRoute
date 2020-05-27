/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <div>
      <div id="repository-name"> {props.username} </div>
      <Link id="go-back" to="/">
        {' '}
        Back to search{' '}
      </Link>
      <div>
        <Link id="go-repository-list" to={`/${props.username}`}>
          {' '}
          Back to repository list{' '}
        </Link>
      </div>
    </div>
  )
}

export default React.memo(Header)
