// JavaScript Document
/*
	@copyright by Hasasiki,if you use this code in some where pleas tell me first, THANKS.
	E-mail 1243442778@qq.com or Hasasiki in GitHub.
	This is the script of a BINGO-75 GAME 
	in this game you have 3 degree of difficulty which can choose by yourself
	and first you have 10000 marks 
	when you choose the right square, you will get 10 marks, else you will lose 100 marks
	and if you choose the much high degree of diffculty, you will have less mark at first
	when your mark less than 0. you are lose the game
	and if you achieve one line, you will win the game.
	Have fun!
	and wish your support and suggest.
*/
/*when get a call number, program should wait user to find and click the right 
colum and then give next call number, i think it's an import part of program to achieve*/
// this is the random number buliter for table in bingopage
//this is the function to get the colume number and to set a new random number in it
function getRandomNumber() {
	if(document.getElementById){
		//table1
		for(var i = 0; i <5; i++){
			setNumber(i);
		}
		for(var i = 5; i< 10; i++){
			setNumber1(i);
		}
		for(var i = 10; i< 12; i++){
			setNumber2(i);
		}
		for(var i = 13; i< 15; i++){
			setNumber2(i);
		}
		for(var i = 15; i< 20; i++){
			setNumber3(i);
		}
		for(var i = 20; i< 25; i++){
			setNumber4(i);
		}
		//table2
		for(var i = 25; i <30; i++){
			setNumber(i);
		}
		for(var i = 30; i< 35; i++){
			setNumber1(i);
		}
		for(var i = 35; i< 37; i++){
			setNumber2(i);
		}
		for(var i = 38; i< 40; i++){
			setNumber2(i);
		}
		for(var i = 40; i< 45; i++){
			setNumber3(i);
		}
		for(var i = 45; i< 50; i++){
			setNumber4(i);
		}
		//table3
		for(var i = 50; i <55; i++){
			setNumber(i);
		}
		for(var i = 55; i< 60; i++){
			setNumber1(i);
		}
		for(var i = 60; i< 62; i++){
			setNumber2(i);
		}
		for(var i = 63; i< 65; i++){
			setNumber2(i);
		}
		for(var i = 65; i< 70; i++){
			setNumber3(i);
		}
		for(var i = 70; i< 75; i++){
			setNumber4(i);
		}
	}
	else{
		alert("Your browser version is too low");
	}
}
//those function depended on the getrandomnumber function
function setNumber(thisNum){
	var currNum ="square" + thisNum;
	var setRandomNum = Math.floor(Math.random()*15)+1;
/*	var setRandomNum2 = Math.floor(Math.random()*(30-16+1)+16);
	var setRandomNum3 = Math.floor(Math.random()*(45-31+1)+31);
	var setRandomNum4 = Math.floor(Math.random()*(60-46+1)+46);
	var setRandomNum5 = Math.floor(Math.random()*(75-61+1)+61);
	if(currNum[1] < 5){
		document.getElementById(currNum).innerHTML = setRandomNum1;
	}
	else if(currNum[1] <10 && currNum[1] > 4){
		document.getElementById(currNum).innerHTML = setRandomNum2;
	}
	else if(currNum[1] < 15 && currNum[1] > 9){
		document.getElementById(currNum).innerHTML = setRandomNum3;
	}
	else if(currNum[1] < 20 && currNum[1] > 14){
		document.getElementById(currNum).innerHTML = setRandomNum4;
	}
	else if(currNum[1] < 25 && currNum[1] > 19){
		document.getElementById(currNum).innerHTML = setRandomNum5;
	}*/
	document.getElementById(currNum).innerHTML = setRandomNum;
}
function setNumber1(thisNum){
	var currNum = "square" + thisNum;
	var setRandomNum = Math.floor(Math.random()*(30-16+1)+16);
	document.getElementById(currNum).innerHTML = setRandomNum;
}
function setNumber2(thisNum){
	var currNum = "square" + thisNum;
	var setRandomNum = Math.floor(Math.random()*(45-31+1)+31);
	document.getElementById(currNum).innerHTML = setRandomNum;
}
function setNumber3(thisNum){
	var currNum =  "square" + thisNum;
	var setRandomNum = Math.floor(Math.random()*(60-46+1)+46);
	document.getElementById(currNum).innerHTML = setRandomNum;
}
function setNumber4(thisNum){
	var currNum = "square" + thisNum;
	var setRandomNum = Math.floor(Math.random()*(75-61+1)+61);
	document.getElementById(currNum).innerHTML = setRandomNum;
}
//this function to change the color of button
function onClickTable(id){
 document.getElementById(id).style.backgroundImage = "url(../picture/pic/B2.png)";
}
//this function to get the call numbers
//there should give five group of number that accept B I N G O five line range of random numbers
/*function callNumber(id){
	var maxTimesOfLine = 5;//this number control the numbers of call
	var randomTimes = Math.floor(Math.random()*maxTimesOfLine)+1;
	for(var i = 0; i < 5; i++){
		for(var j = 0;j < randomTimes;j++){
			bulitRandomNumber(i);
		}
	}
}
//this function depended on function callNumber and give it random numbers
function bulitRandomNumber(num) {
	var randomNumbers = Math.floor(Math.random()*)+1;
	
}
//this function to boolean if the number onclick equal to the given number
function checkNum(id){
	var getNumber = document.getElementById(id).innerHTML;
	//if(getNumber == )//there should accept a number of calls
}
*/
var count = 10000;
/*this function should accept 2 value one is the click block id another is
  the call number and boolean if they are equals
  if they are equals, when user click, program should give next call number*/
