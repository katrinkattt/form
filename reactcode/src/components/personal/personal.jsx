import React from 'react'
import Button from '@material-ui/core/Button'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/authAction'

export default function Personal() {
  const { userName } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const exit = () => {
    dispatch(logout())
  }

  return (
    <div className="main_personal">
      <div className="title">Личный кабинет</div>
      <div className="title">{ userName }</div>
      <NavLink to="/authorization"><Button variant="outlined" onClick={() => exit()} color="primary">выйти</Button></NavLink>
    </div>
  )
}
