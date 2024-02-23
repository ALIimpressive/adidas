import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-7AI-cOiFpIfLNRRaGyvy9Jdo0YjZkGc",
  authDomain: "adidas-905ea.firebaseapp.com",
  projectId: "adidas-905ea",
  storageBucket: "adidas-905ea.appspot.com",
  messagingSenderId: "321208808759",
  appId: "1:321208808759:web:b2c041fb7528b15bdd96b2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app
