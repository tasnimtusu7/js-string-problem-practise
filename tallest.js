function maxInArray (numbers){
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers [index];
       if(element > largest){
        largest = element;
       }
    }
    return largest;
}
const heigthest = [123, 150, 134, 180, 153];
const tellest = maxInArray(heigthest);
console.log('taller person is:', tellest);