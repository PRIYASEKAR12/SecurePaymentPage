var isCardValid = false; 
var isCodeValid = false;
var isMonthValid = false;
var isYearValid = false;
var isNameValid = false;
var isAddressValid = false;
var isCityValid = false;
var isPostValid = false;
var isCountryValid = false;
var isMailValid = false;

function validateCardNumber() {                                   
    var cardnum = document.getElementById("cardNumber").value;
    var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;                  //validation of card number=>13 or 16 Numbers 
    var number = regex.test(cardnum);
    if (number) {                                                         
        document.getElementById("checkCardNumber").style.display = "none"; 
        isCardValid=true;       
    }
    else {
        document.getElementById("checkCardNumber").style.display = "block";
        isCardValid=false;
    }
}
function validateCode() {
    var security = document.getElementById("securityCode").value;
    var regex = /^[0-9]{3}$/;                                   //validation for security code with 3 number
    var secureNumber = regex.test(security);
    if (secureNumber) {
        document.getElementById("checkCode").style.display = "none";
        isCodeValid=true;
    }
    else {
        document.getElementById("checkCode").style.display = "block";
        isCodeValid=false;
    }
}
function validateMonth() {
    var validMonth = document.getElementById("month").value;
    if (!validMonth==0) {                                                        //check month is not empty
        document.getElementById("checkMonth").style.display = "none";
        isMonthValid=true;
    }
    else {
        document.getElementById("checkMonth").style.display = "block";
        isMonthValid=false;
    }
}

function validateYear() {
    var validYear = document.getElementById("year").value;
    if (!validYear==0) {                                                                //check year is not empty
        document.getElementById("checkYear").style.display = "none";
        isYearValid=true;
    }
    else {
        document.getElementById("checkYear").style.display = "block";
        isYearValid=false;
    }
}
function validateName() {
    var userName = document.getElementById("name").value;
    var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;              //validation for userName
    var name = regex.test(userName);                                                
    if (name) {
        document.getElementById("checkName").style.display = "none";
        isNameValid=true;
    }
    else {
        document.getElementById("checkName").style.display = "block";
        isNameValid=false;
    }
}
function validateFirstAddress() {

    var address = document.getElementById("firstAddress").value;
    var regex = /^[a-zA-Z0-9]+(([',/. -][a-zA-Z ])?[a-zA-Z]*)*$/;                   //validation for address
    var validAddress = regex.test(address);
    if (validAddress) {
        document.getElementById("checkFirstAddress").style.display = "none";
        isAddressValid=true;
    }
    else {
        document.getElementById("checkFirstAddress").style.display = "block";
        isAddressValid=false;
    }
}
function validateSecondAddress() {

    var address = document.getElementById("secondAddress").value;
    var regex = /^[a-zA-Z0-9]+(([',/. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    var validAddress = regex.test(address);
    if (validAddress) {
        document.getElementById("checkSecondAddress").style.display = "none";
    }
    else {
        document.getElementById("checkSecondAddress").style.display = "block"
    }
    
}
function ValidateThirdAddress() {

    var address = document.getElementById("thirdAddress").value;
    var regex = /^[a-zA-Z0-9]+(([',/. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    var validAddress = regex.test(address);
    if (validAddress) {
        document.getElementById("checkThirdAddress").style.display = "none";
    }
    else {
        document.getElementById("checkThirdAddress").style.display = "block"
    }
}
function validateCountry() {
    var validCountry = document.getElementById("country").selectedIndex;
    if (!validCountry==0) {                                                   //country should not empty
        document.getElementById("checkCountry").style.display = "none";
        isCountryValid=true;
    }
    else {
        document.getElementById("checkCountry").style.display = "block";
        isCountryValid=false;
    }
}

function validateCity() {

    var city = document.getElementById("city").value;
    var regex = /^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/;
    var validCity = regex.test(city);
    if (validCity) {
        document.getElementById("checkCity").style.display = "none";
        isCityValid=true;
    }
    else {
        document.getElementById("checkCity").style.display = "block";
        isCityValid=false;
    }
}
function validateRegion() {

    var region = document.getElementById("region").value;
    var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    var validRegion = regex.test(region);
    if (validRegion) {
        document.getElementById("checkRegion").style.display = "none";


    }
    else {
        document.getElementById("checkRegion").style.display = "block"
    }
}

function validatePostCode() {

    var pin = document.getElementById("postCode").value;
    var regex = /^[0-9]{6}$/;
    var validPin = regex.test(pin);
    if (validPin) {
        document.getElementById("checkPostCode").style.display = "none";
        isPostValid=true;
    }
    else {
        document.getElementById("checkPostCode").style.display = "block";
        isPostValid=false;
    }
}
function validateTelephone() {
    var phone = document.getElementById("telephone").value;
    var regex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    var validPhone = regex.test(phone);
    if (validPhone) {
        document.getElementById("checkTelephone").style.display = "none";

    }
    else {
        document.getElementById("checkTelephone").style.display = "block"
    }
    
}

function validateFax() {
    var fax = document.getElementById("fax").value;
  var regex = /^\+?[0-9]{6,13}$/;
  var validFax = regex.test(fax);
    if (validFax) {
        document.getElementById("checkFax").style.display = "none";
    }
    else {
        document.getElementById("checkFax").style.display = "block"
    }
}


function validateEmail() {

    var mail = document.getElementById("emailAddress").value;
    var regex = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;
    var validMail = regex.test(mail);
    if (validMail) {
        document.getElementById("checkEmail").style.display = "none";
        isMailValid=true;
    }
    else {
        document.getElementById("checkEmail").style.display = "block";
        isMailValid=false;
    }
}

function Submit() {
    validateCardNumber();
    validateCode();
    validateYear();
    validateMonth();
    validateName(); 
    validateFirstAddress();    
    validateCity(); 
    validateCountry();  
    validatePostCode();    
    validateEmail();
    if (isCardValid && isCodeValid && isYearValid && isMonthValid && isNameValid && isAddressValid && isCityValid && isCountryValid && isPostValid && isMailValid) {
        alert("Successfully registered")
    }
}
