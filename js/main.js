/*TASK 1*/

var personOne = {
    name: "Mike",
    age: 28,
    married: true
}


var change = function(){
    personOne.age=34,
    delete personOne.married;
};

change();

console.log(personOne);


/*TASK 2*/

var personTwo = {
    name: "Jack",
    age: 32,
    married: true
};

var kids = function(){
    if(personTwo.children===undefined){
        personTwo.children=[{name:"Ana", age:5,gender:"girl"},{name:"Tamara", age:8, gender:"girl"}]
        
    }console.log(personTwo)
}

kids();


/*TASK 3*/

var students = [ 
   {
       name: 'Mike',
       age: 28,
       passed: false
   },
   {
       name: 'Anna',
       age: 23,
       passed: true
   },
   {
       name: 'Jack',
       age: 32,
       passed: true
   },
];
var exam=function(){
for(var i=0;i<students.length;i++){
    if(students[i].passed===false){
        console.log(students[i].name+" didnt pass the exam")
    }else if(students[i].passed===true){
        console.log(students[i].name+" passed the exam")
    }
}};
exam();

/*TASK 4*/

var students = [ 
   {
       name: 'Mike',
       age: 28,
       passed: false
   },
   {
       name: 'Anna',
       age: 23,
       passed: true
   },
   {
       name: 'Jack',
       age: 32,
       passed: true
   },
];

var names=[];
var ages=[];
var passed=[];

var sort = function(){
    for(i=0;i<students.length;i++){
      names[i]=students[i].name; 
      ages[i]=students[i].age;     
      passed[i]=students[i].passed;   
    }console.log(names);
      console.log(ages);
      console.log(passed);
}



sort();

/*TASK 5*/


var person = {
    name: "Jack",
    age: 32,
    married: true
}

var newObject={};

newObject.name=person.name;
newObject.age=person.age;
newObject.married=person.married;


console.log(newObject.age);