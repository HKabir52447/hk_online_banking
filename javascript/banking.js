document.getElementById('deposit-btn').addEventListener('click', function(e){
    e.preventDefault();
    let depositInput = document.getElementById('deposit');
    let depoInputValue =depositInput.value;

    let withdrawInput = document.getElementById('withdraw');
    let depoAmount = document.getElementById('depoAmount');
    let currentAmount = depoAmount.innerText;
    let currentTk = parseFloat(currentAmount);
    let inputTk = parseFloat(depoInputValue);
    let totalTk = currentTk + inputTk;
    depoAmount.innerText = totalTk;
    depositInput.value = '';
    let getBlance = document.getElementById('blance');
    let blanceAmount = getBlance.innerText;
    let currentBlance = parseFloat(blanceAmount);
    let updateBlance = currentBlance + inputTk;
    getBlance.innerText = updateBlance;
});

document.getElementById('withdraw-btn').addEventListener('click', function(e){
    e.preventDefault();
    let getWithdraw = document.getElementById('withdraw');
    let withdrawText = getWithdraw.innerText;
    let getWithdraWInput = document.getElementById('withdrawinput');
    let withdrawInputValue = getWithdraWInput.value;
    let totalWithdraw = parseFloat(withdrawText) + parseFloat(withdrawInputValue);
    getWithdraw.innerText = totalWithdraw;
    getWithdraWInput.value = '';
    let getBlance = document.getElementById('blance');
    let blanceAmount = getBlance.innerText;
    let currentBlance = parseFloat(blanceAmount);
    let updateBlance = currentBlance - parseFloat(withdrawInputValue);
    getBlance.innerText = updateBlance;
})