



function calcLoan()
{
    let loanAmountValue = document.getElementById('loanAmount').value;
    let interestRateValue = document.getElementById('interestRate').value;
    let monthsToPayValue = document.getElementById('monthsToPay').value;

    interset = loanAmountValue * (interestRateValue * 0.01) / monthsToPayValue
    monthly = ((loanAmountValue / monthsToPayValue )+ interset ).toFixed(2) 

    document.getElementById('payment').innerHTML = `Monthly Payment: ${monthly}`
}