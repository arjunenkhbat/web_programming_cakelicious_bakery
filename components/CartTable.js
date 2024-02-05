import "./TotalPrice.js"


const priceChangeEvent = new CustomEvent("priceChanged", {
    details: Date.now()
})

class CartTable extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
        
        
          
                <div class="cart-item-container">

                </div>
            </table>
        `
    }

    connectedCallback() {
        this.readFromLocalStorage();
    }

    readFromLocalStorage() {
        const productsList = JSON.parse(localStorage.getItem("cart"));
        if (productsList == null) {
            return;
        }

        this.shadowRoot.querySelector(".cart-item-container").innerHTML = ``;
        for (let i = 0; i < productsList.length; i++) {

            this.shadowRoot.querySelector(".cart-item-container").innerHTML += `
                <style>
                    .cart-item{
                        background-color: #fff;
                        display: grid;
                        grid-template-columns: 18% 30% 13% auto 15% auto;
                        align-items: center;
                        padding: 0 2rem 0 0;
                        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
                        border-radius: 0.25rem;
                        margin: 1rem 0;
                    }

                    .cart-item-img{
                        width: 10rem;
                        height: 9rem;
                    }

                    .cart-item-name{
                        font-size: 1.25rem;
                        width: 100%;
                        padding-bottom: 1rem;
                        font-weight: 510;
                    }

                    .checked {
                        color: orange;
                    }

                    .cart-item-button-container{
                        display: flex;
                        gap: 0;
                        width: max-content;
                    }

                    .cart-btn-k{
                        width: 2rem;
                        border-radius: 0.25rem 0 0 0.25rem;
                        border: none;
                        background-color: #7CA27E;
                        color: #fff;
                        padding: 0.5rem 0.5rem;
                        margin: 0;

                        cursor: pointer;
                        transition: all 150ms ease-in-out 0s;
                    }


                    .cart-btn-kk{
                        width: 2rem;
                        border-radius: 0rem;
                        border: none;
                        background-color: #7CA27E;
                        color: #fff;
                        padding: 0.5rem 0.5rem;
                        cursor: pointer;
                        transition: all 160ms ease-in-out 1ms;
                    }

                    .cart-btn-kkk{

                        width: 2rem;
                        border-radius: 0 0.25rem 0.25rem 0;
                        border: none;
                        background-color: #7CA27E;
                        color: #fff;
                        padding: 0.5rem 0.5rem;
                        cursor: pointer;
                        transition: all 150ms ease-in-out 0s;
                    }

                    .cart-item-perprice,
                    .cart-item-totalprice{
                         font-size: 1.25rem;
                    }


                    .material-icons{
                        border: none;
                        background-color: #fff;
                        cursor: pointer;
                        transition: all 150ms ease-in-out 0s;
                    }
                    .material-icons:hover{
                         box-shadow: rgb(0 0 0 / 30%) 0px 4px 4px, rgb(231 238 236) 0px 0px 0px 3px;
                    }

                    </style>

                    <div class="cart-item">
                        <img class="cart-item-img" src="../images/cake1.png" alt="byluunii zurag1" >

                    <div >
                        <p class="cart-item-name">${productsList[i].name}</p>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        <p>calor</p>
                    </div>
                    <p class="cart-item-perprice">${productsList[i].price}</p>
                    <div class="cart-item-button-container">

                        <button class="cart-btn-k">-</button>
                        <button class="cart-btn-kk">${productsList[i].quantity}</button>
                        <button class="cart-btn-kkk">+</button>
                    </div>
                    <p class="cart-item-totalprice">${parseInt(productsList[i].price) * parseInt(productsList[i].quantity)}₮</p>
                    <i class="material-icons remove"  style="font-size:36px; color: var(--green);">&times;</i>
                    </div>
            
                   
            `
        }
        this.addQuantityButtonListeners();
        this.addRemoveButtonListeners();
        dispatchEvent(priceChangeEvent);
    }

    addQuantityButtonListeners() {
        let decButtons = this.shadowRoot.querySelectorAll(".cart-btn-k");
        for (let i = 0; i < decButtons.length; i++) {
            decButtons[i].addEventListener("click", (event) => {

                //updating HTML
                let clickedButton = event.target;
                let parentRow = clickedButton.parentElement.parentElement;
                let productName = parentRow.querySelector(".cart-item-name").innerHTML;
                let productQuantity = parentRow.querySelector(".cart-btn-kk").innerHTML;
                productQuantity = parseInt(productQuantity);
                parentRow.querySelector(".cart-btn-kk").innerHTML = productQuantity == 0 ? 0 : productQuantity - 1;

                this.updateLocalStorage(productName, productQuantity, "cart-btn-k");
                this.updateRowTotal(parentRow);
                dispatchEvent(priceChangeEvent);
            })

        }
        let incButtons = this.shadowRoot.querySelectorAll(".cart-btn-kkk")
        for (let i = 0; i < incButtons.length; i++) {
            incButtons[i].addEventListener("click", (event) => {

                // updating HTML
                let clickedButton = event.target;
                let parentRow = clickedButton.parentElement.parentElement;
                let productName = parentRow.querySelector(".cart-item-name").innerHTML;
                let productQuantity = parentRow.querySelector(".cart-btn-kk").innerHTML;
                productQuantity = parseInt(productQuantity);
                parentRow.querySelector(".cart-btn-kk").innerHTML = productQuantity + 1;

                this.updateLocalStorage(productName, productQuantity, "cart-btn-kkk");
                this.updateRowTotal(parentRow);
                dispatchEvent(priceChangeEvent);
            })
        }

    }

    updateRowTotal(parentRow) {
        let productPrice = parseInt(parentRow.querySelector(".cart-item-perprice").innerHTML);
        let productQuantity = parseInt(parentRow.querySelector(".cart-btn-kk").innerHTML);
        parentRow.querySelector(".cart-item-totalprice").innerHTML = productPrice * productQuantity + "₮";
    }

    addRemoveButtonListeners() {
        let removeButtons = this.shadowRoot.querySelectorAll(".remove");
        for (let i = 0; i < removeButtons.length; i++) {
            removeButtons[i].addEventListener("click", (event) => {
                let clickedButton = event.target;
                let parentRow = clickedButton.parentElement;
                let productName = parentRow.querySelector(".cart-item-name").innerHTML;
                parentRow.remove();
                let productsList = JSON.parse(localStorage.getItem("cart"));
                let position;
                for (let j = 0; j < productsList.length; j++) {
                    if (productsList[j].name == productName) {
                        position = j; // Fix: Use j instead of i
                        break;
                    }
                }
                productsList.splice(position, 1);
                console.log(productsList);
                localStorage.setItem("cart", JSON.stringify(productsList));
                if (productsList.length == 0) {
                    localStorage.removeItem("cart");
                }
                let cart = document.querySelector("cart-component");
                cart.readFromLocalStorage();
                this.readFromLocalStorage();
                dispatchEvent(priceChangeEvent);
            });
        }
    }


    updateLocalStorage(productName, productQuantity, operation) {
        let productsList = JSON.parse(localStorage.getItem("cart"));
        for (let j = 0; j < productsList.length; j++) {
            if (productsList[j].name == productName) {
                switch (operation) {
                    case "cart-btn-k":
                        productsList[j].quantity = productQuantity == 0 ? 0 : productQuantity - 1;
                        break;
                    case "cart-btn-kkk":
                        productsList[j].quantity = productQuantity + 1;
                        break;
                    default:
                        break;
                }

            }
        }
        localStorage.setItem("cart", JSON.stringify(productsList));
    }

}

window.customElements.define("cart-table", CartTable);
// <tr>
//     <td>
//         <button class="remove">&times;</button>
//     </td>
//     <td class="name">${productsList[i].name}</td>
//     <td>
//         <button class="decrement">-</button>
//             <span class="quantity">${productsList[i].quantity}</span>
//         <button class="cart-btn-kkk">+</button>
//     </td>
//     <td class="price">${productsList[i].price}</td>
//     <td class="total">${parseInt(productsList[i].price) * parseInt(productsList[i].quantity)}₮</td>
// </tr>