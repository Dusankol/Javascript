

//TASK 1

function checkBrowserStatus(){

if (navigator.onLine===true) {
  alert("Browser is online")
} else {
  alert("Browser is offline")
}};

checkBrowserStatus();

//TASK 2 
//Zakomentarisao sam, cisto da se stranica ne bi osvezavala sve vreme

/*function refresh(){
  location.reload()
};

refresh();*/


//TASK 4

var num=0;
var int;

function count(){
  console.log(num)
  num++
  if(num>15){
    clearInterval(int)
  }
}

int=setInterval(count,1000)



//TASK 5

function randomise(){
  console.log((Math.round(Math.random()*10)))
}
randomise();


//TASK 6

// Kod cuvanja u lokalnom skladistu sam objekat prebacio u string da bi mogao da se sacuva, a na kraju sam oznacio korisnika koji je izlogovan kao neaktivan

var result;
var data=[{name:"Homer",age:36,status:"inactive"},
          {name:"Marge",age:35,status:"inactive"},
          {name:"Bart",age:10,status:"inactive"},
          {name:"Lisa",age:8,status:"inactive"},
          {name:"Maggie",age:1,status:"inactive"}];

var username=prompt("Enter your name");




var checking=data.some(function(element){
  if(element.name.toLowerCase().includes(username.toLowerCase())){
    return true;
  }
  else{return false;}
})

function print(){
  if(checking===false){
    console.log("User with name " + username + " doesn't exist.")
  }
  else if(checking===true){
    for(var i=0;i<data.length;i++){
      if(data[i].name.toLowerCase().includes(username.toLowerCase())){
        data[i].status="active";
        localStorage.setItem("LoggedInUser",JSON.stringify(data[i]));

      }
    }
  }setTimeout(remove,60000);
}

print()


function remove(){
  localStorage.removeItem("LoggedInUser")
  for(var i=0;i<data.length;i++){
    if(data[i].name.toLowerCase().includes(username.toLowerCase())){
      data[i].status="inactive"
    }
  }
  console.log("User " +username+" is logged out.")
};
