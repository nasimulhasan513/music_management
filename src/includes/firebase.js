import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAixNVUG5aZ2FYgXCPwyRtLJtnUujwDBc4",
  authDomain: "reactfirebasemario.firebaseapp.com",
  databaseURL: "https://reactfirebasemario.firebaseio.com",
  projectId: "reactfirebasemario",
  storageBucket: "reactfirebasemario.appspot.com",
  appId: "1:1074195467692:web:edda296f5107e5e26dfe09"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch(err => {
  console.log("Firebase persistence error: ", err);
});

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");

export { auth, db, usersCollection, songsCollection, commentsCollection, storage };
