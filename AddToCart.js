let loginDet=JSON.parse(localStorage.getItem("userDet"))||[]
console.log(loginDet)
let cartData = JSON.parse(localStorage.getItem("kids-NewArr"))||[]
DisplayData(cartData)

function DisplayData(cartData) {
    document.querySelector("#cart").innerHTML = null;
    cartData.forEach(function (ele) {
        let DIV = document.createElement("div");
        let DIV3 = document.createElement("div");
        let DIV4 = document.createElement("div");
        let DIV1 = document.createElement("div");
        let DIV2 = document.createElement("div");
        let Image = document.createElement("img");
        Image.src = ele.img
        let Name = document.createElement("p");
        Name.innerText = ele.name;
        Name.id = "ProductName";
        let Remove = document.createElement("p");
        Remove.innerText = "X-Remove";
        Remove.id = "RemovERow";
        Remove.addEventListener("click", function () {
            DeleteRow(ele)
        })
        let price = document.createElement("p");
        price.innerText = "€" + " " + ele.price;
        let qty = document.createElement("input");
        qty.value = ele.qty;
        qty.setAttribute.id = "UpdateQty";
        qty.style.textAlign = "center"

        // console.log(qty.value)
        qty.addEventListener("change", function () {
            GetQuantityChangeS(ele, qty);
        })
        let subTotal = document.createElement("p");

        subTotal.innerText = "€" + " " + (ele.price) * (qty.value);
        let line = document.createElement("hr")
        DIV1.append(Image);
        DIV2.append(Name, Remove);  //ele.qty
        DIV3.append(DIV1, DIV2);
        DIV4.append(price, qty, subTotal)

        DIV.append(DIV3, DIV4);

        document.querySelector("#cart").append(DIV, line)
        console.log(DIV1, DIV2, DIV3, DIV4, DIV)
    })
}

function DeleteRow(ele) {
    let Name = ele.name;
    cartData = cartData.filter(function (element) {
        return element.name != Name;
    })
    localStorage.setItem("kids-NewArr", JSON.stringify(cartData));
    DisplayData(cartData)
}

function GetQuantityChangeS(ele, qty) {
    let x = qty.value;
    console.log(x)
    ele.qty = x;
    // console.log(x);
    localStorage.setItem("kids-NewArr", JSON.stringify(cartData));
    DisplayData(cartData)
    DisplayTotalPrice();
}
DisplayTotalPrice();
function DisplayTotalPrice() {
    let ResultantTotal = cartData.reduce(function (Sum, ele) {
        return Sum + ((ele.price) * (ele.qty))
    }, 0)
    // console.log(ResultantTotal)
    document.querySelector("#subTotal").innerText = ResultantTotal;
    document.querySelector("#grandTotal").innerText = ResultantTotal;

}
let form = document.querySelector("#form");
document.querySelector("#form").addEventListener("submit", PromoCode);
let count = 0;
function PromoCode(event) {

    event.preventDefault();
    let old = document.querySelector("#grandTotal").innerText;

    let code = (form.wcode.value);
    if (code == "Rocking$200" && count == 0) {
        old = (old * 80) / 100;
        alert("PromoCode Applied Successfully");
        count = 1;
        document.querySelector("#grandTotal").innerText = old;
    }
    else if (count === 1) {
        alert("PromoCode Already Applied");
    }
    else {
        alert("Invalid PromoCode");
    }
}

function MainPage() {
    window.location.href = "NEW ARRIVAL.html"
}


function Forward(loginDet) {
   
    if(loginDet.length===1){
        window.location.href = "Delivery.html"
    }else{
        alert("You Are Trying to Cheat.Please login first");
    }
    
}



