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
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here

  getSumBtn.disabled = true;
  const prices = document.querySelectorAll(".price");
  let totalPrice = 0;
  prices.forEach((price) => {
    const value = parseInt(price.textContent);
    if (!Number.isNaN(value)) {
      totalPrice += value;
    }
  });
  const totalPriceRow = document.createElement("tr");
  totalPriceRow.id = "ans";
  const totalPriceData = document.createElement("td");
  const totalPriceAns = document.createElement("td");
  totalPriceRow.appendChild(totalPriceData);
  totalPriceRow.appendChild(totalPriceAns);
  const data = `Total Price (in Rs): `;
  totalPriceData.append(data);
  totalPriceAns.append(`${totalPrice}`);
  const table = document.querySelector("tbody");
  table.appendChild(totalPriceRow);
};
getSumBtn.addEventListener("click", getSum);

// getSumBtn.addEventListener("click", getSum);
