//import axios from 'axios'

const initialState = {
  password: '',
  userName: '',
  isAutorizate: false
}

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'UPDATE_USER':
      return { ...state, ...payload }
    case 'GET_DATA':
      return { ...payload }
    case 'PUSH_DATA':
      return { ...payload }
    case 'LOGOUT':
      return { ...state, isAutorizate: false }
    default:
      return state
  }
}
