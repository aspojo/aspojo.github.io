import{r as t,h as i,c as o}from"./p-35ea044f.js";import{b as n}from"./p-91853b91.js";import"./p-364e0bda.js";import"./p-adeb1d66.js";import"./p-b3e6427d.js";import"./p-703ca87c.js";import"./p-70b2452c.js";import"./p-69e7783d.js";import"./p-dbc8000c.js";import"./p-f9f2f063.js";import"./p-11386070.js";import"./p-fcf33e2f.js";import"./p-8c6b6038.js";import"./p-6fd4985d.js";let e=class{constructor(i){t(this,i),this.processForm=async t=>{t.preventDefault(),(await n.create({header:"Account Created",message:`Created account for: <b>${this.firstName} ${this.lastName}</b>`,buttons:[{text:"OK"}]})).present()}}render(){return[i("ion-header",{translucent:!0},i("ion-toolbar",null,i("ion-buttons",{slot:"start"},i("ion-back-button",{defaultHref:"/"})),i("ion-title",null,"Input"))),i("ion-content",{fullscreen:!0},i("form",{onSubmit:this.processForm},i("ion-list",{lines:"full",class:"ion-no-margin ion-no-padding"},i("ion-item",null,i("ion-label",{position:"stacked"},"First Name ",i("ion-text",{color:"danger"},"*")),i("ion-input",{required:!0,type:"text",onInput:t=>{this.firstName=t.target.value},value:this.firstName})),i("ion-item",null,i("ion-label",{position:"stacked"},"Last Name ",i("ion-text",{color:"danger"},"*")),i("ion-input",{required:!0,type:"text",onInput:t=>{this.lastName=t.target.value},value:this.lastName})),i("ion-item",null,i("ion-label",{position:"stacked"},"Address"),i("ion-input",{placeholder:"Address Line 1"}),i("ion-input",{placeholder:"Address Line 2"}),i("ion-input",{placeholder:"City"}),i("ion-input",{placeholder:"State"}),i("ion-input",{placeholder:"Zip Code"})),i("ion-item",null,i("ion-label",{position:"stacked"},"Notes"),i("ion-textarea",null))),i("div",{class:"ion-padding"},i("ion-button",{expand:"block",type:"submit",class:"ion-no-margin"},"Create account"))))]}get el(){return o(this)}};e.style="";export{e as component_input}