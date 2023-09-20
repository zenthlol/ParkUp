var timeLimitInMinutes = 20;
var timeLimitInSeconds = timeLimitInMinutes * 60;
var timerElement = document.getElementById('timer');

function startTimer() {
  timeLimitInSeconds--;
  var minutes = Math.floor(timeLimitInSeconds / 60);
  var seconds = timeLimitInSeconds % 60;

  if (timeLimitInSeconds < 0) {
    timerElement.textContent = '00:00';
    clearInterval(timerInterval);
    return;
  }

  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  timerElement.textContent = minutes + ' Minutes : ' + seconds + ' Seconds';
}

var timerInterval = setInterval(startTimer, 1000);
