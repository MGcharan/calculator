let outputScreen=document.getElementById('result')
function display(num){
    outputScreen.value=outputScreen.value+num;
}


// let result;
function calculate(){
   if(true){
    outputScreen.value=eval(outputScreen.value);
   }

   else{
    alert("please enter a number only")
   }
}


function Clear(){
    outputScreen.value="";
}
function del(){
    outputScreen.value=outputScreen.value.slice(0,-1);
}
