
import {searchButton,recipesList,page,healthLabels,dietLabels,caloriesMax,
	caloriesMin,count,rcn,footer,numOfPages,loader,healthOption,dietOption,caloriesRange,appKey,appId} from "./variables.js";


const request = pageNum => {
	document.querySelector(".loader").style.display = "flex";
	let newSearch = new Searching(pageNum);
	newSearch.fetching();
}

class Searching{
	constructor (pageNum){
		this.pageNum = pageNum;
		this.start = (this.pageNum - 1) * 10;
		this.end = this.start + 10;
		if (this.end > rcn && rcn !== 0) this.end = rcn;
		if (this.end <= this.start) return; 
		this.healthLabels=document.querySelector("select#health");
		this.dietLabels=document.querySelector("select#diet");
		this.caloriesMin=document.querySelector("#cal-min");
		this.caloriesMax=document.querySelector("#cal-max");
		this.searchValue=document.querySelector(".keyword-input").value;
	this.healthOption=healthOption;
	if(healthLabels.value="general"){this.healthOption="";}else{this.healthOption="&health="+healthLabels.value}
	this.dietOption=dietOption;
	if(dietLabels.value="general"){this.dietOption="";}else{this.dietOption="&diet="+dietLabels.value}

	this.caloriesRange=caloriesRange;
	if(caloriesMin.value.length===0&&caloriesMax.value.length===0){this.caloriesRange="&calories="+0+"-"+9999999};
	if(caloriesMin.value.length===0&&caloriesMax.value.length!==0){this.caloriesRange="&calories="+0+"-"+caloriesMax.value};
	if(caloriesMin.value.length!==0&&caloriesMax.value.length===0){this.caloriesRange="&calories="+caloriesMin.value+"-"+9999999};
	if(caloriesMin.value.length!==0&&caloriesMax.value.length!==0){this.caloriesRange="&calories="+caloriesMin.value+"-"+caloriesMax.value};
		this.url = "https://api.edamam.com/search?q="+this.searchValue+"&app_id="+appId+"&app_key="+appKey+"&from="+this.start+"&to="+this.end+this.healthOption+this.dietOption+this.caloriesRange;

	}

	fetching(){
		fetch(this.url)
		.then(response => response.json())
		.then(recipe => {
			recipesList.innerHTML="";
			count.innerText=recipe.count;
			numOfPages=Math.ceil(count.innerHTML/10);


			(recipe.hits.forEach(function(recipe){
		addRecipes(recipe)
	}))
	
			
		})
		.catch(error => console.log(error))
	}
}


	const addRecipes = (recipeData) => {
	rcn=parseInt(count.innerHTML);
	let recipeElement=document.createElement("div");
	recipeElement.classList.add("recipe-element")

	let img="<img src='"+recipeData.recipe.image+"'/>";
	let title="<h3>"+recipeData.recipe.label+"</h3>";
	let tags="<div class='label'>"+recipeData.recipe.healthLabels+"</div>";
	let caloriesCounter="<div class='calories'>"+Math.round(recipeData.recipe.calories/recipeData.recipe.yield)+' kcal'+"</div>"

	recipeElement.innerHTML=img+caloriesCounter+"<div class='labels'>"+title+tags+"</div>";
	recipesList.appendChild(recipeElement)



	recipeElement.querySelectorAll("img,h3").forEach((element) => {
		element.addEventListener("click",function(){ showRecipe()})
	})
	const showRecipe=(url) => {
  		window.open(recipeData.recipe.url, '_blank');
}
var newFooter = new CreateFooter();
	newFooter.createSpans();

}


class CreateFooter{
	constructor(){
		this.footer = document.querySelector("footer");
		this.nStart = page;
		this.nEnd = this.nStart + 4;
	}
createSpans(){
		
		this.footer.style.visibility = "visible";
		this.footer.firstElementChild.style.visibility = "visible";
		this.footer.lastElementChild.style.visibility = "visible";

		if (this.nStart === 1) {
			this.footer.firstElementChild.style.visibility = "hidden";
		};
		if (this.numOfPages <= this.nEnd){
			this.nEnd = this.numOfPages;
			this.footer.lastElementChild.style.visibility = "hidden";
		}
		
		while(this.footer.children.length > 2){
			this.footer.removeChild(this.footer.children[1]);
		}

		let counter = 0;
		for (let i = this.nStart; i <= this.nEnd; i++){
			let newElement = document.createElement("span");
			newElement.innerHTML = "&nbsp;" + i + "&nbsp;";
			newElement.setAttribute("id", i);
			i === page ? newElement.classList.add("current-page") : newElement.classList.remove("current-page");
			newElement.onclick = function (){
				page = parseInt(this.id);
				request(page);
			}
			counter++;
			this.footer.children[counter-1].after(newElement);
		};
		
		document.querySelector(".loader").style.display = "none";

		this.footer.firstElementChild.addEventListener("click", function(){
			var previous = parseInt(footer.firstElementChild.nextElementSibling.innerText)-1;
				page = previous;
				request(page);
			
		});
		this.footer.lastElementChild.addEventListener("click", function(){
			let next=parseInt(footer.lastElementChild.previousElementSibling.getAttribute("id"))-3;
				page = next;
				request(page);
			
		});
	}
}




//INIT

searchButton.addEventListener("click",() => {request(1)});
document.querySelector(".keyword-input").addEventListener("keypress",(e) => {
  if(e.keyCode===13){searchButton.click()}
})


