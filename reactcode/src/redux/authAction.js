import axios from 'axios'

export const fetchNum = num => dispatch => {
  axios.get(`http://localhost:8000/users?number=${num}`)
    .then(({ data }) => {
      const payload = data.length > 0 ? { ...data[0], isAutorizate: true } : { isAutorizate: false }
      dispatch({ type: 'UPDATE_USER', payload })
    })
}
export const fetchData = (name, pass) => dispatch => axios
  .get(`http://localhost:8000/users?userName=${name}&password=${pass}`)
  .then(({ data }) => {
    const payload = data.length > 0 ? { ...data[0], isAutorizate: true } : { isAutorizate: false }
    dispatch({ type: 'GET_DATA', payload })
  })

export const logout = () => ({
  type: 'LOGOUT'
})

export const uploadImg = (file, id) => dispatch => {
  axios.patch(`http://localhost:8000/users/${id}`, { avatar: file }).then(({ data }) => {
    const payload = { ...data[0] }
    dispatch({ type: 'UPLOAD_FILE', payload })
    return data
  })
}
export const pushData = (name, num, pass) => dispatch => {
  axios.get('http://localhost:8000/users').then(({ data }) => {
    if (!data.find(x => (x.number === num || x.userName === name || data.lenght === x.id))) {
      axios.post('http://localhost:8000/users', { id: data.length, userName: name, number: num, password: pass, avatar: ' ' })
        .then(res => {
          const payload = { ...res.data, isAutorizate: true }
          dispatch({ type: 'PUSH_DATA', payload })
          return res.data
        })
    }
  })
}
