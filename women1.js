let clothData=[
    {
        img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/4d/P00680868_d2.jpg",
        name: "LOEWE",
        brand: "Caged platform sandals",
        price: 329,
        cat: "sandals",
        qty: 1
    },
    {
        img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/8c/P00696534_b1.jpg",
        name: "PETAR PETROV",
        brand: "Finley cashmere and silk",
        price: 749,
        cat: "sandals",
        qty: 1
    },
    {
        img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/b9/P00704501_b1.jpg",
        name: "STELLA MCCARTNEY",
        brand: "Ribbed-knit sweater",
        price: 585,
        cat: "sandals",
        qty: 1
    },
    {
        img:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/9e/P00700526_b1.jpg",
        name:"FRANKIE SHOP",
        brand:"Lui cotton shorts",
        price: 79,
        cat:"sandals",
        qty:1
    },
    {
        img:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/79/P00706358_b1.jpg",
        name:"STELLA MCCARTNEY",
        brand:"Floral silk maxi dress",
        price: 1005,
        cat:"sandals",
        qty:1
    },
    {
        img:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/fb/P00680995_d2.jpg",
        name:"LOEWE",
        brand:"Caged platform sandals",
        price: 329,
        cat:"sandals",
        qty:1
    },
    {
        img:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/3a/P00665706_b1.jpg",
        name:"THE ROW",
        brand:"Park Large nylon tote bag",
        price: 725,
        cat:"sandals",
        qty:1
    },


    {
        img:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/80/P00706359_b1.jpg",
        name:"STELLA MCCARTNEY",
        brand:"Floral silk minidress",
        price: 1005,
        cat:"sandals",
        qty:1
    },
    {
        img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/4d/P00680868_d2.jpg",
        name: "LOEWE",
        brand: "Caged platform sandals",
        price: 329,
        cat: "sandals",
        qty: 1
    },
    {
        img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/8c/P00696534_b1.jpg",
        name: "PETAR PETROV",
        brand: "Finley cashmere and silk",
        price: 749,
        cat: "sandals",
        qty: 1
    },
    {
        img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/b9/P00704501_b1.jpg",
        name: "STELLA MCCARTNEY",
        brand: "Ribbed-knit sweater",
        price: 585,
        cat: "sandals",
        qty: 1
    },
    {
        img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/70/P00700919_b1.jpg",
        name: "ETRO",
        brand: "Paisley jacquard shopper",
        price: 429,
        cat: "sandals",
        qty: 1
    },
    {
        img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/23/P00707419_d2.jpg",
        name: "STELLA MCCARTNEY",
        brand: "Falabella faux leather mules",
        price: 505,
        cat: "sandals",
        qty: 1
    },
    {
        img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/b4/P00704499_b1.jpg",
        name: "STELLA MCCARTNEY",
        brand: "Ribbed-knit midi skirt",
        price: 635,
        cat: "sandals",
        qty: 1
    },
    {
        img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/60/P00696533_b1.jpg",
        name: "PETAR PETROV",
        brand: "Flavia cashmere and silk midi dress",
        price: 755,
        cat: "sandals",
        qty: 1
    },
    {
        img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/2c/P00665728_b1.jpg",
        name: "THE ROW",
        brand: "Emy leather shoulder bag",
        price: 775,
        cat: "sandals",
        qty: 1
    },

]



let cladata = JSON.parse(localStorage.getItem("womens-new arrival")) || []
document.querySelector("#sort").addEventListener("change", function () {
    sortMe(clothData)
})
function sortMe(clothData) {
    let req = document.querySelector("#sort").value;
    if (req == "asc") {
        let asc = clothData.sort(function (a, b) {
            if (a.price > b.price) return 1
            if (a.price < b.price) return -1
            return 0
        })
        displayProducts(asc)
    }
    else if (req == "desc") {
        let desc = clothData.sort(function (a, b) {
            if (a.price > b.price) return -1
            if (a.price < b.price) return 1
            return 0
        })
        displayProducts(desc)
    }

}
displayProducts(clothData)
function displayProducts(clothData) {
    document.querySelector("#display").innerHTML = ""
    clothData.forEach(function (el) {
        console.log("x")
        let child_div = document.createElement("div")
        let holder = document.createElement("div")
        holder.setAttribute("class", "holder")
        let wish = document.createElement("button")
        let heart = document.createElement("i")
        heart.setAttribute("class", "fas fa-heart")
        wish.append(heart)
        wish.style.color = "grey"
        wish.setAttribute("class", "btn1")
        wish.addEventListener("click", function () {
            if (toggle(el, wish) == true) {
                alert("Item already extists in wishlist")
            }
            else {
                if (wish.style.color == "grey") {
                    wish.style.color = "red"
                }
                else {
                    wish.style.color = "grey"
                }
                cladata.push(el)
                alert("added")
                localStorage.setItem("women-new arrival", JSON.stringify(cladata))
            }
        })
        // console.log("Sanjay")
        holder.append(wish)
        let img = document.createElement("img")
        img.setAttribute("src", el.img)
        let brand = document.createElement("p")
        brand.innerText = el.brand;
        let name = document.createElement("p")
        name.innerText = el.name;
        let price = document.createElement("p")
        price.innerText = "€" + " " + el.price;
        child_div.append(holder, img, brand, name, price)
        document.querySelector("#display").append(child_div)
        // console.log(x)

    });
}
function toggle(el, wish) {
    let filtered = cladata.filter(function (elem) {
        return el.name == elem.name
    })
    if (filtered.length > 0) {
        return true
    }
    else {
        return false
    }
}
let sorting = document.querySelectorAll("#colour>input")
for (let i = 0; i < sorting.length; i++) {
    let c = sorting[i].value
    sorting[i].addEventListener("click", function () {
        colourSort(c)
    })
}
function colourSort(c) {
    console.log("hi")
    if (c === "All") {
        displayProducts(clothData)
    }
    else {
        let filtered = clothData.filter(function (el) {
            return el.color == c
        })
        if (filtered.length == 0) {
            alert("No products found")
        }
        else {
            displayProducts(filtered)
        }
    }
}
let sortingBrand = document.querySelectorAll("#designer>input")
for (let i = 0; i < sortingBrand.length; i++) {
    let b = sortingBrand[i].value
    console.log(b)
    sortingBrand[i].addEventListener("click", function () {
        brandSort(b)
    })
}
function brandSort(b) {
    if (b === "All") {
        displayProducts(clothData)
    }
    else {
        let brandFilter = clothData.filter(function (el) {
            return el.brand == b
        })
        if (brandFilter.length == 0) {
            alert("No products found")
        }
        else {
            displayProducts(brandFilter)
        }
    }
}
let sortingCat = document.querySelectorAll("#category>input")
for (let i = 0; i < sortingCat.length; i++) {
    let s = sortingCat[i].value
    sortingCat[i].addEventListener("click", function () {
        catSort(s)
    })
}
function catSort(s) {
    if (s === "All") {
        displayProducts(clothData)
    }
    else {
        let catFilter = clothData.filter(function (el) {
            return el.cat == s
        })
        if (catFilter.length == 0) {
            alert("No products found")
        }
        else {
            displayProducts(catFilter)
        }
    }
}