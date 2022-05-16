import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyDylh2b9eLFndfKlFSuuPmj3hZMZ59gsCY",
  authDomain: "aerabytefitness-84768.firebaseapp.com",
  projectId: "aerabytefitness-84768",
  storageBucket: "aerabytefitness-84768.appspot.com",
  messagingSenderId: "486964549335",
  appId: "1:486964549335:web:922faec756dc3089f9c292",
  measurementId: "G-0VEJDTX55F"
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
