const nasaLink = document.querySelector('.capnasa');
const checkinApp = document.querySelector('.checkin').addEventListener('click', CheckinApp);
const snake = document.querySelector('.snake-game').addEventListener('click', SnakeGame);



nasaLink.addEventListener('click', CaptureNasa);

function CaptureNasa(event) {
  event.preventDefault();
  window.open(
    'https://louiewhitz.github.io/capture-nasa/#start-page',
    '_blank'
  );
}

function CheckinApp(event) {
  event.preventDefault();
  window.open(
    'https://the-check-in.louisawhitaker.com/',
    '_blank'
  );
}

function SnakeGame(event) {
  event.preventDefault();
  window.open('https://louiewhitz.github.io/react-snake-game/', '_blank');
}