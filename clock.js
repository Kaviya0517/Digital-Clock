let display = document.getElementById("display");
let date = document.getElementById("date");
let day=document.getElementById("day");
 function clock(){
    let today=new Date();

    let hours=today.getHours();
    let mins=today.getMinutes();
    let secs=today.getSeconds();
 
    let d=today.getDay();
    let dt=today.getDate();
    let m=today.getMonth();
    let y=today.getFullYear();
    let session ="AM";
  
if(hours>=12){
    session="PM";
}
if(hours>12){
    hours=hours-12;
}
if(hours==0){
    hours=12;
}
 let h=hours<10 ? "0" + hours : hours;
let min=mins<10?"0"+mins:mins;
let s=secs<10?"0"+secs:secs;

    display.innerText=h+":"+min+":"+s+" "+session;
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    day.innerText=days[d];
    let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    date.innerText=dt+" "+months[m]+" "+y;
}
    setInterval(clock,1000);
    

