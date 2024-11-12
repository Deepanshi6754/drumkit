
var numberOfDrumButtons =
    document.querySelectorAll(".button").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".button")[i]
        .addEventListener("click", function () {

            var buttonStyle = this.innerHTML;
            sound(buttonStyle);
            animation(buttonStyle);
        });
}

document.addEventListener("keypress", function (event) {
    sound(event.key);
    animation(event.key);
});

function sound(key) {
    switch (key) {
        case "W ":
            var sound1 = new Audio("sounds/crash.mp3");
            sound1.play();
            break;

        case "A":
            var sound2 = new Audio("sounds/crash.mp3");
            sound2.play();
            break;

        case "S":
            var sound3 = new Audio("sounds/snare.mp3");
            sound3.play();
            break;

        case "D":
            var sound4 = new Audio("sounds/tom-2.mp3");
            sound4.play();
            break;

        case "J":
            var sound5 = new Audio("sounds/tom-3.mp3");
            sound5.play();
            break;

        case "K":
            var sound6 = new Audio("sounds/tom-4.mp3");
            sound6.play();
            break;

        case "L":
            var sound7 = new Audio("sounds/tom-1.mp3");
            sound7.play();
            break;

        default: console.log("Not such a key");
    }
}

function buttonAnimation(value) {
    var animation = document.querySelector("." + value);
    activeButton.classlist.add("animation");

}




