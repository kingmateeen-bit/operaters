
"use strict";

// 1. ARITHMETIC OPERATORS
const a1 = document.getElementById("a1");
const b1 = document.getElementById("b1");
const op1 = document.getElementById("op1");
const out1 = document.getElementById("out1");

document.getElementById("calc1").addEventListener("click", function () {
  const a = Number(a1.value);
  const b = Number(b1.value);
  const op = op1.value;
  let result;

  if (a1.value.trim() === "" || b1.value.trim() === "") {
    out1.textContent = "Please enter both numbers.";
    return;
  }

  switch (op) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = b === 0 ? "Cannot divide by zero" : a / b;
      break;
    case "%":
      result = b === 0 ? "Cannot divide by zero" : a % b;
      break;
    case "**":
      result = a ** b;
      break;
  }

  out1.textContent = `${a} ${op} ${b} = ${result}`;
});


// 2. ASSIGNMENT OPERATORS
let x = 5;

const xval = document.getElementById("xval");
const b2 = document.getElementById("b2");
const op2 = document.getElementById("op2");
const out2 = document.getElementById("out2");

document.getElementById("apply2").addEventListener("click", function () {
  if (b2.value.trim() === "") {
    out2.textContent = "Please enter a value.";
    return;
  }

  const value = Number(b2.value);
  const op = op2.value;

  if ((op === "/=") && value === 0) {
    out2.textContent = "Cannot divide by zero.";
    return;
  }

  switch (op) {
    case "=":
      x = value;
      break;
    case "+=":
      x += value;
      break;
    case "-=":
      x -= value;
      break;
    case "*=":
      x *= value;
      break;
    case "/=":
      x /= value;
      break;
  }

  xval.textContent = x;
  out2.textContent = `Operation: x ${op} ${value}. New value of x = ${x}`;
});

document.getElementById("reset2").addEventListener("click", function () {
  x = 5;
  xval.textContent = x;
  out2.textContent = "x has been reset to 5.";
});


// 3. COMPARISON OPERATORS
const a3 = document.getElementById("a3");
const b3 = document.getElementById("b3");
const op3 = document.getElementById("op3");
const asText = document.getElementById("asText");
const out3 = document.getElementById("out3");

document.getElementById("cmp3").addEventListener("click", function () {
  const first = a3.value;
  const second = b3.value;
  const op = op3.value;

  let a = first;
  let b = second;

  if (!asText.checked) {
    const numberA = first.trim() !== "" && Number.isFinite(Number(first));
    const numberB = second.trim() !== "" && Number.isFinite(Number(second));

    if (numberA && numberB) {
      a = Number(first);
      b = Number(second);
    }
  }

  let result;

  switch (op) {
    case "==":
      result = a == b;
      break;
    case "===":
      result = a === b;
      break;
    case "!=":
      result = a != b;
      break;
    case "!==":
      result = a !== b;
      break;
    case ">":
      result = a > b;
      break;
    case "<":
      result = a < b;
      break;
    case ">=":
      result = a >= b;
      break;
    case "<=":
      result = a <= b;
      break;
  }

  out3.textContent = `${JSON.stringify(a)} ${op} ${JSON.stringify(b)} = ${result}`;
});


// 4. QUICK REFERENCE TABLE
const reference = [
  ["10 + 3", 10 + 3],
  ["10 - 3", 10 - 3],
  ["10 * 3", 10 * 3],
  ["10 / 3", 10 / 3],
  ["10 % 3", 10 % 3],
  ["2 ** 3", 2 ** 3],
  ["5 == '5'", 5 == "5"],
  ["5 === '5'", 5 === "5"],
  ["10 > 3", 10 > 3],
  ["10 <= 3", 10 <= 3]
];

const ref = document.getElementById("ref");

reference.forEach(function (item) {
  const row = document.createElement("tr");
  const expressionCell = document.createElement("td");
  const resultCell = document.createElement("td");

  expressionCell.textContent = item[0];
  resultCell.textContent = item[1];

  row.append(expressionCell, resultCell);
  ref.appendChild(row);
});
