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