// step one add event handler
// add balance handler
document.getElementById('add-money-btn')
    .addEventListener('click', function(event){
        event.preventDefault()
        
        const balance = document.getElementById('input-add-money').value;
        const pinNumber = document.getElementById('input-pin-number').value;

        const currentBalance = document.getElementById('total-amount').innerText

        if( pinNumber === '1234'){
            document.getElementById('total-amount').innerText = parseFloat(currentBalance) + parseFloat(balance)
        }else{
            alert('Something is worng went, plese try again')
        }
})





