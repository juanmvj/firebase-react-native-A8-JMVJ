import { getFirestore } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";


//sólo se utiliza para elproyecto, no se guardan asì realmetnte
const firebaseConfig = {
  apiKey: "asdasdasdasddsfsdfsdfsdfsd",
  authDomain: "firestore-crud-a451c.firebaseapp.com",
  projectId: "firestore-crud-a451c",
  storageBucket: "firestore-crud-a451c.appspot.com",
  messagingSenderId: "531507750181",
  appId: "1:531507750181:web:9cf5546e2fe32c8697e6cc"
};


const app = initializeApp(firebaseConfig);    
        

export const db = getFirestore(app);