//------------ cake heseg deeer baisan js code    renderleed bga ym shig baisan-----------------------
    class Product {
        constructor(product) {
        //prodcuct buyu kinogoo todrhoiloh
        this.id = product.id;
    this.category = product.category;
    this.name = product.name;
    this.img = product.img;
    this.imdb = product.imdb;
    this.rtr = product.rtr;
                }
    //kinonuudaa renderleh
    Render() {
                    return `
    <article>
        <a href="movie.html?id=${this.id}" class="movie_poster">
            <img src="${this.img}" alt="${this.name} poster">${this.name}
        </a>
        <div class="rating">
            <a href="https://www.imdb.com/title/${this.id}/">
                <img src="Images/imdb_icon.png" alt="imdb rating">${this.imdb}
            </a>
            <a href="https://www.rottentomatoes.com/m/${this.name.toLowerCase().replace(/\s/g, '_')}">
                <img src="Images/rotten_tomatos_icon.png" alt="rotten tomato rating">${this.rtr}
            </a>
        </div>
    </article>`;
                }
            }
    class movie{
        constructor(){ }
                //app elementiig listeer duurgeh
    List(){
    const mov = [
    {
        id: 1,
    category: "MilkyCream",
    name: "FRESH DELICIOUS CAKE",
    calories: 500,
    img: "../images/cake4.png",

    rt: 5.0,
          },
    {
        id: 2,
    category: "Maslo",
    name: "FRESH DELICIOUS CAKE",
    calories: 500,
    img: "../images/cake7.png",
    rt: 5.0,
          },
    {
        id:3,
    category: "Mousse",
    name: "FRESH DELICIOUS CAKE",
    calories: 500,
    img: "../images/cake8.png",
    rt: 5.0,
          },
    {
        id:4,
    category: "MilkyCream",
    name: "FRESH DELICIOUS CAKE",
    calories: 500,
    img: "../images/cake4.png",
    rt: 5.0,
          },
    {
        id:5,
    category: "NewYear",
    name: "FRESH DELICIOUS CAKE",
    calories: 500,
    img: "../images/cake-cake1.png",
    rt: 5.0,
          },
    {
        id:6,
    category: "Mousse",
    name: "FRESH DELICIOUS CAKE",
    calories: 500,
    img: "../images/cake-cake1.png",
    rt: 5.0,
          },
    {
        id:7,
    category: "NewYear",
    name: "FRESH DELICIOUS CAKE",
    calories: 500,
    img: "../images/cake-cake1.png",
    rt: 5.0,
          },
    {
        id:8,
    category: "MilkyCream",
    name: "FRESH DELICIOUS CAKE",
    calories: 500,
    img: "../images/cake-cake1.png",
    rt: 5.0,
          },
    {
        id:9,
    category: "Maslo",
    name: "FRESH DELICIOUS CAKE",
    calories: 500,
    img: "../photos/cake1.jpg",
    rt: 5.0,
          },
    {id:10,
    category: "Mousse",
    name: "FRESH DELICIOUS CAKE",
    calories: 500,
    img: "../photos/cake1.jpg",
    rt: 5.0,
          },
    ];
    const p = mov;
    let data = '<section>';
        //kino tus bureer loopled porduct uusgej renderleh
        for( const product of p){
                        const prod=new Product(product);
        data += prod.Render();
                    }
        data+="</section>";
    document.getElementById("app").insertAdjacentHTML("beforeend", data);
                }
            }
    //js2
    class MovieItem {
        constructor(movie) {
        this.id = movie.id;
        this.category = movie.category;
        this.name = movie.name;
        this.calories = movie.calories;
        this.img = movie.img;
    this.rt = movie.rt;
            }
    Render() {
              return `
    <article>
        <ul>
            <li><h>${this.name}</h></li>
            <li>Үнэлгээ:${this.rt}</li>
            <li>Калори:${this.calories}</li>
            <hr>
                <li><img src="${this.img}" alt="cake_image"></li>
                <li><button id="button" onclick="CartCounter(this.id)"> Идье +</button></li>
        </ul>
    </article>`
            }
}
        

    class MovieList {
        constructor() {
        this.movies = [];
            }
    //kinonuuda fetch hiine
    async FetchData() {
        this.movies = [
            {
                id: 1,
                category: "MilkyCream",
                name: "FRESH DELICIOUS CAKE",
                calories: 500,
                img: "../images/cake4.png",
                rt: 5.0,
            },
            {
                id: 2,
                category: "Maslo",
                name: "FRESH DELICIOUS CAKE",
                calories: 500,
                img: "../images/cake7.png",
                rt: 5.0,
            },
            {
                id: 3,
                category: "Mousse",
                name: "FRESH DELICIOUS CAKE",
                calories: 500,
                img: "../images/cake8.png",
                rt: 5.0,
            },
            {
                id: 4,
                category: "MilkyCream",
                name: "FRESH DELICIOUS CAKE",
                calories: 500,
                img: "../images/cake4.png",
                rt: 5.0,
            },
            {
                id: 5,
                category: "NewYear",
                name: "FRESH DELICIOUS CAKE",
                calories: 500,
                img: "../images/cake-cake1.png",
                rt: 5.0,
            },
            {
                id: 6,
                category: "Mousse",
                name: "FRESH DELICIOUS CAKE",
                calories: 500,
                img: "../images/cake-cake1.png",
                rt: 5.0,
            },
            {
                id: 7,
                category: "NewYear",
                name: "FRESH DELICIOUS CAKE",
                calories: 500,
                img: "../images/cake-cake1.png",
                rt: 5.0,
            },
            {
                id: 8,
                category: "MilkyCream",
                name: "FRESH DELICIOUS CAKE",
                calories: 500,
                img: "../images/cake-cake1.png",
                rt: 5.0,
            },
            {
                id: 9,
                category: "Maslo",
                name: "FRESH DELICIOUS CAKE",
                calories: 500,
                img: "../photos/cake1.jpg",
                rt: 5.0,
            },
            {
                id: 10,
                category: "Mousse",
                name: "FRESH DELICIOUS CAKE",
                calories: 500,
                img: "../photos/cake1.jpg",
                rt: 5.0,
            },
        ]; 
            }
    //categoryoor n kinogoo filterleh method
    FilterByCategory(category) {
                //herev category ugugdsn bol ter kinonuudig ugui bol buh kinog bucaana
                return category ? this.movies.filter(movie => movie.category === category) : this.movies;
            }
    //todrhoi kinog l renderlene
    RenderMovies(targetElement, movies) {
                //tuhain target elementee barij avna
                const movieSection = document.querySelector(targetElement);
    //baigaa buh content oo arilgana
    movieSection.innerHTML = '';
                movies.forEach(movie => {
                    //kino bureer aylaad article element uusged kinogo renderled target element ee ugnu
                    const article = document.createElement('article');
    article.innerHTML = new MovieItem(movie).Render();
    movieSection.appendChild(article);
                });
            }
        }

        document.addEventListener('DOMContentLoaded', async () => {
            //app elemnted kinogoo duurgene
            const app = new movie();
    app.List();
    //movielist class uusged fetchlene
    const movieList = new MovieList();
    await movieList.FetchData();
    //categorylink uudee avna
    const categoryLinks = document.querySelectorAll('#category-links a');
            categoryLinks.forEach(link => {
        //category bur deer click event sonsono
        link.addEventListener('click', function (event) {
            event.preventDefault();
            //songogdsn categoryg avad tuhain category dh kinonuudig shuuged renderlene
            const selectedCategory = this.getAttribute('data-category');
            filterAndRenderMovies(selectedCategory);
        });
            });
    //url aas category oo avj kinonuudaa shuugeed renderlene
    const categoryFromUrl = getCategoryFromUrl();
    filterAndRenderMovies(categoryFromUrl);
    //damjuulagdsn category-oor kinog shuuged render hiih method
    async function filterAndRenderMovies(category) {
                //filter hiigdsn kinonuud
                const filteredMovies = movieList.FilterByCategory(category);
    //filter hiigdsn kinonuudaa renderlene
    movieList.RenderMovies('main section', filteredMovies);
                //songogdsn category oo actove bolgono 
                categoryLinks.forEach(link => {
                    const linkCategory = link.getAttribute('data-category');
    if (linkCategory === category) {
        link.classList.add('active');
                    } else {
        link.classList.remove('active');
                    }
                });
            }
    //url aas category avah method
    function getCategoryFromUrl() {
                const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('category');
            }
        });



