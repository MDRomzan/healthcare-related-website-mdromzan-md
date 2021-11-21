import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    GithubAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,
    sendPasswordResetEmail,
    updateProfile
} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase=()=>{
    const [name,setName]=useState("")
    const [user,setUser]=useState({})
    const [error,setError]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [isloading,setLoading]=useState(true);
    const [isLogin,setIsLogin]=useState(false);

    const auth = getAuth();
    // all provider add 
     const googleProvider = new GoogleAuthProvider();
     const githubProvider = new GithubAuthProvider();

       // google sign in
    const googleSignInAuth=()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
        
    }
    // github sign in
    const githubSignInAuth=()=>{
         setLoading(true)
       signInWithPopup(auth, githubProvider)
       .then(result=>{
           console.log(result.user)
            setUser(result.user)
       })
       .finally(() => setLoading(false))
       .catch(error => {  
        setError(error.message);
       })
    }
    // handleRest password
    const handleResetPassword=()=>{
        sendPasswordResetEmail(auth,email)
        .then(result=>{})
        .catch(error=>{
            setError(error.message)
        })
    }
    // toggle login
    const toggleLogin=(e)=>{
        setIsLogin(e.target.checked)
    }
// handleNamechange
const handleNameChange=(e)=>{
    setName(e.target.value);
}


    // handle email change 
    const handleEmailChange=(e)=>{
        setEmail(e.target.value)
    }
    // handle password  change 
    const handlePasswordChange=(e)=>{
        setPassword(e.target.value)
    }

    // handle login 
    const handleRegister=(e)=>{
        setLoading(true)
        console.log(email,password)
        e.preventDefault();
        if(password.length<6){
            setError("Must be 6 charcter")
            return;
        }
        if ( !/(?=.*[A-Z])/.test(password)){
            setError("password must 1 upercase   ")
            return;
        }
        if(isLogin){
            processLogin(email,password);
        }
        else{
            registerNewUser(email,password)
        }
        
    }
    const processLogin=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
        
    }

    const registerNewUser=(email,password)=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const user=result.user;
            console.log(user)
            setError("");
            verifyEmail();
            setUserName();
        })
        .catch(error=>{
            setError(error.message);
        })
    }
    const setUserName=()=>{
        updateProfile(auth.currentUser,{displayName:name} )
        .then(result=>{});
    }

    const verifyEmail=()=>{
        sendEmailVerification(auth.currentUser)
        .then(result=>{
            console.log(result)
        })
    }


const logout=()=>{
    setLoading(true)
    signOut(auth).then(() => {
        
    })
    .finally(()=>setLoading(false))
    .catch((error) => {
        setError(error.message)
    });

}


    useEffect(()=>{
        const unSubscribe =onAuthStateChanged(auth, (user) => {
  if (user) {
     setUser(user)
  } else {
    setUser({})
  }
  setLoading(false)
});
    return ()=> unSubscribe;
},[])
    return{
        googleSignInAuth,
        githubSignInAuth,
        user,
        logout,
        handleRegister,
        handleEmailChange,
        handlePasswordChange,
        toggleLogin,
        handleResetPassword,
        handleNameChange,
        isloading,
        isLogin,
        setLoading,
        setError,
        setUser,
        error,
        
        

    }
}
export default useFirebase;