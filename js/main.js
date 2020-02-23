var pics=[{img:"../img/baron.jpg"},
          {img:"../img/dobric.jpg"},
          {img:"../img/jenkins.jpg"},
          {img:"../img/simanic.jpg"}];

var slider = document.querySelector(".slide");
var thumbnails = document.querySelector(".thumbnails");


for (var i = 0; i < pics.length; i++){
  var image=document.createElement("img");
  var thumbnail=document.createElement("img");
  image.setAttribute("src",pics[i].img);
  image.classList.add("playerImg");
  slider.appendChild(image)
  thumbnail.setAttribute("src",pics[i].img);
  thumbnail.classList.add("playerThm")
  thumbnails.appendChild(thumbnail)
}


var sld=document.querySelectorAll(".playerImg");
var thm=document.querySelectorAll(".playerThm");


var c=-1;

var margin=[];

for(var i=0;i<pics.length;i++){
  margin[i]=-i*390;
}

/*function switching(){
  c++;
  if(c>3) {c=0};

  for(var i=0;i<pics.length;i++){
    if (i!==c){
      sld[i].style.display="none";
      thm[i].classList.remove("active")
    }else{
      sld[i].style.display="block";
      thm[i].classList.add("active")
    
    }
  }
}

switching();*/

/*setInterval(switching, 5000);*/ 



function sliding(){
  c++;
  if(c>3){c=0;}

  sld[0].style.marginLeft=margin[c]+"px";
  for (var i=0;i<pics.length;i++){
    if(i!==c){
      thm[i].classList.remove("active");
    } else {
      thm[i].classList.add("active")
    }
  }
}

sliding();
setInterval(sliding,5000)

