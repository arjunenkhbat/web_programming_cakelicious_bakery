


// class DeliveryProductCard extends HTMLElement {
// class DeliveryProductCard extends HTMLElement {

//     constructor() {
//         super();
//         this.attachShadow({ mode: "open" });
//         this.shadowRoot.innerHTML = `
//             <link rel="stylesheet" href="./styles/delivery.css"/>
//             <article id="delivery-item" class="delivery-item">
//                 <div id="delivery-item-section">
//                   <img class="delivery-image" height="200">
//                   <h2 class="delivery-title"></h2>
//                   <h4 class="delivery-calories"></h4>
//                   <hr>
//                   <p class="price"></p>
//                 </div>
//                   <a role="button" class="order-button" id="order-button">Сагсанд хийх</a>
//             </article>
//         `
//     }

//     static get observedAttributes() {
//         return ["id", "imgSrc", "imgAlt", "productName", "productCalories", "productDescription"];
//     }

//     connectedCallback() {
//         this.shadowRoot.getElementById("delivery-item-section").addEventListener("click", () => {
//             this.insertAdjacentHTML("afterend", `
//             <link id="style" rel="stylesheet" href="./styles/deliveryItemStyle.css">
//             <div class="modal active" id="modal">
//                 <div class="modal-body">
//                     <button data-close-button class="close-button" id="close-button">&times;</button>
//                     <img src="${this.getAttribute("imgSrc")}" alt="${this.getAttribute("imgAlt")}"class="product-image" height="200">
//                     <h2 class="product-title">${this.getAttribute("productName")}</h2>
//                     <h4 class="product-calories">${this.getAttribute("productCalories")}</h4> 
//                     <p class="product-description">${this.getAttribute("productDescription")}</p>
//                 </div>
//             </div>
//             <div class="active" id="overlay"></div>
//             `
//             );
//         }
//         )
//         this.shadowRoot.getElementById("order-button").addEventListener("click", () => {
//             console.log("Added to cart");
//         })
      
//     }
//     }

//     attributeChangedCallback(name, oldValue, newValue) {
//         this.shadowRoot.querySelector(".delivery-item #delivery-item-section .delivery-image").id = this.getAttribute("id");
//         this.shadowRoot.querySelector(".delivery-item #delivery-item-section .delivery-image").src = this.getAttribute("imgSrc");
//         this.shadowRoot.querySelector(".delivery-item #delivery-item-section .delivery-image").alt = this.getAttribute("imgAlt");
//         this.shadowRoot.querySelector(".delivery-item #delivery-item-section .delivery-title").innerHTML = this.getAttribute("productName");
//         this.shadowRoot.querySelector(".delivery-item #delivery-item-section .delivery-calories").innerHTML = this.getAttribute("productCalories");  
//         this.shadowRoot.querySelector(".delivery-item #delivery-item-section .price").innerHTML = this.getAttribute("productPrice");
//     }   
// }

// export default DeliveryProductCard
