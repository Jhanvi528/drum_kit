for (var i = 0; i < document.querySelectorAll('button').length; i++) {
  document.querySelectorAll('button')[i].addEventListener('click', handleClick)
  function handleClick () {
    var letter = this.innerHTML
    makesound(letter)
    animation(letter)
  }
}
document.addEventListener('keypress', function (event) {
  makesound(event.key)
  animation(event.key)
  console.log(event.key)
})

function animation (current_key) {
  var activated_key = document.querySelector('.' + current_key)
  activated_key.classList.add('pressed')
  setTimeout(function () {
    activated_key.classList.remove('pressed')
  }, 100)
}

function makesound (key) {
  switch (key) {
    case 'w':
      var audio = new Audio('tom-1.mp3')
      audio.play()
      break
    case 'a':
      var audio = new Audio('tom-2.mp3')
      audio.play()
      break
    case 's':
      var audio = new Audio('tom-3.mp3')
      audio.play()
      break
    case 'd':
      var audio = new Audio('tom-4.mp3')
      audio.play()
      break
    case 'j':
      var audio = new Audio('snare.mp3')
      audio.play()
      break
    case 'k':
      var audio = new Audio('crash.mp3')
      audio.play()
      break
    case 'l':
      var audio = new Audio('kick-bass.mp3')
      audio.play()
      break
    default:
      console.log(letter)
  }
}

//var audio=new Audio("sounds/tom-1.mp3");
// audio.play();
// anotheraddEventListener('keypress', function (event) {
//   console.log(event)
// })
