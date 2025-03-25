// console.log('add money connected');

document.getElementById('add-money-btn')
    .addEventListener('click', function (event) {
        // console.log('add money button clicked');
        event.preventDefault();

        const addMoney = getInputFieldValueById('input-add-money');

        if (isNaN(addMoney)) {
            alert("Failed to add Money!");
            return;
        }
        const pinNumber = getInputFieldValueById('input-add-money-pin');

        if (pinNumber === 1234) {
            const balance = getTextFieldValueById('account-balance');

            const newBalance = balance + addMoney;

            document.getElementById('account-balance').innerText = newBalance;
        }
        else {
            alert("Failed to add Money!");
        }
    });