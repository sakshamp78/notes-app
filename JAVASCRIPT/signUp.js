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