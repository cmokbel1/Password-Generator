// DEFINE PASSWORD POTENTIAL CHARACTERS

const lc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const chars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '|', '}', '{', ':', '?', '>', '<', '.', '/', ';', '[', ']'];

document.getElementById('generate').addEventListener('click', () => {
    // DEFINE INPUT VARIABLE AND NEW PASSWORD

let pwChar = [];
let newPW = '';

    // USER PROMPTS FOR SPECIFICATION

    let inputOne = confirm("Lowercase Letters? (ok = yes, cancel = no)");
    let inputTwo = confirm("Uppercase Letters? (ok = yes, cancel = no)");
    let inputThree = confirm("Special Characters? (ok = yes, cancel = no)");
    let inputFour = confirm("Numbers? (ok = yes, cancel = no)");

    // VALIDATE AT LEAST 1 SPECIFICATION SELECTED'

    if (!inputOne && !inputTwo && !inputThree && !inputFour) {
        alert('Please Select Atleast One Specification');
        return;
    };

    let inputFive = parseInt(prompt('Password Length(8-128 characters)?', '8'))
    console.log(inputFive)
    // VALIDATE NUMERIC CONSISTANCY

    if (inputFive < 8 || inputFive > 128 || isNaN(inputFive)) {
        alert('Please Select a number between 8 and 128');
        return;
    }
    // PUSH SPECIFICATIONS TO NEW VARIABLE FOR PW GENERATION

    if (inputOne) {
        pwChar = lc;
    }
    if (inputTwo) {
        pwChar = pwChar.concat(uc);
    }
    if (inputThree) {
        pwChar = pwChar.concat(chars);
    }
    if (inputFour) {
        pwChar = pwChar.concat(num);
    }
    console.log(pwChar);

    // CONTINUE ONTO THE RANDOM PASSWORD GENERATOR

    for (let i = 0; i < inputFive; i++) {

        // TAKE RANDOM CHAR FROM pwChar AND SEND TO newPW 
        let random = Math.floor(Math.random() * pwChar.length);

        newPW = newPW + pwChar[random];
        //  newPW.push(pwChar[random]);
    }
    // let newNewPW = newPW.toString();

    console.log(newPW);
    // UPDATE TEXTAREA WITH THE NEW PASSWORD 

    document.getElementById('password').innerHTML = `${newPW}`;
})
