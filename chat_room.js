
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBSZRoufaR8jJ6E0i0ZneRxGWiyPFlRVl0",
      authDomain: "practice-53cb2.firebaseapp.com",
      databaseURL: "https://practice-53cb2-default-rtdb.firebaseio.com",
      projectId: "practice-53cb2",
      storageBucket: "practice-53cb2.appspot.com",
      messagingSenderId: "542774421884",
      appId: "1:542774421884:web:1e58469408076d682e5cf9"

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
