function openSideNav() {
    document.getElementById('sideNav').style.width = '50%';
    document.getElementById('opensideNav').style.display ='none';
    document.getElementById('closesideNav').style.display ='block';

}

function closeSideNav() {
    document.getElementById('sideNav').style.width = '0';
    document.getElementById('opensideNav').style.display ='block';
    document.getElementById('closesideNav').style.display ='none';
}

window.addEventListener('scroll', function (e) {
    var nav = document.getElementById('navbar');
    if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
        nav.classList.add('nav-colored');
        nav.classList.remove('nav-transparent');
    } else {
        nav.classList.add('nav-transparent');
        nav.classList.remove('nav-colored');
    }
});

//FIREBASE

var config = {
    apiKey: "AIzaSyCiROkVcGcbiH_GSSXTtAWZ5eYP_3J5zX0",
    authDomain: "portfolio-contact-form-9e3de.firebaseapp.com",
    databaseURL: "https://portfolio-contact-form-9e3de.firebaseio.com",
    projectId: "portfolio-contact-form-9e3de",
    storageBucket: "portfolio-contact-form-9e3de.appspot.com",
    messagingSenderId: "711915861802"
};
firebase.initializeApp(config);

var messagesRef = firebase.database().ref('messages');

document.getElementById('contactform').addEventListener('submit', submitForm);

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

    document.getElementById('contactform').reset();
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

$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      } 
    });
  });