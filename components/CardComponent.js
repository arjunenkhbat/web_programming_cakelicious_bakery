// const template = document.createElement("template");
// template.innerHTML = 

class CardComponent extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
    }

    connectedCallback() {
        this.setUp();
    }

    static get observedAttributes() {
        return ["id", "imgSrc", "theme", "imgAlt", "name", "calories", "description", "price", "mode"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.shadowRoot.querySelector("article div img").id = this.getAttribute("id");
        this.shadowRoot.querySelector("article div img").src = this.getAttribute("imgSrc");
        this.shadowRoot.querySelector("article div img").alt = this.getAttribute("imgAlt");
        this.shadowRoot.querySelector("article div img").height = this.getAttribute("mode") == "menu" ? 80 : 200;
        this.shadowRoot.querySelector(".card-title").innerHTML = this.getAttribute("name");
        // this.setTheme(this.getAttribute("theme"));
    }

    setUp() {
        if (this.getAttribute("mode") != "menu") {

            this.shadowRoot.getElementById("item-section").addEventListener("click", () => {
                this.showPopup();
            });

            if (this.getAttribute("mode") == "delivery-item") {
                this.setDeliveryCard();
            }
        }
    }

    showPopup() {
        document.getElementById("product-container").insertAdjacentHTML("afterend", `
        <link id="style" rel="stylesheet" href="./styles/deliveryItemStyle.css">
        <div class="modal active" id="modal">
            <div class="modal-body">
                <button data-close-button class="close-button" id="close-button">&times;</button>
                <img src="${this.getAttribute("imgSrc")}" alt="${this.getAttribute("imgAlt")}"class="product-image" height="200">
                <h2 class="product-title">${this.getAttribute("name")}</h2>
                <h4 class="product-calories">${this.getAttribute("calories")}</h4> 
                <p class="product-description">${this.getAttribute("description")}</p>
            </div>
        </div>
        <div class="active" id="overlay"></div>
        `
        );
        const closeModalButton = document.getElementById("close-button")
        closeModalButton.addEventListener("click", () => {
            document.getElementById("style").remove();
            document.getElementById("modal").remove();
            document.getElementById("overlay").remove();
        });
    }

    setDeliveryCard() {

        var addToCartButton = this.shadowRoot.getElementById("order-button");

        addToCartButton.addEventListener("click", () => {

            let product = {
                name: this.getAttribute("name"),
                price: this.querySelector(".price").innerHTML,
                quantity: 1
            }

            const cart = document.querySelector("cart-component");

            let isFoundInArray = false;
            for (let i = 0; i < cart.productsList.length; i++) {
                if (cart.productsList[i].name == product.name) {
                    isFoundInArray = true;
                    break;
                }
            }

            !isFoundInArray ? cart.addToCart(product) : window.alert("Бараа сагсанд орсон байна. Тоо ширхэгийг тохируулах бол Сагс цэс рүү орно уу.");

        })
    }

    render() {
        this.shadowRoot.innerHTML =
            `
                        <style>
    .card-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        color: black;
        border-radius: 25px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        padding: 2%;
        cursor: pointer;
        flex-wrap: nowrap;
        min-width: auto;
        // transition-duration: 200ms;
        // background-color: white;
    }

    .card-item:hover {
        transition-duration: 200ms;
        transform: scale(1.1);
    }

    .card-image {
        height: 200px; /* Set a fixed height for the images */
        width: 100%; /* Ensure images resize proportionally */
        object-fit: cover; /* Maintain aspect ratio while covering the specified height */
        border-radius: 15px; /* Optional: Add border-radius to the image */
    }
   #Maslo.card-image{
        
        height: 90%;
        width: 100%;
        object-fit: cover;
        border-radius: 15px;
    }
    #Seasonal.card-image{
        padding-top: 1rem;
        padding-bottom: 1rem;
        height: 90%;
        width: 100%;
        object-fit: cover;
        border-radius: 15px;
    }

    hr {
        color: var(--text-color);
    }

    .cart-title {
        font-size: 10em;
        text-size-adjust: auto;
    }

    .card-title {
        font-size: var(--desktop-text-small);
    }

    .order-button {
        background-color: var(--background-color);
        color: black;
    }
</style>
                        <article class="card-item">
                            <div id="item-section">
                                <img class="card-image">
                                <h2 class="card-title"></h2>
                                <slot name="card-calories"></slot>
                                <slot name="card-line"></slot>
                                <slot name="card-price"></slot>
                            </div>
                            <slot name="card-button" role="button" id="order-button"></slot>
                        </article>
            `;
    }
}

export default CardComponent;
