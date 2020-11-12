var stopButton = document.querySelector('#stopButton')
var slowButton = document.querySelector('#slowButton')
var goButton = document.querySelector('#goButton')

var stopLight = document.querySelector('#stopLight')
var slowLight = document.querySelector('#slowLight')
var goLight = document.querySelector('#goLight')

stopButton.addEventListener('click', function () {
  clearLights()
  stopLight.style.backgroundColor = "red"
})

slowButton.addEventListener('click', function () {
  clearLights()
  slowLight.style.backgroundColor = "orange"
})

goButton.addEventListener('click', function () {
  clearLights()
  goLight.style.backgroundColor = "green"
})

function clearLights() {
  stopLight.style.backgroundColor = "black"
  slowLight.style.backgroundColor = "black"
  goLight.style.backgroundColor = "black"
}
