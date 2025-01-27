// +++++ Excersice 06 +++++

// Stripping Names:
// Store a person’s name, and include some whitespace characters at the beginning and end of
// the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name
// once, so the whitespace around the name is displayed. Then print the name after striping the white
// spaces.

// Simple Space

const myname: string = "    Muhammad Faizan    ";


console.log(myname);

console.log(myname.trim());

// \t for Tap Space
const spaceName: string = "\tMuhammad Faizan";

// \n for Line Break
const newLineName: string = "Muhammad\nFaizan";

console.log(spaceName);

console.log(newLineName);