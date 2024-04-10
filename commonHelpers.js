import{S as d,i as m}from"./assets/vendor-8c59ed88.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function p(s){const o=`https://pixabay.com/api/?key=39588460-df52399cf23d63ffd2a80219a&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(e=>{if(!e.ok)throw new Error("Failed to fetch images");return e.json()}).then(e=>e.hits.length===0?[]:e.hits).catch(e=>(console.error("Error fetching images:",e),[]))}function y(s){const i=document.querySelector(".gallery");i.insertAdjacentHTML("beforeend",o(s));function o(e){return e.map(({webformatURL:t,largeImageURL:r,tags:n,likes:l,views:c,comments:u,downloads:f})=>`
     <li class="gallery-item">
     <a class="gallery-link" href="${r}">
      <img class="gallery-image"
      src="${t}"
      alt="${n}"
      loading="lazy"
      />
     </a>
     <ul class="image-details">
       <li class="activities"><span class="details">Likes</span> ${l}</li>
       <li class="activities"><span class="details">Views</span> ${c}</li>
       <li class="activities"><span class="details">Comments</span> ${u}</li>
       <li class="activities"><span class="details">Downloads</span> ${f}</li>
     </ul>
     </li>`).join("")}i.innerHTML=o(s)}const h=new d(".gallery a",{captionDelay:250,captionsData:"alt"}),g=document.getElementById("search-form"),a=document.querySelector(".loader");g.addEventListener("submit",L);function L(s){s.preventDefault(),b(),$();const i=document.getElementById("search-input"),o=i.value.trim();o!==""&&p(o).then(e=>{i.value="",e.length===0?m.info({title:"Information",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red",maxWidth:"500px"}):(y(e),h.refresh())}).catch(e=>{console.error("Error fetching images:",e)}).finally(()=>{v()})}function b(){a.style.display="block"}function v(){a.style.display="none"}function $(){const s=document.querySelector(".gallery");s.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
