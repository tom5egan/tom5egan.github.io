//random number generator that will assign picture address
//let activePicture=""


function pictureReload(){
let randomNumber = Math.floor(Math.random() *16);

let activePicture= "";

switch(randomNumber){
case 0:
activePicture='1.jpg';
break;
case 1:
activePicture='2.jpg';
break;
case 2:
activePicture='3.jpg';
break;
case 3:
activePicture='4.jpg';
break;
case 4:
activePicture='5.jpg';
break;
case 5:
activePicture='6.jpg';
break;
case 6:
activePicture='7.jpg';
break;
case 7:
activePicture='8.jpg';
break;
case 8:
activePicture='9.jpg';
break;
case 9:
activePicture='10.jpg';
break;
case 10:
activePicture='11.jpg';
break;
case 11:
activePicture='12.jpg';
break;
case 12:
activePicture='13.jpg';
break;
case 13:
activePicture='14.jpg';
break;
case 14:
activePicture='15.jpg';
break;
case 15:
activePicture='16.jpg';
break;
case 16:
activePicture='17.jpg';
break;
case 17:
activePicture='18.jpg';
break;
case 18:
activePicture='19.jpg';
break;
case 19:
activePicture='20.jpg';
break;
case 20:
activePicture='21.jpg';
break;
case 21:
activePicture='22.jpg';
break;
case 22:
activePicture='23.jpg';
break;
case 23:
activePicture='24.jpg';
break;
case 24:
activePicture='25.jpg';
break;
case 25:
activePicture='26.jpg';
break;
case 26:
activePicture='27.jpg';
break;
case 27:
activePicture='28.jpg';
break;
case 28:
activePicture='29.jpg';
break;
case 29:
activePicture='30.jpg';
break;
case 30:
activePicture='31.jpg';
break;
case 31:
activePicture='32.jpg';
break;
case 32:
activePicture='33.jpg';
break;
case 33:
activePicture='34.jpg';
break;
case 34:
activePicture='35.jpg';
break;
case 35:
activePicture='36.jpg';
break;
case 36:
activePicture='37.jpg';
break;
case 37:
activePicture='38.jpg';
break;
case 38:
activePicture='39.jpg';
break;
case 39:
activePicture='40.jpg';
break;
}

//this writes the code to the body 
document.write (`
<style>
.centerText{
	text-align:center;
	}
</style>
<div id="picture" class=centerText>
	
<img src=${activePicture} alt="My Work"></img></a>
</div>
`)
document.getElementById("clock").firstChild.nodeValue = activePicture;
};
/*function clearPicture(){
	document.write(
		<div id="picture">clear</div>
	)
}
console.log(pictureReload(`${activePicture}`));
*/
//window.onload=pictureReload() ;

//setInterval(pictureReload,1000);
//setInterval(clearPicture, 10000);

