import{e as o,w as t}from"./p-35ea044f.js";import{c as n}from"./p-f9f2f063.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const s=()=>{const s=window;s.addEventListener("statusTap",(()=>{o((()=>{const o=document.elementFromPoint(s.innerWidth/2,s.innerHeight/2);if(!o)return;const e=o.closest("ion-content");e&&new Promise((o=>n(e,o))).then((()=>{t((async()=>{e.style.setProperty("--overflow","hidden"),await e.scrollToTop(300),e.style.removeProperty("--overflow")}))}))}))}))};export{s as startStatusTap}