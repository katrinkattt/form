import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../redux/authAction'

const Authorization = () => {
  const [login, setLogin] = useState('')
  const [pass, setPass] = useState('')
  const [errLogin, setErrLogin] = useState(false)
  const { isAutorizate } = useSelector(state => state.auth)

  const dispatch = useDispatch()
  const loginHandler = () => {
    dispatch(fetchData(login, pass)).then(() => {
      if (isAutorizate === false) {
        setErrLogin(true)
      }
    })
  }
  return (
    <div className="main_authorization">
      <div className="title">Авторизация</div>
      <form noValidate autoComplete="off">
        <div className="input">
          <TextField
            error={errLogin}
            onChange={(e) => setLogin(e.target.value)}
            helperText={errLogin ? 'неверный логин или пароль' : false}
            value={login}
            label="логин"
            variant="outlined"
          />
        </div>
        <div className="input">
          <TextField
            error={errLogin}
            onChange={(e) => setPass(e.target.value)}
            helperText={errLogin ? 'неверный логин или пароль' : false}
            value={pass}
            label="пароль"
            type="password"
            variant="outlined"
           />
        </div>
      </form>
      <div className="btn">
        <Button variant="outlined" onClick={loginHandler} color="primary">войти</Button>
      </div>
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
export default Authorization
