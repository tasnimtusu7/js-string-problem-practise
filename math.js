const result = Math.pow(3 , 8);
console.log(result);

const num1 = 25;
const num2 = 45;
const gap = Math.abs(num1 - num2);
console.log(gap);
if (gap > 5){
    console.log('you can get married')
}
else {
    console.log("con not get marriad");
}

const number = 2.43243;
const fullnumber =  Math.round(number);
console.log(fullnumber);
// ceil floor
const fullNumber = Math.ceil(number);
console.log(fullNumber);
const fulllnumber = Math.floor(number);
console.log(fulllnumber);
//random
for(let i = 0; i <20; i++){
    const random = Math.round(Math.random()*6);
    console.log(random);
}