
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




document.addEventListener("DOMContentLoaded", () => {
     const loadMoreBtn = document.querySelector(".load-more-btn");
    loadMoreBtn.addEventListener("click", onBtnClick);
   });



   // Отримуємо посилання на форму за ідентифікатором
const searchForm = document.getElementById("search-form");
    // Додаємо обробник події "submit" до форми
searchForm.addEventListener("submit", onFormSubmit);
   // Отримуємо посилання на індикатор
const loader = document.querySelector(".loader"); 
const loadMoreBtn = document.querySelector(".load-more-btn");
loadMoreBtn.addEventListener("click", onBtnClick);

let page = 1;
let query = "";
const perPage = 15;
async function onFormSubmit(event) {
       event.preventDefault();
       // Показуємо індикатор завантаження
       showLoader();
       //Очищуємо галерею
       clearGallery();
       // Отримуємо значення текстового поля пошуку
       const searchInput = document.getElementById("search-input");
       // Видаляємо зайві пробіли з початку та кінця рядка
       query = searchInput.value.trim();
       // Перевіряємо, чи не є поле пошуку порожнім
  if (query !== "") {
    page = 1;
    try {
      const images = await fetchImages(query, page);
       //Перевірка, чи остання сторінка - прибираємо кнопку, виводимо меседж
      if (page * perPage >= images.totalHits) {
        loadMoreBtn.style.display = "none";
         iziToast.info({
        title: "Information",
        message: "We're sorry, but you've reached the end of search results.",
        position: "topRight",
        backgroundColor: "red",
        maxWidth: "500px"
      });
      } else {
         loadMoreBtn.style.display = "block";
      }
      //Очищуємо поле інпуту
      searchInput.value = "";
      if (!images || !images.hits) {
             iziToast.info({
               title: "Information",
               message: "Sorry, there are no images matching your search query. Please try again!",
               position: "topRight",
               backgroundColor: "red",
               maxWidth: "500px"
             });
         loadMoreBtn.style.display = "none";
      } else {
             renderImages(images.hits);
             // Оновлюємо галерею після додавання нових елементів
             lightbox.refresh();
       
           }       
  }catch(error) {
           console.error("Error fetching images:", error);
  }finally {
           // Приховуємо індикатор завантаження
           hideLoader();
          };
  }
};



async function onBtnClick() {
  page += 1;
  showLoader();
  try {
    
    const images = await fetchImages(query, page);

    
    if ((page * perPage) >= images.totalHits) {
      loadMoreBtn.style.display = "none";
    }
    renderImages(images.hits);

    const totalHits = images.totalHits;
    const card = document.querySelector(".gallery-item");

    if (card) {
      const cardHeight = card.getBoundingClientRect().height;
      window.scrollBy({
        left: 0,
        top: cardHeight * 2,
        behavior: "smooth"
      });
    }
    if (images.length === 0 || (totalHits > 0 && page >= Math.ceil(totalHits / 15))) {
      loadMoreBtn.style.display = "none";
      iziToast.info({
        title: "Information",
        message: "We're sorry, but you've reached the end of search results.",
        position: "topRight",
        backgroundColor: "red",
        maxWidth: "500px"
      });
    } else {
      loadMoreBtn.style.display = "block";
    }
  } catch (error) {
    alert(error.message);
  } finally {
    hideLoader();
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








  