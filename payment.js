function Payment() {
    let ans = document.querySelector("#card").checked;
    if (ans == false) {
        let paymentMethod = { method: "PayPal" }
        localStorage.setItem("paymentMethods", JSON.stringify(paymentMethod))
    }
    else {
        let paymentMethod = { method: "card" }
        localStorage.setItem("paymentMethods", JSON.stringify(paymentMethod))
    }

    window.location.href = "ConfirmCart.html"
}
function Back() {
    window.location.href = "Delivery.html"
}
document.querySelector("#form").style.display = "none";
function Check() {
    let ans = document.querySelector("#card").checked;
    if (ans == true) {
        document.querySelector("#form").style.display = "block";
    }
    else {
        document.querySelector("#form").style.display = "none";
    }
    let CardNumber = document.querySelector("#CreditCardNumber").innerText;
    console.log(CardNumber);
}
