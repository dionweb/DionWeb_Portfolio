
var config = {
    apiKey: "AIzaSyBLLfLzPlX3cG4W2Q0VnM47KPMSsvKGfx8",
    authDomain: "contactform-ab65d.firebaseapp.com",
    databaseURL: "https://contactform-ab65d.firebaseio.com",
    projectId: "contactform-ab65d",
    storageBucket: "contactform-ab65d.appspot.com",
    messagingSenderId: "838610640429"
};
firebase.initializeApp(config);

var messagesRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getInputVal('name');
    var email = getInputVal('email');
    var subject = getInputVal('subject');
    var message = getInputVal('message');

    saveMessage(name, email, subject, message);

    document.querySelector('.alert').style.display = 'block';

    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },5000);

    document.getElementById('contactForm').reset();
}

function getInputVal(id) {
    return document.getElementById(id).value;
}

function saveMessage(name, email, subject, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        subject: subject,
        message: message
    });
}