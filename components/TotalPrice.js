
class TotalPrice extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML =
            `
            <style>
            .cart-calculator{
                background-color: #fff;
                padding: 0.5rem 2rem;
                width: 70%;
                height: 50%;
                border-radius: 0.25rem;
                box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
                margin: 20px 0

            }

            .cart-calculator-container{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 20px 0;
            }
            .une{
                font-weight: 600;
            }

            .cart-addbtn{
                border-radius: 0.25rem;
                border: none;
                background-color: #7CA27E;
                color: #fff;
                padding: 0.5rem 1.5rem;
                width: 100%;
                margin: 2rem 0 1rem 0;
                cursor: pointer;
                transition: all 150ms ease-in-out 0s;
            }
            .cart-addbtn:hover{

                background-color: var(--pink);
                border: 1px solid var(--pink);
                box-shadow: rgb(0 0 0 / 30%) 0px 4px 4px, rgb(231 238 236) 0px 0px 0px 3px;
            }

                        </style>
            
    <aside class="cart-calculator">
        <div class="cart-calculator-container">
            <p class="tailbar">нийт үнэ</p>
            <p class="une">80000</p>
        </div>
        <div class="cart-calculator-container">
            <p class="tailbar">хүргэлтийн үнэ</p>
            <p class="une">5000</p>
        </div>
    <hr>
        <div class="cart-calculator-container">
            <p class="tailbar">нийт</p>
            <p class="une">85000</p>
        </div>
    <button class="cart-addbtn">Худалдаж авах</button>
    </aside>
        `
    }

    connectedCallback() {
        this.listenToCustomEvent();
        this.listenToButtonEvent();
    }

    listenToCustomEvent() {
        addEventListener("priceChanged", () => {
            console.log("hi");
            let productsList = JSON.parse(localStorage.getItem("cart"));
            if (productsList == null) {
                this.shadowRoot.querySelector(".grand-total").innerHTML = "0₮";
                return;
            }
            let total = 0;
            for (let i = 0; i < productsList.length; i++) {
                total += parseInt(productsList[i].price) * parseInt(productsList[i].quantity);
            }
            this.shadowRoot.querySelector(".grand-total").innerHTML = total + "₮";
        })
    }

    listenToButtonEvent() {
        this.shadowRoot.querySelector(".cart-addbtn").addEventListener("click", () => {
            let productsList = JSON.parse(localStorage.getItem("cart"));
            if (productsList == null) {
                alert("Сагс хоосон байна!");
                return;
            }

            let totalQuantity = 0;
            productsList.forEach(element => {
                totalQuantity += element.quantity;
            });
            totalQuantity == 0 ? alert("Сагс хоосон байна!") : alert("Амжилттай");
        })
    }
}

window.customElements.define("total-price", TotalPrice)