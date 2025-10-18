function getElement(id) {
    const element = document.getElementById(id);
    return element;
}


// document.getElementById("card-btn-1").addEventListener("click", function () {
//     console.log("object")
//     const title = getElement("card-title-1").innerText;
//     const price = getElement("card-price-1").innerText;

//     console.log(price, title)

//     const totalPrice = getElement("total-price").innerText;
//     console.log(totalPrice)

//     const curentPrice = Number(price) + Number(totalPrice);
//         console.log(curentPrice)

//     getElement("total-price").innerText = curentPrice.toFixed(2);

//     const cardContainer = getElement("cart-container")

//     const newCart = document.createElement("div")
    // newCart.innerHTML = `
    //                     <div class=" bg-gray-200 rounded-xl flex justify-between p-4">
    //                   <img src="assets/kitchen-1.png" alt="" class="w-10">
    //                   <div>
    //                     <h1 class="font-bold">${title}</h1>
    //                     <h1 class="">${price}</h1>
    //                   </div>
    //                 </div>

    // `;

//     cardContainer.append(newCart)
// })

const cartButton = document.getElementsByClassName("cart-btn")

getElement("product-box").addEventListener("click", function (e) {
  const cartButtons = e.target.closest(".cart-btn");
  if (cartButtons) {
            const cardImage = cartButtons.parentNode.parentNode.parentNode.children[0].children[0].src;
        // console.log(cardImage)
        
        const cardTitle = cartButtons.parentNode.parentNode.children[1].innerText;
        // console.log(cardTitle)
        
        const cardPrice = cartButtons.parentNode.parentNode.children[2].innerText;
        // console.log(cardPrice)
        
        const totalPrice = getElement("total-price").innerText

        const curentPrice = Number(cardPrice) + Number(totalPrice)

        getElement("total-price").innerText = curentPrice;


        const cartContainer = document.getElementById("cart-container")

        const newCart = document.createElement("div")
        newCart.innerHTML = `
        <div class=" mt-3 bg-gray-200 rounded-xl flex justify-between p-4">
                      <img src="${cardImage}" alt="" class="w-10">
                      <div>
                        <h1 class="font-bold">${cardTitle}</h1>
                        <h1 class="">${cardPrice}</h1>
                      </div>
                    </div>
        `;

        cartContainer.append(newCart);

        const quantity = getElement("total-quantity").innerText

        const currentQuantity = Number(quantity) + 1;

        getElement("total-quantity").innerText = currentQuantity;
        
      alert("add your product")


  }
});



// const cartButton = document.getElementsByClassName("cart-btn")
// console.log(cartButton)

// for (let cartButtons of cartButton) {
//     cartButtons.addEventListener("click", function () {
        // console.log(cartButtons)

        // const cardImage = cartButtons.parentNode.parentNode.parentNode.children[0].children[0].src;
        // // console.log(cardImage)
        
        // const cardTitle = cartButtons.parentNode.parentNode.children[1].innerText;
        // // console.log(cardTitle)
        
        // const cardPrice = cartButtons.parentNode.parentNode.children[2].innerText;
        // // console.log(cardPrice)
        
        // const totalPrice = getElement("total-price").innerText

        // const curentPrice = Number(cardPrice) + Number(totalPrice)

        // getElement("total-price").innerText = curentPrice;


        // const cartContainer = document.getElementById("cart-container")

        // const newCart = document.createElement("div")
        // newCart.innerHTML = `
        // <div class=" mt-3 bg-gray-200 rounded-xl flex justify-between p-4">
        //               <img src="${cardImage}" alt="" class="w-10">
        //               <div>
        //                 <h1 class="font-bold">${cardTitle}</h1>
        //                 <h1 class="">${cardPrice}</h1>
        //               </div>
        //             </div>
        // `;

        // cartContainer.append(newCart);

        // const quantity = getElement("total-quantity").innerText

        // const currentQuantity = Number(quantity) + 1;

        // getElement("total-quantity").innerText = currentQuantity;
        



//     })
// }



document.getElementById("btn-clear").addEventListener("click", function () {
    const cartContainer = getElement("cart-container")

    cartContainer.innerHTML = "";
    getElement("total-quantity").innerText = 0;
    getElement("total-price").innerText = 0;
    alert("Your product is remove")
})