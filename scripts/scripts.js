// user input 
function formvalidate(){
	var title = document.forms["form"]["title"].value;
	var message = document.forms["form"]["message"].value;

	if(title == ""){
		alert("Title must be filled out");
		return false;
	}else if(message == ""){
		alert("Message must be filled out");
		return false;
	}

}

// mouseover 
document.getElementById("homework").addEventListener("mouseover", mouseOver);
document.getElementById("homework").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("homework").style.color = "red";
}

function mouseOut() {
    document.getElementById("homework").style.color = "white";
}

// double-clicked
function doubleclick() {
    document.getElementById("profile").innerHTML = "Hello World";
}

// Text change
var myHeading = document.getElementById('homework');
myHeading.textContent = 'I am Kenneth Simpson';


// image change 
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/photo3.png') {
      myImage.setAttribute ('src','images/photo1.jpg');
    } else {
      myImage.setAttribute ('src','images/photo3.png');
    }
}

// text change 
var myButton = document.querySelector('button');

function setUserName(){

	var yourName = prompt('Please enter your name. ');

	if (yourName == ""){
		alert("Enter your name");
		return false;
	}
	localStorage.setItem('name', yourName);
	myHeading.textContent = ' I Will Code For Food,' + yourName; 
}

myButton.onclick = function(){
	setUserName();
}
