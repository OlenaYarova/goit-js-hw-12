import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader"); 
const loadMore = document.querySelector(".js-load-more");
 
let gallery1 = new SimpleLightbox('.gallery a', { 
      captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
    captionDelay: 250,
});

export function createGallery(arr) {
    
    const markup = arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <li class = "gallery-item">
        <a href="${largeImageURL}" class="gallery-link">
            <img src="${webformatURL}"
             alt="${tags}"
              width="360"
              height = "200"
              loading="lazy" />
               <div class="info">
          <p class ="gallery-text"> Likes: ${likes}</p>
          <p class="gallery-text">Views: ${views}</p>
          <p class="gallery-text">Comments: ${comments}</p>
          <p class="gallery-text">Downloads:${downloads}</p>
        </div>
           </a>
        </li>
    `).join("");



    gallery.insertAdjacentHTML("beforeend", markup);
    gallery1.refresh();
}


export function clearGallery() {
    gallery.innerHTML = "";
}

export function showLoader() {
    loader.classList.remove("hidden");
    loader.classList.add("active");
}

export function hideLoader() {
    loader.classList.add("hidden");
    loader.classList.remove("active");
   
}

export function showLoadMoreButton() {
    loadMore.classList.remove("hidden");
    loadMore.style.display = "block";
}

export function hideLoadMoreButton() {
    loadMore.classList.add("hidden");
    loadMore.style.display = "none";
}

export function getGalleryContainer() {
return gallery;
}


export function getLoadMore() {
return loadMore;
}