import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>National Identity Agent</title>
        <meta property="og:title" content="National Identity Agent" />
      </Helmet>
    </div>
  )
}

export default Home
