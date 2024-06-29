// +++++ Excersice 42 +++++

// Great Magicians:
// Start with a copy of your program from Exercise 41. Write a function called make_great() that
// modifies the array of magicians by adding the phrase the Great to each magician’s name. Call
// show_magicians() to see that the list has actually been modified.


function makegreat(magician: string[]) {
  for (let i = 0; i < magician.length; i++) {
    magician[i] = `The Great ${magician[i]}`;
  }
}

function showMagicians(magician: string[]) {
  for (let magician of magicians) {
    console.log(magician);
  }
}

let magician= ["Khalid", "Fawad", "Moin", "Shahid", "Aslam"];

makegreat(magicians);

show_magicians(magicians);