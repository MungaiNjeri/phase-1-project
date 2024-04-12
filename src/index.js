
const db = "http://localhost:3000/menuItems"
// Function to toggle the sidebar menu
document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.sidebar').classList.toggle('active');
});

// Function to handle searching for items
document.querySelector('.search-btn').addEventListener('click', function() {
  let searchTerm = document.querySelector('.search input').value;
  // Add logic here to search for items based on the searchTerm
});

// Function to handle adding items to favorites
document.querySelectorAll('.detail-favorites').forEach(function(item) {
  item.addEventListener('click', function() {
    // Add logic here to add the item to favorites
  });
});
