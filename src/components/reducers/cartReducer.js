// import axios from 'axios'

const initialState = {
    products: [
        {
            "id": 1,
            "name": "MSI MPG Trident 3",
            "description": "MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop",
            "image": 'image',
            "inStock": true,
            "reviews": 4,
            "price": "499.000$",
            "category": "pc",
            "brand": "msi",
            "color": "black",
            "status": "hot",
            "quantity": 12,
            "core-i": 7
        },
    ],
    addItem: 0,
    total: 0
}

const cartReducer = (state = initialState, action) => {
    return state;
}

export default cartReducer;