// lib/firebase.ts
import { initializeApp, getApps } from "firebase/app"
import { getDatabase } from "firebase/database"

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWr7pMONHALGxT78mLTC1YJzKdqi1uNdg",
  authDomain: "portoiqbal-72517.firebaseapp.com",
  databaseURL: "https://portoiqbal-72517-default-rtdb.firebaseio.com",
  projectId: "portoiqbal-72517",
  storageBucket: "portoiqbal-72517.firebasestorage.app",
  messagingSenderId: "496315378298",
  appId: "1:496315378298:web:4fda60f448bcf67c23e9c3",
  measurementId: "G-9WXW0DJVQW",
}

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
const database = getDatabase(app)

export { database }
