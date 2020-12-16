import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useDispatch } from 'react-redux'
import { fetchUser } from '../../redux/authAction'

export default function RecoweryPass() {
  const dispatch = useDispatch()
  const [login, setLogin] = useState('')
  const [code, setCode] = useState('')

  const recowery = name => {
    if (code !== '') {
      dispatch(fetchUser(name))
    }
  }
  const addCode = () => {
    setCode('546427')
  }

  return (
    <div className="main_authorization">
      <div className="title">Востановить пароль</div>
      <form noValidate autoComplete="off">
        <div className="input"><TextField value={login} onChange={(e) => setLogin(e.target.value)} label="логин" variant="outlined" /></div>
        <div className="input"><TextField value={code} label="код" variant="outlined" /></div>
        <div className="btn">
          <Button variant="outlined" onClick={() => addCode()} color="primary">выслать код </Button>
        </div>
      </form>
      <div className="btn">
        <Button onClick={() => recowery(login)} variant="outlined" color="primary">войти</Button>
      </div>

    </div>
  )
}
