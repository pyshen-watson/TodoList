import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCjctLZZlOE81TtGF6-UVrw10rr8IhaLGE",
  authDomain: "todo-svelte-50730.firebaseapp.com",
  projectId: "todo-svelte-50730",
  storageBucket: "todo-svelte-50730.appspot.com",
  messagingSenderId: "703403994420",
  appId: "1:703403994420:web:14b62820ca31cf1fbc0961",
  measurementId: "G-XHJ8S9EWZH"
}

initializeApp(firebaseConfig)

const db = getFirestore()

export default db