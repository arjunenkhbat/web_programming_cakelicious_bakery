class CartComponent extends HTMLElement {

    constructor() {                 //Байгуулагч 

        super();                    // Эх классын байгуулагч 
        this.productsList = [];      // сагсанд нэмсэн бүтээгдэхүүнүүдийг хадгалах масссив
        this.render();                 //Анхны интерфейсыг байгуулах үеп дуудна
    }

    render() {                          // сагсны icon ийг энд render-лэнэ
        // Set the innerHTML property with the component's HTML template
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
    // сагсанд бүтээглэхүүн нэмэх функц
    addToCart(product) {
        // product-ынг productsList массив руу нэмнэ үү
        this.productsList.push(product);
        // Шинэчлэгдсэн product-ын жагсаалтыг localStorage-ийн "сагс" түлхүүрт хадгална
        localStorage.setItem("cart", JSON.stringify(this.productsList));
        // Render хийнэ
        this.render();
    }
    // LocalStorage-аас product-ын жагсаалтыг авах арга
    readFromLocalStorage() {
        // Локал сангаас "cart" гэсэн нэртэй объект унших
        const _productsList = JSON.parse(localStorage.getItem("cart"));
        // Үр дүнг шалгах
        if (_productsList != null) {
            // Бараа нийлүүлсэн массиваа өөрчлөх
            this.productsList = _productsList;
            // Интерфэйсээ шинэчлэх
            this.render();
        }
    }
    // Элемент нэмэгдсэн бол ажиллах функц
    connectedCallback() {
        // Локал сангаас унших функц дуудах
        this.readFromLocalStorage();

    }

}
// "cart-component" нэртэй хэрэглэгчийн элементийг тодорхойлох
customElements.define("cart-component", CartComponent);

