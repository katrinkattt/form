import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { NavLink } from 'react-router-dom'
import '../authorization/authorization.css'
import { useDispatch } from 'react-redux'
import { pushData } from '../../redux/authAction'

export default function Registration() {
  const [login, setLogin] = useState('')
  const [number, setNumber] = useState('')
  const [pass, setPass] = useState('')

  const dispatch = useDispatch()
  const regisration = (name, numer, pas) => {
    dispatch(pushData(name, numer, pas))
  }
  return (
    <div className="main_registration">
      <div className="title">Регистрация</div>
      <form noValidate autoComplete="off">
        <div className="input"><TextField label="имя" value={login} onChange={(e) => setLogin(e.target.value)} variant="outlined" /></div>
        <div className="input"><TextField label="номер" value={number} onChange={(e) => setNumber(e.target.value)} variant="outlined" /></div>
        <div className="input"><TextField label="пароль" value={pass} onChange={(e) => setPass(e.target.value)} variant="outlined" /></div>
      </form>
      <NavLink to="/personal"><Button onClick={() => regisration(login, number, pass)} variant="outlined" color="primary">зарегистрироваться</Button></NavLink>
    </div>
  )
}
