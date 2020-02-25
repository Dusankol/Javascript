
var movies = [
  {
    image:"../img/avengers-one.jpg",
    name:"Avengers"
  },
   {
    image:"../img/avengers-two.jpg",
    name:"Avengers: Age Of Ultron"
  },
   {
    image:"../img/avengers-three.jpg",
    name:"Avengers: Infinity Wars"
  },
   {
    image:"../img/avengers-four.jpg",
    name:"Avengers: Endgame"
  },
   {
    image:"../img/matrix-one.jpg",
    name:"The Matrix"
  },
  {
    image:"../img/matrix-two.jpg",
    name:"The Matrix: Reloaded"
  },
  {
    image:"../img/matrix-three.jpg",
    name:"The Matrix: Revolutions"
  },
  {
    image:"../img/the-lord-of-the-rings-one.jpg",
    name:"The Lord Of The Rings: The Fellowship Of The Ring"
  },
    {
    image:"../img/the-lord-of-the-rings-two.jpg",
    name:"The Lord Of The Rings: Two Towers"
  },
    {
    image:"../img/the-lord-of-the-rings-three.jpg",
    name:"The Lord Of The Rings: The Return Of The King"
  },
  {
    image:"../img/forrest-gump.jpg",
    name:"Forrest Gump"
  },
  {
    image:"../img/the-shawshank-redemption.jpg",
    name:"The Shawshank Redemption"
  }
];



var input=document.querySelector("#search");

var movieList=document.querySelector("#movie-list");

function displayMovies(){
for (var i=0;i<movies.length;i++){
  var link=document.createElement("a");


  var img='<img src="'+movies[i].image+'"/>';

  var title='<h2>'+movies[i].name+'</h2>';

  link.innerHTML=title+img;

  link.classList.add("movie")
  movieList.appendChild(link)
}}

displayMovies()

var movieLinks=document.querySelectorAll(".movie");

function searchMovies() {
  

  for(var i=0;i<movies.length;i++){
    var searchTerm=input.value.toUpperCase();

  if(movieLinks[i].text.toUpperCase().indexOf(searchTerm)>-1)
{
  movieLinks[i].style.display="block";
}else{
  movieLinks[i].style.display="none";
}


  }
}
input.addEventListener("keyup",searchMovies)

