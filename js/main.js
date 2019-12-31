//Callback functions

//Task 5
var arr=[];
var num;
var arrNew=[];

var compare=function(arr,num){
  for(var i=0;i<arr.length;i++){
  if(arr[i]>num){
    arrNew[arrNew.length]=arr[i]
  }
}
};

var receive=function(arr,num, calcFunction){
  calcFunction(arr,num);
  console.log(arrNew);
}


receive([2,4,5],3,compare);

//TASK 6

var arrX=[2,3,4,5];
var lowest=Infinity;
var highest=-Infinity;
var product;

var findLowest=function(arrX){
  for(var i=0;i<arrX.length;i++){
    if(arrX[i]<lowest){
      lowest=arrX[i]
    }
  }return lowest;
};

var findHighest=function(arrX){
  for(var i=0;i<arrX.length;i++){
    if(arrX[i]>highest){
      highest=arrX[i]
    }
  }return(highest);
};

var mul=function(calculationFunctionOne,calculationFunctionTwo){
  calculationFunctionOne(arrX);
  calculationFunctionTwo(arrX);
  product=lowest*highest;
  console.log(product);
};

mul(findLowest,findHighest);


//TASK 7

arr=[15, 35, 46, 23, 15, 17, 23, 24, 35, 12, 72, 64, 35, 22, 64];

arrNew=[];


var eliminateBiggest=function(arrNew){
  arrNew.sort().pop()}

var unique=function(arr,calculationFunction){
  for(var i=0;i<arr.length;i++){
    if(!arrNew.includes(arr[i])){
      arrNew.push(arr[i]);
    }
  }
  calculationFunction(arrNew)
}



unique(arr,eliminateBiggest);

console.log(arrNew);