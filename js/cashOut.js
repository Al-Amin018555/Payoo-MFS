// console.log('cash out connected');

document.getElementById('cash-out-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const cashOut = getInputFieldValueById('input-cash-out');
        if (isNaN(cashOut)) {
            alert('Failed to Cash Out!')
        }
        // console.log(cashOut);
        const pinNumber = getInputFieldValueById('input-cash-out-pin');

        if (pinNumber === 1234) {
            const balance = getTextFieldValueById('account-balance');

            if (cashOut > balance) {
                alert('You do not have enough balance!');
            }
            const newBalance = balance - cashOut;

            document.getElementById('account-balance').innerText = newBalance;

        }
        else {
            alert('Failed to Cash Out!');
        }

    });
