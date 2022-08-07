const lyrics = ("ami bondhu kala paKhi tumi jano ki bosonto kal a tmai chinte preraci");
const sarchstring = "Pakhi";
const lyricsLower = lyrics.toLowerCase();
const sarchstringlower = sarchstring.toLowerCase();
const result = lyricsLower.includes(sarchstringlower);
console.log(result);
//indexof
console.log (lyrics.indexOf("kala"));
console.log (lyrics.indexOf("ami"));
console.log(lyrics.indexOf("tasniqul"));
if(lyrics.indexOf('kala')!== -1){
    console.log("exist in word");
}
else{
    console.log("can not exit");
}
//startwith
console.log(lyrics.startsWith('ami'));

//endwith
console.log(lyrics.endsWith('preraci'));
