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

//CSS

//Ne znam da li postoji bolji nacin da se ovo odradi, ali ovo je jedini nacin koji sam nasao, a da radi, obzirom da nacin sa casa ne funkcionise

Object.assign(document.querySelector("body").style,{
  margin:"0px",
  padding:"0px",fontFamily:"sans-serif",
  backgroundColor:"#d0ae6e"});
Object.assign(document.querySelector("div.main_wrapper").style,{
  width: "100%",
  maxWidth: "1200px",
  margin: "0px auto"});
//HEADER
Object.assign(document.querySelector("header").style,{
  backgroundColor: "#eb1b27",
  boxShadow: "0px 0px 5px 2px #d0ae6e",
  padding: "15px"});
Object.assign(document.querySelector("header a.logo").style,{
  display:"block"});
Object.assign(document.querySelector("header a.logo img").style,{
  position:"relative",
   left:"80px"});
//MAIN SECTION
Object.assign(document.querySelector("h1").style,{
  textTransform:"uppercase",
  color: "#eb1c27",
  marginLeft:"70px"});
Object.assign(document.querySelector("section.firstSquad").style,{
  display:"flex",
  flexWrap:"wrap",
  justifyContent:"flexStart",
  marginLeft:"70px"});
Object.assign(document.querySelector("section.subs").style,{
  display:"flex",
  flexWrap:"wrap",
  justifyContent:"flex-start",
  paddingTop:"60px",
  marginTop:"30px",
  marginLeft:"70px"});

var pl=document.querySelectorAll("div.player");
for(var i=0;i<pl.length;i++){
Object.assign(pl[i].style,{width:"18%",marginRight:"20px"})};


var plDiv=document.querySelectorAll("div.player div");
for(var i=0;i<plDiv.length;i++){
Object.assign(plDiv[i].style,{padding:"10px 0",fontWeight:"bold"})};

var plImg=document.querySelectorAll("div.player img");
for(var i=0;i<plImg.length;i++){
Object.assign(plImg[i].style,{width:"80%",marginBottom:"10px"})};

var border= document.createElement("div");

document.querySelector("section.firstSquad").appendChild(border);


Object.assign(border.style,{
  height: "3px",
  width: "88%",
  backgroundColor: "#eb1b27",
  position: "absolute",
  top: "765px",
  marginLeft: "70px",
  right: "95px"});

