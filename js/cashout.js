// cash out
document.getElementById('cashout-money-btn')
    .addEventListener('click', function(event){
        event.preventDefault()
        console.log('cash out money')
        const balance = document.getElementById('cash-out-money').value;
        const pinNumber = document.getElementById('input-pin-numbers').value;
        console.log(balance, pinNumber)

        const currentBalance = document.getElementById('total-amount').innerText

        if( pinNumber === '1234'){
            document.getElementById('total-amount').innerText = parseFloat(currentBalance) - parseFloat(balance)
        }else{
            alert('Something is worng went, plese try again')
        }
})