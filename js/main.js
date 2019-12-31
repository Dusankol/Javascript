
//FUNKCIJE
/*TASK 1*/

var arrR=[];
var revOrder=function(arrN){
    for(var i=0;i<arrN.length;i++){
      arrR[i]=arrN[arrN.length-i-1]
    }console.log(arrR);
}

revOrder([2,4,7,11,6]);

/*TASK 2*/

var a;

var declareType=function(a){
    if(typeof a==="number"){console.log(a+ " is a number")}
    else if (typeof a==="string"){console.log(a+ " is a string")}
    else if (typeof a==="boolean"){console.log(a+ " is a boolean")}
    else if (typeof a==="undefined"){console.log(a+ " is undefined")}
    else if (typeof a==="object"){console.log(a+ " is a object")}};

declareType(5);

/*TASK 3*/

var names=["Jim","John","Peter","Amanda","Nikki"];
var longestString=0;

 function stringLength(names){
    for(var i=0;i<names.length;i++)
    {
        if(names[i].length>longestString)
        {longestString=names[i].length}}
      return (longestString)};


var strLng=stringLength(names);

console.log(strLng);



/*TASK 4*/

var num=[];
var secondGreatest=-Infinity;
var secondLowest=Infinity;
var greatest=-Infinity;
var lowest=Infinity;

var max=function(num){
  for(var i=0;i<num.length;i++)
  {
    if(num[i]>greatest)
    {
      secondGreatest=greatest
      greatest=num[i]

    }
  }
return secondGreatest;
}

var min=function(num){
  for(var i=0;i<num.length;i++)
  {
    if(num[i]<lowest)
    {
      secondLowest=lowest
      lowest=num[i]
    }
  }
  return secondLowest;
}

var sort=function(num){
  var secondGreatest=max(num);
  var secondLowest=min(num);
  console.log(secondLowest,secondGreatest)
}



sort([12,4,21,24,30,15]);