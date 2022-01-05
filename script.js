var div1 = document.createElement('div');
div1.className='container-sm text-center root'
var div = document.createElement('div');
div.className='calculator'


var btn = document.createElement('button');
btn.setAttribute('type','submit');
btn.setAttribute('value',7);

//btn.setAttribute('onkeydown','dis(7)');
btn.setAttribute('onclick','dis(7)');
btn.innerHTML=7;
btn.id= "seven";

var btn1 = document.createElement('button');
btn1.setAttribute('type','submit');
btn1.setAttribute('value',8);
//btn1.setAttribute('onkeydown','dis(8)');

btn1.setAttribute('onclick','dis(8)');
btn1.innerHTML=8;
btn1.id= "eight";

var btn2 = document.createElement('button');
btn2.setAttribute('type','submit');
btn2.setAttribute('value',9);

//btn2.setAttribute('onkeydown','dis(9)');
btn2.setAttribute('onclick','dis(9)');
btn2.innerHTML=9;
btn2.id= "nine";

var btn3 = document.createElement('button');
btn3.setAttribute('type','submit');
btn3.setAttribute('value','/');
btn3.setAttribute('class','bg-warning');
//btn3.setAttribute('onkeydown',"dis('/')");
btn3.setAttribute('onclick',"dis('/')");
btn3.innerHTML='/';
btn3.id= "divide";

var cbr = document.createElement('br');

var btn4 = document.createElement('button');
btn4.setAttribute('type','submit');
btn4.setAttribute('value',4);

//btn4.setAttribute('onkeydown','dis(4)');
btn4.setAttribute('onclick','dis(4)');
btn4.innerHTML=4;
btn4.id= "four";

var btn5 = document.createElement('button');
btn5.setAttribute('type','submit');
btn5.setAttribute('value',5);

//btn5.setAttribute('onkeydown','dis(5)');
btn5.setAttribute('onclick','dis(5)');
btn5.innerHTML=5;
btn5.id= "five";

var btn6 = document.createElement('button');
btn6.setAttribute('type','submit');
btn6.setAttribute('value',6);

//btn6.setAttribute('onkeydown','dis(6)');
btn6.setAttribute('onclick','dis(6)');
btn6.innerHTML=6;
btn6.id= "six";

var btn7 = document.createElement('button');
btn7.setAttribute('type','submit');
btn7.setAttribute('value','*');
btn7.setAttribute('class','bg-warning');
//btn7.setAttribute('onkeydown','dis("*")');
btn7.setAttribute('onclick',"dis('*')");
btn7.innerHTML='*';
btn7.id= "mul";

var cbr1 = document.createElement('br');

var btn8 = document.createElement('button');
btn8.setAttribute('type','submit');
btn8.setAttribute('value',1);

//btn8.setAttribute('onkeydown','dis(1)');
btn8.setAttribute('onclick','dis(1)');
btn8.innerHTML=1;
btn8.id= "one";

var btn9 = document.createElement('button');
btn9.setAttribute('type','submit');
btn9.setAttribute('value',2);

//btn9.setAttribute('onkeydown','dis(2)');
btn9.setAttribute('onclick','dis(2)');
btn9.innerHTML=2;
btn9.id= "two";

var btn10 = document.createElement('button');
btn10.setAttribute('type','submit');
btn10.setAttribute('value',3);

//btn10.setAttribute('onkeydown','dis(3)');
btn10.setAttribute('onclick','dis(3)');
btn10.innerHTML=3;
btn10.id= "three";

var btn11 = document.createElement('button');
btn11.setAttribute('type','submit');
btn11.setAttribute('value','-')
btn11.setAttribute('class','bg-warning');
//btn11.setAttribute('onkeydown','dis("-")');;
btn11.setAttribute('onclick',"dis('-')");
btn11.innerHTML='-';
btn11.id= "diff";

var cbr2 = document.createElement('br');

var btn12 = document.createElement('button');
btn12.setAttribute('type','submit');
btn12.setAttribute('value','clear');
btn12.setAttribute('class','bg-danger');
btn12.setAttribute('onclick','cle()');
btn12.innerHTML='c';
btn12.id= "clear";

var btn13 = document.createElement('button');
btn13.setAttribute('type','submit');
btn13.setAttribute('value',0);

btn13.setAttribute('onkeydown','dis(0)');
btn13.setAttribute('onclick','dis(0)');
btn13.innerHTML=0;
btn13.id= "zero";

var btn14 = document.createElement('button');
btn14.setAttribute('type','submit');

btn14.setAttribute('value','=');
//btn14.setAttribute('onkeydown','exu()');
btn14.setAttribute('class','bg-success');
btn14.setAttribute('onclick','exu()');
btn14.innerHTML='=';
btn14.id= "equal";

var btn15 = document.createElement('button');
btn15.setAttribute('type','submit');
btn15.setAttribute('value','+');
//btn15.setAttribute('onkeydown',"dis('+')");
btn15.setAttribute('class','bg-warning');
btn15.setAttribute('onclick',"dis('+')")
btn15.innerHTML='+';
btn15.id= "add";

var inp = document.createElement('input');
inp.setAttribute('type','text');
inp.setAttribute('id','result');
var br = document.createElement('br');
var br1 = document.createElement('br');

var cbr3 = document.createElement('br');

var span = document.createElement('span');
span.setAttribute('id','equation');
span.className="text-right"

/*var tb = document.createElement('input')
tb.setAttribute('type','text');
tb.setAttribute('id','display');

span.append(tb)*/
span.setAttribute('onkeydown',"dis(value)");

div.append(span,cbr3,inp,br,br1,btn,btn1,btn2,btn3,cbr,btn4,btn5,btn6,btn7,cbr1,btn8,btn9,btn10,btn11,cbr2,btn12,btn13,btn14,btn15)
div1.append(div);
document.body.append(div1);
document.addEventListener("keydown", onKeyPressed);
function onKeyPressed(e) {
   var chars = ['1', '2', '3', "+", '4', '5', '6', "-", '7', '8', '9', "*", '0','Enter','.', "/", "=", "c"];
   
   var key = e.key;
   
   if(chars.indexOf(key)!=-1){
      if(key ==='Enter'||key ==='='){
         exu();
      }
      else if(key ==='c'){
         cle();
      }
       else {
         dis(key);
       }
      
      
   }
   
   
   
}


function dis(val){

   let el =document.getElementById('equation');
   
   el.innerHTML+=val;
   

}
function cle(){
   document.getElementById('equation').innerHTML="";
   document.getElementById('result').value="";
   
   
}
function exu(){
   let logic = document.getElementById('equation').innerHTML;
   let a = eval(logic);
   
   let el =document.getElementById('result');
   el.value=a;
   
}



