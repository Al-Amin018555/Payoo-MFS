// step-1: set event handler
document.getElementById('btn-login').addEventListener('click', function (event) {

    // step-2: prevent default behaviour (prevent reloading browser)
    event.preventDefault();

    // step-3: get the phone number and pin number
    const mobileNumber = document.getElementById('mobile-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    // step-4: validation (this is not the perfect way to do so. here we are doing it just temporarily)
    if (mobileNumber === '5' && pinNumber === '1234'){
        console.log('Your are logged in');
        window.location.href = 'home.html';
    }
    else{
        alert('Wrong number or pin.');
    }

});