const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')
const resetButton = document.querySelector('#reset')

var audio = new Audio('gong.mp3');

let timer = null
let endTime = null
let modeWork = true

const countdownWork = 1500000
const countdownPause = 300000
let timeLeft = countdownWork

startButton.addEventListener('click', function (e){
  endTime= new Date().getTime()+timeLeft
  timer = setInterval(myTimer, 1000)
  document.getElementById("heading").innerHTML = `<h1>Work</h1>`;
})
pauseButton.addEventListener('click', function (e){
  clearInterval(timer)
  document.getElementById("heading").innerHTML = `<h1>Pause</h1>`;
})
resetButton.addEventListener('click', function (e){
  clearInterval(timer)
  timeLeft = countdownWork
  modeWork = true
  setTime(countdownWork)
  document.getElementById("heading").innerHTML = `<h1>Timer</h1>`;
})

function myTimer(){ 
  const now = new Date().getTime()
  timeLeft = endTime-now+500
  setTime(timeLeft)
  if (timeLeft < 0 && modeWork == true){
    document.getElementById("heading").innerHTML = `<h1>Rest</h1>`;
    setMode()
  }else if (timeLeft < 0 && modeWork == false){
    document.getElementById("heading").innerHTML = `<h1>Work</h1>`;
    setMode()
  }
}

function setMode (){
  audio.play();
  timeLeft = modeWork ? countdownPause : countdownWork
  endTime = new Date().getTime()+timeLeft
  modeWork = !modeWork
}

function setTime(timeLeft){
  const totalSeconds = parseInt((timeLeft)/1000)
  let seconds = (totalSeconds)%60
  let minutes = parseInt(totalSeconds/60)

  if (seconds<10){
    seconds = `0${seconds}`
  }
  if (minutes<10){
    minutes = `0${minutes}`
  }

  document.getElementById("timer").innerHTML = `${minutes}:${seconds}`;
}