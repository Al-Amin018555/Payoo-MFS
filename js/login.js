// step-1: set event handler
document.getElementById('btn-login').addEventListener('click',function(event){

    // step-2: prevent default behaviour (prevent reloading browser)
    event.preventDefault();

    // step-3: get the phone number
    const mobileNumber = document.getElementById('mobile-number').value;
    console.log(mobileNumber);

});