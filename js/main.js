var crvenaZvezdaPlayers=[
{
  img:"punter.jpg",
  name:"Kevin",
  lastName:"Punter",
  age:26,
  number:"00",
  position: "Guard"
},
{
  img:"kuzmic.jpg",
  name:"Ognjen",
  lastName:"Kuzmic",
  age:29,
  number:0,
  position: "Center"
},{
  img:"dbrown.jpg",
  name:"Derrick",
  lastName:"Brown",
  age:32,
  number:1,
  position: "Forward"
},
{
  img:"covic.jpg",
  name:"Filip",
  lastName:"Covic",
  age:30,
  number:3,
  position: "Guard"
},{
  img:"lbrown.jpg",
  name:"Lorenzo",
  lastName:"Brown",
  age:29,
  number:4,
  position: "Guard"
},{
  img:"perperoglou.jpg",
  name:"Stratos",
  lastName:"Perperoglou",
  age:35,
  number:5,
  position: "Forward"
},{
  img:"davidovac.jpg",
  name:"Dejan",
  lastName:"Davidovac",
  age:24,
  number:7,
  position: "Forward"
},{
  img:"lazic.jpg",
  name:"Branko",
  lastName:"Lazic",
  age:30,
  number:10,
  position: "Guard"
},{
  img:"baron.jpg",
  name:"Billy",
  lastName:"Baron",
  age:29,
  number:12,
  position: "Guard"
},{
  img:"dobric.jpg",
  name:"Ognjen",
  lastName:"Dobric",
  age:25,
  number:13,
  position: "Guard"
},{
  img:"gist.jpg",
  name:"James",
  lastName:"Gist",
  age:33,
  number:15,
  position: "Forward"
},{
  img:"jagodic-kuridza.jpg",
  name:"Marko",
  lastName:"Jagodic-Kuridza",
  age:32,
  number:21,
  position: "Forward"
},{
  img:"jenkins.jpg",
  name:"Charles",
  lastName:"Jenkins",
  age:30,
  number:22,
  position: "Guard"
},{
  img:"simanic.jpg",
  name:"Borisa",
  lastName:"Simanic",
  age:21,
  number:28,
  position: "Forward"
},{
  img:"jovanovic.jpg",
  name:"Nikola",
  lastName:"Jovanovic",
  age:25,
  number:32,
  position: "Center"
},{
  img:"ojo.jpg",
  name:"Michael",
  lastName:"Ojo",
  age:26,
  number:50,
  position: "Center"
},{
  img:"faye.jpg",
  name:"Mouhammad",
  lastName:"Faye",
  age:34,
  number:11,
  position: "Forward"
}
];

function randomise(arr){
  return Math.floor(Math.random()*arr.length);
}

function addPlayers(){
  while(crvenaZvezdaPlayers.length){

    var firstSquad=document.querySelector(".firstSquad");
    var subs=document.querySelector(".subs");
    var randomNumber=randomise(crvenaZvezdaPlayers)
    var container= crvenaZvezdaPlayers.length>12? firstSquad:subs;

    container.appendChild(createPlayer(crvenaZvezdaPlayers[randomNumber]));
    crvenaZvezdaPlayers.splice(randomNumber,1);
  }
}


function createPlayer(playerData){
  var player=document.createElement("div");
  player.classList.add("player")
  var img='<img src="../img/' +playerData.img+ '"/>';
  var name='<div>'+ playerData.name+" "+playerData.lastName+'</div>';
  var age='<div>Age: '+ playerData.age+'</div>';
  var num='<div>Number: '+ playerData.number+'</div>';
  var position='<div>Position: '+ playerData.position+'</div>';

  player.innerHTML=img+name+age+num+position;
  return player;
}


function makeSubs(){
  var firstSquad=document.querySelectorAll(".firstSquad .player");
  var subs=document.querySelectorAll(".subs .player");

  var firstSquadNumber=randomise(firstSquad);
  var subsNumber=randomise(subs);

  var firstSquadPlayer=firstSquad[firstSquadNumber];
  var subsPlayer=subs[subsNumber];

  var subsPrevious=subsPlayer.previousSibling;
  var subsNext=subsPlayer.nextSibling;


  firstSquadPlayer.after(subsPlayer);

  subsPrevious?subsPrevious.after(firstSquadPlayer):subNext.before(firstSquadPlayer);

  var one=firstSquadPlayer.querySelector("div");
  var two=subsPlayer.querySelector("div")
console.log(one.innerHTML+" has been substituted with "+two.innerHTML)

 
}


addPlayers();

setInterval(makeSubs,4000);


var border= document.createElement("div");

border.classList.add("red")

document.querySelector("section.firstSquad").appendChild(border);



