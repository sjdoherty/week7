function hideForm(){
	document.getElementById("myForm").style.display = "none";
	addMessage();
}
function addMessage(){
	var x = document.getElementById("userName").value;
	var y = document.getElementById("userEmail").value;
	document.getElementById("newMessage").innerHTML = x + ("  thank you for your details. We will be in touch via " +y);
}