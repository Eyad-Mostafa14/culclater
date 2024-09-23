function Add() {
  let firstnum = parseFloat(document.getElementById("num1").value);
  let secondtnum = parseFloat(document.getElementById("num2").value);
  let result = firstnum + secondtnum;
  document.getElementById("result").innerHTML = result;
}
function Subtract() {
  let firstnum = parseFloat(document.getElementById("num1").value);
  let secondtnum = parseFloat(document.getElementById("num2").value);
  let result = firstnum - secondtnum;
  document.getElementById("result").innerHTML = result;
}
function Multiply() {
  let firstnum = parseFloat(document.getElementById("num1").value);
  let secondtnum = parseFloat(document.getElementById("num2").value);
  let result = firstnum * secondtnum;
  document.getElementById("result").innerHTML = result;
}
function Divided() {
  let firstnum = parseFloat(document.getElementById("num1").value);
  let secondtnum = parseFloat(document.getElementById("num2").value);
  let result = firstnum / secondtnum;
  document.getElementById("result").innerHTML = result;
}
function SquareRoot() {
  let firstnum = parseFloat(document.getElementById("num1").value);
  let result = Math.sqrt(firstnum);
  document.getElementById("result").innerHTML = result;
}
function Power() {
  let firstnum = parseFloat(document.getElementById("num1").value);
  let secondtnum = parseFloat(document.getElementById("num2").value);
  let result = Math.pow(firstnum, secondtnum);
  document.getElementById("result").innerHTML = result;
}
function resetSpecificFields() {
  let result = 0;
  document.getElementById("result").innerHTML = result;
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
}
