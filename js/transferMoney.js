// console.log('transfer money js file connected');

document.getElementById('transfer-money-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const transferMoney = getInputFieldValueById('input-transfer-money');
        if (isNaN(transferMoney)) {
            alert('Failed To Transfer Money!');
            return;
        }

        const pinNumber = getInputFieldValueById('input-transfer-money-pin');

        if (pinNumber === 1234) {

            const balance = getTextFieldValueById('account-balance');
            if (transferMoney > balance) {
                alert('You do not have enough balance!');
                return;
            }

            const newBalance = balance - transferMoney;

            document.getElementById('account-balance').innerText = newBalance;

            const div = document.createElement('div');
            div.classList.add('bg-yellow-400');
            div.innerHTML = `
            <h1 class="font-bold text-2xl"> Transferred Money </h1>
            <p> ${transferMoney} tk. transferred New Balance: ${newBalance} </p>
            `;
            document.getElementById('transaction-container').appendChild(div);
        }
    });