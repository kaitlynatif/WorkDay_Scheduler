// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  // Instructs engine to load the HTML and CSS before running the JS
  $(document).ready(function () {

  // Create a variable and use query selector to display current date and time
  var displayTime = document.querySelector("#currentDay");

  // Use dayjs to display current date and time in given format
  var currentTime = dayjs().format("dddd, MMMM D, YYYY, h:mm:ss a");

  displayTime.textContent = currentTime;

  // Assign saveBtn click listener for user input and get row id and save to local storage
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // Save text in local storage
    localStorage.setItem(time, text);
  });

  function hourTracker() {
    // Get current number of hours.
    var currentHour = dayjs().hour();
  
    // Loop over time blocks
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
  
      // To check the time and add the classes for background indicators
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
  hourTracker();

  // Get items from local storage

  // $("#hour-8 .description").val(localStorage.getItem("hour-8"));
  // $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  // $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  // $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  // $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  // $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  // $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  // $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  // $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  // $("#hour-17 .description").val(localStorage.getItem("hour-17"));

// Create a function to loop over time blocks to retrieve and display data from local storage
function displayText() {
  // Loop over time blocks
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    $(this).children(".description").val(localStorage.getItem(blockHour));
  });
}
displayText();

  });