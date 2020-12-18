import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Container from '@material-ui/core/Container'
import Authorization from './components/authorization/authorization.jsx'
import Registration from './components/registration/registration.jsx'
import RecoweryPass from './components/recoveryPass/recoweryPass.jsx'
import Personal from './components/personal/personal.jsx'

const App = () => {
  const { isAutorizate } = useSelector(state => state.auth)

  return (
    <div className="App">
      <Container maxWidth="sm">
        <Switch>
          {isAutorizate ? (
            <>
              <Route path="/personal" component={Personal} />
              <Redirect to="/personal" />
            </>
          ) : (
            <>
              <Route path="/autorization" component={Authorization} />
              <Route path="/registration" component={Registration} />
              <Route path="/recowerypass" component={RecoweryPass} />
              <Redirect to="/autorization" />
            </>
          )}
        </Switch>
      </Container>
    </div>
  )
}
export default App
