var ln=document.querySelectorAll(".drum").length;
for(var i=0;i<ln;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var exp=this.innerHTML;

  makesound(exp);
  animation(exp);
}  );

}
document.addEventListener("keypress",function(event){
  makesound(event.key);
  animation(event.key);
})
function makesound(key){
  switch (key) {
    case "f":
      var tom1=new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2=new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "r":
      var tom3=new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4=new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "e":
      var snare=new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "E":
      var crash=new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "n":
      var kick=new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:

  }
  console.log(event);
}
function animation(currentkey){
  var active=document.querySelector("."+currentkey);
  active.classList.add("pressed");

setTimeout(function(){active.classList.remove("pressed");},100);

}
