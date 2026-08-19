import { createContext } from "react";
import axios from 'axios'
import { useState } from "react";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { io } from 'socket.io-client'

const backendUrl=import.meta.env.VITE_BACKEND_URL;
axios.defaults.baseURL=backendUrl;

export const AuthContext=createContext();

export const AuthProvider=({ children })=>{
    const [token, setToken]=useState(localStorage.getItem("token"));
    const [authUser, setAuthUser]=useState(null);
    const [onlineUsers, setOnlineUsers]=useState([]);
    const [socket, setSocket]=useState(null);

    // Check if user is Authenticated and if so, set the user data and connet the socket
    const CheckAuth = async () => {
        if (!token) {
            return;
        }
        try {
            const { data } = await axios.get("/api/auth/check");

            if (data.success) {
                setAuthUser(data.user);
                connectSocket(data.user);
            }
        } catch (error) {
            console.log("CheckAuth error:", error.response?.data || error.message);
        } 
    };

    // login function to handle user authentication and socket connection
    const login=async(state, credentials)=>{
        try {
            const {data}=await axios.post(`/api/auth/${state}`,credentials);
            if(data.success){
                setAuthUser(data.userData);
                connectSocket(data.userData);
                axios.defaults.headers.common["token"]=data.token;
                setToken(data.token);
                localStorage.setItem("token",data.token)
                toast.success(data.message)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    // logout function to handle user logout and socket disconnection
    const logout=async ()=>{
        localStorage.removeItem("token");
        setToken(null);
        setAuthUser(null);
        setOnlineUsers([]);
        axios.defaults.headers.common["token"]=null;
        toast.success("logged out successfully")
        socket?.disconnect();
    }

    // Update profile function to handle user profiles updates
    // const updateProfile=async(body)=>{
    //     try{
    //         const {data}=await axios.put("/api/auth/update-profile",body);
    //         if(data.success){
    //             setAuthUser(data.user);
    //             toast.success("profile updated successfully");
    //             return true;
    //         }
    //         toast.error(data.message);
    //         return false;
    //     } catch(error){
    //         toast.error(error.message);
    //         return false;
    //     }
    // }

    const updateProfile = async (body) => {
        try {
            const { data } = await axios.put(
                "/api/auth/update-profile",
                body
            );

           console.log("UPDATE RESPONSE:", data);

        console.log("UPDATED USER:", data.user);
        console.log("PROFILE PIC:", data.user?.profilePic);

            if (data.success) {
                console.log("SETTING AUTH USER:", data.user);

                setAuthUser(data.user);

                return true;
            }

            return false;

        } catch (error) {
            console.log(
                "PROFILE UPDATE ERROR:",
                error.response?.data || error.message
            );

            return false;
        }
    };

    // Connect socket function to handle socket connection and online users updates
    const connectSocket=(userData)=>{
        if(!userData || socket?.connected) return;
        const newSocket=io(backendUrl, {
            query: {
                userId: userData._id,
            }
        });
        newSocket.connect();
        setSocket(newSocket);

        newSocket.on("getOnlineUsers",(userIds)=>{
            setOnlineUsers(userIds);
        })
    }

    useEffect(()=>{
        if(token){
            axios.defaults.headers.common["token"]=token;
            CheckAuth();
        }
    },[token])

    const value={
        axios,
        authUser,
        onlineUsers,
        socket,
        login,
        logout,
        updateProfile,
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}