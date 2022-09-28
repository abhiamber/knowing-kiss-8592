import { createContext, useState } from "react";


 export let AuthContext=createContext()

function ContextProvider({children}){

    let [AuthState,setAuthState]=useState({isAuth:false,token:null})

    function handleLogin(data){
        setAuthState({isAuth:true,token:data})
    }

    function handleLogOut(data){
setAuthState({isAuth:false,token:null})

    }

return <AuthContext.Provider value={{AuthState,handleLogin,handleLogOut}} >

{children}
</AuthContext.Provider>

}

export default ContextProvider