function readBox() {
	// Take input values
	var num1Val = Number(document.getElementById('num1').value);
	var num2Val = Number(document.getElementById('num2').value);
  var operator = document.getElementById('operator').value.toString();

  var answer = 0

  if (operator === "add") {
    answer = num1Val + num2Val;
  } else if (operator === "subtract") {
    answer = num1Val - num2Val;
  } else if (operator === "multiply") {
    answer = num1Val * num2Val;
  } else {
    answer = num1Val / num2Val;
  }

  document.getElementById("demo").innerHTML = answer;
}
