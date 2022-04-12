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

