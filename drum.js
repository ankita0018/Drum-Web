/*//detecting button press

var count = 0;
var allButtons = document.querySelectorAll(".look").length;



function handleClick(){

var buttonInnerHTML = this.innerHTML;
makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);
              
};
 while(count < allButtons){
     document.querySelectorAll(".look")[count].addEventListener("click", handleClick);
     count++;
} */

//Keyboard Button press
document.addEventListener("keypress",function(event){

    makeSound(event.key);
    
    buttonAnimation(event.key);
    
    });
    
    
    
    function makeSound(key)
    {
      switch (key) 
      {
    
       case "w":
       var snare= new Audio("Snare-Drum.mp3");
       snare.play();
       break;
    
       case "a":
       var bass = new Audio("Bass-Drum.mp3");
       bass.play();
       break;
    
       case "s":
       var med = new Audio("Medium-Tom.mp3");
       med.play();
       break;
    
       case "d":
       var sma = new Audio("Small-Tom.mp3");
       sma.play();
       break;
    
       case "j":
       var flo = new Audio("Floor-Tom.mp3");
       flo.play();
       break;
    
       case "k":
       var cymbal = new Audio("Splash-Cymbal.mp3");
       cymbal.play();
       break;
    
       case "l":
       var hihat = new Audio("Hi-Hat.mp3");
       hihat.play();
       break;
    
       default:console.log(buttonInnerHTML);
      }
    }
 

