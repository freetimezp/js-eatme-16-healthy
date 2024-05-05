//add to cart & change image
const addToCartButtons = document.querySelectorAll('.images a');
const cartIcon = document.querySelector('.top-navbar .icons a i');

let cartCount = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartIcon.textContent = cartCount;
    });
});

const footerImages = document.querySelectorAll('.footer .images img');
const foodbarImage = document.querySelector('.foodbar img');

footerImages.forEach(image => {
    image.addEventListener('click', () => {
        foodbarImage.src = image.src;
    });
});


//animate items
const itemImages = document.querySelectorAll('.item-img');

itemImages.forEach(img => {
    img.addEventListener('click', () => {
        itemImages.forEach(img => img.classList.remove('animated'));
        img.classList.add('animated');
    });
});


//toggle dark,light theme
const themeSwitch = document.querySelector('#theme-switch');
const body = document.body;

themeSwitch.addEventListener('change', function () {
    body.classList.toggle('dark-mode');
});

