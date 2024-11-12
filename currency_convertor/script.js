document.getElementById('openDialog').addEventListener('click',function(){
    //now it will display upcoming dialog box
    document.getElementById('dialog').style.display='block'
    
})
window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('dialog')) {
        document.getElementById('dialog').style.display = 'none';
    }
});

//selecting &times to exit dialog box
document.querySelector('.close-button').addEventListener('click',function(event){
    document.getElementById('dialog').style.display='none';
})

document.getElementById('converterForm').addEventListener('submit',async function(event){
    event.preventDefault();
    const amount= document.getElementById('amount').value;
    const from=document.getElementById('fromCurrency').value;
    const to=document.getElementById('toCurrency').value;

    try {
        const response= await fetch('https://v6.exchangerate-api.com/v6/36310025ddd43fe5bf2f212d/latest/USD')
        
        const data= await response.json();
        const rateFROM= data.conversion_rates[from];
        const rateTO= data.conversion_rates[to];
        const rate=(1/rateFROM)*rateTO;
        const result= amount*rate;
        document.getElementById('rate').innerHTML=`Conversion Rate: ${rate.toFixed(2)}`
        document.getElementById('result').innerHTML=`Converted Amount: ${result.toFixed(2)} ${to}`
    } catch (error) {
        document.getElementById('result').innerText = `Error: ${error.message}`;
    }



})
