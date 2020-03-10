var searchButton = document.querySelector(".search-button");
var appId="2a81fffb";
var appKey="c76432340eaabf32a594b16cac90fdcb";
var req=new XMLHttpRequest();
var recipesList=document.querySelector("#recipes");
var page=1;
var healthLabels=document.querySelector("select#health");
var dietLabels=document.querySelector("select#diet");
var caloriesMin=document.querySelector("#cal-min");
var caloriesMax=document.querySelector("#cal-max");
var count=document.querySelector("span.recipe-count-number");
var rcn=0;
var footer=document.querySelector("footer");
var numOfPages;
var loader=document.querySelector(".loader");

function onSearch(pageNum){
  rcn=parseInt(count.innerHTML);
  var start = (pageNum - 1) * 10;
  var end = start + 10;
  if (end > rcn && rcn !== 0) end = rcn;
  if (end <= start) return; 

  var searchValue=document.querySelector(".keyword-input").value;
  var healthOption;
  if(healthLabels.value="general"){healthOption="";}else{healthOption="&health="+healthLabels.value}
  var dietOption;
  if(dietLabels.value="general"){dietOption="";}else{dietOption="&diet="+dietLabels.value}

  var caloriesRange;
  if(caloriesMin.value.length===0&&caloriesMax.value.length===0){caloriesRange="&calories="+0+"-"+9999999};
  if(caloriesMin.value.length===0&&caloriesMax.value.length!==0){caloriesRange="&calories="+0+"-"+caloriesMax.value};
  if(caloriesMin.value.length!==0&&caloriesMax.value.length===0){caloriesRange="&calories="+caloriesMin.value+"-"+9999999};
  if(caloriesMin.value.length!==0&&caloriesMax.value.length!==0){caloriesRange="&calories="+caloriesMin.value+"-"+caloriesMax.value};
  
  var url="https://api.edamam.com/search?q="+searchValue+"&app_id="+appId+"&app_key="+appKey+"&from="+start+"&to="+end+healthOption+dietOption+caloriesRange;
  req.open("GET",url)
  loader.style.display="flex"
  req.send()

  
}

req.onload=function(){

  recipesList.innerHTML="";
  count.innerHTML=JSON.parse(req.responseText).count;
  numOfPages=Math.ceil(count.innerHTML/10);
  JSON.parse(req.responseText).hits.forEach(function(recipe){
    addRecipes(recipe)
  })
}

function addRecipes(recipeData){
  var recipeElement=document.createElement("div");
  recipeElement.classList.add("recipe-element")

  var img="<img src='"+recipeData.recipe.image+"'/>";
  var title="<h3>"+recipeData.recipe.label+"</h3>";
  var tags="<div class='label'>"+recipeData.recipe.healthLabels+"</div>";
  var caloriesCounter="<div class='calories'>"+Math.round(recipeData.recipe.calories/recipeData.recipe.yield)+' kcal'+"</div>"

  recipeElement.innerHTML=img+caloriesCounter+"<div class='labels'>"+title+tags+"</div>";
  recipesList.appendChild(recipeElement)

  createFooter()

  recipeElement.querySelectorAll("img,h3").forEach(function(element){
    element.addEventListener("click",showRecipe)
  })

  function showRecipe(url){
      window.open(recipeData.recipe.url, '_blank');
}

}

function createFooter(){
  var numOfPages=Math.ceil(req.responseText.count/10);
  var footer = document.querySelector("footer");
  footer.style.visibility = "visible";
  var nStart = page;
  var nEnd = nStart + 4;

  footer.firstElementChild.style.visibility = "visible";
  footer.lastElementChild.style.visibility = "visible";

  if (nStart === 1) {
    footer.firstElementChild.style.visibility = "hidden";
  };
  if (numOfPages <= nEnd){
    nEnd = numOfPages;
    footer.lastElementChild.style.display="none"
  }

  
  while(footer.children.length > 2){
    footer.removeChild(footer.children[1]);
  }
  var counter = 0;
  for (var i = nStart; i <= nEnd; i++){
    var newElement = document.createElement("span");
    newElement.innerHTML = "&nbsp;" + i + "&nbsp;";
    newElement.setAttribute("id", i);
    i === page ? newElement.classList.add("current-page") : newElement.classList.remove("current-page");
    newElement.onclick = function (){
      page = parseInt(this.id);
      onSearch(page);
    }
    counter++;
    footer.children[counter-1].after(newElement);
  };
  
  loader.style.display="none"

  footer.firstElementChild.addEventListener("click", function(){
    var previous = parseInt(footer.firstElementChild.nextElementSibling.innerText)-1;
      page = previous;
      onSearch(page);
    
  })
  

  footer.lastElementChild.addEventListener("click",function(){
    var next=parseInt(footer.lastElementChild.previousElementSibling.getAttribute("id"))-3;
      page=next
      onSearch(page);
    }
  )


}


//INIT

searchButton.addEventListener("click",function(){onSearch(1)});
document.querySelector(".keyword-input").addEventListener("keypress",function(e){
  if(e.keyCode===13){searchButton.click()}
})





