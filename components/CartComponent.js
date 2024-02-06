class CartComponent extends HTMLElement {

    constructor() {
        super();
        this.productsList = [];
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                .cart-container {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    justify-content: center;
                    align-items: center;

                }
                p {
                    padding: 5%;
                }

                svg {
                    margin-right: 5%;
                }

            </style>
            <div class="cart-container">
                <i class="fa fa-shopping-cart"></i>

                <p class="cart-count">${this.productsList.length}</p>
                
            </div
            
        `
    }

    addToCart(product) {
        this.productsList.push(product);
        localStorage.setItem("cart", JSON.stringify(this.productsList));
        this.render();
    }

    readFromLocalStorage() {
        const _productsList = JSON.parse(localStorage.getItem("cart"));
        if (_productsList != null) {
            this.productsList = _productsList;
            this.render();
        }
    }

    connectedCallback() {

        this.readFromLocalStorage();

    }

}

customElements.define("cart-component", CartComponent);

