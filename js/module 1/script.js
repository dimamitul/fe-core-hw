const string1 = "qwertyuiop"; console.log("first string: " + string1);
const string2 = "asdfghjkl"; console.log("second string: " + string2);
const string3 = "zxcvbnm"; console.log("third string: " + string3);

const string1Length = string1.length; console.log("first string length: " + string1Length);

const string2Length = string2.length; console.log("second string length: " + string2Length);

const string3Length = string3.length; console.log("third string length: " + string3Length);



let string1FirstChar = string1.charAt(0); console.log("first char from first string: " + string1FirstChar);
let string1LastChar = string1.charAt(string1Length - 1); console.log("last char from first string: " + string1LastChar);

let string2FirstChar = string2.charAt(0); console.log("first char from second string: " + string2FirstChar);
let string2LastChar = string2.charAt(string2Length - 1); console.log("last char from second string: " + string2LastChar);

let string3FirstChar = string3.charAt(0); console.log("first char from third string: " + string3FirstChar);
let string3LastChar = string3.charAt(string3Length - 1); console.log("last char from third string: " + string3LastChar);

let charToFind = 'b';

let charIndexInString1 = string1.indexOf(charToFind); console.log("index of char \"" + charToFind + "\" first string : "+ charIndexInString1);
let charIndexInString2 = string2.indexOf(charToFind); console.log("index of char \"" + charToFind + "\" second string : "+ charIndexInString2);
let charIndexInString3 = string3.indexOf(charToFind); console.log("index of char \"" + charToFind + "\" third string : "+ charIndexInString3);