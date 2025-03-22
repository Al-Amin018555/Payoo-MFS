//add money to the account
/**
  s-1: add event handler
  prevent page reload after form submit
  s-2: get money to be added to the account balance
  get the pin number
  s-3: verify the pin number
 */

// step-1: add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click',function(aw){
    //prevent page reload after form submit
    aw.preventDefault();

    // step-2: et money to be added to the account
    const moneyAmountInput = document.getElementById('input-amount').value;

    //get pin number provided
    const inputPinNumber = document.getElementById('input-pin').value;

    // step-3: verify pin number
    //wrong way to validate pin number
    if(inputPinNumber === '1234'){
       //step-4: get the current balance
        const currentBalance = document.getElementById('current-balance').innerText;

        // step-5:add currentBalance with moneyAmountInput
        const currentBalanceNumber = parseFloat(currentBalance);
        const moneyAmountNumber = parseFloat(moneyAmountInput);
        const totalBalance = currentBalanceNumber + moneyAmountNumber;
       
        // step-6: update the balance in the UI/DOM
        document.getElementById('current-balance').innerText = totalBalance;
        
    }
    else{
        console.log('wrong password! please try again');
    }
});