// -------------------------train heseg deer baisan js code----------------------------

class cake {
    constructor() {
    }
    List() {
        const cak = [
            {
                id: 1,
                name: "FRESH DELICIOUS CAKE",
                calories: 500,
                img: "../images/cake4.png",
                rt: 5.0,
            },
            {
                name: "FRESH DELICIOUS CAKE",
                calories: 500,
                img: "../images/cake7.png",
                rt: 5.0,
            },
            {
                name: "FRESH DELICIOUS CAKE",
                calories: 500,
                img: "../images/cake8.png",
                rt: 5.0,
            },
            {
                name: "FRESH DELICIOUS CAKE",
                calories: 500,
                img: "../images/cake4.png",
                rt: 5.0,
            },
            {
                name: "FRESH DELICIOUS CAKE",
                calories: 500,
                img: "../images/cake-cake1.png",
                rt: 5.0,
            },
            {
                name: "FRESH DELICIOUS CAKE",
                calories: 500,
                img: "../images/cake-cake1.png",
                rt: 5.0,
            },
            {
                name: "FRESH DELICIOUS CAKE",
                calories: 500,
                img: "../images/cake-cake1.png",
                rt: 5.0,
            },
            {
                name: "FRESH DELICIOUS CAKE",
                calories: 500,
                img: "../images/cake-cake1.png",
                rt: 5.0,
            },
            {
                name: "FRESH DELICIOUS CAKE",
                calories: 500,
                img: "../photos/cake1.jpg",
                rt: 5.0,
            },
            {
                name: "FRESH DELICIOUS CAKE",
                calories: 500,
                img: "../photos/cake1.jpg",
                rt: 5.0,
            },
        ];
        const p = cak;
        let data = `<section>`;
        for (const product of p) {
            const prod = new Product(product);
            data += prod.Render();
        }
        data += "</section>";

        document.getElementById("app").insertAdjacentHTML("beforeend", data);
    }
}
class Product {
    constructor(product) {
        this.id = product.id;
        this.name = product.name;
        this.img = product.img;
        this.calories = product.calories;
        this.rt = product.rt;
    }

