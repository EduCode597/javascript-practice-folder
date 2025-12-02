const myCheckbox = document.getElementById("myCheckbox");
const paypalBtn = document.getElementById("paypalBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const gcashBtn = document.getElementById("gcashBtn");
const mySubmit = document.getElementById("mySubmit");
const output = document.getElementById("output");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function() {
    if(myCheckbox.checked){
        output.innerText = "you are subscribed!";
    }
    else{
        output.innerText = "you are not subscribed!";
    }

    if(paypalBtn.checked){
        paymentResult.innerText = "You have selected Paypal as your payment method.";
    }
    else if(masterCardBtn.checked){
        paymentResult.innerText = "You have selected MasterCard as your payment method.";
    }
    else if(gcashBtn.checked){
        paymentResult.innerText = "You have selected Gcash as your payment method.";
    }
    else{
        paymentResult.innerText = "You have to select your paymaent method.";
    }
}