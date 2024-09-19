const addMoneyBtn = document.getElementById('add-money')
const cashOutMoneyBtn = document.getElementById('cash-out')
// add money
document.getElementById('add-btn').addEventListener('click',function(){
    addMoneyBtn.classList.remove('hidden');
    cashOutMoneyBtn.classList.add('hidden');
})

// cash out money
document.getElementById('cashout-btn').addEventListener('click',function(){
    addMoneyBtn.classList.add('hidden');
    cashOutMoneyBtn.classList.remove('hidden');
})
