//let userQuestion = prompt;

userQuestion = window.prompt( 'What do you ask the Magic 8 Ball?');
if (userQuestion=="") {userQuestion ='Is your brain too small'};
if(userQuestion==null){userQuestion ='Is your brain too small'};

//let userName = "";
//userName ? console.log(`Hello ${userName}!`) : console.log('Hello!');
//let userQuestion ="Will we be covid positive tomorrow."; //question the user wants to ask the Magic Eight Ball
//console.log(`${userName} asks ${userQuestion}`);


//random number generator that creates response

let randomNumber = Math.floor(Math.random() *8);

let eightBall= "";

switch(randomNumber){
case 0:
eightBall='It is certain';
break;
case 1:
eightBall='It is decidedly so';
break;
case 2:
eightBall='Reply hazy try again';
break;
case 3:
eightBall='Do not count on it';
break;
case 4:
eightBall='My sources say no';
break;
case 5:
eightBall='Outlook not so good';
break;
case 6:
eightBall='Signs point to yes';
break;
case 7:
eightBall='Cannot predict now';
break;
}

//this writes the code to the body 
document.write(`
<style>
.centerText{
	text-align:center;
	}
</style>
<div class=centerText>
<h1 class=elegantshadow>${userQuestion}? </h1>
<h1 class=elegantshadow40>Magic Eight Ball says:</h1>
<a href=http://www.tom5egan.com/magiceightball><img src=eightball.jpg height="400" width="400"alt="8ball"></img></a>
<h1>${eightBall}.</h1>
</div>

`);
