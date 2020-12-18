const initialState = {
  id: 0,
  userName: '',
  number: '',
  password: '',
  avatar: '',
  isAutorizate: false
}

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'UPDATE_USER':
      return { ...state, ...payload }
    case 'GET_DATA':
      return { ...state, ...payload }
    case 'PUSH_DATA':
      return { ...state, ...payload }
    case 'LOGOUT':
      return { ...state, isAutorizate: false }
    case 'UPLOAD_FILE':
      return { ...state, ...payload }
    default:
      return state
  }
}
