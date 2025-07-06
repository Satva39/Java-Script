function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  document.getElementById('hour').textContent = hours;
  document.getElementById('min').textContent = minutes;
  document.getElementById('sec').textContent = seconds;

  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  const dateString = now.toLocaleDateString('en-US', options).replace(',', '');

  document.getElementById('date').textContent = dateString;
}

updateClock();
setInterval(updateClock, 1000);