// Set event date and time (YYYY, MM (0-indexed), DD, HH, MM, SS)
const eventDate = new Date("2025-04-04T09:00:00").getTime(); // Adjust date/time

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = eventDate - now;

  if (timeLeft <= 0) {
    document.querySelector(".countdown-timer").innerHTML = "<h3>Event has started!</h3>";
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.querySelector(".days").textContent = days.toString().padStart(2, "0");
  document.querySelector(".hours").textContent = hours.toString().padStart(2, "0");
  document.querySelector(".minutes").textContent = minutes.toString().padStart(2, "0");
  document.querySelector(".seconds").textContent = seconds.toString().padStart(2, "0");
}


const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); 
