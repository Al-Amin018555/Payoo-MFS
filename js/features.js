//show cash out form
document.getElementById('show-cash-out').addEventListener('click',function(){
    document.getElementById('cash-out-form').classList.remove('hidden');
    //hide the add money form
    document.getElementById('add-money-form').classList.add('hidden');
});

// show add money form
document.getElementById('show-add-money').addEventListener('click',function(){
    document.getElementById('add-money-form').classList.remove('hidden');
    //hide the cash out form
    document.getElementById('cash-out-form').classList.add('hidden');

});

