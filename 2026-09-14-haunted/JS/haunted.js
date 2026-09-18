// julie - lab 20 - sept 16
// welcome
function startGame() {
let name = prompt(`What is your name?`);
alert(`Tansi, welcome to Lost Spirit.
Inspired by a true story. 
It was a dark and stormy night...
Just kidding. It was actually a beautiful summer night.
But something didn't feel right.
You couldn't explain it. You were terrified. You didn't know why, but tonight, ${name}, you will find out why.`);

alert(`You're sitting on the couch when you see a black silhouette at the top of the stairs.

You quickly look up.

Nothing's there.`);

let investigate = prompt(`Do you investigate or go to bed?`).toLowerCase();
if (investigate === 'investigate') {
    alert(`You slowly make your way upstairs and look around.

Nothing.

You tell yourself you're imagining things and go to bed.`);
} else {
    alert(`Let's pretend that we didn't see anything.
You go straight to bed.`);
}

alert(`You're woken by your 5-year-old son shrieking.

You run into his room and find him sitting completely still, pale, staring at the wall with his arms straight out.

You call his name. He doesn't respond. After a few terrifying minutes, his arms finally drop.

That silhouette doesn't feel imaginary anymore.`);


// logical operators &&
let callDad = prompt(`Do you call your dad? Yes or no?`).toLowerCase();

if (callDad === `yes`) {
    alert(`Your dad listens as you explain what happened.
        
He gives you the number for an elder.`);
}

let callElder = prompt(`Do you call an Elder? Yes or no?`).toLowerCase();

if (callDad === `yes` && callElder === `yes`) {
    alert(`Good choice.

Your dad and the Elder arrive at the house.

After hearing what happened, the Elder explains that you may be dealing with a lost spirit.`);
} else {
    alert(`You don't have all the help you need.

The house grows strangely quiet.

Maybe trying to handle this alone wasn't such a good idea.`);
    callDad = prompt(`Call your dad?! YES or no?!`).toLowerCase();
    callElder = prompt(`Call an Elder?! YES or no?!`).toLowerCase();
    if (callDad === `yes` && callElder === `yes`) {
    alert(`Good choice.

Your dad and the Elder arrive at the house.

After hearing what happened, the Elder explains that you may be dealing with a lost spirit.`);
    } else {
        alert(`You need to call your dad AND the Elder.`);
        callDad = prompt(`Do you call your dad?! YES or yes?!`).toLowerCase();
        callElder = prompt(`Do you call an Elder?! YES or yes?!`).toLowerCase();
        if (callDad === `yes` && callElder === `yes`) {
                alert(`Good choice.

Your dad and the Elder arrive at the house.

After hearing what happened, the Elder explains that you may be dealing with a lost spirit.`);
            } else {
                alert(`I called your dad and the Elder.

They arrive at the house.

After hearing what happened, the Elder explains that you may be dealing with a lost spirit.`);
            } 
        }
}

// internal dilemma

let faceIt = prompt(`You know there's a lost spirit in your home, do you face it or leave?`).toLowerCase();
switch (faceIt) {
    case `face it`:
        alert(`You're terrified, but this is your home. 
Time to deal with it.`);
        break;
    case `leave`:
        alert(`You forgot your son, you better go back.`);
        faceIt = prompt(`Face it or leave with your son?!`).toLowerCase();
        

        switch (faceIt) {
            case `face it`:
                alert(`You're terrified, but this is your home. 
Time to deal with it.`);
                break;

            case `leave`:
                alert(`You're doing this.`);
                break;
                
            default:
                alert(`You're doing this.`);
            }
}

// smudge bowl
alert(`The Elder prepares to smudge the house.
The sage is lit and placed inside an abalone shell.
You reach out to take it.
The second your fingertip touches the shell...
CRACK.`);
alert(`The shell shatters.
Everyone goes silent.
The Elder calmly says, "It's okay."
You need to find something else that can safely hold the sage.`);


let bowl = prompt(`Do you have a smudge bowl? Yes or no?`).toLowerCase();
let shell;

if (bowl !== `yes`) {
    shell = prompt(`Do you have an abalone shell? Yes or no?`).toLowerCase();
}

if (bowl === `yes` || shell === `yes`) {
    alert(`You open the windows and smudge the house, moving from room to room until you finally return to where you started.
You wait.
No footsteps.
No shadows.
That horrible feeling is gone.
The house feels like yours again.
The lost spirit has left.`);
document.getElementById("results").textContent=`${name}, you did it! The house feels peaceful again, and most importantly, the silhouette at the top of the stairs is gone.
For now...`
} else {
    alert(`Here, take this smudge bowl.`);
    bowl = prompt(`Do you have a smudge bowl now? YES or no?`).toLowerCase();
    if (bowl === `yes`) {
    alert(`You open the windows and smudge the house, moving from room to room until you finally return to where you started.
The house is silent.
You wait.
No footsteps.
No shadows.
That horrible feeling is gone.
The house feels like yours again.
The lost spirit has left.`);
    }
    else {
    alert(`You don't have everything you need.
There's nothing more you can do tonight.
Eventually, the house becomes quiet.
Maybe it's over.
You look toward the stairs.
The silhouette is standing at the top.
You live together now.`);
document.getElementById("results").textContent= `Congratulations ${name}! 
You have a new roommate!`;
    }
}
}
document.getElementById("start-game").addEventListener("click", startGame);