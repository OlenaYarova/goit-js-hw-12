import{a as P,S as E,i as f}from"./assets/vendor-BNibzuFn.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const M="https://pixabay.com/api/",R="51059240-278fa1e6f61101335ccd91301",$=15;async function m(s,r=1){try{const{data:e}=await P.get(M,{params:{key:R,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:$}});return e}catch(e){throw console.error(e),e}}const g=document.querySelector(".gallery"),y=document.querySelector(".loader"),c=document.querySelector(".js-load-more");let x=new E(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});function L(s){const r=s.map(({webformatURL:e,largeImageURL:a,tags:t,likes:o,views:l,comments:S,downloads:q})=>`
        <li class = "gallery-item">
        <a href="${a}" class="gallery-link">
            <img src="${e}"
             alt="${t}"
              width="360"
              height = "200"
              loading="lazy" />
               <div class="info">
          <p class ="gallery-text"> Likes: ${o}</p>
          <p class="gallery-text">Views: ${l}</p>
          <p class="gallery-text">Comments: ${S}</p>
          <p class="gallery-text">Downloads:${q}</p>
        </div>
           </a>
        </li>
    `).join("");g.insertAdjacentHTML("beforeend",r),x.refresh()}function C(){g.innerHTML=""}function v(){y.classList.remove("hidden"),y.classList.add("active")}function b(){y.classList.add("hidden"),y.classList.remove("active")}function h(){c.classList.remove("hidden"),c.style.display="block"}function u(){c.classList.add("hidden"),c.style.display="none"}function O(){return g}function B(){return c}const w=document.querySelector(".form"),H=w.querySelector('input[name="search-text"]'),A=B(),_=O();let d="",i=1,n=0;u();function p(){u(),f.info({icon:"fa-solid fa-ban",iconColor:"#2222",backgroundColor:"#EF4040",message:"We're sorry, but you've reached the end of search results.",timeout:3e3,position:"topRight"})}w.addEventListener("submit",D);async function D(s){s.preventDefault();const r=H.value.trim();if(!r){f.error({title:"Error",message:"Please enter a search term!",close:!1,position:"topRight"});return}r!==d&&(d=r,i=1,n=0,C(),u()),v();try{const e=await m(d,i);if(e.hits.length===0){f.error({message:"Sorry, there are no images matching your search query. Please try again!",timeout:3e3,close:!1,position:"topRight"}),u();return}L(e.hits),n=e.totalHits||n;const a=Math.ceil(n/15);i<a?h():p()}catch(e){console.error(e)}finally{b()}}A.addEventListener("click",async()=>{u(),v(),i+=1;try{const s=await m(d,i);if(!s.hits.length){p();return}L(s.hits),n=s.totalHits||n;const r=Math.ceil(n/15);i<r?h():p();const e=_.querySelector(".gallery-item");if(e){const{height:a}=e.getBoundingClientRect();window.scrollBy({top:a*2,behavior:"smooth"})}}catch{f.error({message:"Please try again!",timeout:3e3,position:"topRight"}),i-=1,h()}finally{b()}});
//# sourceMappingURL=index.js.map
