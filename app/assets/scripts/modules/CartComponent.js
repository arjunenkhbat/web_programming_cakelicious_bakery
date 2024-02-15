class CartComponent extends HTMLElement {

    constructor() {
        super();
        //Бараануудыг хадгалах хувьсагчийг хоосон массиваар эхлүүлнэ.
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
    //Барааг сагсанд нэмэх функц
    addToCart(product) {

        //барааг products list massive-руу оруулах
        this.productsList.push(product);
        
        //үүссэн product list-ийг json болгон local  storage-д хадгалах
        localStorage.setItem("cart", JSON.stringify(this.productsList));
        this.render();
    }
    // Method to read the productsList from local storage and update the cart
    readFromLocalStorage() {
        //cart гэсэн нэртэй local storage-д байгаа product list-ийг json болгож унших
        const _productsList = JSON.parse(localStorage.getItem("cart"));
        //хоосон эсэхийг шалгана.
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

