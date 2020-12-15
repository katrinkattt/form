import { useState } from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import { NavLink } from 'react-router-dom'

export default function Personal() {
  const [userName, setUserName] = useState('')
  const fetch = () => {
    axios.get('http://localhost:8000/users')
      .then((res) => {
        setUserName(res.data[0].name)
      })
  }
  fetch()

  return (
    <div className="main_personal">
      <div className="title">Личный кабинет</div>
      <div className="title">{userName}</div>
      <NavLink to="/authorization"><Button variant="outlined" color="primary">выйти</Button></NavLink>
    </div>
  )
}