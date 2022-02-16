 //gets the system time from the machine running the webpage
 var currentMonth = new Date().getMonth ( )+1;
 var currentDay = new Date().getDate ( );
 var currentYear = new Date().getFullYear ( );
 
   // Compose the string for display
 var currentDateString = currentMonth + "/" + currentDay + "/" + currentYear;

 console.log(currentDateString);