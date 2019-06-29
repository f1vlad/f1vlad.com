var element = document.getElementById('forceMe');
var forceValueOutput = document.getElementById('forceValue');
var background = document.getElementById('background');
var touch = null;

addForceTouchToElement(element);

function onTouchStart(e) {
  e.preventDefault();
  checkForce(e);
}

function onTouchMove(e) {
  e.preventDefault();
  checkForce(e);
}

function onTouchEnd(e) {
  e.preventDefault();
  touch = null;
}

function checkForce(e) {
  touch = e.touches[0];
  setTimeout(refreshForceValue.bind(touch), 10);
}

function refreshForceValue() {
  var touchEvent = this;
  var forceValue = 0;
  if(touchEvent) {
    forceValue = touchEvent.force || 0;
    setTimeout(refreshForceValue.bind(touch), 10);
  }else{
    forceValue = 0;
  }

  renderElement(forceValue);
}

function renderElement(forceValue) {
  forceValueOutput.innerHTML = 'Force: ' + forceValue.toFixed(4);
  //console.log(forceValue);
  document.getElementById("thisBody").className = "deep-touch-" + Math.round((forceValue * 10));
}

function addForceTouchToElement(elem) {
  elem.addEventListener('touchstart', onTouchStart, false);
  elem.addEventListener('touchmove', onTouchMove, false);
  elem.addEventListener('touchend', onTouchEnd, false);
}
