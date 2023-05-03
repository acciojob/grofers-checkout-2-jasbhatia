//your code here
// let prices = document.querySelectorAll('[data-ns-test="price"]');
// // console.log(prices);
// let sum = 0;
// prices.forEach((item) => {
//   sum += parseFloat(item.textContent);
// });
// console.log(sum);

// const table = document.querySelector("table");
// // console.log(table);

// let newRow = table.insertRow();
// console.log(newRow);
// newRow.setAttribute("data-ns-test", "grandTotal");
// // console.log(newRow);
// let newCol1 = newRow.insertCell();
// // console.log(newCol1);
// let newCol = newRow.insertCell();
// // console.log(newCol);
// newCol1.innerText = "Total";
// newCol.innerText =parseInt(sum);

// 
  const prices = document.querySelectorAll('[data-ns-test="prices"]');
const prices = document.querySelectorAll('[data-ns-test="price"]');

// Calculate the total price by summing up all the prices
let totalPrice = 0;
for (let i = 0; i < prices.length; i++) {
  totalPrice += parseFloat(prices[i].innerText);
}
// Add the total price to the table
const grandTotalCell = document.querySelector('[data-ns-test="grandTotal"]');
grandTotalCell.innerText = totalPrice.toFixed(2);