function validate(){
	 var name = document.getElementById("name").value;
	 var email = document.getElementById("email").value;
	 var phone_no = document.getElementById("phone_no").value;
	 var password = document.getElementById("password").value;
	 var address = document.getElementById("address").value;
	 var city = document.getElementById("city").value;
	 var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	 var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
	 

if (!name) {
	document.getElementById("name_error").style.display="block";
	document.getElementById("name_error").innerHTML="Please enter your name";
	document.getElementById("name_error").style.color="red";
}
else if (name.length<6) {
	document.getElementById("name_error").style.display="block";
	document.getElementById("name_error").innerHTML="Name should be of minimum 6 characters";
	document.getElementById("name_error").style.color="red";
}


if (!email) {
	document.getElementById("email_error").style.display="block";
	document.getElementById("email_error").innerHTML="Please enter your email";
	document.getElementById("email_error").style.color="red";
}
else if(!(email.match(mailformat))){
	document.getElementById("email_error").style.display="block";
	document.getElementById("email_error").innerHTML="Enter valid email";
	document.getElementById("email_error").style.color="red";
}

if (!phone_no) {
	document.getElementById("phone_no_error").style.display="block";
	document.getElementById("phone_no_error").innerHTML="Please enter your phone number";
	document.getElementById("phone_no_error").style.color="red";
}
else if(isNaN(phone_no)){
	document.getElementById("phone_no_error").style.display="block";
	document.getElementById("phone_no_error").innerHTML="Enter phone number ";
	document.getElementById("phone_no_error").style.color="red";

}
else if(phone_no.length!=10){
	document.getElementById("phone_no_error").style.display="block";
	document.getElementById("phone_no_error").innerHTML="Enter valid phone number ";
	document.getElementById("phone_no_error").style.color="red";

}


if (!password) {
	document.getElementById("password_error").style.display="block";
	document.getElementById("password_error").innerHTML="Please enter your password";
	document.getElementById("password_error").style.color="red";
}
else if(password.length<8){
	
	document.getElementById("password_error").style.display="block";
	document.getElementById("password_error").innerHTML="Password must contain atleast 8 characters";
	document.getElementById("password_error").style.color="red";
}
else if (!(password.match(decimal))) {
	document.getElementById("password_error").style.display="block";
	document.getElementById("password_error").innerHTML="Password must contain atleast one lowercase letter, one uppercase letter, one numeric digit, and one special character";
	document.getElementById("password_error").style.color="red";
}


if (!city) {
	document.getElementById("city_error").style.display="block";
	document.getElementById("city_error").innerHTML="Please enter your city ";
	document.getElementById("city_error").style.color="red";
}


if (!address) {
	document.getElementById("address_error").style.display="block";
	document.getElementById("address_error").innerHTML="Please enter your Address ";
	document.getElementById("address_error").style.color="red";
}


}


function hideval(val) {
	document.getElementById(val).style.display="none";
}
