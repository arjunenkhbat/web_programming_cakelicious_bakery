
class TotalPrice extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML =
            `
            <style>
            .cart-calculator{
                display: flex;
                flex-direction: column;
                background-color: #fff;
                padding: 0.5rem 0rem;
                width: 100%;
                height: max-content;
                border-radius: 0.25rem;
                box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
                margin: 20px 0;
                padding:1rem;

            }

            .cart-calculator-container{
                display: grid;
                grid-template-columns: 60% 40%;
                justify-content: space-between;
                align-items: center;
                height: max-content;
                width: 100%;
            }
            .une{
                font-weight: 600;

            }
            hr {
                border: 0;
                height: 1px;
                background: #ddd; /* Adjust the color to your preference */
                margin: 10px 0;
            }

            .cart-addbtn{
                justify-content: center;
                border-radius: 0.25rem;
                border: none;
                background-color: #7CA27E;
                color: #fff;
                padding: 0.5rem 1.5rem;
                width: 90%;
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
            <p class="une grand-total"></p>
        </div>
        <div class="cart-calculator-container">
            <p class="tailbar">хүргэлтийн үнэ</p>
            <p class="une">5000₮</p>
        </div>
        <hr>
        <div class="cart-calculator-container">
            <p class="tailbar">нийт</p>
            <p class=" une grand-total_A"></p>
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
                this.shadowRoot.querySelector(".grand-total_A").innerHTML = "0₮"
                return;
            }
            let total = 0;
            for (let i = 0; i < productsList.length; i++) {
                total += parseInt(productsList[i].price) * parseInt(productsList[i].quantity);
            }
            this.shadowRoot.querySelector(".grand-total").innerHTML = total + "₮";
            this.shadowRoot.querySelector(".grand-total_A").innerHTML = total + 5000 + "₮"
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