import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { NavLink } from 'react-router-dom'
import '../authorization/authorization.css'

const formInputs = [
  {
    label: 'Имя',
    id: 'nameUser'
  }
]

export default function Registration() {
  return (
    <div className="main_registration">
      <div className="title">Регистрация</div>
      <form className="lkd" noValidate autoComplete="off">
        <div className="input"><TextField label="имя" variant="outlined" /></div>
        <div className="input"><TextField label="номер" variant="outlined" /></div>
        <div className="input"><TextField label="пароль" variant="outlined" /></div>
      </form>
      <NavLink to="/personal"><Button variant="outlined" color="primary">зарегистрироваться</Button></NavLink>
    </div>
  )
}
