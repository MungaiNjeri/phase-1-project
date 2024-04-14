
const db = "https://json-server-sg8o.onrender.com/menus"
fetch('https://json-server-sg8o.onrender.com/menus')
  .then(response => response.json())
  .then(data => {
    // Process the fetched data
    console.log(data); // Assuming the API returns JSON data
    displayMenuItems(data.menuItems); // Display menu items on the website
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

// Function to display menu items on the website
function displayMenuItems(menuItems) {
  const menuContainer = document.querySelector('.menu-container'); // Assuming you have a container in your HTML to display menu items
  
  menuItems.forEach(item => {
    const menuItemElement = document.createElement('div');
    menuItemElement.classList.add('menu-item');
    menuItemElement.innerHTML = `
      <h3>${item.name}</h3>
      <p>Price: Ksh ${item.price}</p>
      <p>Category: ${item.category}</p>
    `;
    menuContainer.appendChild(menuItemElement);
  });
}

