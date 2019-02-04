// initiates the js for materialize

M.AutoInit();

// js for carousel on portfolio page
$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });
// js for character counter on textarea
  $(document).ready(function() {
    $('input#input_text, textarea#textarea2').characterCounter();
  });


// firebase configuration
  var config = {
    apiKey: "AIzaSyCwJLzNM_uxPKBKfVsqMg54KnHA0THKy-Y",
    authDomain: "brambleportfolio.firebaseapp.com",
    databaseURL: "https://brambleportfolio.firebaseio.com",
    projectId: "brambleportfolio",
    storageBucket: "brambleportfolio.appspot.com",
    messagingSenderId: "451971535830"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

// submit button sends information from contact form and stores on firebase database
  $("#submit").on("click", function(event) {
    event.preventDefault();

    
    var name = $("#name").val().trim();
    var telephone = $("#telephone").val().trim();
    var email = $("#email").val().trim();
    var textarea = $("#textarea2").val().trim();

    console.log(name);
    console.log(telephone);
    console.log(email);
    console.log(textarea);

    var newContact = {
      name: name,
      telephone: telephone,
      email: email,
      textarea: textarea,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    };

    database.ref().push(newContact);
// sends toast to user to let them know that information has been sent
    M.toast({
      html: "Thank you! Your information has been sent. I will be in touch soon.",
      classes: 'rounded #1a237e indigo darken-4'
    });
// clears out the contact form
    $("#name").val("");
    $("#telephone").val("");
    $("#email").val("");
    $("#textarea2").val("");


    
    
  });



  