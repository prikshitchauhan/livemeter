// function outputname(){
// var x,y,show,time,a,b,ans;
// x=document.getElementById("form1");
// y=x.elements["Countries"].value;
// z=x.elements["Years"].value;
// time = new Date().getFullYear().value;
// // a=25;b=35;
// else if(y==="" || z===""){
// 	show="Please enter Country and Year";
// } 
// document.getElementById("demo").innerHTML = show;
// document.getElementById("demo").innerHTML=" Live Population of " +y+" = ";
// document.getElementById("demo").innerHTML+=show +"<br>";
// }


//Displaying Live Stream

var div = document.getElementById('head');
var yeardiv = document.getElementById('yearcount');

function updateCount() {
    var d = new Date();
    // set d to midnight
    d.setHours(0,0,0,0);
    var count = Math.floor( ( new Date().getTime() - d.getTime() ) /224.0598494);
    div.innerHTML = " Number Of Birth Today : "+ count;
     

     d.setDate( 1971,01,01);
    count = Math.floor( ( new Date().getTime() 
    + d.getTime() ) / 421.5080001)
   
    yeardiv.innerHTML = "Current Population Of World: "+ count;
}


updateCount();
setInterval( updateCount,224.0598494);