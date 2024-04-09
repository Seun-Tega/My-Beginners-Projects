
function generate(){
    var a =document.getElementById('weight').value;
    var b= document.getElementById('height').value;
    var c= b*b;
    var d= a / c;
  
document.getElementById('calculate').innerHTML='Your BMI is:'+''+ d.toFixed(2);

if (d<18.5) {document.getElementById('status').innerHTML= 'STATUS :'+''+'UNDERWEIGHT.'; 


}
else if (d>25) {document.getElementById('status').innerHTML='HEALTHY';

}
else {document.getElementById('status').innerHTML='OVERWEIGHT';

}
var a =document.getElementById('weight').value ='';
var b= document.getElementById('height').value='';

}

function add(){
let a=document.getElementById('nA').value;
let b=document.getElementById('nB').value;
let c=Number(a) + Number(b);

document.getElementById('show').innerHTML='Ans ='+''+c;

}

function minus(){
let a=document.getElementById('nA').value;
let b=document.getElementById('nB').value;
let c=Number(a) - Number(b);

document.getElementById('show').innerHTML='Ans ='+''+c;

}

function multiply(){
let a=document.getElementById('nA').value;
let b=document.getElementById('nB').value;
let c=Number(a) * Number(b);

document.getElementById('show').innerHTML='Ans ='+''+c;

}
function divide(){
let a=document.getElementById('nA').value;
let b=document.getElementById('nB').value;
let c=Number(a) / Number(b);

document.getElementById('show').innerHTML= 'Ans ='+''+c;

}


