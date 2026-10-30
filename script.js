/*Iska matlab hai JavaScript ko strict mode mein chalana.

Asaan alfaaz mein, JavaScript ko kuch rules zyada sakhti
 se follow karne ke liye kehte hain.
Is se kuch common coding mistakes pakarne mein madad milti hai.*/
"use strict";
/*const a1 ;	           Ek variable banaya jiska naam a1 hai.
getElementById("a1") ;	 HTML mein id="a1" wala element dhoondta hai.
b1 ;                    Doosre number wale input ko select karta hai.
op1 ;                  	Operator select karne wale dropdown ko select karta hai.
out1 ;	                Jahan result dikhana hai, us element ko select karta hai.*/

// 1. ARITHMETIC OPERATORS
const a1 = document.getElementById("a1");
const b1 = document.getElementById("b1");
const op1 = document.getElementById("op1");
const out1 = document.getElementById("out1");

/*Is se JavaScript us input ko access kar sakti hai jahan user 10 ya koi doosra number enter karega.

Yaad rakhein:
- document = aapka HTML document.
- getElementById() = ID ke zariye element dhoondna.
- const = aisa variable jise dobara kisi doosri value se assign nahi kar sakte.


Is line ko tukron mein samjhein:
- getElementById("calc1") — HTML mein Calculate button ko select karta hai.
- addEventListener() — kisi event ka intezar karta hai.
- "click" — batata hai ke button click hone par action karna hai.
- function () { — woh code shuru hota hai jo click hone par chalega.
Asaan misaal: aap Calculate button dabate hain, to is function ke andar likha hua code execute hota hai.




Code	Matlab
a1.value	Pehle input mein likha hua text lena.
Number(...)	Input ki value ko number mein convert karna.
const a	Pehle number ko a mein rakhna.
const b	Doosre number ko b mein rakhna.
op1.value	Dropdown se selected operator lena.
let result	Result store karne ke liye variable banana*/

document.getElementById("calc1").addEventListener("click",) function () {
  const a = Number(a1.value);
  const b = Number(b1.value);
  const op = op1.value;
  let result;
}


/*- if — agar condition sahi ho, to andar ka code chalega.
- .value — input ki value leta hai.
- .trim() — text ke shuru aur aakhir ke extra spaces hata deta hai.
- === "" — check karta hai ke value khaali hai.
- || — iska matlab OR, yaani dono mein se koi ek condition bhi true ho to code chalega.
- textContent — HTML element ke andar text show karta hai.
- return — current function ko wahin rok deta hai.
Misal: agar user ne doosra number enter nahi kiya, to screen par message aayega:

Please enter both numbers.

return ki wajah se uske baad calculation nahi hogi.*/



  if (a1.value.trim() === "" || b1.value.trim() === "") {
    out1.textContent = "Please enter both numbers.";
    return;
  }

  /*switch ka matlab hai: operator ki value check karo aur uske mutabiq calculation karo.
Code	Asaan matlab
switch (op)	Dekho user ne kaunsa operator select kiya hai.
case "+"	Agar plus select hai, addition karo.
case "-"	Agar minus select hai, subtraction karo.
case "*"	Agar multiplication select hai, numbers multiply karo.
case "/"	Agar division select hai, divide karo.
case "%"	Division ka remainder nikalo.
case "**"	Pehle number ki power nikalo.
break	Is case ka kaam poora hone par switch se bahar niklo.*/

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

 /* - out1.textContent — result wale HTML element mein text show karega.
- Backticks ` ` — template literal banate hain.
- ${a} — variable a ki value text mein insert karta hai.
- ${op} — selected operator insert karta hai.
- ${result} — calculation ka result insert karta hai.
- }); — click handler aur uska function close karta hai.
Misal ke taur par screen par yeh aayega:*/

/*10 + 3 = 13
  out1.textContent = `${a} ${op} ${b} = ${result}`;
});


/*xval — screen par current x ki value dikhata hai.



b2 — user ka enter kiya hua number leta hai.



op2 — selected assignment operator leta hai.



out2 — operation ka message show karta hai.*/

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
