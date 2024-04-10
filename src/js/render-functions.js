

export function renderImages(images) {
    const gallery = document.querySelector(".gallery");
 // Генеруємо розмітку для кожного елемента галереї
    gallery.insertAdjacentHTML("beforeend", galleryItemsMarkup(images));
    
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
    
    // Викликаємо функцію galleryItemsMarkup і передаємо їй зображення для генерації розмітки
    gallery.innerHTML = galleryItemsMarkup(images);
};







