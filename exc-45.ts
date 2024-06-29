// +++++ Excersice 45 +++++

// Cars:
// Write a function that stores information about a car in an Object. The function should always
// receive a manufacturer and a model name. It should then accept an arbitrary number of keyword
// arguments. Call the function with the required information and two other name-value pairs, such as
// a color or an optional feature. Print the Object that’s returned to make sure all the information was
// stored correctly.

function carDetails (manufacturer: string, model: string, details: [],Type:string,Color:string) {
    let car = {
        Manufacturer : manufacturer,
        Model : model,
        details : [],
        Color : Color,
        Type : Type
    };

    for (let detail of details) {
        car[detail] = detail[1];
    }

    return car;
}

console.log(carDetails("Toyota", "Yaris", ["Color", "Black"], ["Type", "Sedan"]));
console.log(carDetails("Honda", "Civic", ["Color", "White"], ["Type", "Sedan"]));
