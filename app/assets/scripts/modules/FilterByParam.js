import Products from "./Products.js";

//url-ийн parameter-ийг авах
var usp = new URLSearchParams(window.location.search);
//бүтээгдэхүүний json файлын uri-г тодорхойлох
const uri = "app/assets/scripts/modules/json/products.json";

// If the "category" parameter is not present in the URL
if (!usp.has("category")) {
    const products = new Products(
        uri,
        "all"
    );
    products.download("product-container");
}

var products;

//url доторх category элемент дээр switch statement ашиглан шилжүүлэх
switch (usp.get("category")) {
    case "MilkyCream":
        //milkycream category үүсгээд бүтээгдэхүүн татаж харуулах
        products = new Products(
            uri,
            "MilkyCream"
        );
        products.download("product-container");
        //хуудсын гарчгийг категорийн дагуу солих
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
//бүрэн ачааллаж дууссан үед
window.onload = () => {

    //milky  cream button дарагдсан үеийн event listener category-г milky cream болгоод 
    document.getElementById("MilkyCream").addEventListener("click", () => {

        // "category" параметрийг "MilkyCream" болгох
        urlParams.set("category", "MilkyCream");
        
        // Шинэчлэгдсэн URL руу шинэ асуулгын параметрүүдээр дахин чиглүүлэх
        window.location.href = "?" + urlParams.toString();
    });

    // "Maslo" элементийн товчлуурын дараах товчлуурын дараах event listener
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
