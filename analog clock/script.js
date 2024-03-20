// var date = new Date();
// document.body.innerHTML  = "<h1> The date today is " + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + "<h1/>" 


//testing logical operators
// var a =1;
// var b=9;
// if(a<b)
// console.log("true");
// else
// console.log("false");

//testing arrays
// var color;
// color = ["red","blue","green","yellow"];
// var tyre;
// tyre = ["rubber", "metal", '5', 9];
// console.log(color);
// console.log(tyre);
// console.log(typeof color);
// console.log(typeof tyre[0]);
// console.log(tyre[2]);
// tyre[2] = 2;
// console.log(tyre[2]);
// console.log(tyre);
// console.log(tyre.join(", "));


//testing functions
// function m()
// {
//     a>b?console.log("a is greater as a is" + a):console.log("b is greater as b is " + b);
// }
// var a = 1/8;
// var b = 4/9;
// m();

//testing constants
// const p=3.14;
// console.log(p);

//testing let
// function log()
// {
//     var  v=2;
//     if(v)
//     {
//         let v="different";
//         console.log("nested v is " + v);
//     }
//     console.log("local scope " + v);
// }
// log();

//moving the hands
const hr = document.querySelector("#hour");
const min = document.querySelector("#minute");
const sec = document.querySelector("#second");

function runclock(){
var date = new Date();
console.log(date);

let hrr = date.getHours();
let minn = date.getMinutes();
let secc = date.getSeconds();
console.log("hour " + hrr + " minute " + minn + " second " + secc);

let hrposition = hrr*(360/12) + (minn*(360/60)/12);
let minposition = minn*(360/60) + (secc*(360/60)/60);
let secposition = secc*(360/60);

// secposition = secposition + 6;
// minposition = minposition + (6/60);
// hrposition = hrposition + (3/360);

hr.style.transform = "rotate(" + hrposition + "deg)";
min.style.transform = "rotate(" + minposition + "deg)";
sec.style.transform = "rotate(" + secposition + "deg)";
}

var interval = setInterval(runclock, 1000);