import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import { useSelector } from 'react-redux'
import Authorization from './components/authorization/authorization.jsx'
import Registration from './components/registration/registration.jsx'
import RecoweryPass from './components/recoveryPass/recoweryPass'
import Personal from './components/personal/personal.jsx'

const App = () => {
  const { isAutorizate } = useSelector(state => state.auth)
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Switch>
          {isAutorizate ? (
            <>
              <Route path="/personal" render={() => <Personal />} />
              <Redirect to="/personal" />
            </>
          ) : (
            <>
              <Route path="/autorization" render={() => <Authorization />} />
              <Route path="/registration" render={() => <Registration />} />
              <Route path="/recowerypass" render={() => <RecoweryPass />} />
              <Redirect to="/autorization" />
            </>
          )}

        </Switch>
      </Container>
    </div>
  )
}

export default App
