const contactTab = document.getElementById('contactTab');
const contactSection = document.getElementById('contact');

contactTab.addEventListener('click', () => {
  // Toggle the visibility of the contact section
  contactSection.classList.toggle('visible');
});

