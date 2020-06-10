import React from 'react'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'

import Header from './components/Header'
import Router from './router/Router'
import { useScrollToTop } from './hooks/dom.hooks'
import { useAppContext } from './hooks/app.hooks'
import { FETCHING } from './state/actionTypes'

const Layout = styled.div.attrs({ className: 'container mt-12' })`
  padding-left: 5rem;
  padding-right: 5rem;
  padding-bottom: 5rem;
  padding-top: 5rem;
`

const LoadingContainer = styled.div.attrs({ className: 'fixed' })`
  top: 50%;
  left: 50%;
  margin-top: -150px;
  margin-left: -150px;
  z-index: 1000;
`

function App() {
  useScrollToTop()
  const {
    state: { status },
  } = useAppContext()
  return (
    <>
      <Header />
      <Layout>
        {status === FETCHING && (
          <LoadingContainer>
            <Loader type="BallTriangle" color="#00BFFF" height={300} width={300} />
          </LoadingContainer>
        )}
        <Router />
      </Layout>
    </>
  )
}

export default App
