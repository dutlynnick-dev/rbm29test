import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBU3M_PdeLf2W2S5XhVjIThumMebnSDkNk",
  authDomain: "rbm29-chat.firebaseapp.com",
  projectId: "rbm29-chat",
  storageBucket: "rbm29-chat.firebasestorage.app",
  messagingSenderId: "123143781331",
  appId: "1:123143781331:web:715cff6e66c5b13ea88d26"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };