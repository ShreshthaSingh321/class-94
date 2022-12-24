
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAK56ZGcQwFgZ5q9nL_CWn-rHL312jwvR4",
      authDomain: "kwitter-84e94.firebaseapp.com",
      databaseURL: "https://kwitter-84e94-default-rtdb.firebaseio.com",
      projectId: "kwitter-84e94",
      storageBucket: "kwitter-84e94.appspot.com",
      messagingSenderId: "315978414382",
      appId: "1:315978414382:web:107bf333993f8b694fa2bf",
      measurementId: "G-418GRH96GD"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
