const images = ['background1.jpg', 'background2.jpg', 'background3.jpg']; // Add your image file names here
const randomImage = images[Math.floor(Math.random() * images.length)];
document.body.style.backgroundImage = `url('pics/${randomImage}')`;
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundSize = 'cover';

