export const register = (credentials) => {
    return {
      type: "LOGIN",
      payload: credentials,
    };
  };


  export const logout = () => {
    return {
      type: "LOGOUT",
    };
  };
  
    