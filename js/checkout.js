// Exercise 7
var error = 0;
function validate() {
  // Get the input fields

  //función Print error
  function errorMsj(error, errorId) {
    if (error == 0) {
      errorId.classList.add("is-valid");
    } else {
      errorId.classList.add("is-invalid");
    }
  }

  var fName = document.getElementById("fName").value.trim(); //trim() elimina espacios vacíos
  var errorName = document.getElementById("fName"); //capturo div donde irá mensaje error o ok
  firstName(fName); //paso a función los datos introducidos

  var fEmail = document.getElementById("fEmail").value;
  var errorEmail = document.getElementById("fEmail");
  email(fEmail);

  var fAddress = document.getElementById("fAddress").value;
  var errorAddress = document.getElementById("fAddress");
  address(fAddress)

  var fLastname = document.getElementById("fLastN").value.trim(); //trim() elimina espacios vacíos
  var errorLastname = document.getElementById("fLastN");
  lastName(fLastname);

  var fPassword = document.getElementById("fPassword").value.trim(); //trim() elimina espacios vacíos
  var errorPassword = document.getElementById("fPassword");
  password(fPassword);

  var fPhone = document.getElementById("fPhone").value;
  var errorPhone = document.getElementById("fPhone");
  phone(fPhone);


  //funciones para cada campo

  function firstName(name) {
    if (name === "" || name.match(/^[a-zA-Z]+$/) == null || name.length < 3) {
      error++;
    } else {
      error = 0;
    }
    errorMsj(error, errorName);
  }
  
  function email(email) {
    if (
      email == "" ||
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
        email
      ) == false ||
      email.length < 3
	  ) {
      error++;
    } else {
		error = 0;
    }
    errorMsj(error, errorEmail);
}
function address(){
	if (fAddress === "" || fAddress.length < 3) {
		error++;
	  } else {
		error = 0;
	  }
	  errorMsj(error, errorAddress)
}

function lastName(name) {
    if (name === "" || name.match(/^[a-zA-Z]+$/) == null || name.length < 3) {
      error++;
    } else {
      error = 0;
    }
    errorMsj(error, errorLastname);
  }

  function password(name) {
    if (name === "" || name.match(/^([a-zA-Z]+)([0-9]+)$/) == null || name.length < 3) {
      error++;
    } else {
      error = 0;
    }
    errorMsj(error, errorPassword);
  }
  function phone(name) {
    if (name === "" || name.match(/^[0-9]+$/) == null || name.length < 3) {
      error++;
    } else {
      error = 0;
    }
	errorMsj(error, errorPhone);
  }
}


