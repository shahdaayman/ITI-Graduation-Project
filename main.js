function countdown(endDate) {
  let timer = setInterval(function () {
    let now = new Date().getTime();
    let distance = endDate - now;

    if (distance < 0) {
      clearInterval(timer);
      document.querySelector(".timer").innerHTML = "Offer Expired";
      return;
    }

    document.getElementById("days").textContent = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
    document.getElementById("hours").textContent = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    document.getElementById("minutes").textContent = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    document.getElementById("seconds").textContent = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');
  }, 1000);
}

// Set countdown end date (3 days from now)
let endDate = new Date();
endDate.setDate(endDate.getDate() + 3);
countdown(endDate);
