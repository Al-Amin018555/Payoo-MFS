// console.log('cash out connected');

document.getElementById('cash-out-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const cashOut = getInputFieldValueById('input-cash-out');
        if (isNaN(cashOut)) {
            alert('Failed to Cash Out!');
            return;
        }
        // console.log(cashOut);
        const pinNumber = getInputFieldValueById('input-cash-out-pin');

        if (pinNumber === 1234) {
            const balance = getTextFieldValueById('account-balance');

            if (cashOut > balance) {
                alert('You do not have enough balance!');
                return;
            }
            const newBalance = balance - cashOut;

            document.getElementById('account-balance').innerText = newBalance;

            const div = document.createElement('div');
            div.classList.add('bg-orange-400');
            div.innerHTML = `
            <h1 class="font-bold text-2xl"> Cash Out </h1>
            <p> ${cashOut} tk. withdrawn New Balance: ${newBalance} </p>
            `;
            document.getElementById('transaction-container').appendChild(div);

        }
        else {
            alert('Failed to Cash Out!');
        }

    });
