// console.log('login connected');

document.getElementById('login-btn')
    .addEventListener('click', function (event) {
        console.log("login btn clicked");
        event.preventDefault(); 

        let mobileNum = getInputFieldValueById('input-mobile-num');
        let mobilePin = getInputFieldValueById('input-mobile-pin');

        if(mobileNum === 5 && mobilePin === 1234){
            window.location.href = "home.html";
        }
        else{
            alert('Failed to login!');
        }
        
    });