import { useEffect, useState } from 'react';
import InitializeFirebase from '../Firebase/Firebase.init';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged,updateProfile } from "firebase/auth";
import axios from 'axios';


InitializeFirebase()

const useFirebase = () => {
    const [user,setUser]=useState({});
    const [err,setErr]=useState('');
    const [isLoading, setIsLoading]=useState(true)
    const [adminLoading, setAdminLoading]=useState(true)
    const [isAdmin, setIsAdmin]=useState(false)
    const auth = getAuth();

    // update user name
    const updateName=(user,name)=>{
          updateProfile(auth.currentUser, {
            displayName:name
          }).then(() => {
                const newUser= {...user}
                newUser.displayName=name;
                setUser(newUser)
          }).catch((error) => {
                setErr(error.message)
          });
    }

    // check user Role Admin or not
    useEffect(()=>{
        setAdminLoading(true)
        const url=`http://localhost:5000/users?email=${user.email}`
        axios.get(url)
            .then(res =>{
                setIsAdmin(res.data)
                setAdminLoading(false)
            })
    },[user])


    // create user on database
    const createUserOnDb=(name,email)=>{
        const data={
            name,
            email,
        }
        // console.log(data)
        const url=`http://localhost:5000/users`
        axios.post(url,data)
            .then(res =>{
               
            })
    }

    // create user with email and password
    const createUser=(email,password,name='',history)=>{
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setUser(user)
            updateName(user,name)
            setErr('')
            alert('Account create successfully')
            history.replace('/')
            createUserOnDb(name,email)
        })
        .catch((error) => {
            const errorMessage = error.message;
            setErr(errorMessage)
        })
        .finally(()=>setIsLoading(false))
    }

    // login with email and password
    const login=(email,password,location,history)=>{
        setIsLoading(true)
        const redirect_uri= location?.state?.from || '/home'

        signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    setUser(user)
                    setErr('')
                    history.push(redirect_uri)
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
        isAdmin,
        err,
        isLoading,
        adminLoading,
        createUser,
        login,
        logout,

    };
};

export default useFirebase;