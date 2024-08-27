//let and const 
//porani js ma teen trah k function hote the ab new js ma one trah k function ha jis k teen shape hoti ha 
///Arrow Functions 
//1. basic fat arrow function 
//u can understand fat = (), arrow = => ,, its syntex is ()=>{}.
//2. basic fat arrow function  wiht one paramete 
//u can understand (parameter)=>{}
    //notes that if u have one paramaeter then u cna write this function like this   parameter=>{}, but if u have more then one parameter then u should be able to like this (parameter,secondParameter)=>{}
        //3.fat arrow fn with implicit return 
        //implicit return 
// Implicit return is a feature in some programming languages where a function automatically returns the result of an expression without explicitly using the return keyword.
// ()=>eder jo bhe likho ge wo khud b khud e return ho jaye ge 
//e.g,
// let pak = ()=>13;
// console.log(pak());
//.............................................
//TEMPLETS LITERALS 
////e.g
//console.log(`hey print this ${3*6}`);//result will be 18
//.................................................
//SPREAD AND REST  DONO K SIGNS SAME E HA ...
//SPREAD use hote ha copy ya phir us location pr kesi aur ki value bekharne kelia 
//REST use hote ha jb ap ko bache hoye values ko ek variable ma dalna hote he 
// in this case ... that is SPREAD 
// let arr = [1,2,3,4,5,6,7];
// let arr2 = [...arr];
// console.log(arr);
// console.log(arr2);
//in this case that is REST
// function print(a,b,...c){
// console.log(a,b,c);
// }
//print(1,2,3,4,5,6,7,8)//edr c variable as a rest use ho ge 

//DESTRUCTURING 
// let arr= [1,2,3,4,5];
//one is methos to print the value at index 
// let b = arr[0];
//now we are destructuing this code in to like this 
//let [b,c,d,e]=arr;//ab jitne variable declare kiye itne tk ye values print krwa de ge arr ma se index tk 
//  console.log([b,c,d,e]);

//PROMISES 
// var ans = new Promise((res,rej)=>{
//     if (false){
//         return res();
//     }else{
//         return rej();
//     }
// });
// ans.then(function (){
//     console.log("resolved ");
// }).catch(function (){
//     console.log("rejected ");
// })

// //PROMISE IN JAVASCRIPT
// var love = new Promise((resolve, reject) => {
//     let love = "yes"; 
//     if (love === "yes") {
//         resolve();
//     } else {
//         reject();
//     }
// });

// love.then(function () {
//     console.log("yes, I will marry you");
// }).catch(function () {
//     console.log("no, I do not love you, you are stupid");
// });
// var friensds  = new Promise((resolve , reject)=>{
//     var ans = Math.floor(Math.random()*10);
//     if (ans<5){
//         resolve();
//     }
//     else{
//         reject();
//     }
// })
// friensds.then(function (){
//     console.log("below")
// }).catch(function(){
//     console.log("upper");
// })

//ASYNC WAIT 
//koi bhe aesa code jis ma ap async code likhte he tu es ma ap promise k use bhe kre ge aur jb promise k result aaata ha tu ap .then lgate ha ab es thn se bachne kelai ap async use kr skte ha 
// async function name() {
//     try{
//         const response = await fetch(`https://randomuser.me/api/`);
//         const data = await response.json();
//         console.log(data);
//     }
//     catch(error){
// console.error("eroro " + error);
//     }
// }
// name();
//without using asyns it will be like this 
// function name (){
//     fetch(`https://randomuser.me/api/`)
// .then(function(raw){
//     return raw.json();
// }).then(function (data){
// console.log(data);
// })
// }
// name();





