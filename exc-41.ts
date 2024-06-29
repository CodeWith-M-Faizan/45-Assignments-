// +++++ Excersice 41 +++++

// Magicians:
// Make an array of magician’s names. Pass the array to a function called show_magicians(), which
// prints the name of each magician in the array.

function showmagicians(magicians : string[]) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);

        
    }
}

let magicians1 = ["Khalid", "Fawad", "Moin", "Shahid", "Aslam"];

showmagicians(magicians1);