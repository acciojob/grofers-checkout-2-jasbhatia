//your code here
let prices = document.querySelectorAll('[data-ns-test="prices"]');
// console.log(prices);
let sum = 0;
prices.forEach((item) => {
  sum += parseFloat(item.textContent);
});
console.log(sum);

const table = document.querySelector("table");
// console.log(table);

let newRow = table.insertRow();
// console.log(newRow);
newRow.setAttribute("data-ns-test", "grandTotal");
// console.log(newRow);
let newCol1 = newRow.insertCell();
// console.log(newCol1);
let newCol = newRow.insertCell();
// console.log(newCol);
newCol1.innerText = "Total";
newCol.innerText = sum;



