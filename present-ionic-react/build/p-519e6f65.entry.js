import{r as t,h as o}from"./p-35ea044f.js";import{t as s}from"./p-91853b91.js";import"./p-364e0bda.js";import"./p-adeb1d66.js";import"./p-b3e6427d.js";import"./p-703ca87c.js";import"./p-70b2452c.js";import"./p-69e7783d.js";import"./p-dbc8000c.js";import"./p-f9f2f063.js";import"./p-11386070.js";import"./p-fcf33e2f.js";import"./p-8c6b6038.js";import"./p-6fd4985d.js";let e=class{constructor(o){t(this,o),this.openToast=async()=>{(await s.create({color:"dark",duration:2e3,message:"Paired successfully",buttons:[{text:"Close",role:"cancel"}]})).present()}}render(){return[o("ion-header",{translucent:!0},o("ion-toolbar",null,o("ion-buttons",{slot:"start"},o("ion-back-button",{defaultHref:"/"})),o("ion-title",null,"Toast"))),o("ion-content",{fullscreen:!0,class:"component-content"},o("component-details",{description:"The <b>Toast</b> is a subtle notification commonly used in modern\n      applications. It can be used to provide feedback about an operation or to display a\n      system message. It appears on top of the app's content, and can be dismissed by the\n      app to resume user interaction with the app.",url:"toast"}),o("div",{class:"ion-padding-start ion-padding-end"},o("ion-button",{expand:"block",onClick:this.openToast},"Open Toast")))]}};e.style="";export{e as component_toast}