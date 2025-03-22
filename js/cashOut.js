document.getElementById('btn-cash-out-money').addEventListener('click',function(event){
    event.preventDefault();

    const cashOutAmount = document.getElementById('input-cash-out-amount').value;
    const cashOutNumber = parseFloat(cashOutAmount);
    const pinNumber = document.getElementById('input-cash-out-pin').value;
    
    if(pinNumber === '1234'){
        const balance = document.getElementById('current-balance').innerText;
        const balanceNumber = parseFloat(balance);
        
        const updatedBalance = balanceNumber - cashOutNumber;
        document.getElementById('current-balance').innerText = updatedBalance;
        
    }
    else{
        alert('Failed to cash out! please try again later');
    }
});