// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get } from 'firebase/database';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaQn_QjtYW8NWloO7Un2IZGhvZYS0tGWk",
  authDomain: "electrolarynx-data.firebaseapp.com",
  databaseURL: "https://electrolarynx-data-default-rtdb.firebaseio.com",
  projectId: "electrolarynx-data",
  storageBucket: "electrolarynx-data.appspot.com",
  messagingSenderId: "930634925876",
  appId: "1:930634925876:web:a6a772b617471c39750761",
  measurementId: "G-KWSVBD8CGB"
};

// Initialize Firebase
let app;
if (firebase.apps.length == 0) {
    app = initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = getAuth(app);

// create an users database
function writeUserData(firstName, lastName, email, username) {
  const db = getDatabase();
  const reference = ref(db, 'users/' + username);
  set(reference, {
    firstName: firstName,
    lastName: lastName,
    email: email,
    username: username
  });
}

// create authentication using email and password
async function addUserAuth(firstName, lastName, email, username, password) {
  return createUserWithEmailAndPassword(auth, email, password)
  .then(userCredentials => {
      const user = userCredentials.user;
      writeUserData(firstName, lastName, user.email, username);
      return true;
  })
  .catch(error => {
    alert(error.message);
    return false;
  });
}

async function getUser (username) {
  const db = getDatabase();
  const valueRef = ref(db, 'users/' + username);
  return get(valueRef, (snapshot) => {
    const user = snapshot.val();
    return user;
  })
  .catch(error => {
    console.error(error.message);
    return null;
  })
}

// authentigation
async function loginUser(username, password) {
  console.log(`Username: ${username}, Password: ${password}`);
  const userSnapshot = await getUser(username);
  const user = userSnapshot.val();
  if(!user) return null;
  const email = user.email;

  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(`User signed in ${userCredential.user}`);
      return user;
    })
    .catch((error) => {
      alert(`Login failed: ${error.message}`);
      return null;
    });
}

export { addUserAuth, loginUser };