import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { NavLink, withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchData } from '../../redux/authAction'
import { store } from '../../redux'

const Authorization = () => {
  const [login, setLogin] = useState('')
  const [pass, setPass] = useState('')

  store.getState()

  const dispatch = useDispatch()
  const loginHandler = (name, pas) => {
    dispatch(fetchData(name, pas))
  }
  return (
    <div className="main_authorization">
      <div className="title">Авторизация</div>
      <form noValidate autoComplete="off">
        <div className="input"><TextField onChange={(e) => setLogin(e.target.value)} value={login} label="логин" variant="outlined" /></div>
        <div className="input"><TextField onChange={(e) => setPass(e.target.value)} value={pass} label="пароль" variant="outlined" /></div>
      </form>
      <Button variant="outlined" onClick={() => loginHandler(login, pass)} color="primary">войти</Button>
      <div className="btn">
        <div className="text">нет аккаунта? зарегистрируйтесь</div>
        <NavLink to="/registration"><Button variant="outlined" color="primary">зарегистрироваться</Button></NavLink>
      </div>
      <div className="btn">
        <NavLink to="/recowerypass"><Button variant="outlined" color="primary">забыли пароль</Button></NavLink>
      </div>
    </div>
  )
}
export default withRouter(Authorization)
