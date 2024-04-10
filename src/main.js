import axios from "axios";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchImages } from "./js/pixabay-api";
import { renderImages } from "./js/render-functions"

   // Підключаємо бібліотеку і вказуємо затримку підпису зображення з атрибуту alt
    const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250,
    captionsData: 'alt', 
    });
   
 
   // Отримуємо посилання на форму за ідентифікатором
   const searchForm = document.getElementById("search-form");
   // Отримуємо посилання на індикатор
   const loader = document.querySelector(".loader"); 

   // Додаємо обробник події "submit" до форми
searchForm.addEventListener("submit", onFormSubmit);
   


function onFormSubmit(event) {
       event.preventDefault();
       // Показуємо індикатор завантаження
       showLoader();
       //Очищуємо галерею
       clearGallery();
       // Отримуємо значення текстового поля пошуку
       const searchInput = document.getElementById("search-input");
       // Видаляємо зайві пробіли з початку та кінця рядка
       const query = searchInput.value.trim();
       // Перевіряємо, чи не є поле пошуку порожнім
       if (query !== "") {
       // Виконуємо HTTP-запит за допомогою функції fetchImages
       fetchImages(query)
         .then(images => {
           //Очищуємо поле інпуту
           searchInput.value = "";
           if (images.length === 0) {
             // Виводимо повідомлення про відсутність зображень
             iziToast.info({
               title: "Information",
               message: "Sorry, there are no images matching your search query. Please try again!",
               position: "topRight",
               backgroundColor: "red",
               maxWidth: "500px"
             });
           } else {
             renderImages(images);
             // Оновлюємо галерею після додавання нових елементів
             lightbox.refresh();
           }         
          })
         .catch(error => {
           console.error("Error fetching images:", error);
          })
         .finally(() => {
           // Приховуємо індикатор завантаження
           hideLoader();
          });
  }
};


function showLoader() {
   // Показуємо індикатор
  loader.style.display = "block";
};

function hideLoader() {
  // Приховуємо індикатор завантаження
  loader.style.display = "none";
};

 function clearGallery() {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";
};



