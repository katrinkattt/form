import axios from 'axios'

export const fetchUser = name => dispatch => {
  axios.get(`http://localhost:8000/users?name=${name}`)
    .then((res) => {
      dispatch({ type: 'UPDATE_USER', payload: { ...res.data[0], isAutorizate: true } })
    })
}

// export const fetchPass = pass => dispatch => {
//   axios.get(`http://localhost:8000/users?password=${pass}`)
//     .then((res) => {
//       dispatch({ type: 'UPDATE_USER', payload: res.data[0] })
//     })
// }