import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';
import { useState } from 'react/cjs/react.development';
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, getDoc, getDocs, where, query } from "firebase/firestore"; 
import { db } from './components/config';

export default function App() {

  const [username, setName] = useState(''); 
  const [email, setEmail] = useState('');
 
     function create () {
        setDoc(doc(db, "users", 'DM'), {     
          username: username,
          email: email,
          }).then(() => { 
        console.log('data submitted');  

        }).catch((error) => { 
          console.log(error);
      });


    };

    function getSepcificDataWithID () {
          getDoc(doc(db, "users", 'IMx2OXMCR0WD7upXNcKq')).then(docData => { 
      
      if (docData.exists()) {

        
        setName(docData.data().username);
        setEmail(docData.data().email);   

      } else {
         console.log('No such a data!');
      }

    }).catch((error) => {
          console.log(error);
    })
    }

    function update() {
    updateDoc(doc(db, "users", 'DM'), {     
      username: username,
      email: email,
    }).then(() => { 
      console.log('data submitted');  

    }).catch((error) => {
          console.log(error);
    });
    }

    function deleteData() {
          deleteDoc(doc(db, "users", 'DM'));    
    }

    function getAlldata() {
      getDocs(collection(db, "users")).then(docSnap => {
        let users = [];
        docSnap.forEach((doc)=> {
            users.push({ ...doc.data(), id:doc.id })
        });
            console.log("datos:", users);       
      });
    }

    function getDataWithQuery () {
      getDocs(query(collection(db, "users"), where('email','==', 'NewUser@gmail.com'))).then(docSnap => {
         let users = []; 
          docSnap.forEach((doc)=> {
          users.push({ ...doc.data(), id:doc.id })
      });
          console.log("datos:", users[0].username);           
      });
    }

  return (
    <View style={styles.container}>
      <Text>Firebase crud!</Text> 

      <TextInput value={username} onChangeText={(username) => {setName(username)}} placeholder="usuario" style={styles.textBoxes}></TextInput>
      <TextInput value={email} onChangeText={(email) => {setEmail(email)}} placeholder="Email" style={styles.textBoxes}></TextInput>

      <button onClick={create}>Ir </button>      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBoxes: {
    width: '90%', 
    fontSize: 18,
     padding: 12,
      borderColor: 'gray', 
    borderWidth: 0.2,
     borderRadius: 10
  }   
});