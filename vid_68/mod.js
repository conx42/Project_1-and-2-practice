let count = 0;
console.log("This is module");
function average(arr) {
    let sum = 0;
    arr.forEach(element => {
        console.log(`Element:- ${element}`);
        console.log(`Before sum:- ${sum}`);
        sum += element;
        console.log(`After sum:- ${sum}`);
        
        count += 1;
        console.log(`loop ta cholche ${count} baar\n\n`);
    });
    return sum/arr.length;
}
// module.exports = average; //single element export korley erom kore likhtey hobe
module.exports = {
    avg: average,
    no_of_iterations: count
} //Multiple element export korley erom kore likhtey hobe