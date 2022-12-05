import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA-XcZ2Tn1lWRqNaHiDMto030Ac4jBFxQM",
  authDomain: "react-course-gb.firebaseapp.com",
  projectId: "react-course-gb",
  storageBucket: "react-course-gb.appspot.com",
  messagingSenderId: "435280127036",
  appId: "1:435280127036:web:e20b22eda7a1d20634cf39",
  databaseURL: "https://react-course-gb-default-rtdb.firebaseio.com/",
};

const service = initializeApp(firebaseConfig)

export const firebaseAuth = getAuth(service)

export const firebaseSingUp = async (email, password) => {
  await createUserWithEmailAndPassword(firebaseAuth, email, password)
}

export const firebaseSingIn = async (email, password) => {
  await signInWithEmailAndPassword(firebaseAuth, email, password)
}

export const firebaseLogOut = async () => await signOut(firebaseAuth)

const db = getDatabase(service)

export const userRef = ref(db, 'user')
export const chatsRef = ref(db, 'chats')
export const getChatById = (chatId) => ref(db, `chats/${chatId}`)