    Render() {
        return `
              <article>
                  <ul>
                      <li><h>${this.name}</h></li>
                      <li>Үнэлгээ:${this.rt}</li>
                      <li>Калори:${this.calories}</li>
                      <hr>
                      <li><img src="${this.img}" alt="cake_image"></li>
                      <li><button id="button" onclick="CartCounter(this.id)"> Идье +</button></li>
                  </ul>
              </article>`
    }
}

const cartIcon = document.getElementById("cart-icon");
const button = document.getElementById("button");
button.addEventListener('click', CartCounter);

console.log(count);


function CartCounter() {
    const count = document.getElementById("cartCount");
    var c = parseInt(count.textContent);
    c++;
    count.textContent = c;
}




//------------------------------------cake.js----------------------------------------------------------//
class Cake {
    constructor(cakeURL) {
        this.selectCakeURL = cakeURL;

    }
    List() {
        const cak = [
            {
                id: 1,
                name: "FRESH DELICIOUS CAKE",
                calories: 500,
                img: "../images/cake4.png",

                rt: 5.0,
            },
            {
                name: "FRESH DELICIOUS CAKE",
                calories: 500,
                img: "../images/cake7.png",
                rt: 5.0,
            },
            {
                id: 3,
                name: "FRESH DELICIOUS CAKE",
                calories: 500,
                img: "../images/cake8.png",
                rt: 5.0,
            },
            {
                id: 4,
                name: "FRESH DELICIOUS CAKE",
                calories: 500,
                img: "../images/cake4.png",
                rt: 5.0,
            },
            {
                id: 5,
                name: "FRESH DELICIOUS CAKE",
                calories: 500,
                img: "../images/cake-cake1.png",
                rt: 5.0,
            },
            {
                id: 6,
                name: "FRESH DELICIOUS CAKE",
                calories: 500,
                img: "../images/cake-cake1.png",
                rt: 5.0,
            },
            {
                id: 7,
                name: "FRESH DELICIOUS CAKE",
                calories: 500,
                img: "../images/cake-cake1.png",
                rt: 5.0,
            },
            {
                id: 8,
                name: "FRESH DELICIOUS CAKE",
                calories: 500,
                img: "../images/cake-cake1.png",
                rt: 5.0,
            },
            {
                id: 9,
                name: "FRESH DELICIOUS CAKE",
                calories: 500,
                img: "../photos/cake1.jpg",
                rt: 5.0,
            },
            {
                id: 10,
                name: "FRESH DELICIOUS CAKE",
                calories: 500,
                img: "../photos/cake1.jpg",
                rt: 5.0,
            },
        ];
        const p = cak;
        let data = '<section>';
        for (const product of p) {
            const prod = new Product(product);
            data += prod.Render();
        }
        data += "</section>";

        document.getElementById("app").insertAdjacentHTML("beforeend", data);



    }
}
class Product {
    constructor(product) {
        this.id = product.id;
        this.name = product.name;
        this.img = product.img;
        this.calories = product.calories;
        this.rt = product.rt;
    }

    Render() {
        return `
    <article>
        <ul>
            <li><h>${this.name}</h></li>
            <li>Үнэлгээ:${this.rt}</li>
            <li>Калори:${this.calories}</li>
            <hr>
            <li><img src="${this.img}" alt="cake_image"></li>
            <li><button id="button" onclick="CartCounter(this.id)"> Идье +</button></li>
        </ul>
    </article>`
    }
    Bind(eventType, element, property) {

        gebi(`${element}_${this.id}`).addEventListener(eventType, (event) => {

            //this[property] used to access the object's property.
            //for example this["title"]
            //event.target gets <h1> element in our example
            this[property] = event.target.innerHTML;
            console.log(`event:${event} this=${JSON.stringify(Cake)}`);
        })
        return this;
    }
}


