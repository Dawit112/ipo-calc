// pythagorean theorem calculator BY DAWIT

// Button Click Listener
document.getElementById("btn").addEventListener("click", btnclicked);

function btnclicked() {
  //input
  let num1 = +document.getElementById("num1-in").value;
  let num2 = +document.getElementById("num2-in").value;
  // PROCESS

let total = Math.sqrt(num1*num1+num2*num2);

  // output
  document.getElementById("output").innerHTML = total;
}
