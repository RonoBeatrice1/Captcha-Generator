var code;

// Function to create a random Captcha
function createCaptcha() {
  //Clear the contents of captcha div first
  document.getElementById("captcha").innerHTML = "";
  var charsArray =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
  var lengthOtp = 6;
  var captcha = [];
  for (var i = 0; i < lengthOtp; i++) {
    //Below code will not allow Repetition of Characters
    var index = Math.floor(Math.random() * charsArray.length + 1); //Get the next character from the array
    if (captcha.indexOf(charsArray[index]) == -1)
      captcha.push(charsArray[index]);
    else i--; // Decrement i to generate a new character if repetition occurs
  }
  var canv = document.createElement("canvas");
  canv.id = "captcha";
  canv.width = 100;
  canv.height = 50;
  var ctx = canv.getContext("2d");
  ctx.font = "25px Georgia";
  ctx.strokeText(captcha.join(""), 0, 30);

  //Storing captcha so that can validate you can save it somewhere else according to your specific requirements
  code = captcha.join("");
  document.getElementById("captcha").appendChild(canv); // Adds the canvas to the body element
}

// Function to validate the Captcha
function validateCaptcha() {
  event.preventDefault();
  debugger;
  if (document.getElementById("cpatchaTextBox").value == code) {
    alert("Valid Captcha");
  } else {
    alert("Invalid Captcha. try Again");
    createCaptcha();
  }
}
