
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
                

            }

            .cart-calculator-container{
                display: flex;
                flex-direction:row;
                justify-content: space-between;
                align-items: center;
                height: max-content;
                width: 100%;
                margin: 0 10px ;
                padding:0 15px ;
                
               
            }
            .une{
                font-weight: 600;
                padding: 0 2rem;
                margin: 0.5rem;

            }
            hr {
                border: 0;
                height: 2px;
                background: #ddd; /* Adjust the color to your preference */
                margin: 0px 0;
                
            }

            .cart-addbtn{
                align-items: center;
                border-radius: 0.25rem;
                border: none;
                background-color: #7CA27E;
                color: #fff;
                padding: 1rem 0;
                width: 90%;
                margin: 10px auto;
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
                    <p class="tailbar">Нийт үнэ :</p>
                    <p class="une grand-total">0₮</p>
                </div>
                <div class="cart-calculator-container">
                    <p class="tailbar">Хүргэлтийн үнэ :</p>
                    <p class="une delivery">0₮</p>
                </div>
                <hr>
                <div class="cart-calculator-container">
                    <p class="tailbar">Нийт төлбөр :</p>
                    <p class="une grand-total_A">0₮</p>
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
            console.log("kkkkk");
            let productsList = JSON.parse(localStorage.getItem("cart"));
            if (productsList == null) {
                this.shadowRoot.querySelector(".grand-total").innerHTML = "0₮";
                this.shadowRoot.querySelector('.delivery').innerHTML = "0₮"
                this.shadowRoot.querySelector(".grand-total_A").innerHTML = "0₮"
                return;
            }
            let total = 0;
            for (let i = 0; i < productsList.length; i++) {
                total += parseInt(productsList[i].price) * parseInt(productsList[i].quantity);
            }
            this.shadowRoot.querySelector(".grand-total").innerHTML = total + "₮";
            this.shadowRoot.querySelector(".delivery").innerHTML = "5000₮";
            this.shadowRoot.querySelector(".grand-total_A").innerHTML = !total ? "0₮" : (total + 5000) + "₮";

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