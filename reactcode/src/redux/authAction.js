import axios from 'axios'

export const fetchUser = name => dispatch => {
  axios.get(`http://localhost:8000/users?name=${name}`)
    .then(({ data }) => {
      console.log(data.length)
      const payload = data.length > 0 ? { ...data[0], isAutorizate: true, userName: name } : { isAutorizate: false }
      dispatch({ type: 'UPDATE_USER', payload })
    })
}
export const fetchData = (name, pass) => dispatch => {
  axios.get(`http://localhost:8000/users?name=${name}&pass=${pass}`)
    .then(({ data }) => {
      console.log(data.length)
      const payload = data.length > 0 ? { ...data[0], isAutorizate: true, password: pass, userName: name } : { isAutorizate: false }
      dispatch({ type: 'GET_DATA', payload })
    })
}

export const logout = () => ({
  type: 'LOGOUT'
})

export const pushData = (name, numer, pass) => dispatch => {
  axios.get('http://localhost:8000/users')
    .then(({ data }) => {
      data.push({ 'name': { name }, 'fone-numer': { numer }, 'pass': { pass } })
      console.log(data.length)
      const payload = data.length > 0 ? { ...data[0], isAutorizate: true, password: pass, userName: name } : { isAutorizate: false }
      dispatch({ type: 'PUSH_DATA', payload })
    })
}
