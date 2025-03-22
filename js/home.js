//add money to the account
/**
  s-1: add event handler
  prevent page reload after form submit
  s-2: get money to be added to the account balance
 */

// step-1: add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click',function(aw){
    //revent page reload after form submit
    aw.preventDefault();

    // step-2: et money to be added to the account
    const moneyAmountInput = document.getElementById('input-amount').value;
    //get pin number provided
    const inputPinNumber = document.getElementById('input-pin').value;
    console.log(moneyAmountInput,inputPinNumber);
});


