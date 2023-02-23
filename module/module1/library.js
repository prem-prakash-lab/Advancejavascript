// // export let messsage="ES6module";
let messsage="ES6module";

// // export function user(){
// //     console.log("hello everyone");
// // }



function user(name){
    console.log(`hello ${name}`);
}

// // export function user(name){
// function user(name){
//     return (`hello ${name}`);
// }

// // export class test{
class test{
    constructor(){
        console.log("constructor method");
    }
}
export{messsage,user,test};


export default function(){
    console.log("hello");
}