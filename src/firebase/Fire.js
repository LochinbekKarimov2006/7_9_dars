import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAv9GgZJlyFByhPqyLUptSwwgy8CALzeNI",
  authDomain: "login-f3f17.firebaseapp.com",
  projectId: "login-f3f17",
  storageBucket: "login-f3f17.appspot.com",
  messagingSenderId: "367544156142",
  appId: "1:367544156142:web:13cfbe3049f026c485d8ff",
  measurementId: "G-950R8ZV2V3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default app;