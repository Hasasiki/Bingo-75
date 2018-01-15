// JavaScript Document
/*when get a call number, program should wait user to find and click the right 
colum and then give next call number, i think it's an import part of program to achieve*/
// this is the random number buliter for table in bingopage
//this is the function to get the colume number and to set a new random number in it
function getRandomNumber() {
	if(document.getElementById){
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
 document.getElementById(id).style.backgroundColor = '#ff0000';
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
/*this function should accept 2 value one is the click block id another is
  the call number and boolean if they are equals
  if they are equals, when user click, program should give next call number*/
function booleanIfUserChooseTheRightClock(id){
	var callNumber = document.getElementById("callNumber").innerHTML;
	var getNumber = document.getElementById(id).innerHTML;
	if(getNumber === callNumber){
		//this to change the block color
		onClickTable(id);
		
	   	createNextCallNumber();
		saveTheRightIdOfTable(id);
		booleanWin();
	}
	else{
		alert("Please choose the right block!");
	}
}
function createNextCallNumber(){
	var randomNumbers = Math.floor(Math.random()*75)+1;
	document.getElementById("callNumber").innerHTML = randomNumbers;
}
//this create a array to save ids
var idOfChoose = new Array(0);	
//this function to save the the right id 
function saveTheRightIdOfTable(id){
	idOfChoose.push(id);
	idOfChoose.sort();
	//alert(idOfChoose);
}	

function booleanWin(){
	var n = idOfChoose.length;
	var winGroupOfIds1 = new Array(0);
	winGroupOfIds1.push("square0");
	winGroupOfIds1.push("square5");
	winGroupOfIds1.push("square10");
	winGroupOfIds1.push("square15");
	winGroupOfIds1.push("square20");
	//alert(winGroupOfIds1);
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
	var count1 = 0;
	var count2 = 0;
	var count3 = 0;
	var count4 = 0;
	var count5 = 0;
	if(n >= 4){
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
	}
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	