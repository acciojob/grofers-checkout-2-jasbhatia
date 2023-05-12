const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
var ans = document.querySelector("#ans")
const getSum = () => {
//Add your code here
	var prices=document.querySelectorAll(".price")
	const value = Array.from(prices).map(item => Number(item.textContent));
	let sum=0;
  for(var i of value){
    sum=sum+i;
  }
  ans.innerHTML+=`<tr><td>Total Price</td><td>${sum}</td></tr>`
};

getSumBtn.addEventListener("click", getSum);