import axios from "axios";


// Функція для виконання HTTP-запиту до сервісу Pixabay
export async function fetchImages(query) {
    const apiKey = "39588460-df52399cf23d63ffd2a80219a";
    // URL для HTTP-запиту з використанням вказаних параметрів
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;
    // Виконуємо HTTP-запит та повертаємо обіцянку
    try {
    // Отримання відповіді з сервера
        const response = await axios.get(url);
    // Перевірка чи є результати запиту
        if (!response.data.hits || response.data.hits.length === 0) {
            return [];
        }

        return response.data.hits;
    } catch (error) {
        console.error("Error fetching images:", error);
        return [];
    }
};
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
//   return fetch(url)
//     .then(response => {
//       if (!response.ok) {
//         // Обробляємо випадок невдалого HTTP-запиту
//         throw new Error("Failed to fetch images");
//       }
//       // Повертаємо відповідь у форматі JSON
//       return response.json();
//     })
//     .then(data => {
//       if (data.hits.length === 0) {
//         // Якщо немає результатів, повертаємо порожній масив
//         return [];
//       }
//       // Повертаємо масив зображень
//       return data.hits;
//     })
//     .catch(error => {
//       // Обробляємо помилки
//       console.error("Error fetching images:", error);
//       // Повертаємо порожній масив в разі помилки
//       return [];
//     });
// };

  


