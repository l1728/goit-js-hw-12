import{a as $,S as d,i as S}from"./assets/vendor-6e0bf343.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function u(a,r){const e=`https://pixabay.com/api/?key=39588460-df52399cf23d63ffd2a80219a&q=${a}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=15`;try{const t=await $.get(e);return!t.data.hits||t.data.hits.length===0?[]:t.data.hits}catch(t){return console.error("Error fetching images:",t),[]}}const q=new d(".gallery a",{captionDelay:250,captionsData:"alt"});function y(a){const r=document.querySelector(".gallery"),o=s(a);r.insertAdjacentHTML("beforeend",o),q.refresh();function s(e){return e.map(({webformatURL:t,largeImageURL:n,tags:h,likes:b,views:L,comments:v,downloads:w})=>`
     <li class="gallery-item">
     <a class="gallery-link" href="${n}">
      <img class="gallery-image"
      src="${t}"
      alt="${h}"
      loading="lazy"
      />
     </a>
     <ul class="image-details">
       <li class="activities"><span class="details">Likes</span> ${b}</li>
       <li class="activities"><span class="details">Views</span> ${L}</li>
       <li class="activities"><span class="details">Comments</span> ${v}</li>
       <li class="activities"><span class="details">Downloads</span> ${w}</li>
     </ul>
     </li>`).join("")}}const E=new d(".gallery a",{captionDelay:250,captionsData:"alt"});document.addEventListener("DOMContentLoaded",()=>{document.querySelector(".load-more-btn").addEventListener("click",p)});const I=document.getElementById("search-form");I.addEventListener("submit",M);const m=document.querySelector(".loader"),i=document.querySelector(".load-more-btn");i.addEventListener("click",p);let c=1,l="";async function M(a){a.preventDefault(),f(),B();const r=document.getElementById("search-input");if(l=r.value.trim(),l!==""){c=1;try{const o=await u(l,c);r.value="",o.length===0?(S.info({title:"Information",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red",maxWidth:"500px"}),i.style.display="none"):(y(o),E.refresh(),i.style.display="block")}catch(o){console.error("Error fetching images:",o)}finally{g()}}}async function p(){c+=1,f();try{const a=await u(l,c);y(a),i.style.display="block";const r=document.querySelector(".gallery-item");if(r){const o=r.getBoundingClientRect().height;window.scrollBy({left:0,top:o*2,behavior:"smooth"})}a.length===0&&(i.style.display="none")}catch(a){alert(a.message)}finally{g()}}function f(){m.style.display="block"}function g(){m.style.display="none"}function B(){const a=document.querySelector(".gallery");a.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
