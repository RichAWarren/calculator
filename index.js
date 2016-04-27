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

function day() {
  var myElement = document.querySelector("body");
  myElement.style.backgroundColor = "#D93600";
  myElement.style.color = "black";
}

function night() {
  var myElement = document.querySelector("body");
  myElement.style.backgroundColor = "#262626";
  myElement.style.color = "#D93600";
};

function acidRun() {
      var color1 = "#"+((1<<24)*Math.random()|0).toString(16)
      var color2 = "#"+((1<<24)*Math.random()|0).toString(16)
      var colour = Math.random()
      var myElement = document.querySelector("body");
      myElement.style.backgroundColor = color1;
      myElement.style.color = color2;
    };

function acidButton() {
  var id = setInterval(acidRun, 250);
};

function acidStop() {
  var id = clearInterval(id);
};
