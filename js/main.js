/*TASK 1*/


var text="Lorem ipsum dolor sit amet";

console.log(text.toLowerCase());

/*TASK 2*/


if(text.includes("sit")){console.log("word sit exists")}
  else{console.log("word sit doesnt exist")};

/*TASK 3*/

console.log(text.length-1)

/*TASK 4*/

console.log(text.split(" ",3))

/*TASK 5*/

var txt="Piter is an actor.";

console.log(txt.replace("e","o"))

/*TASK 6*/

var someData = [34, 23, 14, 56, 23, 44, 65];

someData.splice(3,1);

console.log(someData);

/*TASK 7*/

var someData = [34, 23, 14, 56, 23, 44, 65];



var otherData=(someData.splice(1,3).concat(someData.splice(1,3).reverse()))

console.log(otherData);


/*TASK 8*/

var someData = [334, 233, 212, 199, 154, 122];

var otherData=[];

someData.forEach(function(element){
  otherData[otherData.length]=someData[otherData.length]-someData[otherData.length-1]
});


console.log(otherData);

/*TASK 9*/

var students = [
  {
     name: "Jim",
     avgGrade: 8.5556
  },
  {
     name: "Mike",
     avgGrade: 8.5492
  },
  {
     name: "Anna",
     avgGrade: 8.9322
  },
  {
     name: "Jack",
     avgGrade: 8.6111
  }
]


var goodStudents=students.filter(function(students){
    return students.avgGrade>8.5
  }
)

goodStudents.forEach(function(goodStudents){
  goodStudents.avgGrade=goodStudents.avgGrade.toFixed(2)
});


console.log(goodStudents);