function booleanIfUserChooseTheRightClock(id){
	var callNumber = document.getElementById("callNumber").innerHTML;
	var getNumber = document.getElementById(id).innerHTML;
	if(count > 0){
		if(getNumber === callNumber){
			//this to change the block color
			count = count + 110;
			onClickTable(id);
			createNextCallNumber();
			saveTheRightIdOfTable(id);
			booleanWin();
			//count--;
			//alert(count);
		}
		else{
			alert("Please choose the right block!");
		}
	}
	else{
		alert("YOU LOSE!");
		location.reload();
	}

}
function createNextCallNumber(){
	var randomNumbers = Math.floor(Math.random()*75)+1;
	document.getElementById("callNumber").innerHTML = randomNumbers;
	count = count - 100;
	document.getElementById("markShow").innerHTML = count;
}
//this create a array to save ids
var idOfChoose = new Array(0);	
//this function to save the the right id 
function saveTheRightIdOfTable(id){
	idOfChoose.push(id);
	idOfChoose.sort();
	//alert(idOfChoose);
}	
//
function booleanWin(){
	var n = idOfChoose.length;
	var winGroupOfIds1 = new Array(0);
	winGroupOfIds1.push("square0");
	winGroupOfIds1.push("square5");
	winGroupOfIds1.push("square10");
	winGroupOfIds1.push("square15");
	winGroupOfIds1.push("square20");
	//alert(winGroupOfIds1);
	//#table1 win condition
	var winGroupOfIds2 = new Array(0);
	winGroupOfIds2.push("square1");
	winGroupOfIds2.push("square6");
	winGroupOfIds2.push("square11");
	winGroupOfIds2.push("square16");
	winGroupOfIds2.push("square21");
	var winGroupOfIds3 = new Array(0);
	winGroupOfIds3.push("square2");
	winGroupOfIds3.push("square7");
	winGroupOfIds3.push("square17");
	winGroupOfIds3.push("square22");
	var winGroupOfIds4 = new Array(0);
	winGroupOfIds4.push("square3");
	winGroupOfIds4.push("square8");
	winGroupOfIds4.push("square13");
	winGroupOfIds4.push("square18");
	winGroupOfIds4.push("square23");
	var winGroupOfIds5 = new Array(0);
	winGroupOfIds5.push("square4");
	winGroupOfIds5.push("square9");
	winGroupOfIds5.push("square14");
	winGroupOfIds5.push("square19");
	winGroupOfIds5.push("square24");
	
	//#table2 win condition
	var winGroupOfIds6 = new Array(0);
	winGroupOfIds6.push("square25");
	winGroupOfIds6.push("square30");
	winGroupOfIds6.push("square35");
	winGroupOfIds6.push("square40");
	winGroupOfIds6.push("square45");
	var winGroupOfIds7 = new Array(0);
	winGroupOfIds7.push("square26");
	winGroupOfIds7.push("square31");
	winGroupOfIds7.push("square36");
	winGroupOfIds7.push("square41");
	winGroupOfIds7.push("square46");
	var winGroupOfIds8 = new Array(0);
	winGroupOfIds8.push("sauare27");
	winGroupOfIds8.push("sauare32");
	winGroupOfIds8.push("sauare42");
	winGroupOfIds8.push("sauare47");
	var winGroupOfIds9 = new Array(0);
	winGroupOfIds9.push("square28");
	winGroupOfIds9.push("square33");
	winGroupOfIds9.push("square38");
	winGroupOfIds9.push("square43");
	winGroupOfIds9.push("square48");
	var winGroupOfIds10 = new Array(0);
	winGroupOfIds10.push("square29");
	winGroupOfIds10.push("square34");
	winGroupOfIds10.push("square39");
	winGroupOfIds10.push("square44");
	winGroupOfIds10.push("square49");
	
	//#table3 win condition
	var winGroupOfIds11 = new Array(0);
	winGroupOfIds11.push("square50");
	winGroupOfIds11.push("square55");
	winGroupOfIds11.push("square60");
	winGroupOfIds11.push("square65");
	winGroupOfIds11.push("square70");
	var winGroupOfIds12 = new Array(0);
	winGroupOfIds12.push("square51");
	winGroupOfIds12.push("square56");
	winGroupOfIds12.push("square61");
	winGroupOfIds12.push("square66");
	winGroupOfIds12.push("square71");
	var winGroupOfIds13 = new Array(0);
	winGroupOfIds13.push("square52");
	winGroupOfIds13.push("square57");
	winGroupOfIds13.push("square67");
	winGroupOfIds13.push("square72");
	var winGroupOfIds14 = new Array(0);
	winGroupOfIds14.push("square53");
	winGroupOfIds14.push("square58");
	winGroupOfIds14.push("square63");
	winGroupOfIds14.push("square68");
	winGroupOfIds14.push("square73");
	var winGroupOfIds15 = new Array(0);
	winGroupOfIds15.push("square54");
	winGroupOfIds15.push("square59");
	winGroupOfIds15.push("square64");
	winGroupOfIds15.push("square69");
	winGroupOfIds15.push("square74");
	
	
	var count1 = 0;
	var count2 = 0;
	var count3 = 0;
	var count4 = 0;
	var count5 = 0;
	var count6 = 0;
	var count7 = 0;
	var count8 = 0;
	var count9 = 0;
	var count10 = 0;
	var count11 = 0;
	var count12 = 0;
	var count13 = 0;
	var count14 = 0;
	var count15 = 0;
	if(n >= 4){
		//#table1
		for(var i=0; i<n; i++){  
        	for(var j=0; j<5; j++){  
            	if(idOfChoose[i] == winGroupOfIds1[j]){  
                	count1++;     
                	break;  
            	}  
        	}	  
        	if(count1 == 5){
				alert("YOU WIN!");
				break;
			}
    	}
		for(var i=0; i<n; i++){  
        	for(var j=0; j<5; j++){  
            	if(idOfChoose[i] == winGroupOfIds2[j]){  
                	count2++;     
                	break;  
            	}  
        	}	  
        	if(count2 == 5){
				alert("YOU WIN!");
				break;
			}
    	}
		for(var i=0; i<n; i++){  
        	for(var j=0; j<4; j++){  
            	if(idOfChoose[i] == winGroupOfIds3[j]){  
                	count3++;     
                	break;  
            	}  
        	}	  
        	if(count3 == 4){
				alert("YOU WIN!");
				break;
			}
    	}
		for(var i=0; i<n; i++){  
        	for(var j=0; j<5; j++){  
            	if(idOfChoose[i] == winGroupOfIds4[j]){  
                	count4++;     
                	break;  
            	}  
        	}	  
        	if(count4 == 5){
				alert("YOU WIN!");
				break;
			}
    	}
		for(var i=0; i<n; i++){  
        	for(var j=0; j<5; j++){  
            	if(idOfChoose[i] == winGroupOfIds5[j]){  
                	count5++;     
                	break;  
            	}  
        	}	  
        	if(count5 == 5){
				alert("YOU WIN!");
				break;
			}
    	}
		//#table2
		for(var i=0; i<n; i++){  
        	for(var j=0; j<5; j++){  
            	if(idOfChoose[i] == winGroupOfIds6[j]){  
                	count6++;     
                	break;  
            	}  
        	}	  
        	if(count6 == 5){
				alert("YOU WIN!");
				break;
			}
    	}
		for(var i=0; i<n; i++){  
        	for(var j=0; j<5; j++){  
            	if(idOfChoose[i] == winGroupOfIds7[j]){  
                	count7++;     
                	break;  
            	}  
        	}	  
        	if(count7 == 5){
				alert("YOU WIN!");
				break;
			}
    	}
		for(var i=0; i<n; i++){  
        	for(var j=0; j<5; j++){  
            	if(idOfChoose[i] == winGroupOfIds8[j]){  
                	count8++;     
                	break;  
            	}  
        	}	  
        	if(count8 == 4){
				alert("YOU WIN!");
				break;
			}
    	}
		for(var i=0; i<n; i++){  
        	for(var j=0; j<5; j++){  
            	if(idOfChoose[i] == winGroupOfIds9[j]){  
                	count9++;     
                	break;  
            	}  
        	}	  
        	if(count9 == 5){
				alert("YOU WIN!");
				break;
			}
    	}
		for(var i=0; i<n; i++){  
        	for(var j=0; j<5; j++){  
            	if(idOfChoose[i] == winGroupOfIds10[j]){  
                	count10++;     
                	break;  
            	}  
        	}	  
        	if(count10 == 5){
				alert("YOU WIN!");
				break;
			}
    	}
		//#table3
		for(var i=0; i<n; i++){  
        	for(var j=0; j<5; j++){  
            	if(idOfChoose[i] == winGroupOfIds11[j]){  
                	count11++;     
                	break;  
            	}  
        	}	  
        	if(count11 == 5){
				alert("YOU WIN!");
				break;
			}
    	}
		for(var i=0; i<n; i++){  
        	for(var j=0; j<5; j++){  
            	if(idOfChoose[i] == winGroupOfIds12[j]){  
                	count12++;     
                	break;  
            	}  
        	}	  
        	if(count12 == 5){
				alert("YOU WIN!");
				break;
			}
    	}
		for(var i=0; i<n; i++){  
        	for(var j=0; j<5; j++){  
            	if(idOfChoose[i] == winGroupOfIds13[j]){  
                	count13++;     
                	break;  
            	}  
        	}	  
        	if(count13 == 4){
				alert("YOU WIN!");
				break;
			}
    	}
		for(var i=0; i<n; i++){  
        	for(var j=0; j<5; j++){  
            	if(idOfChoose[i] == winGroupOfIds14[j]){  
                	count14++;     
                	break;  
            	}  
        	}	  
        	if(count14 == 5){
				alert("YOU WIN!");
				break;
			}
    	}
		for(var i=0; i<n; i++){  
        	for(var j=0; j<5; j++){  
            	if(idOfChoose[i] == winGroupOfIds15[j]){  
                	count15++;     
                	break;  
            	}  
        	}	  
        	if(count15 == 5){
				alert("YOU WIN!");
				break;
			}
    	}
	}
}

//this function should allow people choose the degree of difficulty
function chooseEasyHard(id){
	var Easy = 10000;
	var Middle = 6000;
	var Hard = 2500;
	var easyLevel = "Easy";
	var middleLevel = "Middle";
	var hardLevel = "Hard";
	if(id == easyLevel){
		count = Easy;
	}
	else if(id == middleLevel){
		count = Middle;
	}
	else{
		count = Hard;
	}
	
}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
