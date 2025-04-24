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

export function generateName() {
    const names = [
        "John Doe",
        "Jane Smith",
        "Alice Johnson",
        "Bob Brown",
        "Charlie Davis",
        "Diana Evans",
        "Ethan Wilson",
        "Fiona Martinez",
        "George Garcia",
        "Hannah Lee",
    ];

    return names[Math.floor(Math.random() * names.length)];
}

export function generateAccountNumber() {
    const length = 10;
    let accountNumber = '';
    for (let i = 0; i < length; i++) {
        accountNumber += Math.floor(Math.random() * 10);
    }
    return accountNumber;
}

export function generateEmail() {
    const domains = ["example.com", "test.com", "demo.com"];
    const randomName = Math.random().toString(36).substring(2, 7);
    return `${randomName}@${domains[Math.floor(Math.random() * domains.length)]}`;
}

export function generatePhoneNumber() {
    const areaCode = Math.floor(Math.random() * 900) + 100; // 100-999
    const centralOfficeCode = Math.floor(Math.random() * 900) + 100; // 100-999
    const lineNumber = Math.floor(Math.random() * 9000) + 1000; // 1000-9999
    return `(${areaCode}) ${centralOfficeCode}-${lineNumber}`;
}

export function generateAddress() {
    const streets = [
        "Main St",
        "Broadway",
        "1st Ave",
        "2nd St",
        "3rd Blvd",
        "4th Rd",
        "5th Ln",
        "6th Dr",
        "7th Ct",
        "8th Pl",
    ];

    const randomStreet = streets[Math.floor(Math.random() * streets.length)];
    const randomNumber = Math.floor(Math.random() * 1000) + 1; // 1-1000
    return `${randomNumber} ${randomStreet}`;
}

export function generateBankName() {
    const banks = [
        "Bank of America",
        "Chase Bank",
        "Wells Fargo",
        "Citibank",
        "PNC Bank",
        "Capital One",
        "TD Bank",
        "US Bank",
        "BB&T Bank",
        "SunTrust Bank",
    ];

    return banks[Math.floor(Math.random() * banks.length)];
}