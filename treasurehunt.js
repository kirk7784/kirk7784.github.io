var candy = Math.floor(Math.random() * 9); //assign random num between 0-8
var techSergeant = Math.floor(Math.random() * 9);
var techSergeant2 = Math.floor(Math.random() * 9);
var tries = 3 //adjusts amount of attempts

// makes sure candy and techSergeant can't be in the same spot
while (candy === techSergeant) {
    techSergeant = Math.floor(Math.random() * 9);
}

while (techSergeant === techSergeant2) {
    techSergeant2 = Math.floor(Math.random() * 9);
}

while (candy === techSergeant2) {
    techSergeant2 = Math.floor(Math.random() * 9);
}

var treasure = (location) => {
    if (tries !== 0) {
        if (location === candy) {
            document.getElementById(location).innerHTML = '🍫';
            document.getElementById('alert').innerHTML = '🍫🍫🍫You found the candy!🍫🍫🍫';
            tries = 0
        } else if (location === techSergeant) {
            document.getElementById(location).innerHTML = '💀';
            document.getElementById('alert').innerHTML = '💀You found the Tech Sergeant, that\'s game over!💀';
            document.getElementById(candy).innerHTML = '🍫';
            document.getElementById(techSergeant2).innerHTML = '💀';
            tries = 0
        } else if (location === techSergeant2) {
            document.getElementById(location).innerHTML = '💀';
            document.getElementById('alert').innerHTML = '💀You found the Tech Sergeant, that\'s game over!💀';
            document.getElementById(candy).innerHTML = '🍫';
            document.getElementById(techSergeant).innerHTML = '💀';
            tries = 0
        } else {
            document.getElementById(location).innerHTML = '✖';
            tries -= 1
            if (tries > 1) {
                document.getElementById('alert').innerHTML = `You have ${tries} more tries left.`;
            } else if (tries === 1) {
                document.getElementById('alert').innerHTML = `Last try, make it count!`;
            } else {
                document.getElementById('alert').innerHTML = 'You\'re out of tries, better luck next time!';
                document.getElementById(candy).innerHTML = '🍫';
                document.getElementById(techSergeant).innerHTML = '💀';
                document.getElementById(techSergeant2).innerHTML = '💀';
            }
        }
    }
}