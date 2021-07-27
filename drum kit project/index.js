document.querySelectorAll(".drum").forEach((x) => {
    x.addEventListener("click", function(){
        let buttonInnerHtml = x.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    })
    
    document.addEventListener('keydown', function(e){
        makeSound(e.key);
        buttonAnimation(e.key);
    })

})

function makeSound(key){
    switch (key){
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(key);   
    }
}

function buttonAnimation(currentKey){
    let activeButton = document.querySelector(`.${currentKey}`);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)
}


// function HouseKeeper(yearOfExperience, name, CleaningReport){
//     this.yearOfExperience = yearOfExperience;
//     this.name = name;
//     this.CleaningReport = CleaningReport;
//     this.cleaning = function(){
//         console.log("cleaning in prograss.")
//     }
// }

// const cleanerOne = new HouseKeeper(12, 'Clera', ['bathroom', 'living room', 'bedroom']);
// cleanerOne.cleaning();