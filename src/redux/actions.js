export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const loginSuccess = (userRole) => ({
  type: LOGIN_SUCCESS,
  
});

export const logout = () => ({
  type: LOGOUT,
});

