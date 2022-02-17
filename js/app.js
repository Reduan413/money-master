//calculate expenses
function expenses() {
  const foodInput = document.getElementById("inputFood").value;
  const rentInput = document.getElementById("inputRent").value;
  const clothesInput = document.getElementById("inputClothes").value;
  const food = parseInt(foodInput);
  const rent = parseInt(rentInput);
  const clothes = parseInt(clothesInput);

  let totalExpenses = 0;

  if (isNaN(food) || food < 0) {
    document.getElementById("foodFeedback").classList.add("active");
    totalExpenses = rent + clothes;
  } else if (isNaN(rent) || rent < 0) {
    document.getElementById("rentFeedback").classList.add("active");
    totalExpenses = food + clothes;
  } else if (isNaN(clothes) || clothes < 0) {
    document.getElementById("clothesFeedback").classList.add("active");
    totalExpenses = food + rent;
  } else {
    totalExpenses = food + rent + clothes;
    document.getElementById("foodFeedback").classList.remove("active");
    document.getElementById("rentFeedback").classList.remove("active");
    document.getElementById("clothesFeedback").classList.remove("active");
  }

  //display expenses
  const displayExpenses = document.getElementById("expensesBalance");
  displayExpenses.innerHTML = totalExpenses;
  return totalExpenses;
}

//calculate balance
document.getElementById("calculateBtn").addEventListener("click", function () {
  const incomeInput = document.getElementById("inputIncome").value;
  const income = parseInt(incomeInput);

  let balance = 0;
  if (isNaN(income) || income < 0) {
    document.getElementById("incomeFeedback").classList.add("active");
  } else {
    const totalExpenses = expenses();
    if (income < totalExpenses) {
      balance = income - totalExpenses;
      document.getElementById("incomeFeedback2").classList.add("active");
    } else {
      balance = income - totalExpenses;
      document.getElementById("incomeFeedback").classList.remove("active");
    }
  }

  //display balance
  const displayBalance = document.getElementById("totalBalance");
  displayBalance.innerHTML = balance;
});

//calculate percentage
function percentageCalculate() {
  const incomeInput = document.getElementById("inputIncome").value;
  const income = parseInt(incomeInput);
  const saveInput = document.getElementById("inputSave").value;
  const savePercentage = parseInt(saveInput);
  const saveBalance = (income * savePercentage) / 100;

  //display save balance
  const saveBalanceDisplay = document.getElementById("saveBalance");
  saveBalanceDisplay.innerHTML = saveBalance;
  return saveBalance;
}
//calculate save balance
document.getElementById("saveBtn").addEventListener("click", function () {
  const totalBalanceText = document.getElementById("totalBalance").innerText;
  const totalBalance = parseInt(totalBalanceText);
  const saveAmmountText = percentageCalculate();
  const saveAmmount = parseInt(saveAmmountText);

  //calculate remaining balance
  const remainingBalance = totalBalance - saveAmmount;

  //display remaining balance
  const displayRemainingBalance = document.getElementById("remainingBalance");
  displayRemainingBalance.innerHTML = remainingBalance;
});
