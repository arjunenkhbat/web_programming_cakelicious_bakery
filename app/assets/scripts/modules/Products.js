import CardComponent from "./CardComponent.js";
window.customElements.define("card-component", CardComponent);
// "card-component" гэсэн custom элементийг CardComponent class-аар тодорхойлно

class ProductItem {
    constructor(item) {
        this.id = item.id;
        this.name = item.name;
        this.category = item.category;
        this.calories = item.calories;
        this.description = item.description;
        this.price = item.price;
        this.image = item.image;
    }

    render(mode) {
        let result;
        switch (mode) {
            case "menu":
                result = `
                    <card-component id="${this.id}" 
                    mode="${mode}"
                    imgSrc="${this.image}"
                    imgAlt="${this.name}"
                    name="${this.name}"
                    </card-component>
                `;
                break;
            case "delivery-item":
                result = `
                    <card-component id="${this.id}" 
                    mode="${mode}"
                    imgSrc="${this.image}"
                    imgAlt="${this.name}"
                    name="${this.name}"
                    
                        <p slot="card-calories" class="calories">${this.calories}</p> 
                        <hr slot="card-line">  
                        <p slot="card-price" class="price">${this.price}</p>  
                        <p slot="card-button" class="order-button">Сагсанд хийх</p>                   
                    </card-component>
                `;
                break;
            default:
                break;
        }
        return result;
     
    }
}

export default class Products {
    constructor(productsUrl, category) {
        this._productsList = [];
        this._productsUrl = productsUrl;
        this._category = category;
    }

    download(targetElement) {
        fetch(this._productsUrl)
            .then((products) => {
                products.json().then((jsob) => {
                    const filteredProducts = jsob.filter(
                        (productItem) => {
                            if (this._category == "all") return productItem;
                            else if (
                                productItem.category.includes(this._category)
                            )
                                return productItem;
                        }
                    );

                    document.getElementById(targetElement).innerHTML =
                        filteredProducts
                            .map((productItem) => {
                                const _productItem = new ProductItem(
                                    productItem
                                );
                                this._productsList.push(_productItem);

                                return _productItem.render(document.URL.includes("menu.html") ? "menu-item": "delivery-item");
                            })
                            .reduce((prev, curr) => prev + curr + "");
                });
            })
            .catch((error) => console.log(error));
    }
}
