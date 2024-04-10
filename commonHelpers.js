import{a as f,S as m,i as p}from"./assets/vendor-6e0bf343.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();async function y(a){const i=`https://pixabay.com/api/?key=39588460-df52399cf23d63ffd2a80219a&q=${a}&image_type=photo&orientation=horizontal&safesearch=true`;try{const t=await f.get(i);return!t.data.hits||t.data.hits.length===0?[]:t.data.hits}catch(t){return console.error("Error fetching images:",t),[]}}function g(a){const s=document.querySelector(".gallery");s.insertAdjacentHTML("beforeend",i(a));function i(t){return t.map(({webformatURL:e,largeImageURL:r,tags:o,likes:l,views:c,comments:u,downloads:d})=>`
     <li class="gallery-item">
     <a class="gallery-link" href="${r}">
      <img class="gallery-image"
      src="${e}"
      alt="${o}"
      loading="lazy"
      />
     </a>
     <ul class="image-details">
       <li class="activities"><span class="details">Likes</span> ${l}</li>
       <li class="activities"><span class="details">Views</span> ${c}</li>
       <li class="activities"><span class="details">Comments</span> ${u}</li>
       <li class="activities"><span class="details">Downloads</span> ${d}</li>
     </ul>
     </li>`).join("")}s.innerHTML=i(a)}const h=new m(".gallery a",{captionDelay:250,captionsData:"alt"}),L=document.getElementById("search-form"),n=document.querySelector(".loader");L.addEventListener("submit",b);function b(a){a.preventDefault(),v(),I();const s=document.getElementById("search-input"),i=s.value.trim();i!==""&&y(i).then(t=>{s.value="",t.length===0?p.info({title:"Information",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red",maxWidth:"500px"}):(g(t),h.refresh())}).catch(t=>{console.error("Error fetching images:",t)}).finally(()=>{$()})}function v(){n.style.display="block"}function $(){n.style.display="none"}function I(){const a=document.querySelector(".gallery");a.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
