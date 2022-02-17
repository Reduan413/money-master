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
  } else if (isNaN(rent) || rent < 0) {
    document.getElementById("rentFeedback").classList.add("active");
  } else if (isNaN(clothes) || clothes < 0) {
    document.getElementById("clothesFeedback").classList.add("active");
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
  const totalExpenses = expenses();

  let balance = 0;
  if (isNaN(income) || income < 0) {
    document.getElementById("incomeFeedback").classList.add("active");
    document.getElementById("incomeFeedback2").classList.remove("active");
  } else {
    if (income < totalExpenses) {
      balance = income - totalExpenses;
      document.getElementById("incomeFeedback2").classList.add("active");
      document.getElementById("incomeFeedback").classList.remove("active");
      document.getElementById("totalBalance").style.color = "red";
    } else {
      balance = income - totalExpenses;
      document.getElementById("incomeFeedback").classList.remove("active");
      document.getElementById("incomeFeedback2").classList.remove("active");
      document.getElementById("totalBalance").style.color = "rgb(68, 54, 54)";
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
  let saveBalance = 0;
  if (isNaN(savePercentage) || savePercentage < 0 || isNaN(income)) {
    document.getElementById("saveFeedback").classList.add("active");
    document.getElementById("saveFeedback2").classList.remove("active");
  } else {
    if (savePercentage < 100) {
      saveBalance = (income * savePercentage) / 100;
      document.getElementById("saveFeedback").classList.remove("active");
      document.getElementById("saveFeedback2").classList.remove("active");
    } else {
      document.getElementById("saveFeedback2").classList.add("active");
      document.getElementById("saveFeedback").classList.remove("active");
    }
  }

  //display save balance
  const saveBalanceDisplay = document.getElementById("saveBalance");
  saveBalanceDisplay.innerHTML = saveBalance;
  return saveBalance;
}
//calculate remaining balance
document.getElementById("saveBtn").addEventListener("click", function () {
  const totalBalanceText = document.getElementById("totalBalance").innerText;
  const totalBalance = parseInt(totalBalanceText);
  const saveAmmountText = percentageCalculate();
  const saveAmmount = parseInt(saveAmmountText);
  let remainingBalance = 0;
  //calculate remaining balance
  if(isNaN(totalBalance) == false) {
    if(saveAmmount < totalBalance) {
        remainingBalance = totalBalance - saveAmmount;
        document.getElementById("remainingBalance").style.color = "rgb(68, 54, 54)";
        document.getElementById("remainingFeedback").classList.remove("active");
    }else{
        remainingBalance = totalBalance - saveAmmount;  
        document.getElementById("remainingBalance").style.color = "red";
        document.getElementById("remainingFeedback").classList.add("active");
    }
  }
  
  //display remaining balance
  const displayRemainingBalance = document.getElementById("remainingBalance");
  displayRemainingBalance.innerHTML = remainingBalance;
});
