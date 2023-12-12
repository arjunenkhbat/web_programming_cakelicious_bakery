class Cake {
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
    
  }

  
  function CartCounter() {
    const count = document.getElementById("cartCount");
    var c = parseInt(count.textContent);
    c++;
    count.textContent = c;
  }
