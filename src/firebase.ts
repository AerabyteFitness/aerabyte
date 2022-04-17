import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyBEJBINXW0RYSnCKLgBwz5QITeGknETxwE",
  authDomain: "login-3e6e7.firebaseapp.com",
  projectId: "login-3e6e7",
  storageBucket: "login-3e6e7.appspot.com",
  messagingSenderId: "1087913910735",
  appId: "1:1087913910735:web:86ea9f8a84970f755532ba",
  measurementId: "G-2C0E70BESM"
};

firebase.initializeApp(config)



export async function loginUser(username:string, password: string) {
  const email = `${username}@codedamn.com`
  try{
    
 const res = await firebase.auth().signInWithEmailAndPassword(email, password)
 console.log(res)
} catch(error){
  console.log(error)
  return false
}

}

export async function registerUser(username:string, password: string){
const email = `${username}@codedamn.com`
  try {
    const res = await firebase.auth ().createUserWithEmailAndPassword(username, password)
    console.log(res)
    return true
  } catch (error){
    console.log(error)
    return false
  }
}
