import{a as f,S as p,i as m}from"./assets/vendor-6e0bf343.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function y(s,a){const r=`https://pixabay.com/api/?key=39588460-df52399cf23d63ffd2a80219a&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&{page}&per_page=15`;try{const e=await f.get(r);return!e.data.hits||e.data.hits.length===0?[]:e.data.hits}catch(e){return console.error("Error fetching images:",e),[]}}function g(s){const a=document.querySelector(".gallery");a.insertAdjacentHTML("beforeend",o(s));function o(r){return r.map(({webformatURL:e,largeImageURL:t,tags:i,likes:l,views:c,comments:u,downloads:d})=>`
     <li class="gallery-item">
     <a class="gallery-link" href="${t}">
      <img class="gallery-image"
      src="${e}"
      alt="${i}"
      loading="lazy"
      />
     </a>
     <ul class="image-details">
       <li class="activities"><span class="details">Likes</span> ${l}</li>
       <li class="activities"><span class="details">Views</span> ${c}</li>
       <li class="activities"><span class="details">Comments</span> ${u}</li>
       <li class="activities"><span class="details">Downloads</span> ${d}</li>
     </ul>
     </li>`).join("")}a.innerHTML=o(s)}const h=new p(".gallery a",{captionDelay:250,captionsData:"alt"}),L=document.getElementById("search-form"),n=document.querySelector(".loader"),b=document.querySelector(".load-more-btn");L.addEventListener("submit",v);b.addEventListener("click",onBtnClick);function v(s){s.preventDefault(),S(),q();const a=document.getElementById("search-input"),o=a.value.trim();o!==""&&y(o).then(r=>{a.value="",r.length===0?m.info({title:"Information",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red",maxWidth:"500px"}):(g(r),h.refresh())}).catch(r=>{console.error("Error fetching images:",r)}).finally(()=>{$()})}function S(){n.style.display="block"}function $(){n.style.display="none"}function q(){const s=document.querySelector(".gallery");s.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
