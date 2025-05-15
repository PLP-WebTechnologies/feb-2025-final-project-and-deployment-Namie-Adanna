
// Booking Form Submission
document.getElementById('booking-form')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const service = document.getElementById('service').value;
  const date = document.getElementById('date').value;

  if (!name || !service || !date) {
    alert('Please fill in all fields');
    return;
  }

  alert(`Thank you, ${name}! Your ${service} service has been booked for ${date}. We'll contact you soon.`);
  this.reset();
});

const currentLocation = window.location.href;
const menuItem = document.querySelectorAll('nav ul li a');
const menuLength = menuItem.length;

for (let i = 0; i < menuLength; i++) {
  if (menuItem[i].href === currentLocation) {
    menuItem[i].classList.add("active-link");
  }
}

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});


