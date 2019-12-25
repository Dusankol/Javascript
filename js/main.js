//TASK 1

function Student(name,lastName,age,averageGrade){
  this.name=name;
  this.lastName=lastName;
  this.age=age;
  this.averageGrade=averageGrade;
}


var jack=new Student("Jack","Black",22,8.35);
var jane=new Student("Jane","Bell",21,9.02);
var molly=new Student("Molly","Jackson",19,8.20);

console.log(jack,jane,molly);

//TASK 2

function RedStar(name,lastName,goalsScored,yellowCards){
  this.name=name;
  this.lastName=lastName;
  this.goalsScored=goalsScored;
  this.yellowCards=yellowCards;
}

var vlahovic=new RedStar("Dusan","Vlahovic",41,4);
var radonjic=new RedStar("Nemanja","Radonjic",9,3);
var mann=new RedStar("Dennis","Mann",11,4);
var pejcinovic=new RedStar("Zivojin","Pejcinovic",18,6);
var jovicic=new RedStar("Branko","Jovicic",14,12);
var djordjevic=new RedStar("Aleksandar","Djordjevic",7,13);
var gajic=new RedStar("Milan","Gajic",4,7);
var ristic=new RedStar("Mihailo","Ristic",11,8);
var martinez=new RedStar("Lisandro","Martinez",12,10);
var markovic=new RedStar("Svetozar","Markovic",5,9);
var rajkovic=new RedStar("Predrag","Rajkovic",0,0);

console.log(vlahovic,radonjic,mann,pejcinovic,jovicic,djordjevic,gajic,ristic,martinez,markovic,rajkovic);


//TASK 3

var redStarPlayers=[["Dusan","Vlahovic",41,4],["Nemanja","Radonjic",9,3],["Dennis","Mann",11,4],["Zivojin","Pejcinovic",18,6],["Branko","Jovicic",14,12],["Aleksandar","Djordjevic",7,13],["Milan","Gajic",4,7],["Mihailo","Ristic",11,8],["Lisandro","Martinez",12,10],["Svetozar","Markovic",5,9],["Predrag","Rajkovic",0,0]];

function CrvenaZvezda(player){
  this.name=player[0];
  this.lastName=player[1];
  this.goalsScored=player[2];
  this.yellowCards=player[3];
}

for(var i=0;i<redStarPlayers.length;i++){
  this[redStarPlayers[i][0].toLowerCase()]=new CrvenaZvezda(redStarPlayers[i])
};


console.log(dusan,nemanja,dennis,zivojin,branko,aleksandar,milan,mihailo,lisandro,svetozar,predrag);


//TASK 4

function Calculate(firstNumber,secondNumber,score){
  this.firstNumber=firstNumber;
  this.secondNumber=secondNumber;
  this.score=score;
}

function adding(firstNumber,secondNumber){score=firstNumber+secondNumber; return score}
function multyplying(firstNumber,secondNumber){score=firstNumber*secondNumber;return score}
function deduction(firstNumber,secondNumber){score=firstNumber-secondNumber; return score}
function division(firstNumber,secondNumber){score=firstNumber/secondNumber; return score}


var a=new Calculate(2,8,adding(2,8));
var b=new Calculate(3,6,multyplying(3,6));
var c=new Calculate(7,5,deduction(7,5));
var d=new Calculate(4,1,division(4,1));

console.log(a,b,c,d);
