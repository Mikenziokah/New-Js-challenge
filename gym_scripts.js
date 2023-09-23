const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Add your image file names here
const randomImage = images[Math.floor(Math.random() * images.length)];
document.body.style.backgroundImage = `url('path_to_your_images_directory/${randomImage}')`;
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundSize = 'cover';

