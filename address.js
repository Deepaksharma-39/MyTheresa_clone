var form = document.querySelector("#addressForm");
document.querySelector("#addressForm").addEventListener("submit", adressSave);
function adressSave(event) {
    event.preventDefault();
    let fname = form.fname.value;
    let lname = form.lname.value;
    let company = form.company.value;
    let mobile = form.mobile.value;
    let city = form.city.value;
    let pin = form.pin.value;
    let state = form.state.value;
    let country = form.country.value;



    let addressData = {
        FirstName: fname,
        LastName: lname,
        Company: company,
        Mobile: mobile,
        City: city,
        Pin: pin,
        State: state,
        Country: country,

    }
    if ((addressData.FirstName == "") || (addressData.LastName == "") || (addressData.Company == "") || (addressData.Mobile == "") || (addressData.City == "") || (addressData.Pin == "") || (addressData.State == "") || (addressData.Country == "")) {
        alert("Please fill valid address");
    }
    else {
        localStorage.setItem("adressDatas", JSON.stringify(addressData))
        alert("Your address is succesfully saved redirected to the cart")
        window.location.href = "AddToCart.html"
    }

}

