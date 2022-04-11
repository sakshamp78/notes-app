// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAdOe_JssV-5HlVYM0GhFwKlT_G_d-8q2M",
    authDomain: "notes-app-a51b7.firebaseapp.com",
    projectId: "notes-app-a51b7",
    storageBucket: "notes-app-a51b7.appspot.com",
    messagingSenderId: "415019923323",
    appId: "1:415019923323:web:601a346c65aca6fee42fde"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const button = document.querySelector('#contactForm');

button.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let email = document.querySelector("#email").value;
    let pwd = document.querySelector("#pwd").value;

    firebase.auth().signInWithEmailAndPassword(email, pwd)
    .then((userCredential) => {
        window.alert('Welcome !!!');
    })
    .then(() => {
        let id = firebase.auth().currentUser.uid;
        localStorage.setItem('ID', id);
    })
    .then(() => {
        window.location.href = "./HTML/homePage.html";
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert(errorCode, errorMessage);
    });
    document.querySelector("#contactForm").reset();
})