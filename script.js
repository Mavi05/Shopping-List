var button = document.getElementById("button");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength()
{
	return input.value.length; 
}

function createElement()
{
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value=""; 
}

button.addEventListener("click", function(){
	if(inputLength() > 0)
		createElement();
	else 
		return();
})

input.addEventListener("keypress", function(event){
	if(inputLength() > 0 && event.keyCode === 13)
		createElement();
	else
		return();

})
