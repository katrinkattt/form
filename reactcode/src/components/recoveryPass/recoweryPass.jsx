import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import '../authorization/authorization.css'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

export default function RecoweryPass(props) {
  // const { } = useSelector(state=>state.auth)
  // const state = {

  // }
  const dispatch = useDispatch()

  return (
    <div className="main_authorization">
      <div className="title">Востановить пароль</div>
      <form className="lkd" noValidate autoComplete="off">
        <div className="input"><TextField value="" onChange={(e) => {  }} label='логин' variant="outlined" /></div>
        <div className="input"><TextField value="" onChange={(e) => {  }} label='код' variant="outlined" /></div>
      </form>
      <NavLink to="/personal"><Button variant="outlined" color="primary">войти</Button></NavLink>
    </div>
  )
}
