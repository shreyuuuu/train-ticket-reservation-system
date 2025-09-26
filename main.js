tPrices = {// Define seat prices based on class
constant
  sleeper: 500,    // Price for Sleeper class
  first_ac: 1500,  // Price for First AC class
  second_ac: 1000 // Price for Second AC class
};

// Function to get current time in HH:MM format
function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0'); // Add leading zero if needed
  const minutes = now.getMinutes().toString().padStart(2, '0'); // Add leading zero if needed
  return `${hours}:${minutes}`;
}

// Event listener for form submission
reservationForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Retrieve form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const train = document.getElementById('train').value;
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  const seat = document.getElementById('seat').value;
  const arrival = getCurrentTime(); // Get current time for arrival
  const departure = getCurrentTime(); // Get current time for departure

  if (seat in seatPrices) {
    // Calculate price based on selected seat
    const price = seatPrices[seat];

    // Update invoice with form data
    document.getElementById('invoice-name').textContent = name;
    document.getElementById('invoice-email').textContent = email;
    document.getElementById('invoice-train').textContent = train;
    document.getElementById('invoice-from').textContent = from;
    document.getElementById('invoice-to').textContent = to;
    document.getElementById('invoice-seat').textContent = seat;
    document.getElementById('invoice-arrival').textContent = getCurrentTime(); // Assuming getCurrentTime() returns current time
    document.getElementById('invoice-departure').textContent = getCurrentTime(); // Assuming getCurrentTime() returns current time
    document.getElementById('invoice-price').textContent = 'Rs' + price;

    // Display invoice
    invoiceContainer.style.display = 'block';
  } else {
    alert('Invalid seat selection. Please select a valid seat.');
  }
});
