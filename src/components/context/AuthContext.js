import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'

const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const   [loading, setLoading] = useState(true);


    useEffect(() =>{
        const token = localStorage.getItem('token');
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            fetchUserData(token);
        }
        else{
            setLoading(false);
        }
    }, [])


    const fetchUserData = async (token) => {
        try {
            const response = await axios.get('http://localhost:3000/z_coder/dashboard')
            setUser(response.data);
        } catch (error) {
            console.log(error)
        } finally{
            setLoading(false);
        }



    }

     const loggedin = async (login) => {
        try {
            const response = await axios.post('http://localhost:3000/z_coder', login);
            const {access, refresh} = response.data;
            localStorage.setItem('token', access)
            localStorage.setItem('refreshToken', refresh)

            axios.defaults.headers.common['Authorization'] = `Bearer ${access}`;
            await fetchUserData(access);
        } catch (error) {
            console.log(error)
        } finally{
            setLoading(false);
        }


    }

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('accessToken');
        delete axios.defaults.headers.common['Authorization'];
        setUser(null);

    }

    return(
        <AuthContext.Provider value = {{user, loggedin, logout, loading}}>
            {children}
        </AuthContext.Provider>
    )


}

export default AuthContext;