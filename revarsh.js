function reverstring (text){
    let reversed = "";
    for(let i = text.length-1; i>=0; i--){
        const element = text[i];
        reversed = reversed + element;
        console.log(element,reversed);
    }
    return reversed;
}
const mystring = "i am a good girl";
const reversed = reverstring(mystring);
console.log('reversed output:', reversed);