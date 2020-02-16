var searchButton=document.querySelector(".search button");
 var key="AIzaSyCjwX9RTFMP1fCjmjIp86dJ4vsnd9bonT4";
 var videoPreview=document.querySelector(".video_preview");
 var videoList=document.querySelector(".video_list");
 

function onSearch(){
  var searchField=document.querySelector(".search input");

  searchField.value.trim() && getVideos(searchField.value);
  searchField.value="";
}


function getVideos(searchValue){
  var req= new XMLHttpRequest();
  req.open("GET","https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q="+searchValue+"&key="+key);

  req.onload=function(){ 
    
    listVideos(JSON.parse(req.responseText).items)

  }
  req.send()

}


function listVideos(videos){
 
  
  videoList.innerHTML="";

  videos.forEach(function(video){
    if(!("channelId" in video.id)){
        addVideo(video)}
  })

  
}


function addVideo(videoData){

   var videoElement=document.createElement("div");
 
   var img="<img src='"+ videoData.snippet.thumbnails.medium.url +"'/>"
   var title="<h3>"+videoData.snippet.title+"</h3>"
   var desc="<div class='description'>"+videoData.snippet.description+"</div>"

   

    videoElement.innerHTML=img+"<section>"+title+desc+"</section>";

  videoList.appendChild(videoElement)

  videoElement.querySelectorAll("h3,img").forEach(function(element){
    element.addEventListener("click",function(){
      openVideo(videoData.id.videoId)})})
 
}

function openVideo(id){
  videoList.classList.add("related");
  videoPreview.innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/'+id+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  var reqR=new XMLHttpRequest();
  reqR.open("GET","https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&relatedToVideoId="+id+"&type=video&key="+key);

  reqR.onload=function(){
  listVideos(JSON.parse(reqR.responseText).items)
  desc="";
  }

  reqR.send()
}



//INIT

searchButton.addEventListener("click",onSearch)

document.querySelector("input").addEventListener("keypress",function(e){
  if(e.keyCode===13){searchButton.click()}
})