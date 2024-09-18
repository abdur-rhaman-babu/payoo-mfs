
document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault()

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    // console.log(phoneNumber, pinNumber)

    if ( phoneNumber === '5' && pinNumber === '1234'){
        window.location.href = '/home.html'
    }else{
        alert('Enter your correct pin or number')
        document.getElementById('phone-number').value = ''
        document.getElementById('pin-number').value = ''
    }

})
