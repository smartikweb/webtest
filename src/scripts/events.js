//ES5
function validateField(val) {
  const name = "Anna";
  if (val == name) {
    console.log("Valid");
  } else {
    console.log("Not Valid");
  }
  console.log("Validate function", val);
}

function buttonClick() {
  console.log("You clicked me! Yay");
}

function showTodaysDate() {
  alert(Date());
}

function overI() {
  alert("You are over me!");
}

function outI() {
  alert("Don't leave me!");
}

function onPageLoad() {
  console.log("Page is loaded");
}
window.validateField = validateField;
window.buttonClick = buttonClick;
window.showTodaysDate = showTodaysDate;
window.overI = overI;
window.outI = outI;
window.onPageLoad = onPageLoad;
// valideField();