function CartCounter() {
    const count = document.getElementById("cartCount");
    var c = parseInt(count.textContent);
    c++;
    count.textContent = c;
}


//-------------------------------------fetch data -------------------------------------------//
const apiUrl = "https://api.jsonbin.io/v3/b/65783aec1f5677401f0cbdf5";

export async function fetchData() {
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'X-Master-Key': '$2a$10$sbncQNd3ucci6CQgL8SjCehrdb2oXslqMHuwpbCdUGog3NOUwhwVG'
            }
        });
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}




//--------------------------------------------------------------------------//
class CakeItemComponent extends HTMLElement {
    constructor() {
        super();
        this.cakes = [];
    }

    Render(cake) {
        // this.id = cake.id;
        // this.category = cake.category;
        this.name = cake.name;
        this.calories = cake.calories;
        this.img = cake.img;
        // this.rt = cake.rt;
        return `
            <div class="cake-card2">
                <h4 class="cake-card2-title">${this.name}</h4>
                <div class="card2-item-star-kk">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <p class="cake-card2-calorie">${this.calories}</p>
                <br>
                <img src="${this.img}" alt="бялуу">
                <button class="cake2-btn-eat" id="button" onclick="CartCounter(this.id)>идье +</button>
            </div>`
    }

    async FetchData() {
        this.cakes = [
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
        await this.FetchData();
        let data = '<section>';
        this.cakes.forEach(cake => {
            data += this.Render(cake);
        });
        data += "</section>";
        this.innerHTML = data;
        console.log(data);
        // cakecard2.insertAdjacentHTML("beforeend", data);
        // console.log(cakecard2);
    }

    disconnectedCallback() {
        //implementation
    }

    attributeChangedCallback(name, oldVal, newVal) {
        //implementation
    }

    adoptedCallback() {
        //implementation
    }
}

window.customElements.define('cake-item-component', CakeItemComponent);



//------------------------------------------------------------------------------//
import { fetchData } from "../dataFetch.js";

const jsondata = await fetchData();
const cakeList = jsondata.record.cake;
console.log(cakeList);
class CakeComponent extends HTMLElement {
    constructor() {
        super();
        this.#renderCartItems();
    }

    #renderCakeList(){
        const container = document.getElementById("app");
        let html = '';
        cakeList.forEach(cake => {
            html += this.#render(cake);
        });
        container.innerHTML = html;
    }
    #renderCartItems(){
        const cartContainer = document.getElementById("cart-item-container");
        console.log("hi");
        let html = '';
        cakeList.forEach(cake => {
            html += this.#renderOnCart(cake);
        });
       
        cartContainer.innerHTML = html;
        
    }

    #render(cake){
        this.id = cake.id;
        this.name = cake.name;
        this.img = cake.img;
        this.calories = cake.calories;
        this.rt = cake.rt;
        return `<article id=${this.id}>
                    <ul>
                        <li><h>${this.name}</h></li>
                        <li>Үнэлгээ:${this.rt}</li>
                        <li>Калори:${this.calories}</li>
                        <hr>
                        <li><img src="${this.img}" alt="cake_image"></li>
                        <li><button id="button" onclick="CartCounter(this.id)"> Идье +</button></li>
                    </ul>
                </article>`;
    }
    #renderOnCart(cake){
        this.id = cake.id;
        this.name = cake.name;
        this.img = cake.img;
        this.calories = cake.calories;
        this.rt = cake.rt;
        this.price = cake.price;
        let starsHTML = '';
    for (let i = 0; i < this.rt; i++) {
        starsHTML += '<span class="fa fa-star checked"></span>';
    }
    for (let i = this.rt; i < 5; i++) {
        starsHTML += '<span class="fa fa-star"></span>';
    }
    return `<div class="cart-item" id=${this.id}>
                <img class="cart-item-img" src="${this.img}" alt="byluunii zurag1" >
            
                <div>
                    <p class="cart-item-name">${this.name}</p>
                    ${starsHTML}
                    <p>Calories: ${this.calories}</p>
                </div>
                <p class="cart-item-perprice">${this.price}</p>
                <div class="cart-item-button-container">
                
                    <button class="cart-btn-k">-</button>
                    <button class="cart-btn-kk">0</button>
                    <button class="cart-btn-kkk">+</button>
                </div>
                <p class="cart-item-totalprice">${this.price}</p>
                <i class="material-icons" style="font-size:36px; color: var(--green);">delete</i>
            </div>`;
    }

    connectedCallback() {
        //implementation
    }

    disconnectedCallback() {
        //implementation
    }

    attributeChangedCallback(name, oldVal, newVal) {
        //implementation
    }

    adoptedCallback() {
        //implementation
    }

}

window.customElements.define('cake-component', CakeComponent);
// js