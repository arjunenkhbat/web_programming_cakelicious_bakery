let fetchData = async () => {

    return [
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
};

const filterProducts = (category, data) => {
    return data.filter(product => product.category === category);
};

export { fetchData, filterProducts };
