import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Передаємо клас .gallery до SimpleLightbox для ініціалізації
const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt'
});

export function renderImages(images) {
   const gallery = document.querySelector(".gallery");
   // Генеруємо розмітку для кожного нового елемента галереї
 const newImagesMarkup = galleryItemsMarkup(images);
 // Додаємо нові зображення до вже існуючої галереї
   gallery.insertAdjacentHTML("beforeend", newImagesMarkup);
   
    // Оновлюємо SimpleLightbox для нових зображень
    lightbox.refresh();
    
 function galleryItemsMarkup(arr) {
    return arr
        .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
     <li class="gallery-item">
     <a class="gallery-link" href="${largeImageURL}">
      <img class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
      loading="lazy"
      />
     </a>
     <ul class="image-details">
       <li class="activities"><span class="details">Likes</span> ${likes}</li>
       <li class="activities"><span class="details">Views</span> ${views}</li>
       <li class="activities"><span class="details">Comments</span> ${comments}</li>
       <li class="activities"><span class="details">Downloads</span> ${downloads}</li>
     </ul>
     </li>`)
        .join('');
    };
   
};







