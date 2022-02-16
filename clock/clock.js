function updateClock ( )
{
  //gets the system time from the machine running the webpage
  var currentHours = new Date().getHours ( );
  var currentMinutes = new Date().getMinutes ( );
  var currentSeconds = new Date().getSeconds ( );
  var currentDate = new Date().getDate( );
  // Pad the minutes and seconds with leading zeros, if required
  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  // Choose either "AM" or "PM" as appropriate
  var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

  // Convert the hours component to 12-hour format if needed
  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

  // Convert an hours component of "0" to "12"
  currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  // Compose the string for display
  var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

  // Update the time display
  document.getElementById("clock").firstChild.nodeValue = currentTimeString;
};
function updateDate ( )
{
  //gets the system time from the machine running the webpage
  var currentMonth = new Date().getMonth ( )+1;
  var currentDay = new Date().getDate ( );
  var currentYear = new Date().getFullYear ( );
  
    // Compose the string for display
  var currentDateString = currentMonth + "/" + currentDay + "/" + currentYear;

  // Update the time display the h1 element must have a space inside it otherwise it wont function correctly
  document.getElementById("date").firstChild.nodeValue = currentDateString;
};
function updatePage(){
  updateDate();
  updateClock();
};

