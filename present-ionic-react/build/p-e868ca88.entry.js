import{r as s,h as t,H as i}from"./p-35ea044f.js";import{g as o}from"./p-364e0bda.js";import{m as a}from"./p-a84d699a.js";import{u as e}from"./p-392c6138.js";import"./p-6fd4985d.js";import"./p-f9f2f063.js";import"./p-dbc8000c.js";let r=class{constructor(t){s(this,t),this.visible=!1,this.autoHide=!0,this.onClick=()=>a.toggle(this.menu)}connectedCallback(){this.visibilityChanged()}async visibilityChanged(){this.visible=await e(this.menu)}render(){const s=o(this),a=this.autoHide&&!this.visible;return t(i,{onClick:this.onClick,"aria-hidden":a?"true":null,class:{[s]:!0,"menu-toggle-hidden":a}},t("slot",null))}};r.style=":host(.menu-toggle-hidden){display:none}";export{r as ion_menu_toggle}