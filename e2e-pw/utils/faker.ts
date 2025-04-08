export function generateCategory() {
    const category = [
        "Fashion & Apparel",
        "Electronics & Gadgets",
        "Health & Beauty",
        "Home & Furniture",
        "Grocery & Food",
        "Sports & Fitness",
        "Toys & Games",
        "Automotive & Accessories",
        "Books & Stationery",
        "Jewelry & Watches",
    ];

    return category[Math.floor(Math.random() * category.length)];
}

export function generateProductName() {
    const products = [
        "Wireless Earbuds",
        "Smartphone Case",
        "Running Shoes",
        "Gaming Laptop",
        "Organic Green Tea",
        "Fitness Tracker",
        "Leather Wallet",
        "Bluetooth Speaker",
        "Scented Candles",
        "Electric Kettle",
    ];

    return products[Math.floor(Math.random() * products.length)];
}