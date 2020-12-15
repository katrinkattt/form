import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { store } from './redux/index.js'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
reportWebVitals()
