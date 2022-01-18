console.log("js is working");

var generatePasswordIDBtn = document.getElementById("generate");

var specialCharStr = "~`!@$%^&*()_+-=";
var upperCaseLetterStr = "QWERTYUIOPASDFGHJKLZXCVBNM";
var lowerCaseChars = "abcdefghijklmnopqrstuvwxy";
var numbersStr = "0123456789";

var specialCharArr = specialCharStr.split("");
var upperCaseCharArr = upperCaseLetterStr.split("");
var lowerCaseCharArr = lowerCaseChars.split("");
var numbersArr = numbersStr.split("");

var userCharPool = [];

var aPassword = [];

var guaranteedCharsArr = [];

function generatePassword() {
  var userChoiceLength = prompt("Enter password length (8-128 characters): ");
  console.log(userChoiceLength);

  if (userChoiceLength < 8 || userChoiceLength > 128) {
    alert("Password must be between 8 and 128 characters");
    return generatePassword();
  }

  var userChoiceSpecialChars = confirm("Special Characters?");
  console.log(userChoiceSpecialChars);

  var userChoiceUpperCase = confirm("Upper Case?");
  console.log(userChoiceUpperCase);

  var userChoiceLowerCase = confirm("Lower Case?");
  console.log(userChoiceLowerCase);

  var userChoiceNumbers = confirm("Numbers?");
  console.log(userChoiceNumbers);

  if (
    !userChoiceSpecialChars &&
    !userChoiceUpperCase &&
    !userChoiceLowerCase &&
    !userChoiceNumbers
  ) {
    alert("You must choose at least one set of characters");
    return generatePassword();
  }

  function copyArrayToPool(arr) {
    for (var i = 0; i < arr.length; i++) {
      userCharPool.push(arr[i]);
    }
    console.log(userCharPool);
    return;
  }

  if (userChoiceSpecialChars) {
    copyArrayToPool(specialCharArr);
    guaranteedCharsArr = Math.floor(Math.random() * specialCharStr.length);
  }

  if (userChoiceUpperCase) {
    userCharPool = userCharPool.concat(upperCaseCharArr);
    guaranteedCharsArr = Math.floor(Math.random() * upperCaseLetterStr.length);
  }

  if (userChoiceLowerCase) {
    copyArrayToPool(lowerCaseCharArr);
    guaranteedCharsArr = Math.floor(Math.random() * lowerCaseChars.length);
  }

  if (userChoiceNumbers) {
    userCharPool = userCharPool.concat(numbersArr);
    guaranteedCharsArr = Math.floor(Math.random() * numbersStr.length);
  }

  for (var i = 0; i < userChoiceLength; i++) {
    var index = Math.floor(Math.random() * userCharPool.length);

    console.log(userCharPool[index]);

    aPassword.push(userCharPool[index]);
  }

  console.log(aPassword);

  finalPassword = aPassword.join("");

  console.log(finalPassword);

  return finalPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordTextEl = document.getElementById("password");

  passwordTextEl.value = password;

  return;
}

generatePasswordIDBtn.addEventListener("click", writePassword);
