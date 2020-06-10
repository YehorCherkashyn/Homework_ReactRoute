/* eslint-disable no-return-await */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Switch, Route, useParams } from 'react-router-dom'
import Header from './header'

import InputView from './input'
import Repo from './repo'
import Description from './description'

const Home = () => {
  const { username, reponame } = useParams()
  const [repo, setRepo] = useState([])
  const [project, setProject] = useState()

   useEffect(() => {
    axios.get(`https://api.github.com/users/${username}/repos`).then(
      (res) => {
        setRepo(res.data)
      },
    )
    return () => {}
  }, [username])
  
  
  useEffect(() => {
    axios
      .get(`https://raw.githubusercontent.com/${username}/${reponame}/master/README.md`)
      .then((res) => {
        setProject(res.data)
      })
  }, [username, reponame])

  return (
    <div>
      <div> {username && <Header />} </div>
      <div> 
        <Switch>
          <Route
            exact
            path="/"
            component={() => <InputView />}
          />
          <Route exact path="/:username" component={() => <Repo username={username} repo={repo} />} />
          <Route exact path="/:username/:reponame" component={() => <Description project={project} />} />
        </Switch> 
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
