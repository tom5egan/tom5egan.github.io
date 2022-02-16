//random number generator that will assign picture address
//let activePicture=""
function pictureReload(){
    let randomNumber = Math.floor(Math.random() *38);
    
    activePicture= `${randomNumber}.jpg`;   

//this writes the code to the body 
document.write (`
<style>
.centerText{
	text-align:center;
	}
</style>
<div id="picture" class=centerText>
	
<img src=${activePicture} alt="My Work" height='400px; width='400px'></img></a>
</div>
`)
//document.getElementById("clock").firstChild.nodeValue = activePicture;
setTimeout(function(){
	location.reload();
},5000); // 5000 milliseconds means 5 seconds.
};
pictureReload();
