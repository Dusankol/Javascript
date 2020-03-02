const crvenaZvezdaPlayers=[
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

const randomise=arr=> Math.floor(Math.random()*arr.length);

const addPlayers=()=>{
  while(crvenaZvezdaPlayers.length){

    let firstSquad=document.querySelector(".firstSquad");
    let subs=document.querySelector(".subs");
    let randomNumber=randomise(crvenaZvezdaPlayers)
    let container= crvenaZvezdaPlayers.length>12? firstSquad:subs;

    container.appendChild(createPlayer(crvenaZvezdaPlayers[randomNumber]));
    crvenaZvezdaPlayers.splice(randomNumber,1);
  }
}


const createPlayer=(playerData)=>{
  let player=document.createElement("div");
  player.classList.add("player")
  let img='<img src="../img/' +playerData.img+ '"/>';
  let name=`<div>${playerData.name} ${playerData.lastName}</div>`;
  let age=`<div>Age: ${playerData.age}</div>`;
  let num=`<div>Number: ${playerData.number}</div>`;
  let position=`<div>Position:  ${playerData.position}</div>`;


  player.innerHTML=img+name+age+num+position;
  return player;
}


const makeSubs=()=>{
  let firstSquad=document.querySelectorAll(".firstSquad .player");
  let subs=document.querySelectorAll(".subs .player");

  let firstSquadNumber=randomise(firstSquad);
  let subsNumber=randomise(subs);

  let firstSquadPlayer=firstSquad[firstSquadNumber];
  let subsPlayer=subs[subsNumber];

  let subsPrevious=subsPlayer.previousSibling;
  let subsNext=subsPlayer.nextSibling;


  firstSquadPlayer.after(subsPlayer);

  subsPrevious?subsPrevious.after(firstSquadPlayer):subNext.before(firstSquadPlayer);

  let one=firstSquadPlayer.querySelector("div");
  let two=subsPlayer.querySelector("div")
console.log(`${one.innerHTML} has been substituted with ${two.innerHTML}`)

 
}


addPlayers();

setInterval(makeSubs,4000);


const border= document.createElement("div");

border.classList.add("red")

document.querySelector("section.firstSquad").appendChild(border);



