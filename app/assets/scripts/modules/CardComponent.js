class CardComponent extends HTMLElement {

    constructor() {
        super();
        // Тус элемэнт нь shadow DOM-тэй холбох
        this.attachShadow({ mode: "open" });
        // HTML upadate хийх
        this.render();
    }
    // Холбогдсон байгаа үед update хийх
    connectedCallback() {
        this.setUp();
    }
    // Сонгосон аттрибутуудыг мөн хянана
    static get observedAttributes() {
        return ["id", "imgSrc", "imgAlt", "name", "calories", "description", "price", "mode"];
    }
    // Аттрибутуудыг өөрчилж байгаа үед холбоотой элемэнтийг шинэчилж өгөх
    attributeChangedCallback(name, oldValue, newValue) {
        this.shadowRoot.querySelector("article div img").id = this.getAttribute("id");
        this.shadowRoot.querySelector("article div img").src = this.getAttribute("imgSrc");
        this.shadowRoot.querySelector("article div img").alt = this.getAttribute("imgAlt");
        this.shadowRoot.querySelector("article div img").height = this.getAttribute("mode") == "menu" ? 80 : 200;
        this.shadowRoot.querySelector(".card-title").innerHTML = this.getAttribute("name");
    }

     // Set up the element based on its mode
    setUp() {
        if (this.getAttribute("mode") != "menu") {

         
            if (this.getAttribute("mode") == "delivery-item") {
                this.setDeliveryCard();
            }
        }
    }

   

    setDeliveryCard() {

        //order-button элементийг shadow dom-оос авах
        var addToCartButton = this.shadowRoot.getElementById("order-button");

        addToCartButton.addEventListener("click", () => {
        // Create a product object with information from the card
            let product = {
                name: this.getAttribute("name"),
                price: this.querySelector(".price").innerHTML,
                image: this.getAttribute("imgSrc").src,
             
                quantity: 1
            }
            // Get the cart component from the document
            const cart = document.querySelector("cart-component");

            // Check if the product is already in the cart
            let isFoundInArray = false;
            for (let i = 0; i < cart.productsList.length; i++) {
                if (cart.productsList[i].name == product.name) {
                    isFoundInArray = true;
                    break;
                }
            }
            // Add the product to the cart if not found, otherwise show an alert
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

    }

    .card-item:hover {
        transition-duration: 200ms;
        transform: scale(1.1);
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
                                <img class="card-image" src="/app/assets/images/Mousse.png" alt="byaluuu">
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