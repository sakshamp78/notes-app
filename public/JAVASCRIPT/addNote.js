// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAdOe_JssV-5HlVYM0GhFwKlT_G_d-8q2M",
  authDomain: "notes-app-a51b7.firebaseapp.com",
  projectId: "notes-app-a51b7",
  storageBucket: "notes-app-a51b7.appspot.com",
  messagingSenderId: "415019923323",
  appId: "1:415019923323:web:601a346c65aca6fee42fde"
};
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyAdOe_JssV-5HlVYM0GhFwKlT_G_d-8q2M',
  authDomain: 'notes-app-a51b7.firebaseapp.com',
  projectId: 'notes-app-a51b7'
});
var firestore = firebase.firestore();



const userid = localStorage.getItem('ID');

const docRef = firestore.collection(userid);
const textarea = document.querySelector('#inputtext');
const button = document.querySelector('.button');
const inputtitle = document.querySelector('#inputtitle');


button.addEventListener('click', (e) => {
  e.preventDefault();
  const notes = textarea.value.trim();
  const title = inputtitle.value.trim();
  var usersRef = firestore.collection(userid);

  // LENGTH OF TEXT SHOUD NOT BE ZERO
  if (inputtitle.value.trim().length !== 0) {
    usersRef.get()
      .then((coll) => {
        usersRef.add({
          title: title,
          note: notes,
          timestamp: new Date()
        })
          .then(() => {
            window.alert("Note Successfully Added !");
            console.log("Document successfully written!");
          })
          .then(() => {
            window.location.replace("../HTML/homePage.html");
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });

      })
      .catch((error) => {
        window.alert("Something went wrong !! Try again later");
        console.log("Error getting document:", error);
      });
  }
  else{
    window.alert("Please add some text !");
  }

})

