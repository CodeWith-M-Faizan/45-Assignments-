// +++++ Excersice 36 +++++

// T-Shirt:
// Write a function called make_shirt() that accepts a size and the text of a message that should
// be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the
// message printed on it. Call the function.

function makeshirt(size:any, text:string) {
    console.log(`You Ordered a ${size} T-Shirt with the Message: ${text}`);
}

makeshirt("Large", "I Like Coding");
makeshirt("Small", "This is Typescript");