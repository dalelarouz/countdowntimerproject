// Set the date and time to countdown to
var countdownDate = new Date("2024-03-10T00:00:00").getTime();

// Update the countdown every second
var countdown = setInterval(function () {
  // Get the current date and time
  var now = new Date().getTime();

  // Calculate the time remaining
  var distance = countdownDate - now;

  // Calculate days, hours, minutes, and seconds 
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);