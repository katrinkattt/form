import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useDispatch, useSelector } from 'react-redux'
import validator from 'validator/es'
import { NavLink } from 'react-router-dom'
import { fetchNum } from '../../redux/authAction'

export default function RecoweryPass() {
  const dispatch = useDispatch()
  const { isAutorizate } = useSelector(state => state.auth)
  const [number, setNumber] = useState('')
  const [errPhone, setErrPhone] = useState(false)
  const [code, setCode] = useState('')
  const [i, setI] = useState(0)
  const addCod = '5464'
  const errList = ['', 'номер введен не верно', 'на данный номер не привязано аккаунта']

  const addCode = (num) => {
    if (validator.isMobilePhone(num, ['ru-RU'])) {
      alert(addCod)
      setErrPhone(false)
    } else {
      setI(1)
      setErrPhone(true)
    }
  }
  const recowery = (num, cod) => {
    if (cod === addCod) {
      dispatch(fetchNum(num))
    }
    if (isAutorizate === false) {
      setI(2)
      setErrPhone(true)
    }
  }
  return (
    <div className="main_authorization">
      <div className="title">Востановить пароль</div>
      <form noValidate autoComplete="off">
        <div className="input"><TextField value={number} error={errPhone} onChange={(e) => setNumber(e.target.value)} helperText={errList[i]} label="телефон" variant="outlined" /></div>
        <div className="input"><TextField value={code} onChange={(e) => setCode(e.target.value)} label="код" variant="outlined" /></div>
        <div className="btn">
          <Button variant="outlined" onClick={() => addCode(number)} color="primary">выслать код </Button>
        </div>
      </form>
      <div className="btn">
        <Button onClick={() => recowery(number, code)} variant="outlined" color="primary">войти</Button>
      </div>
      <div className="text">
        <NavLink to="/autorization"><Button variant="outlined" color="primary">назад</Button></NavLink>
      </div>
    </div>
  )
}
