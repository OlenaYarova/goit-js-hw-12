import{a as S,S as q,i as d}from"./assets/vendor-BNibzuFn.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const E="https://pixabay.com/api/",M="51059240-278fa1e6f61101335ccd91301",x=15;async function p(s,r=1){try{const{data:t}=await S.get(E,{params:{key:M,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:x}});return t}catch(t){throw console.error(t),t}}const g=document.querySelector(".gallery"),f=document.querySelector(".loader"),c=document.querySelector(".js-load-more");let R=new q(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});function m(s){const r=s.map(({webformatURL:t,largeImageURL:a,tags:e,likes:o,views:l,comments:w,downloads:P})=>`
        <li class = "gallery-item">
        <a href="${a}" class="gallery-link">
            <img src="${t}"
             alt="${e}"
              width="360"
              height = "200"
              loading="lazy" />
               <div class="info">
          <p class ="gallery-text"> Likes: ${o}</p>
          <p class="gallery-text">Views: ${l}</p>
          <p class="gallery-text">Comments: ${w}</p>
          <p class="gallery-text">Downloads:${P}</p>
        </div>
           </a>
        </li>
    `).join("");g.insertAdjacentHTML("beforeend",r),R.refresh()}function $(){g.innerHTML=""}function L(){f.classList.remove("hidden"),f.classList.add("active")}function v(){f.classList.add("hidden"),f.classList.remove("active")}function C(){c.classList.remove("hidden"),c.style.display="block"}function y(){c.classList.add("hidden"),c.style.display="none"}function O(){return g}function B(){return c}const b=document.querySelector(".form"),H=b.querySelector('input[name="search-text"]'),A=B(),_=O();let u="",n=1,i=0;y();function h(){y(),d.info({icon:"fa-solid fa-ban",iconColor:"#2222",backgroundColor:"#EF4040",message:"We're sorry, but you've reached the end of search results.",timeout:3e3,position:"topRight"})}b.addEventListener("submit",D);async function D(s){s.preventDefault();const r=H.value.trim();if(!r){d.error({title:"Error",message:"Please enter a search term!",close:!1,position:"topRight"});return}r!==u&&(u=r,n=1,i=0,$(),y()),L();try{const t=await p(u,n);if(t.hits.length===0){d.error({message:"Sorry, there are no images matching your search query. Please try again!",timeout:3e3,close:!1,position:"topRight"}),y();return}m(t.hits),i=t.totalHits||i;const a=Math.ceil(i/15);n<a?C():h()}catch(t){console.error(t)}finally{v()}}A.addEventListener("click",async()=>{try{L();const s=n+1,r=await p(u,s);if(r.hits.length===0){h();return}m(r.hits),n=s,i=r.totalHits||i;const t=_.querySelector(".gallery-item");if(t){const{height:e}=t.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}const a=Math.ceil(i/15);n>=a&&h()}catch(s){d.error({message:"Please try again!",timeout:3e3,position:"topRight"}),console.error(s)}finally{v()}});
//# sourceMappingURL=index.js.map
