let countdown = 1500
let timer = 0
const start = document.querySelector("#start")
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset')

start.addEventListener('click', e => {
  if (timer<1){
    timer = setInterval(myTimer, 1000)
  }
})

stop.addEventListener('click', e => {
    clearInterval(timer)
})

reset.addEventListener('click', e => {
    countdown = 1500
    setText()
})

function myTimer (){
  setText()
  if (countdown){
    countdown--
  }else {
    clearInterval(timer)
  }
}
function setText(){
  document.getElementById("timer").innerHTML = formatedTime();
}
function formatedTime(){
  const minutes = parseInt(countdown/60)
  let seconds = countdown%60
  if (seconds<10){
    seconds = `0${seconds}`
  }
  return `${minutes}:${seconds}`
}
