// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyAVjBpZxk4nhLuLNtIfE5bZkd0cLhxXmqI',

  authDomain: 'video-1c341.firebaseapp.com',

  projectId: 'video-1c341',

  storageBucket: 'video-1c341.appspot.com',

  messagingSenderId: '3858480628',

  appId: '1:3858480628:web:458b9a38138944854a8da1',
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)

export const auth = getAuth()
export const provider = new GoogleAuthProvider()

export default app
