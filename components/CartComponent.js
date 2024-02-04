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

                <svg height="40px" width="40px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">

                <defs>
                </defs>
                <g style="stroke: red; stroke-width: 0; stroke-dasharray: red; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: red; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                    <path d="M 73.713 65.44 H 27.689 c -3.566 0 -6.377 -2.578 -6.686 -6.13 c -0.21 -2.426 0.807 -4.605 2.592 -5.939 L 16.381 21.07 c -0.199 -0.889 0.017 -1.819 0.586 -2.53 s 1.431 -1.124 2.341 -1.124 H 87 c 0.972 0 1.884 0.471 2.446 1.263 c 0.563 0.792 0.706 1.808 0.386 2.725 l -7.798 22.344 c -1.091 3.13 -3.798 5.429 -7.063 5.999 l -47.389 8.281 c -0.011 0.001 -0.021 0.003 -0.032 0.005 c -0.228 0.04 -0.623 0.126 -0.568 0.759 c 0.056 0.648 0.48 0.648 0.708 0.648 h 46.024 c 1.657 0 3 1.343 3 3 S 75.37 65.44 73.713 65.44 z M 23.053 23.416 l 6.301 28.211 l 44.583 -7.79 c 1.124 -0.197 2.057 -0.988 2.432 -2.065 l 6.406 -18.356 H 23.053 z" style="stroke: #5e1f13; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #5e1f13; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                    <circle cx="28.25" cy="75.8" r="6.5" style="stroke: red; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: red; fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
                    <circle cx="68.28999999999999" cy="75.8" r="6.5" style="stroke: red; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: red; fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
                    <path d="M 19.306 23.417 c -1.374 0 -2.613 -0.95 -2.925 -2.347 l -1.375 -6.155 c -0.554 -2.48 -2.716 -4.212 -5.258 -4.212 H 3 c -1.657 0 -3 -1.343 -3 -3 s 1.343 -3 3 -3 h 6.749 c 5.372 0 9.942 3.662 11.113 8.904 l 1.375 6.155 c 0.361 1.617 -0.657 3.221 -2.274 3.582 C 19.742 23.393 19.522 23.417 19.306 23.417 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: red; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                </g>
                </svg>

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

