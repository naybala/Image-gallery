const gallery = document.querySelector('#gallery');
const popup = document.querySelector('#popup');
const selectedImage = document.querySelector('#selectedImage');
const imageIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const selectedIndex = null;
imageIndexes.forEach(i => {
    const img = document.createElement('img');
    img.src = `/images/img-${i}.jpg`;
    img.alt = `Picture of Image ${i} as shown in figure`;
    img.classList.add('galleryImage');
    img.addEventListener('click', () => {
        //Pop up
    })
    gallery.appendChild(img);
});