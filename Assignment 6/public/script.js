// CART SYSTEM
let cart = []
const cartText = document.querySelector(".navcart p")

function updateCart(){
cartText.innerText = "Cart (" + cart.length + ")"
}

// CLICK PRODUCT → ADD TO CART
const productBoxes = document.querySelectorAll(".box")

productBoxes.forEach(box => {

box.addEventListener("click", () => {

const title = box.querySelector("h2").innerText

cart.push(title)

updateCart()

alert(title + " added to cart")

})

})


// SEARCH FUNCTION
const searchInput = document.querySelector(".searchinput")

searchInput.addEventListener("keyup", () => {

const filter = searchInput.value.toLowerCase()

productBoxes.forEach(box => {

const text = box.innerText.toLowerCase()

if(text.includes(filter)){
box.style.display = "block"
}
else{
box.style.display = "none"
}

})

})


// PRODUCT IMAGE POPUP
const images = document.querySelectorAll(".box1img1, .box1img2, .box1img3, .box1img4")

images.forEach(img => {

img.addEventListener("click",(e)=>{

e.stopPropagation()

const style = window.getComputedStyle(img)
const bg = style.backgroundImage

const popup = document.createElement("div")

popup.style.position = "fixed"
popup.style.top = "0"
popup.style.left = "0"
popup.style.width = "100%"
popup.style.height = "100%"
popup.style.background = "rgba(0,0,0,0.8)"
popup.style.display = "flex"
popup.style.alignItems = "center"
popup.style.justifyContent = "center"

const image = document.createElement("div")
image.style.width = "400px"
image.style.height = "400px"
image.style.backgroundImage = bg
image.style.backgroundSize = "cover"

popup.appendChild(image)

popup.addEventListener("click",()=>popup.remove())

document.body.appendChild(popup)

})

})