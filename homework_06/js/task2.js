var moneyEur = prompt("Enter the amount in euros", "0");
var moneyUsd = prompt("Enter the amount in dollars", "0");
var res1 = moneyEur * 33.4602;
var res2 = moneyUsd * 27.1240;
var result = 33.4602 / 27.1240;

if (moneyEur.match(/^\d+$/) && moneyUsd.match(/^\d+$/)) {
  console.log(moneyEur + " euros are equal " + parseFloat(res1.toFixed(2)) + " UAH" + ", " + moneyUsd + " dollars are equal " + parseFloat(res2.toFixed(2)) + " UAH" + ", one euro is equal " + parseFloat(result.toFixed(2)) + " dollars.");
} else {
  alert("Please enter only numbers");
}
