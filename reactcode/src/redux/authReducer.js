import axios from 'axios'

export const initialState = {
  pass: '',
  name: '',
  isAutorizate: false
}

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'UPDATE_USER':
      return { ...state, ...payload }

    default:
      return state
  }
}

export const getData = (name, pass) => {
  axios.get(`http://localhost:8000/users?name=${name}&password=${pass}`)
    .then((res) => res)
}
