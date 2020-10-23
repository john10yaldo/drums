// while loop that runs 7 times to addEventListener to all 7 buttons
var i = 0
while (i < 7){


  document.querySelectorAll(".drum")[i].addEventListener("click" , clickfunc);
  i = i + 1
}



// this function will run every time one of the button is clicked
function clickfunc(){
  makeSound(this.innerHTML) ;
  animation(this.innerHTML) ;

}

// this function will run every time the keyboard letter is pressed
document.addEventListener('keypress', keysfunc);

function keysfunc(event) {
  makeSound(event.key)
  animation(event.key)

}


// assigning each button to do a special command of playing the audio files
function makeSound(key){
  switch (key) {
    case "w":
    var tom1 = new Audio('tom-1.mp3');
    tom1.play();
      break;

    case "a":
    var tom2 = new Audio('tom-2.mp3');
    tom2.play();
    break;

    case "s":
    var tom3 = new Audio('tom-3.mp3');
    tom3.play();
    break;

    case "d":
    var tom4 = new Audio('tom-4.mp3');
    tom4.play();
    break;

    case "j":
    var tom5 = new Audio('snare.mp3');
    tom5.play();
    break;

    case "k":
    var tom6 = new Audio('crash.mp3');
    tom6.play();
    break;

    case "l":
    var tom7 = new Audio('kick-bass.mp3');
    tom7.play();
    break;


    default:

  }
}



function animation(currentKey){
  var currentButton = document.querySelector("." + currentKey);
  currentButton.classList.add("pressed");                        // here we added the css class that shows an animation

  setTimeout(function(){
    currentButton.classList.remove("pressed")        // here we removed the css class that shows an animation
  }, 100)
}
