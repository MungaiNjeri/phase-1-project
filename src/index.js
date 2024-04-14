
const db = "http://localhost:3000/menuItems"

function fetchMenuCategories() {
  const apiUrl = 'https://api.escuelajs.co/api/v1/products';
  
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(categories => {
      // Assuming categories is an array of category objects
      categories.forEach(category => {
        // Create HTML elements for each category and add click event listeners
        const categoryElement = document.createElement('div');
        categoryElement.textContent = category.name;
        categoryElement.addEventListener('click', () => handleMenuClick(category.id));
        document.getElementById('menu-categories').appendChild(categoryElement);
      });
    })
    .catch(error => {
      console.error('Error fetching menu categories:', error);
    });
}

// Function to handle clicking on menu categories
function handleMenuClick(categoryId) {
  const apiUrl = 'https:foodish-api.com'
  
  fetch;(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(items => {
      // Assuming items is an array of menu item objects
      items.forEach(item => {
        // Create HTML elements for each menu item and add click event listeners
        const itemElement = document.createElement('div');
        itemElement.textContent = $;{item.name} - Price: $;{item.price};
        itemElement.addEventListener('click', () => handleOrderClick(item.name, item.price));
        document.getElementById('menu-items').appendChild(itemElement);
      });
    })
    .catch(error => {
      console.error('Error fetching menu items:', error);
    });
}

// Function to handle clicking on order details
function handleOrderClick(name, price) {
  console.log('Clicked on order:', name, '- Price:', price);
  // You can add more logic here based on the order clicked
}

// Call fetchMenuCategories when the page loads
window.onload = function () {
  fetchMenuCategories();
};
