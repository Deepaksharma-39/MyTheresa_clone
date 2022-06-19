var Address = JSON.parse(localStorage.getItem("adressDatas"));
displayAboveData(Address);
function displayAboveData(Address) {
    
    document.querySelector("#userNamea").innerText = Address.FirstName + Address.LastName;

    document.querySelector("#userCitya").innerText = Address.City;
   
    document.querySelector("#userPina").innerText = Address.Pin;
   
    document.querySelector("#userCountrya").innerText = Address.Country;

}
function AddressRedirect() {

    window.location.href = "Address.html"
}

function Forward() {
    let ans = document.querySelector("#environment").checked;
    let environment = {
        data: 0.40
    }
    if (ans == true) {
        let environment = {
            data: 0.40
        }
        localStorage.setItem("environments", JSON.stringify(environment))
    }
    else {
        let environment = {
            data: 0.00
        }
        localStorage.setItem("environments", JSON.stringify(environment))

    }

    window.location.href = "Payment.html"
}
function Back() {
    window.location.href = "AddToCart.html"
}