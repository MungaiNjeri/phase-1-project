
const db = "http://localhost:3000/menuItems"
// Function to log a message when the page loads
document.addEventListener('DOMContentLoaded', function () {
  console.log('Page loaded successfully');
});

// Function to handle clicking on menu categories
function handleMenuClick(category) {
  console.log('Clicked on menu category:', category);
  // You can add more logic here based on the category clicked
}

// Function to handle clicking on order details
function handleOrderClick(name, price) {
  console.log('Clicked on order:', name, '- Price:', price);
  // You can add more logic here based on the order clicked
}
