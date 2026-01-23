import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrSHbLst-kx8Pcw7hWoOPRm-uMzMUWuwg",
  authDomain: "hyrlance-2afe0.firebaseapp.com",
  databaseURL: "https://hyrlance-2afe0-default-rtdb.firebaseio.com",
  projectId: "hyrlance-2afe0",
  storageBucket: "hyrlance-2afe0.firebasestorage.app",
  messagingSenderId: "664174976060",
  appId: "1:664174976060:web:46a379c94a2f50c708b739",
  measurementId: "G-CME7K6XFRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
export const database = getDatabase(app);
export default app;

