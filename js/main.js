
var select=document.querySelector("#dogSelect");
var img=document.querySelector("img");
var option=document.getElementsByTagName("option");
var breed=option[0].value;

function check(event){
  breed=event.target.value
}

function getData(){
req=new XMLHttpRequest();
req.open("GET","https://dog.ceo/api/breed/"+breed+"/images/random");
req.onload=function(){
  var url=JSON.parse(req.responseText).message;
  display(url)
}
req.send()}
getData()

setInterval(getData,5000)

function display(url){
  img.setAttribute("src",url)

}
