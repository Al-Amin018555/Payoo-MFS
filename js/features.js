document.getElementById('show-add-money')
    .addEventListener('click', function () {
        // console.log('clicked for add money features');
        showSectionById('add-money-form')
    });


document.getElementById('show-cash-out')
    .addEventListener('click', function () {

        // console.log('clicked for having cashout feature');
        showSectionById('cash-out-form')
    });

document.getElementById('show-transfer-money')
    .addEventListener('click', function () {
        // console.log('clicked for having transfer money feature');
        showSectionById('transfer-money-form')
    });

document.getElementById('show-transaction')
    .addEventListener('click', function () {
        // console.log('clicked for having transactions feature');
        showSectionById('transaction-section');
    });