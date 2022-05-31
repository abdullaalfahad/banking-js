// handle deposit
document.getElementById('deposit-button').addEventListener('click', function () {
    // new deposite amount
    const inputDeposit = document.getElementById('input-deposit');
    const depositAmountText = inputDeposit.value;
    const inputDepositAmount = parseFloat(depositAmountText);

    // previous deposit amount
    const previousDeposit = document.getElementById('deposit');
    const previousDepositText = previousDeposit.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    // total deposit amount
    const newDepositAmount = previousDepositAmount + inputDepositAmount;
    previousDeposit.innerText = newDepositAmount;

    // update balance
    const balance = document.getElementById('balance');
    const balanceText = balance.innerText;
    const balanceAmount = parseFloat(balanceText);
    const totalBalance = balanceAmount + inputDepositAmount;
    balance.innerText = totalBalance;

    // clear input field
    inputDeposit.value = '';
})

// handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const inputWithdraw = document.getElementById('input-withdraw');
    const withdrawAmountText = inputWithdraw.value;
    const inputWithdrawAmount = parseFloat(withdrawAmountText);

    const previousWithdraw = document.getElementById('withdraw');
    const previousWithdrawText = previousWithdraw.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);

    const newWithdrawAmount = previousWithdrawAmount + inputWithdrawAmount;
    previousWithdraw.innerText = newWithdrawAmount;

    const previousBalance = document.getElementById('balance');
    const previousBalanceText = previousBalance.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);

    console.log(previousWithdrawAmount);
    const updatedBalance = previousBalanceAmount - inputWithdrawAmount;
    previousBalance.innerText = updatedBalance;

    inputWithdraw.value = '';

})