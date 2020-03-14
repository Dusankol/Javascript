var searchButton = document.querySelector(".search-button");
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
var healthOption;
var dietOption;
var caloriesRange;
const appId="2a81fffb";
const appKey="c76432340eaabf32a594b16cac90fdcb";

export {searchButton,recipesList,page,healthLabels,dietLabels,caloriesMax,
	caloriesMin,count,rcn,footer,numOfPages,loader,healthOption,dietOption,caloriesRange,appKey,appId};
