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
            
            const div = document.createElement('div');
            div.classList.add('bg-sky-400');
            div.innerHTML = `
            <h1 class="font-bold text-2xl"> Add Money </h1>
            <p> ${addMoney} tk. added New Balance: ${newBalance} </p>
            `;
            document.getElementById('transaction-container').appendChild(div);
        }
        else {
            alert("Failed to add Money!");
        }
    });