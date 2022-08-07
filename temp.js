let first = 7;
let second = 8;
console.log (first, second);
// appoach 1
// const temp = first;
// first = second;
// second = temp;
//appoach 2
[first , second] = [ second , first]
console.log(first, second);