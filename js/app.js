//calculate expenses
function expenses(){
    const foodInput = document.getElementById('inputFood').value;
    const rentInput = document.getElementById('inputRent').value;
    const clothesInput = document.getElementById('inputClothes').value;
    const food = parseInt(foodInput);
    const rent = parseInt(rentInput);
    const clothes = parseInt(clothesInput);

    const totalExpenses = food + rent +clothes;

    //display expenses
    const displayExpenses = document.getElementById('expensesBalance');
    displayExpenses.innerHTML = totalExpenses;
    return totalExpenses;
}

//calculate balance
document.getElementById('calculateBtn').addEventListener('click',function(){
    const incomeInput = document.getElementById('inputIncome').value;
    const income = parseInt(incomeInput);
    const totalExpenses = expenses();
    const balance = income - totalExpenses;

    //display balance
    const displayBalance = document.getElementById('totalBalance');
    displayBalance.innerHTML = balance;
})


//calculate percentage
function percentageCalculate(){
    const incomeInput = document.getElementById('inputIncome').value;
    const income = parseInt(incomeInput);
    const saveInput = document.getElementById('inputSave').value;
    const savePercentage = parseInt(saveInput);
    const saveBalance = (income * savePercentage) / 100;

    //display save balance
    const saveBalanceDisplay = document.getElementById('saveBalance');
    saveBalanceDisplay.innerHTML = saveBalance;
    return saveBalance;
}
//calculate save
document.getElementById('saveBtn').addEventListener('click',function(){
    const totalBalanceText = document.getElementById('totalBalance').innerText;
    const totalBalance = parseInt(totalBalanceText);
    const saveAmmountText = percentageCalculate();
    const saveAmmount = parseInt(saveAmmountText);
    const RemainingBalance = totalBalance - saveAmmount;
    console.log(RemainingBalance);
})