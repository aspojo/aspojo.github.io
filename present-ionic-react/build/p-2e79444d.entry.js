import{r as e,h as t}from"./p-35ea044f.js";import{g as o}from"./p-827dabd0.js";import{a as n}from"./p-91853b91.js";import"./p-364e0bda.js";import"./p-adeb1d66.js";import"./p-b3e6427d.js";import"./p-703ca87c.js";import"./p-70b2452c.js";import"./p-69e7783d.js";import"./p-dbc8000c.js";import"./p-f9f2f063.js";import"./p-11386070.js";import"./p-fcf33e2f.js";import"./p-8c6b6038.js";import"./p-6fd4985d.js";let i=class{constructor(t){e(this,t),this.open=async()=>{const e=o(),t=await n.create({header:"Albums",buttons:[{text:"Delete",role:"destructive",icon:"ios"!==e?"trash-outline":null,handler:()=>{console.log("Delete clicked")}},{text:"Share",icon:"ios"!==e?"share-outline":null,handler:()=>{console.log("Share clicked")}},{text:"Play (open modal)",icon:"ios"!==e?"play-circle-outline":null,handler:()=>{console.log("Play clicked")}},{text:"Favorite",icon:"ios"!==e?"heart-outline":null,handler:()=>{console.log("Favorite clicked")}},{text:"Cancel",icon:"ios"!==e?"close":null,role:"cancel",handler:()=>{console.log("Cancel clicked")}}]});await t.present()}}render(){return[t("ion-header",{translucent:!0},t("ion-toolbar",null,t("ion-buttons",{slot:"start"},t("ion-back-button",{defaultHref:"/"})),t("ion-title",null,"Action Sheet"))),t("ion-content",{fullscreen:!0,class:"component-content"},t("component-details",{description:"The <b>Action Sheet</b> is a dialog that displays a set of options. It appears on\n      top of the app’s content, and must be manually dismissed by the user before they can\n      resume interaction with the app. There are multiple ways to dismiss the action sheet,\n      including tapping the backdrop or hitting the escape key.",url:"action-sheet"}),t("div",{class:"ion-padding-start ion-padding-end"},t("ion-button",{expand:"block",onClick:this.open},"Open Action Sheet")))]}};i.style="";export{i as component_action_sheet}