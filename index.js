// Product Class
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// ShoppingCartItem Class
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

// ShoppingCart Class
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(product, quantity) {
        const cartItem = this.items.find(item => item.product.id === product.id);
        if (cartItem) {
            cartItem.quantity += quantity; // If the item already exists, increase its quantity
        } else {
            this.items.push(new ShoppingCartItem(product, quantity)); // Otherwise, add the new item
        }
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId); // Removes item by product id
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0); // Calculate the total price of all items
    }

    displayCart() {
        this.items.forEach(item => {
            console.log(`${item.product.name} (x${item.quantity}) - $${item.getTotalPrice().toFixed(2)}`);
        });
    }
}

// Testing the functionality

// Create products
const apple = new Product(1, "Apple", 0.5);
const banana = new Product(2, "Banana", 0.3);
const orange = new Product(3, "Orange", 0.8);

// Create shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(apple, 3); // 3 Apples
cart.addItem(banana, 2); // 2 Bananas
cart.addItem(orange, 1); // 1 Orange

// Display the cart
console.log("Cart items:");
cart.displayCart();

// Remove an item from the cart (e.g., Banana)
cart.removeItem(2);

// Display the cart again
console.log("\nCart items after removing Banana:");
cart.displayCart();

// Get the total price of items in the cart
console.log("\nTotal price: $" + cart.getTotal().toFixed(2));
