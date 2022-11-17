// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB43J-LTxshl7uV49x0c28vMrmij5KgTFs",
  authDomain: "foodie-service-client.firebaseapp.com",
  projectId: "foodie-service-client",
  storageBucket: "foodie-service-client.appspot.com",
  messagingSenderId: "715701898494",
  appId: "1:715701898494:web:6aa66473dd4e5c076529af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;