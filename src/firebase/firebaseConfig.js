import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

  const firebaseConfig = {
    apiKey: "AIzaSyAB4K4zxcB4x7Yf6A0eb_TyBBKYZKpQdsg",
    authDomain: "shopclo-e075f.firebaseapp.com",
    projectId: "shopclo-e075f",
    storageBucket: "shopclo-e075f.appspot.com",
    messagingSenderId: "217671477766",
    appId: "1:217671477766:web:e551876cb41581e172b187",
    measurementId: "G-WPN4RDWX06"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export default db;