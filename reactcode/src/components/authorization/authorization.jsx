import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import './authorization.css'
import { NavLink, withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../../redux/authAction'
import { initialState } from '../../redux/authReducer'

const Authorization = (props) => {
  const [login, setLogin] = useState('')
  const [pass, setPass] = useState('')
  useSelector(state => console.log(state))

  const dispatch = useDispatch()
  const loginHandler = name => {
    dispatch(fetchUser(name))
  }

  return (
    <div className="main_authorization">
      <div className="title">Авторизация</div>
      <form className="lkd" noValidate autoComplete="off">
        <div className="input"><TextField onChange={(e) => setLogin(e.target.value)} value={login} label="логин" variant="outlined" /></div>
        <div className="input"><TextField onChange={(e) => setPass(e.target.value)} value={pass} label="пароль" variant="outlined" /></div>
      </form>
      <Button variant="outlined" onClick={() => loginHandler(login, pass)} color="primary">войти</Button>
      <div>
        <div className="text">нет аккаунта? зарегистрируйтесь</div>
        <NavLink to="/registration"><Button variant="outlined" color="primary">зарегистрироваться</Button></NavLink>
      </div>
      <div>
        <NavLink to="/recowerypass"><Button variant="outlined" color="primary">забыли пароль</Button></NavLink>
      </div>
    </div>
  )
}

export default withRouter(Authorization)
