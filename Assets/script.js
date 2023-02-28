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
  
      // Check the time and add the classes for background indicators
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

// Create a function to loop over time blocks to retrieve and display data from local storage
function displayText() {
  // Loop over time blocks
  $(".time-block").each(function () {
    // var blockHour = parseInt($(this).attr("id").split("-")[1]);
    var blockHour = $(this).attr("id");
    $(this).children(".description").val(localStorage.getItem(blockHour));
  });
}
displayText();

});