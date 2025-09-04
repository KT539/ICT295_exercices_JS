
/* Exercise n°1 19.08.2025
let musics_total = 125;
console.log(musics_total);
musics_total -= 15;
console.log(musics_total);
musics_total += 10;
console.log(musics_total)
console.log("Now there are " + musics_total + " tracks in total in my playlist"); */


/* Exercise 2 19.08.2025
let playlist = [];
let track1 = "Sultans of swing";
let track2 = "Highway star";
let track3 = "Stairway to Heaven";
playlist.push(track1, track2, track3);
let track4 = "You give love a bad name";
let track5 = "Detroit Rock City";
playlist.push(track4, track5);
playlist.splice(3, 1);
playlist.splice(3, 1);
playlist.splice(7, 1);
function display_playlist ()
    {console.log(`My playlist contains ${playlist.length} tracks :  ${playlist}`)}
display_playlist() */


/* Exercise 3 method 1 19.08.2025
for (let i = 1; i < 10; ++i) {
    console.log(String(i).repeat(i))
} */
/* Exercise 3 method 2 19.08.2025
for (let i =1; i < 10; ++i) {
    let repeat = "";
    for (let j=0; j < i; ++j) {
        repeat += i;
    }
    console.log(repeat);
} */


/* Exercise 4 25.08.2025
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b === 0) {
        throw new Error("Cannot divide by zero !")}
    return a / b};

console.log("Your result is : " + add(4, 5));
console.log("Your result is : " + subtract(7, 3));
console.log("Your result is : " + multiply(4, 2));
console.log("Your result is : " + divide(9, 3));
try {
    console.log("Your result is : " + divide(5, 0))}
catch (error) {
    console.error("Error: ", error.message)} */


/* Exercise 5 25.08.2025
import dayjs from "dayjs";
let now =dayjs()
const person = {
    firstname: "Jean",
    lastname: "Dupont",
    birthdate: '1921-08-07',
    power: "immortality",
    display: function () {
        const bd = dayjs(this.birthdate)
        const age = now.diff(bd, "year")
        if (age > 100 && this.power === "immortality") {
            return ("How incredible !")
        }
        else {
            return `${this.firstname} ${this.lastname} is ${age} years old and has ${this.power} as their power.`;
        }
    }
}

console.log(person.firstname);
console.log(person.lastname);
console.log(person.birthdate);
console.log(person.power);
console.log(person.display()); */









