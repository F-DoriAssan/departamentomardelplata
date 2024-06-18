import { getAnalytics } from 'firebase/analytics';
// Import the functions you need from the SDKs you need
import {
  getApps,
  initializeApp,
} from 'firebase/app';

export const API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_KEY as string;
export const AUTH_DOMAIN = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN as string;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: "departamentomadelplata",
  storageBucket: "departamentomadelplata.appspot.com",
  messagingSenderId: "1012989097772",
  appId: "1:1012989097772:web:a009d5aeab8c59c6491e89",
  measurementId: "G-S44K5ZDTFW"
};


export let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const analytics = getAnalytics(firebase_app);
export default firebaseConfig;