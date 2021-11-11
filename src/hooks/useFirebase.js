import { useEffect, useState } from 'react';
import InitializeFirebase from '../Firebase/Firebase.init';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged } from "firebase/auth";


InitializeFirebase()

const useFirebase = () => {
    const [user,setUser]=useState({});
    const [err,setErr]=useState('');
    const [isLoading, setIsLoading]=useState(true)
    const auth = getAuth();


    // create user with email and password
    const createUser=(email,password,name='')=>{
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setUser(user)
            setErr('')
        })
        .catch((error) => {
            const errorMessage = error.message;
            setErr(errorMessage)
        })
        .finally(()=>setIsLoading(false))
    }

    // login with email and password
    const login=(email,password)=>{
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    setUser(user)
                    setErr('')
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    setErr(errorMessage)
                })
                .finally(()=>setIsLoading(false))
    }

    // observer for user
    useEffect(()=>{
        setIsLoading(true)
       const unsubscrib= onAuthStateChanged(auth, (user) => {
            if (user) {
               setUser(user)
               setErr('')
            } else {
              setUser({})
            }
            setIsLoading(false)
          });
        
        return ()=> unsubscrib;
    },[auth])

    // logOut user 
    const logout =()=>{
        const auth = getAuth();
            signOut(auth).then(() => {
             setUser({})
             setErr('')
            }).catch((error) => {
             setErr(error.message)
            });
    }

    // console.log(user)
    // console.log(err)
    return {
        user,
        err,
        isLoading,
        createUser,
        login,
        logout,

    };
};

export default useFirebase;