import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, GithubAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  
  apiKey: "AIzaSyBFBdVKbqkCJ-zD1n_4Pexs8HlxBG6Ga1k",
  authDomain: "social-app-777b4.firebaseapp.com",
  projectId: "social-app-777b4",
  storageBucket: "social-app-777b4.appspot.com",
  messagingSenderId: "985182462127",
  appId: "1:985182462127:web:14523f6989dfa974c4b45a",
  measurementId: "G-3CWYSVX2X4"


};

initializeApp(firebaseConfig);
export const auth = getAuth();
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();
export const twitter = new TwitterAuthProvider();
export const github = new GithubAuthProvider();
export const db = getFirestore();