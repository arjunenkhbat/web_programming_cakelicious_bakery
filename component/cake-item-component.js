class CakeItemComponent extends HTMLElement {
    constructor() {
        super();
        this.cakes = [];
    }

    render(cake) {
        return `
            <div class="cake-card2">
                <h4 class="cake-card2-title">${cake.name}</h4>
                <div class="card2-item-star-kk">
                    ${'<i class="fa-solid fa-star"></i>'.repeat(5)}
                </div>
                <p class="cake-card2-calorie">${cake.calories}</p>
                <br>
                <img src="${cake.img}" alt="бялуу">
                <button class="cake2-btn-eat" data-id="${cake.id}">идье +</button>
            </div>`;
    }

    async fetchData() {
        this.cakes = [
            // ... (your cake objects)
            // Cake objects go here
            // ... (your cake objects)
            {
                "id": 1,
                "category": "MilkyCream",
                "name": "FRESH DELICIOUS CAKE",
                "calories": 500,
                "img": "../images/cake4.png",
                "rt": 5.0
            },
            {
                "id": 2,
                "category": "Maslo",
                "name": "FRESH DELICIOUS CAKE",
                "calories": 500,
                "img": "../images/cake7.png",
                "rt": 5.0
            },
            {
                "id": 3,
                "category": "Mousse",
                "name": "FRESH DELICIOUS CAKE",
                "calories": 500,
                "img": "../images/cake8.png",
                "rt": 5.0
            },
            {
                "id": 4,
                "category": "MilkyCream",
                "name": "FRESH DELICIOUS CAKE",
                "calories": 500,
                "img": "../images/cake4.png",
                "rt": 5.0
            },
            {
                "id": 5,
                "category": "NewYear",
                "name": "FRESH DELICIOUS CAKE",
                "calories": 500,
                "img": "../images/cake-cake1.png",
                "rt": 5.0
            },
            {
                "id": 6,
                "category": "Mousse",
                "name": "FRESH DELICIOUS CAKE",
                "calories": 500,
                "img": "../images/cake-cake1.png",
                "rt": 5.0
            },
            {
                "id": 7,
                "category": "NewYear",
                "name": "FRESH DELICIOUS CAKE",
                "calories": 500,
                "img": "../images/cake-cake1.png",
                "rt": 5.0
            },
            {
                "id": 8,
                "category": "MilkyCream",
                "name": "FRESH DELICIOUS CAKE",
                "calories": 500,
                "img": "../images/cake-cake1.png",
                "rt": 5.0
            },
            {
                "id": 9,
                "category": "Maslo",
                "name": "FRESH DELICIOUS CAKE",
                "calories": 500,
                "img": "../photos/cake1.jpg",
                "rt": 5.0
            },
            {
                "id": 10,
                "category": "Mousse",
                "name": "FRESH DELICIOUS CAKE",
                "calories": 500,
                "img": "../photos/cake1.jpg",
                "rt": 5.0
            }
        ];
    }

    async connectedCallback() {
        await this.fetchData();
        let data = '<div class="cake-card2">';
        this.cakes.forEach(cake => {
            data += this.render(cake);
        });
        data += '</div>';
        this.innerHTML = data;

        // Check if cake-card2 element exists in the document
        const cakecard2 = document.querySelector('.cake-card2');

        if (cakecard2) {
            cakecard2.innerHTML = data;
        } else {
            console.error("cake-card2 element not found in the document!");
        }

        // Attach event listener to all 'идье +' buttons
        const eatButtons = this.querySelectorAll('.cake2-btn-eat');
        eatButtons.forEach(button => {
            button.addEventListener('click', () => this.cartCounter(button.getAttribute('data-id')));
        });
    }

    cartCounter(cakeId) {
        // Implementation of CartCounter function
        // You can use cakeId to identify the clicked cake
        console.log(`Add to cart: Cake with ID ${cakeId}`);
    }
}

window.customElements.define('cake-item-component', CakeItemComponent);


