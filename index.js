for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {

        var buttonInnerhtml = this.innerHTML;
        
        makeSound(buttonInnerhtml);

        buttonAnimation(buttonInnerhtml);
    });
}


document.addEventListener("keypress",function(event){
    makeSound(event.key);

    buttonAnimation(event.key);
})

function makeSound(key){
    switch (key) {
        case "v":
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        case "i":
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case "h":
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
        case "n":
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;
        case "u":
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}