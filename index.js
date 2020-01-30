import firebase from 'firebase';

const list = document.querySelector("ol");
const input = document.querySelector("input");
const form = document.querySelector("submit");

  var config = {
    apiKey: "AIzaSyAI41pZJpu1KNnINUsQoG6k_IBNQEIZtag",
    authDomain: "chat-solem.firebaseapp.com",
    databaseURL: "https://chat-solem.firebaseio.com",
    projectId: "chat-solem",
    storageBucket: "chat-solem.appspot.com",
    messagingSenderId: "492263224818"
  };
  firebase.initializeApp(config);

  const chat = firebase.firestore().collection("chat");

document.getElementById("a").addEventListener("submit", (e) => {
  e.preventDefault();
  chat.add({ message: input.value, timestamp: Date.now() });
  input.value = '';
  return false;
  })

chat.orderBy('timestamp','desc').onSnapshot((querySnapshot)=> {
list.innerHTML = '';
querySnapshot.forEach((doc) => {
  const li = document.createElement("li");
  li.textContent = doc.data().message;
  list.appendChild(li);
})
})
