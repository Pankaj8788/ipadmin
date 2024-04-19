// authReducer.js

const initialState = {
  isAuthenticated:
    typeof window !== "undefined" && localStorage.getItem("jwtToken")
      ? true
      : false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      if (typeof window !== "undefined") {
        localStorage.setItem("jwtToken", action.payload.token);
      }
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case "LOGOUT":
      if (typeof window !== "undefined") {
        localStorage.removeItem("jwtToken");
      }
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
