import axios from 'axios';
const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "51059240-278fa1e6f61101335ccd91301";
const PER_PAGE = 15;




export async function getImagesByQuery(query, page = 1) {
    try {
        const {data} = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: "photo",
                orientation: "horizontal",
                safesearch: true,
                page,
                per_page: PER_PAGE,
            },
        });

        return data;
    
      
    } catch(error) {
            console.error(error);
            throw error;
        }
}

