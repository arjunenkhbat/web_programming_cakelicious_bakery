import { fetchData, filterProducts } from '../js/getCakeData';

document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    if (category) {
        const productsData = await fetchData();
        const filteredProducts = filterProducts(category, productsData.cakes);

        renderProducts(filteredProducts);
    }
});

const renderProducts = (products) => {
    const productsContainer = document.getElementById('products-container');

    if (products.length === 0) {
        productsContainer.innerHTML = '<p>No products found.</p>';
        return;
    }

    const productHTML = products.map(product => `
        <div class="product-card">
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Calories: ${product.calories}</p>
            <img src="${product.img}" alt="${product.name}">
        </div>
    `).join('');

    productsContainer.innerHTML = productHTML;
};
