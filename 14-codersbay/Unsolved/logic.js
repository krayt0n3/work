// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)
var config = {
  apiKey: "AIzaSyD3wlzt6OkskYeYYsNiWYtUOTcDVvtdtMc",
authDomain: "test1-33570.firebaseapp.com",
databaseURL: "https://test1-33570.firebaseio.com",
projectId: "test1-33570",
storageBucket: "test1-33570.appspot.com",
messagingSenderId: "377582826542"
};

firebase.initializeApp(config);

// Assign the reference to the database to a variable named 'database'
// var database = ...
var database = firebase.database();

// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;
var who = "";
var price = "";
// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot) {
console.log(snapshot.val());
  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // Set the variables for highBidder/highPrice equal to the stored values in firebase.
    // highPrice = ...
    // highBidder = ...


    // Change the HTML to reflect the stored values


    // Print the data to the console.


  }

  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  else {

    // Change the HTML to reflect the initial values


    // Print the data to the console.


  }


// If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
  var bidderName = $("#bidder-name").val();
  var bidderPrice = parseInt($('#bidder-price').val() * 10);
  $('#highest-bidder').html(bidderPrice);
  $('#bidder-name').html(bidderName);

  database.ref().set({
    who: who,
    price: price
  });

  // Log the Bidder and Price (Even if not the highest)
  if (bidderPrice > highPrice) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase


    // Log the new High Price


    // Store the new high price and bidder name as a local variable

    database.ref().set({
      highBidder: bidderName,
      highPrice: bidderPrice
    });
    // Change the HTML to reflect the new high price and bidder

  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});
