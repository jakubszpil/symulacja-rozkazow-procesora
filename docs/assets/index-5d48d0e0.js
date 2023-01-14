(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();var i=(n=>(n.MOV="MOV",n.XCHG="XCHG",n))(i||{});const f=n=>[...Array(n)].map(()=>Math.floor(Math.random()*16).toString(16)).join(""),p=document.querySelectorAll("[data-reset]"),g=document.querySelectorAll("[data-random]"),c=document.getElementById("form"),u=document.getElementById("history");c==null||c.addEventListener("submit",n=>{var d;n.preventDefault();const r=(d=n.submitter)==null?void 0:d.dataset.action.toUpperCase(),a=i[r],o=String(c.source.value),e=String(c.destination.value),t=document.getElementById(o),s=document.getElementById(e);if(a===i.MOV){const l=t.value;t.value="",s.value=l,u.innerHTML+=`
      <div class="flex gap-3 items-center h-max">
        <span class="font-bold">${r}:</span>
        <span>${o} => ${e}</span>
      </div>
    `;return}if(a===i.XCHG){const l=t.value,m=s.value;t.value=m,s.value=l,u.innerHTML+=`
      <div class="flex gap-3 items-center h-max">
        <span class="font-bold">${r}:</span>
        <span>${o} <=> ${e}</span>
      </div>
    `;return}});c.addEventListener("reset",()=>{u.innerHTML=""});p.forEach(n=>{n.addEventListener("click",r=>{const o=r.target.dataset.reset,e=document.getElementById(o);e.value=""})});g.forEach(n=>{n.addEventListener("click",r=>{const o=r.target.dataset.random,e=document.getElementById(o);e.value=f(4).toUpperCase()})});
