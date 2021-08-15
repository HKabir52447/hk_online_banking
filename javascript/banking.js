document.getElementById('deposit-btn').addEventListener('click', function(e){
    e.preventDefault();
    let depositInput = document.getElementById('deposit');
    let depoInputValue =depositInput.value;

    let withdrawInput = document.getElementById('withdraw');
    let depoAmount = document.getElementById('depoAmount');
    let currentAmount = depoAmount.innerText;
    if(depoInputValue <= 0){
        alert('Please enter valid amount greater than 0');
    }
    else{
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
    }
   
});

document.getElementById('withdraw-btn').addEventListener('click', function(e){
    e.preventDefault();
    let getWithdraw = document.getElementById('withdraw');
    let withdrawText = getWithdraw.innerText;
    let getWithdraWInput = document.getElementById('withdrawinput');
    let withdrawInputValue = getWithdraWInput.value;
    if(withdrawInputValue <= 0){
        alert('Please enter valid amount greater than 0');
    }
    else{
        getWithdraWInput.value = '';
        let getBlance = document.getElementById('blance');
        let blanceAmount = getBlance.innerText;
        let currentBlance = parseFloat(blanceAmount);
        let withdrawBlance = parseFloat(withdrawInputValue);
        if(withdrawBlance <= currentBlance){
            let totalWithdraw = parseFloat(withdrawText) + parseFloat(withdrawInputValue);
            getWithdraw.innerText = totalWithdraw;
            let updateBlance = currentBlance - withdrawBlance;
            getBlance.innerText = updateBlance;
        }
        else{
            alert('You have not sufficent blance')
        }
    }
  
    
})