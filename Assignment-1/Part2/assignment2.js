//This is the javascript file
//By Karthik Reddy Musku - G01446785
var zipCode = document.getElementById("zip");
storeCookie();

function storeCookie() {
  var now = new Date();
  var hour = now.getHours();
  var name;

  if (document.cookie) {
    var myCookie = unescape(document.cookie);

    var cookieTokens = myCookie.split("=");

    name = cookieTokens[1];
  } else {
    name = window.prompt("Please enter your name", "");
    var cookieName = encodeURIComponent(name);
    var expires = new Date();
    expires.setHours(expires.getHours() + 10);
    console.log(cookieName);
    document.cookie = "name=" + cookieName + ";expires=" + expires.toUTCString();
  }

  if (hour < 12)
    document.write("<p style = 'color:red'>Good Morning " + name + ", Welcome to SWE642 Survey!</p>");
  else {
    hour -= 12;
    if (hour < 6)
      document.write("<p style = 'color:red'>Good Afternoon " + name + ", Welcome to SWE642 Survey!</p>");
    else
      document.write("<p style = 'color:red'>Good Evening " + name + ", Welcome to SWE642 Survey!</p>");
  }
  document.write("<a href = 'javascript:wrongPerson();'>" + "Click here if you are not " + name + "</a>");
}

//Function to delete the cookie
function wrongPerson() {
  var now = new Date();
  document.cookie = 'name=;expires=' + now.toUTCString() + ';path=/';
  location.reload();
}

//Function to calculate the maximum and average
function calculate() {
  var dataInput = document.getElementById("data").value;
  var numbers = dataInput.split(",").map(Number);
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  var average = sum / numbers.length;
  var maximum = Math.max(...numbers);

  if (numbers.length !== 10 || numbers.some(num => num < 1 || num > 100)) {
    document.getElementById("average").value = "Invalid input";
    document.getElementById("maximum").value = "Invalid input";
  } else {
    document.getElementById("average").value = average;
    document.getElementById("maximum").value = maximum;
  }
}
'
//FUnction to validate the form'
function validateForm() {

  var name = document.getElementById("username").value;
  var address = document.getElementById("address").value;
  var email = document.getElementById("email").value;
  var radio = document.getElementById("interests");
  var options = document.getElementsByName('interests');
  console.log(options);
  console.log(radio);

  var isValid = false;

  //Validate radio to select atleast one option
  for (var i = 0; i < options.length; i++) {
    if (options[i].checked) {
      console.log(options[i].value);
      isValid = true;
      break;
    }
  }
  console.log(isValid);

  // Validate name field (only alphabets)
  var namePattern = /^[A-Za-z]+$/;
  var errorDisplay = "";
  if (!(name.match(namePattern))) {
    errorDisplay += ("Name should contain only alphabets.\n");
    //document.getElementById("username").innerHTML = "";
    document.getElementById("username").value = "";
  }

  // Validate address field (alphanumeric characters)
  var addressPattern = /^[0-9A-Za-z\s]+$/;
  if (!address.match(addressPattern)) {
    errorDisplay += "Address should contain only appropriate numeric, alphabet, or alphanumeric characters.\n";
    //document.getElementById("address").innerHTML = "";
    document.getElementById("address").value = "";
  }

  // Validate email format
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailPattern)) {
    errorDisplay += "Please enter a valid email address.\n";
    document.getElementById("email").value = "";
  }

  // Validate check to select at least two checkboxes
  var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  console.log(checkboxes.length)
  if (checkboxes.length < 2) {
    errorDisplay += "Please select at least two checkboxes.\n";
  }

  if (!isValid)
    errorDisplay += "Choose one of the radio buttons\n";

  if (errorDisplay != "") {
    alert(errorDisplay)
    return false;
  } else {
    document.getElementById("surveyForm").reset();
    document.getElementById("validateZip").value = "";
    return true;
  }
}

//Function to validate the zip code
function validateZip(zip) {
  callWebService(zip, showCityState);
}

var webServiceUrl = "address.json";

//Calling the web service to make AJAX requests
function callWebService(zip, callBack) {
  var requestUrl = webServiceUrl;
  requestUrl += "?" + "zip=" + zip;
  this.zipCode = zip;
  console.log(this.zipCode, requestUrl);

  try {
    var asyncRequest = new XMLHttpRequest();
    asyncRequest.onreadystatechange = function () {
      callBack(asyncRequest);
    }
    asyncRequest.open('GET', requestUrl, true);
    asyncRequest.setRequestHeader('Content-Type', 'application/json', charset = "UTF-8");
    asyncRequest.send();

  } catch (exception) {
    alert("Request failed");
  }
}

//Call back function to show city and state
function showCityState(asyncRequest) {
  document.getElementById('validateZip').innerHTML = 'Checking Zip';
  if (asyncRequest.readyState == 4) {
    if (asyncRequest.status == 200) {
      var data = JSON.parse(asyncRequest.responseText);
      var zipFound = false;
      for (let index = 0; index < data.length; index++) {
        var element = data[index];
        if (element.zip === zipCode) {
          document.getElementById('validateZip').innerHTML = 'Zip Valid';
          document.getElementById('city').innerHTML = element.city;
          document.getElementById('state').innerHTML = element.state;
          zipFound = true;
        }
      }
      if (!zipFound) {
        document.getElementById('validateZip').innerHTML = 'Zip Invalid';
        document.getElementById('city').innerHTML = '';
        document.getElementById('state').innerHTML = '';
      }
    } else if (asyncRequest.status == 500) {
      document.getElementById('validateZip').innerHTML = 'Zip validation service unavailable';
    }
  }
}



