// julie - lab 19 - sept 13
function startGame() {
let score = 0;
alert(`Welcome to my space quiz!`);
let name = prompt(`What is your name?`);

// Question 1 - earth moon
// add .toLowerCase() so they can use cap or no cap
let earthMoon = prompt(`Does Earth have exactly one natural moon?`).toLowerCase();
let earthMoonAns = `yes`;
if (earthMoon === earthMoonAns) {
    alert(`Yeah it does!`);
    score++;
    console.log(`Correct! You're ready for liftoff!`);
} else {
    alert(`Close, but no moon rock!`);
    console.log(`The correct answer was yes, Earth has one natural moon.`);
}

// Question 2 - closest planet - if else
let closestPlanet = prompt(`Which planet is closer to the Sun?
Mercury or Venus`).toLowerCase();
let closestPlanetAns = `mercury`;
if (closestPlanet === closestPlanetAns) {
    alert(`Correct! Your knowledge is out of this world!`);
    score++;
    console.log(`Correct! Your knowledge is out of this world!`);
} else if (closestPlanet === `venus`) { 
    alert(`Not quite! Your answer got lost in space.`);
    console.log(`Mercury is the closest planet to the sun.`);
} else {
    alert(`That wasn't an option`);
    console.log(`Mercury is the closest planet to the sun.`);
}

// Question 3 - blue planet - else if
let bluePlanet = prompt(`Which planet is known as the Blue Planet?
Uranus, Neptune, Earth, or Venus`).toLowerCase();
let bluePlanetAns = `earth`;
if (bluePlanet === bluePlanetAns) {
    alert(`Great job! That answer was stellar!`);
    score++;
    console.log(`Great job! That answer was stellar!`)
} else if (bluePlanet === `neptune`) {
    alert(`Oops! That answer drifted off course.`);
    console.log(`Earth is the Blue Planet`);
} else if (bluePlanet === `uranus`) {
    alert(`Oops! That answer drifted off course.`);
    console.log(`Earth is the Blue Planet`);
} else if (bluePlanet === `venus`) {
    alert(`Oops! That answer drifted off course.`);
    console.log(`Earth is the Blue Planet`);
} else {
    alert(`Way off!`);
    console.log(`Earth is the Blue Planet`);
}

// question 4 - how many planets
let howManyPlanets = Number(prompt(`How many planets are in our solar system?`));
if (howManyPlanets === 8) {
    alert(`You got it! Houston, we have a correct answer!`);
    score++;
    console.log(`You got it! Houston, we have a correct answer!`);
} else if (howManyPlanets === 9) {
    alert(`Yes, if you're including dwarves.`);
    console.log(`You got it! Houston, we have a correct answer!`);
    score++;
} else {
    alert(`Houston, we have a wrong answer!`);
    console.log(`There are 8 planets, 9 if you include Pluto`);
}

// question 5 - moon's own light
let moonLight = prompt(`True or False: The moon produces its own light.`).toLowerCase();
let moonLightAns = `false`;
if (moonLight === moonLightAns) {
    alert(`Correct! You're shining brighter than a supernova!`);
    score++;
    console.log(`Correct! You're shining brighter than a supernova!`);
} else if (moonLight === `true`) {
    alert(`That answer needs a course correction!`);
    console.log(`"Moonlight" is actually sunlight reflecting off the Moon's surface and travelling to earth.`);
} else {
    alert(`That wasn't even an option.`);
    console.log(`"Moonlight" is actually sunlight reflecting off the Moon's surface and travelling to earth.`);
}

// question 6 - smallest planet
let smallPlanet = prompt(`What is the smallest planet in our solar system?
Mars, Mercury, Venus, or Neptune`).toLowerCase();
let smallPlanetAns = `mercury`;
if (smallPlanet === smallPlanetAns) {
    alert(`Well done! You're on the right trajectory!`);
    score++;
    console.log(`Well done! You're on the right trajectory!`);
} else if (smallPlanet === `mars`) {
    alert(`Oops! That guess entered the wrong orbit.`);
    console.log(`Mercury is the smallest planet in our solar system.`);
} else if (smallPlanet === `venus`) {
    alert(`Oops! That guess entered the wrong orbit.`);
    console.log(`Mercury is the smallest planet in our solar system.`);
} else if (smallPlanet === `neptune`) {
    alert(`Oops! That guess entered the wrong orbit.`);
    console.log(`Mercury is the smallest planet in our solar system.`);
} else {
    alert(`That wasn't even an option.`);
    console.log(`Mercury is the smallest planet in our solar system.`);
}

// question 7 - sideRotation
let sideRotation = prompt(`Which planet rotates on its side?
Mars, Neptune, Uranus, or Venus`).toLowerCase();
let sideRotationAns = `uranus`;
if (sideRotation === sideRotationAns) {
    alert(`Cosmic choice! You picked the right answer!`);
    score++;
    console.log(`Cosmic choice! You picked the right answer!`);
} else if (sideRotation === `mars`) {
    alert(`Not this time, space cadet!`);
    console.log(`Uranus rotates on its side.`);
} else if (sideRotation === `neptune`) {
    alert(`Not this time, space cadet!`);
    console.log(`Uranus rotates on its side.`);
} else if (sideRotation === `venus`) {
    alert(`Not this time, space cadet!`);
    console.log(`Uranus rotates on its side.`);
} else {
    alert(`That wasn't even an option.`);
    console.log(`Uranus rotates on its side.`);
}

// question 8 - largestMoon
let largestMoon = prompt(`What is the name of the largest moon in our solar system?`).toLowerCase();
let largestMoonAns = `ganymede`;
if (largestMoon === largestMoonAns) {
    alert(`Correct! Your brain is operating at light speed!`);
    score++;
    console.log("Correct! Your brain is operating at light speed!");
} else {
    alert(`Your answer encountered a black hole!`);
    console.log(`The largest moon in our solar system is Ganymede.`);
}

// question 9 - sunLayer
let sunLayer = prompt(`Which layer of the Sun is visible from Earth? 
Corona, Core, Photosphere, or Chromosphere`).toLowerCase();
let sunLayerAns = `photosphere`;
if (sunLayer === sunLayerAns) {
    alert(`Correct! Even the aliens are impressed!`);
    score++;
    console.log(`Correct! Even the aliens are impressed!`);
} else if (sunLayer === `corona`) {
    alert(`That guess failed to launch!`);
    console.log(`The layer of sun that is visible from Earth is called photosphere`);
} else if (sunLayer === `core`) {
    alert(`That guess failed to launch!`);
    console.log(`The layer of sun that is visible from Earth is called photosphere`);
} else if (sunLayer === `chromosphere`) {
    alert(`That guess failed to launch!`);
    console.log(`The layer of sun that is visible from Earth is called photosphere`);
} else {
    alert (`That guess failed to launch!`);
    console.log(`The layer of sun that is visible from Earth is called photosphere`);
}

// question 10 - lightYear
let lightYear = prompt(`True or False: A light-year measures distance, not time.`).toLowerCase();
if (lightYear === `true`) {
    alert(`That's one small step for ${name}, one giant leap for knowledge!`);
    score++;
    console.log(`That's one small step for ${name}, one giant leap for knowledge!`);
} else {
    alert("Almost! Give your rocket another boost.");
    console.log(`It's true, a light-year measures distance!`);
}

alert("Mission complete! Check the console for encouraging messages and corrections for any answers you missed.");

document.getElementById(`results`).textContent = `${name}, you scored ${score} out of 10!`

console.log(`${name}, you scored ${score} out of 10!`);
}
document.getElementById("start-game").addEventListener("click", startGame);