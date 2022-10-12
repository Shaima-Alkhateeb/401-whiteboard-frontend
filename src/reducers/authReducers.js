const userInfo = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : {};
const token = localStorage.getItem('token') ? localStorage.getItem('token') : '';

export const initialState = {
    user: {},
    token: '',
    errorMessages: null,
    isAuth: token ? true : false,
    loading: false
}

console.log(initialState)

export const AuthReducer = (state , action) => {
    switch (action.type) {
        case 'REQUEST_LOGIN':
            return {
                ...state,
                loading: true
              }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                user: action.payload,
                token: action.payload.token,
                loading: false,
                isAuth: true
              }
        case 'LOGIN_FAILED':
            return {
                ...state,
                loading: false,
                errorMessage: action.payload,
                isAuth: false
              }
        case 'LOGOUT':
            return {
                ...state,
                user: {},
                isAuth: false,
                token: ''
              }
        default:
            throw new Error(`Unkown action type: ${action.type}`)
    }
}