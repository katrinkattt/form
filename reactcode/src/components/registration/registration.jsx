import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import validator from 'validator/es'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { NavLink } from 'react-router-dom'
import { pushData } from '../../redux/authAction'

export default function Registration() {
  const [login, setLogin] = useState('')
  const [number, setNumber] = useState('')
  const [pass, setPass] = useState('')
  const [errors, setErrors] = useState({
    phone: false,
    name: false,
    pass: false
  })
  const dispatch = useDispatch()
  const regisration = () => {
    if (validator.isMobilePhone(number, ['ru-RU']) && login !== '' && pass !== '') {
      dispatch(pushData(login, number, pass))
    } else {
      setErrors({
        phone: !validator.isMobilePhone(number, ['ru-RU']) && 'номер введен не верно',
        name: login === '' && 'данное поле обязательно для заполнения',
        pass: pass === '' && 'данное поле обязательно для заполнения'
      })
    }
  }
  return (
    <div className="main_registration">
      <div className="title">Регистрация</div>
      <form noValidate autoComplete="off">
        <div className="input">
          <TextField error={errors.name} label="имя" value={login} onChange={(e) => setLogin(e.target.value)} helperText={errors.name} variant="outlined" />
        </div>
        <div className="input">
          <TextField error={errors.phone} label="номер" value={number} onChange={(e) => setNumber(e.target.value)} helperText={errors.phone} variant="outlined" />
        </div>
        <div className="input">
          <TextField error={errors.pass} label="пароль" value={pass} onChange={(e) => setPass(e.target.value)} type="password" helperText={errors.pass} variant="outlined" />
        </div>
      </form>
      <div className="btn">
        <Button onClick={regisration} variant="outlined" color="primary">зарегистрироваться</Button>
      </div>
      <div className="text">
        <NavLink to="/autorization"><Button variant="outlined" color="primary">назад</Button></NavLink>
      </div>
    </div>
  )
}
