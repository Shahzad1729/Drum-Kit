var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () { 
        // Plays sound based on cliked on button
        makeSound(this.innerHTML)
    });

    document.addEventListener("keypress",function(event)
    {
        // Plays sound based on keypress
        makeSound(event.key);
    })
}

// Producing Sound
function makeSound(key)
{
    switch (key) {
        case "w":
            playSound('tom-1.mp3');
            break;
        case "a":
            playSound('tom-1.mp3');
            break;

        case "s":
            playSound('tom-1.mp3');
            break;

        case "d":
            playSound('tom-1.mp3');
            break;

        case "j":
            playSound('snare.mp3');
            break;

        case "k":
            playSound('crash.mp3');
            break;

        case "l":
            playSound('kick-bass.mp3');
            break;
        
        default:
            console.log(buttonInnerHTML);
            break;

    }
}


// Audio function
function playSound(source) {
    var audio = new Audio('sounds/' + source);
    audio.play();
}