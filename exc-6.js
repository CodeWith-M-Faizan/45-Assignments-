"use strict";
// +++++ Excersice 06 +++++
// Stripping Names:
// Store a person’s name, and include some whitespace characters at the beginning and end of
// the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name
// once, so the whitespace around the name is displayed. Then print the name after striping the white
// spaces.
// Simple Space
const my_Name = "    Muhammad Faizan    ";
console.log(my_Name);
console.log(my_Name.trim());
// \t for Tap Space
const spaceName = "\tMuhammad Faizan";
// \n for Line Break
const newLineName = "Muhammad\nFaizan";
console.log(spaceName);
console.log(newLineName);
