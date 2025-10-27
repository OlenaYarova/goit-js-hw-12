import { getImagesByQuery } from "./js/pixabay-api.js";
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
    showLoadMoreButton,
    hideLoadMoreButton,
    getGalleryContainer,
    getLoadMore,
} from "./js/render-functions.js";


import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const searchImage = document.querySelector(".form");
const userRequest = searchImage.querySelector('input[name="search-text"]');

const loadMore = getLoadMore();
const gallery = getGalleryContainer();

let currentQuery = "";
let page = 1;
let totalHits = 0;
hideLoadMoreButton();
 
function handleEndOfResults() {
  hideLoadMoreButton();
  iziToast.info({
    icon: "fa-solid fa-ban",
    iconColor: "#2222",
    backgroundColor: "#EF4040",
    message: "We're sorry, but you've reached the end of search results.",
    timeout: 3000,
    position: "topRight",
  });
}


searchImage.addEventListener("submit", handlerSubmit);


async function handlerSubmit(event) {
    event.preventDefault();
    const query = userRequest.value.trim();
    
    if (!query) {
        iziToast.error({
            title: "Error",
            message: "Please enter a search term!",
            close: false,
            position: "topRight",
        });
        return;
    }
     if (query !== currentQuery) {
    currentQuery = query;
    page = 1;
    totalHits = 0;
    clearGallery();
    hideLoadMoreButton();
  }

  showLoader();


    try {
        const data = await getImagesByQuery(currentQuery, page);

        if (data.hits.length === 0) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                timeout: 3000,
                close: false,
                position: "topRight",
            })
            hideLoadMoreButton();
            return;
        }

        createGallery(data.hits);
        
        totalHits = data.totalHits || totalHits;
        const pagesCount = Math.ceil(totalHits / 15);

        if (page < pagesCount) {
            showLoadMoreButton();
        } else {
            handleEndOfResults();
        }

    } catch(error) {
            console.error(error);
        }
        finally {
            hideLoader();
        };
}

loadMore.addEventListener("click", async () => {
    try {
        showLoader();

        const nextPage = page + 1;
        const data = await getImagesByQuery(currentQuery, nextPage);

        if (data.hits.length === 0) {
            handleEndOfResults();
            return;
        }
        createGallery(data.hits);
        page = nextPage;

        totalHits = data.totalHits || totalHits;
        const firstCard = gallery.querySelector(".gallery-item");
        if (firstCard) {
            const { height: cardHeight } = firstCard.getBoundingClientRect();
            window.scrollBy({
                top: cardHeight * 2,
                behavior: "smooth"
            });
        }
        const pagesCount = Math.ceil(totalHits / 15);
        if (page >= pagesCount) {
            handleEndOfResults();
        }
    } catch (error) {
        iziToast.error({
            message: 'Please try again!',
            timeout: 3000,
            position: "topRight",
        })
        console.error(error);
    } finally {
        hideLoader();
    };
});
