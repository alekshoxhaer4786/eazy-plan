/* sophisticated_code.js */

// This code is a complex implementation of a basic e-commerce website
// It includes features like user authentication, product listing, shopping cart, checkout process, and more

// Global variables
let users = [];
let products = [];
let cart = [];

// User class
class User {
  constructor(username, password, address) {
    this.username = username;
    this.password = password;
    this.address = address;
    this.isAdmin = false;
  }

  changePassword(newPassword) {
    this.password = newPassword;
  }

  changeAddress(newAddress) {
    this.address = newAddress;
  }
}

// Product class
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  updatePrice(newPrice) {
    this.price = newPrice;
  }

  updateQuantity(newQuantity) {
    this.quantity = newQuantity;
  }
}

// Function to add user
function addUser(username, password, address) {
  const newUser = new User(username, password, address);
  users.push(newUser);
}

// Function to add product
function addProduct(name, price, quantity) {
  const newProduct = new Product(name, price, quantity);
  products.push(newProduct);
}

// Function to authenticate user
function authenticate(username, password) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      return true;
    }
  }
  return false;
}

// Function to display all products
function displayProducts() {
  for (let i = 0; i < products.length; i++) {
    console.log(`${i+1}. ${products[i].name} - Price: $${products[i].price} - Quantity: ${products[i].quantity}`);
  }
}

// Function to add product to cart
function addToCart(productId, quantity) {
  const selectedProduct = products[productId - 1];
  if (selectedProduct.quantity < quantity) {
    console.log("Insufficient quantity!");
  } else {
    const cartItem = { product: selectedProduct, quantity: quantity };
    cart.push(cartItem);
    selectedProduct.quantity -= quantity;
    console.log(`${quantity} ${selectedProduct.name} added to cart.`);
  }
}

// Function to remove product from cart
function removeFromCart(productId, quantity) {
  const selectedProduct = products[productId - 1];
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].product === selectedProduct) {
      if (cart[i].quantity <= quantity) {
        selectedProduct.quantity += cart[i].quantity;
        cart.splice(i, 1);
        console.log("Product removed from cart.");
        return;
      } else {
        cart[i].quantity -= quantity;
        selectedProduct.quantity += quantity;
        console.log(`${quantity} ${selectedProduct.name}(s) removed from cart.`);
        return;
      }
    }
  }
  console.log("Product not found in cart.");
}

// Function to calculate total cart value
function calculateCartTotal() {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].product.price * cart[i].quantity;
  }
  return total;
}

// Example usage:

// Add sample users
addUser("johnDoe", "pass123", "123 Main St");
addUser("janeSmith", "secureP@ss", "456 Elm St");

// Add sample products
addProduct("iPhone 12", 999, 10);
addProduct("MacBook Pro", 1999, 5);
addProduct("AirPods Pro", 249, 20);

// Authenticate user
const isAuthenticated = authenticate("johnDoe", "pass123");
console.log("User authenticated:", isAuthenticated);

// Display available products
console.log("Available products:");
displayProducts();

// Add products to cart
addToCart(1, 3);
addToCart(2, 1);
addToCart(3, 5);

// Remove product from cart
removeFromCart(1, 2);

// Calculate total cart value
const totalCartValue = calculateCartTotal();
console.log("Total cart value:", totalCartValue);