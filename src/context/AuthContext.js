import React, { createContext, useReducer, useEffect } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
	user: JSON.parse(localStorage.getItem("user")) || null,
}

export const AuthContext = createContext(INITIAL_STATE);

const AuthProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

	useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

	return (
		<AuthContext.Provider value={{ user: state.user, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
