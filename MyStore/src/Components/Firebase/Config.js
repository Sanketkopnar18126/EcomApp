import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyD2VxX47adh21-JZJAtjIrv_KwYF0rrQ9g",
  authDomain: "myshop-9c388.firebaseapp.com",
  projectId: "myshop-9c388",
  storageBucket: "myshop-9c388.appspot.com",
  messagingSenderId: "21078953909",
  appId: "1:21078953909:web:3ca66f28f6c4ccbc93d3fc",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
