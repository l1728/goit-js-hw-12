import axios from "axios";

// Функція для виконання HTTP-запиту до сервісу Pixabay
export async function fetchImages(query, page) {
    const apiKey = "39588460-df52399cf23d63ffd2a80219a";
    const perPage = 15;
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;
    // Виконуємо HTTP-запит та повертаємо обіцянку
    try {
    // Отримання відповіді з сервера
        const response = await axios.get(url);
        console.log(response);
    // Перевірка чи є результати запиту
        if (!response.data.hits || response.data.hits.length === 0) {
            return [];
        }
  
        return response.data;
    } catch (error) {
        console.error("Error fetching images:", error);
        return [];
    }
};
    
    
    
    
    
    

    
    
    
    
    
    
    
    

  


