// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAdOe_JssV-5HlVYM0GhFwKlT_G_d-8q2M",
    authDomain: "notes-app-a51b7.firebaseapp.com",
    databaseURL: "https://notes-app-a51b7-default-rtdb.firebaseio.com",
    projectId: "notes-app-a51b7",
    storageBucket: "notes-app-a51b7.appspot.com",
    messagingSenderId: "415019923323",
    appId: "1:415019923323:web:601a346c65aca6fee42fde"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const button = document.querySelector('#contactForm');
let flag = document.querySelector(".flag");

button.addEventListener('submit', (e) => {
    e.preventDefault();

    var fname = document.querySelector("#firstName").value;
    var lname = document.querySelector("#lastName").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#pwd").value;


    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            let ID = firebase.auth().currentUser.uid;
            firebase.database().ref('User/' + ID).set({
                firstName: fname,
                lastName: lname,
                email: email
            })
            window.alert('Congo !!! User registration sucessfull');
        })
        .then(() => {
            flag.classList.remove('none');
        })
        .catch((error) => {
            let errorcode = error.code;
            let errormsg = error.message;

            window.alert('Something went wrong !', errorcode, errormsg);
        })

    document.querySelector("#contactForm").reset();
})