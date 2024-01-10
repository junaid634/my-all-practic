let inp =document.querySelector("input");
let but = document.querySelector("button");
let li = document.querySelector("li");
let ul = document.querySelector("Ol");
but.style.color="white";
but.addEventListener("click", function(e){
   
    let x = inp.value;
    if(x != 0 ){
   let work = document.createElement("li");
   let bt = document.createElement("button");
   bt.innerText="Delete";
   bt.style.width="100px";
   bt.style.backgroundColor = "red";
   bt.style.color="white";
   bt.style.marginTop="10px"; 
   bt.style.marginLeft="10px";
   bt.style.marginBottom="10px";
   work.innerText=inp.value;
   inp.value="";
   ul.appendChild(work);
   work.appendChild(bt);
   bt.addEventListener("click", function(){
    let par = bt.parentElement;
//SELECTING THE PARENT ELEMENT FROM HARE AND THEN REMOVE THEM BY CLICKIN ON THE 
    par.remove();
   });
}
});




//----------Text editor software----------
/* input and p element having id is textt
let inp = document.querySelector("input");
inp.addEventListener("input", function(){
   let para = document.querySelector("#textt");
   para.innerText=this.value;
  });
*/

// --------use of "this" and "key events"-------
/*
let inp =  document.querySelector("input");
inp.addEventListener("keydown", function(e){
// console.log(e);
console.log(`you entered "${e.key}"`);
if(e.key=="ArrowUp"){
this.style.backgroundColor="red";
this.style.color="white";} else {
    this.style.backgroundColor="green";
    console.log("invalid entry");
}
});*/
/*
----------randum color gerator-------------*/

// function rc() {
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);
//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }
// let but = document.querySelector("button");
// but.addEventListener("click", function(){
//     let rmc = rc();
//     let h1 = document.querySelector("h1");
//     h1.innerText = `New color is ${rmc}`;
//      let div = document.querySelector("div");
//      div.style.backgroundColor= rc();
//      console.log("this is changed")
// });








/*
--------------- day 22 practic question-----------------
let body1 = document.querySelector("body");

let inp =document.createElement("input");
body1.append(inp);
let but = document.createElement("button");
but.innerText= "click me";
body1.append(but);
//let inp =document.querySelector("input");
inp.setAttribute("placeholder", "username");
but.setAttribute("id", "btn");
let butt = document.querySelector("#btn");
butt.classList.add("btn");
let h1 = document.createElement("h1");
h1.innerText= "DOM Practic";
body1.append(h1);
h1.classList.add("ul");*/

 



/*
-----------------CH# 22 video practic ------------------

let p1 = document.createElement("p");
p1.innerText = "Hey! I am read.";
let body1 = document.querySelector("body")
body1.append(p1);
p1.classList.add("red");
let h3 = document.createElement("h3");
h3.innerText = "hy! i am red";
body1.append(h3);
h3.classList.add("blue");
let container = document.createElement("div");
body1.append(container);
let divh1 = document.createElement("h1");
divh1.innerText= "i am div";
container.append(divh1);
let divp = document.createElement("p");
divp.innerText = "i am para";
container.append(divp);
container.classList.add("divbg");
*/


// let arr = [
//     {
//         name: "khan",
//         roll: 1
//     },{
//         name: "junaid",
//         roll: 2
//     },{
//         name: "baloch",
//         roll: 3
//     }
// ];
// function junaid(r) {
//     console.log(r.name);
// };
// arr.forEach(junaid);
