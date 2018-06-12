
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyACGRSunfkMkTYEJMwXl_qBv3h47U9U368",
      authDomain: "train-schedule-dff9c.firebaseapp.com",
      databaseURL: "https://train-schedule-dff9c.firebaseio.com",
      projectId: "train-schedule-dff9c",
      storageBucket: "train-schedule-dff9c.appspot.com",
      messagingSenderId: "1017718111684"
    };
    firebase.initializeApp(config);


// Set Initial Counter
var initialValue = 100;

var clickCounter = initialValue;

// --------------------------------------------------------------
localStorage.setItem('name', 'vince')
// At the initial load, get a snapshot of the current data.
var database = firebase.database().ref();
database.on('value', function(snapshot) {
  debugger
  console.log(snapshot.val())


// Print the initial data to the console.


// Change the html to reflect the initial value.
$('#click-value').html(initialValue)

// Change the clickCounter to match the data in the database
clickCounter = snapshot.val().clicks
// Log the value of the clickCounter
console.log('clickCounter ' + clickCounter)

// Change the HTML Value
$('#click-value').html(clickCounter)
});
// If any errors are experienced, log them to console.

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1
  clickCounter--

  // Alert User and reset the counter
  database.set({
    clicks: clickCounter,
    name: 'vince',
    age: '25'
  })

  // Save new value to Firebase


  // Log the value of clickCounter
  console.log(clickCounter)

});

$('#nameSubmit').on('click', function(){
  let userName = $('#name').val()
  //console.log(userName)
  database.set({
    user: userName
  })
})

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue
  clickCounter = 100

  // Save new value to Firebase
  database.set({
    clicks: clickCounter
  })

  // Log the value of clickCounter


  // Change the HTML Values
  $('#click-value').html(clickCounter)
});
