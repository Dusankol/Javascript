//FIRST PART

/*TASK 1*/

var data=[];
var printData=function(data){
  for(var i=0;i<3;i++){
    for(var j=0;j<3;j++){
    var k=3*i+j+1;  
    console.log("At position "+data[i],",subposition "+data[j],",value is "+k)
   } }

};




printData([0,1,2]);



//TASK 2

Object.prototype.zz=function(){
  for(var i=0;i<this.length;i++){
 console.log(this[i].name,this[i].age)
}}

var data = [{name:"Jim",age:45},{name:"Peter",age:29},{name:"Emanuela",age:25}];

data.zz();


//SECOND PART

//TASK 1

var someData = {
  name: "Peter",
  lastName: "Dinklage",
  status: "married"
};

var newData={};

function changeKey(someData){
  newData["Peter"]=someData["name"];
  newData["Dinklage"]=someData["lastName"];
  newData["married"]=someData["status"];
};

changeKey(someData);
console.log(newData);

//TASK 2

var someData = [13, 45, 56, [32, 11], 27, [55, 92]];

var otherData=[];

otherData=someData.toString().split(",");

for(var i=0;i<otherData.length;i++){
  otherData[i]=parseInt(otherData[i])
}
console.log(otherData);

//TASK 3

var someData = [13, 45, 56, [32, 11], 27, [55, 92]];
var xyzData=[];


var joinArr=function(someData){
  xyzData = someData.toString().split(",");
  for(var i=0;i<xyzData.length;i++){
    xyzData[i]=parseInt(xyzData[i]);
  }
}  


function subArr(array,calculationFunction){
   someData=someData.splice(3,1).concat(someData.splice(4,1));
   calculationFunction(someData);
   return xyzData;
};

var boom=subArr(someData,joinArr);
console.log(boom);


//TASK 4


var someData = {
  name: "Peter",
  lastName: "Dinklage",
  status: "married"
};

function nameChecker(){
  if(someData.hasOwnProperty("name")){
    return function (){
  
  delete someData["name"]}
  
}

  else 
  
      return function(d){
        someData.name=d;
      }
    }
  ;


nameChecker(someData)();
console.log(someData);


//TASK 5

var someData = {
  name: "Peter",
  lastName: "Dinklage",
  status: "married"
};

someData.nameChecker=function(){
  if(someData.hasOwnProperty("name")){
    someData.removeName=function(){
      delete someData["name"];
      console.log(someData);
      someData.addName=function(){
        someData.name="Mike";
        console.log(someData);
      }
      someData.addName();
    }
    someData.removeName();
  }
}

someData.nameChecker();

//BONUS

someData.nameChecker=function(){
  if(someData.hasOwnProperty("name")){
    someData.removeName=function(){
      delete someData["name"];
      console.log(someData);
      someData.addName=function(){
        someData.name="Peter";
        console.log(someData);
      }
      someData.addName();
    }
    someData.removeName();
  }
}

someData.nameChecker();

