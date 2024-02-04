import Products from "./Products.js";

var usp = new URLSearchParams(window.location.search);
const uri = "./json/products.json";

if (!usp.has("category")) {
    const products = new Products(
        uri,
        "all"
    );
    products.download("product-container");
}

var products;

switch (usp.get("category")) {
    case "MilkyCream":
        products = new Products(
            uri,
            "MilkyCream"
        );
        products.download("product-container");
        document.getElementById("page-title").textContent = "Сүүн кремтэй бялуу";
        break;
    case "Maslo":
        products = new Products(
            uri,
            "Maslo"
        );
        products.download("product-container");
        document.getElementById("page-title").textContent = "Маслон крэмтэй бялуу";
        break;
    case "Mousse":
        products = new Products(
            uri,
            "Mousse"
        );
        products.download("product-container");
        document.getElementById("page-title").textContent = "Мусс бялуу";
        break;
    case "Seasonal":
        products = new Products(
            uri,
            "Seasonal"
        );
        products.download("product-container");
        document.getElementById("page-title").textContent = "Шинэ жилийн бялуу ";
        break;
    case "sale":
        products = new Products(
            uri,
            "sale"
        );
        products.download("product-container");
        document.getElementById("page-title").textContent = "Хямдралтай";
        break;
    case "all":
        products = new Products(
            uri,
            "all"
        );
        products.download("product-container");
        document.getElementById("page-title").textContent = "Бүгд";
        break;
}

const urlParams = new URLSearchParams();

window.onload = () => {
    document.getElementById("MilkyCream").addEventListener("click", () => {
        urlParams.set("category", "MilkyCream");
        window.location.href = "?" + urlParams.toString();
    });
    document.getElementById("Maslo").addEventListener("click", () => {
        urlParams.set("category", "Maslo");
        window.location.href = "?" + urlParams.toString();
    });
    document.getElementById("Mousse").addEventListener("click", () => {
        urlParams.set("category", "Mousse");
        window.location.href = "?" + urlParams.toString();
    });
    document.getElementById("Seasonal").addEventListener("click", () => {
        urlParams.set("category", "Seasonal");
        window.location.href = "?" + urlParams.toString();
    });
    document.getElementById("sale").addEventListener("click", () => {
        urlParams.set("category", "sale");
        window.location.href = "?" + urlParams.toString();
    });
    document.getElementById("all").addEventListener("click", () => {
        urlParams.set("category", "all");
        window.location.href = "?" + urlParams.toString();
    });
};
