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

  // Display current date and time
  var displayTime = document.querySelector("#currentDay");

  // Use dayjs to display current date and time
  var currentTime = dayjs().format("dddd, MMMM D, YYYY, h:mm:ss a");

  displayTime.textContent = currentTime;

  // Assign saveBtn click listener for user input and get row id and save to local storage
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // Save text in local storage
    localStorage.setItem(time, text);
  });

  // Load saved data from LocalStorage - do this for each hour created
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

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
// Re-run the function
hourTracker();

// var hour9 = 9;
// var hour10 = 10;
// var hour11 = 11;
// var hour12 = 12;
// var hour1 = 13;
// var hour2 = 14;
// var hour3 = 15;
// var hour4 = 16;
// var hour5 = 17;

// var currentHour = dayjs().hour('H');

// // Change color of time block based on current time
// function changeColor() {
//   if (currentHour > hour9) {
//     $("#hour-9").addClass("past");
//   } else if (currentHour = hour9) {
//     $("#hour-9").addClass("present");
//   } else if (currentHour < hour9) {
//     $("#hour-9").addClass("future");
//   }

//   if (currentHour > hour10) {
//     $("#hour-10").addClass("past");
//   } else if (currentHour = hour10) {
//     $("#hour-10").addClass("present");
//   } else if (currentHour < hour10) {
//     $("#hour-10").addClass("future");
//   }

//   if (currentHour > hour11) {
//     $("#hour-11").addClass("past");
//   } else if (currentHour = hour11) {
//     $("#hour-11").addClass("present");
//   } else if (currentHour < hour11) {
//     $("#hour-11").addClass("future");
//   }

//   if (currentHour > hour12) {
//     $("#hour-12").addClass("past");
//   } else if (currentHour = hour12) {
//     $("#hour-12").addClass("present");
//   } else if (currentHour < hour12) {
//     $("#hour-12").addClass("future");
//   }

//   if (currentHour > hour1) {
//     $("#hour-1").addClass("past");
//   } else if (currentHour = hour1) {
//     $("#hour-1").addClass("present");
//   } else if (currentHour < hour1) {
//     $("#hour-1").addClass("future");
//   }

//   if (currentHour > hour2) {
//     $("#hour-2").addClass("past");
//   } else if (currentHour = hour2) {
//     $("#hour-2").addClass("present");
//   } else if (currentHour < hour2) {
//     $("#hour-2").addClass("future");
//   }

//   if (currentHour > hour3) {
//     $("#hour-3").addClass("past");
//   } else if (currentHour = hour3) {
//     $("#hour-3").addClass("present");
//   } else if (currentHour < hour3) {
//     $("#hour-3").addClass("future");
//   }

//   if (currentHour > hour4) {
//     $("#hour-4").addClass("past");
//   } else if (currentHour = hour4) {
//     $("#hour-4").addClass("present");
//   } else if (currentHour < hour4) {
//     $("#hour-4").addClass("future");
//   }
// }
// // Call function
// changeColor();
  });