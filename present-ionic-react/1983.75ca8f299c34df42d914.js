(self.webpackChunkpresent_ionic_react=self.webpackChunkpresent_ionic_react||[]).push([[1983],{1983:(e,i,t)=>{"use strict";t.r(i),t.d(i,{web_social_share:()=>f});var o=t(1771),a=function(e,i,t,o){return new(t||(t=Promise))((function(a,n){function r(e){try{c(o.next(e))}catch(e){n(e)}}function s(e){try{c(o.throw(e))}catch(e){n(e)}}function c(e){var i;e.done?a(e.value):(i=e.value,i instanceof t?i:new t((function(e){e(i)}))).then(r,s)}c((o=o.apply(e,i||[])).next())}))},n=function(e,i){var t,o,a,n,r={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return n={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function s(n){return function(s){return function(n){if(t)throw new TypeError("Generator is already executing.");for(;r;)try{if(t=1,o&&(a=2&n[0]?o.return:n[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,n[1])).done)return a;switch(o=0,a&&(n=[2&n[0],a.value]),n[0]){case 0:case 1:a=n;break;case 4:return r.label++,{value:n[1],done:!1};case 5:r.label++,o=n[1],n=[0];continue;case 7:n=r.ops.pop(),r.trys.pop();continue;default:if(!((a=(a=r.trys).length>0&&a[a.length-1])||6!==n[0]&&2!==n[0])){r=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){r.label=n[1];break}if(6===n[0]&&r.label<a[1]){r.label=a[1],a=n;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(n);break}a[2]&&r.ops.pop(),r.trys.pop();continue}n=i.call(e,r)}catch(e){n=[6,e],o=0}finally{t=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,s])}}},r=function(){function e(){}return e.share=function(e){return a(this,void 0,void 0,(function(){var i;return n(this,(function(t){return e.socialShareType&&"feed"===e.socialShareType?(i="https://www.facebook.com/dialog/feed?",e.socialShareVia&&(i+="&app_id="+encodeURIComponent(e.socialShareVia)),e.socialShareRedirectUri&&(i+="&redirect_uri="+encodeURIComponent(e.socialShareRedirectUri)),e.socialShareUrl&&(i+="&link="+encodeURIComponent(e.socialShareUrl)),e.socialShareTo&&(i+="&to="+encodeURIComponent(e.socialShareTo)),e.socialShareDisplay&&(i+="&display="+encodeURIComponent(e.socialShareDisplay)),e.socialShareRef&&(i+="&ref="+encodeURIComponent(e.socialShareRef)),e.socialShareFrom&&(i+="&from="+encodeURIComponent(e.socialShareFrom)),e.socialShareSource&&(i+="&source="+encodeURIComponent(e.socialShareSource)),window.open(i,"Facebook","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2)):e.socialShareType&&"share"===e.socialShareType?(i="https://www.facebook.com/dialog/share?",e.socialShareVia&&(i+="&app_id="+encodeURIComponent(e.socialShareVia)),e.socialShareRedirectUri&&(i+="&redirect_uri="+encodeURIComponent(e.socialShareRedirectUri)),e.socialShareUrl&&(i+="&href="+encodeURIComponent(e.socialShareUrl)),e.socialShareQuote&&(i+="&quote="+encodeURIComponent(e.socialShareQuote)),e.socialShareDisplay&&(i+="&display="+encodeURIComponent(e.socialShareDisplay)),e.socialShareMobileiframe&&(i+="&mobile_iframe="+encodeURIComponent(e.socialShareMobileiframe)),e.socialShareHashtags&&(i+="&hashtag="+encodeURIComponent(e.socialShareHashtags)),window.open(i,"Facebook","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2)):e.socialShareType&&"send"===e.socialShareType?(i="https://www.facebook.com/dialog/send?",e.socialShareVia&&(i+="&app_id="+encodeURIComponent(e.socialShareVia)),e.socialShareRedirectUri&&(i+="&redirect_uri="+encodeURIComponent(e.socialShareRedirectUri)),e.socialShareUrl&&(i+="&link="+encodeURIComponent(e.socialShareUrl)),e.socialShareTo&&(i+="&to="+encodeURIComponent(e.socialShareTo)),e.socialShareDisplay&&(i+="&display="+encodeURIComponent(e.socialShareDisplay)),window.open(i,"Facebook","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2)):window.open("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(e.socialShareUrl||window.location.href),"Facebook","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2),[2]}))}))},e}(),s=function(){function e(){}return e.isMobile=function(){if(!window)return!1;var e=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))},e.staticOpenNewWindow=function(e){window.self!==window.top?window.open(e,"_blank"):window.open(e,"_self")},e}(),c=function(){function e(){}return e.share=function(e){return a(this,void 0,void 0,(function(){var i;return n(this,(function(t){return i="https://www.twitter.com/intent/tweet?",e.socialShareText&&(i+="text="+encodeURIComponent(e.socialShareText)),e.socialShareVia&&(i+="&via="+encodeURIComponent(e.socialShareVia)),e.socialShareHashtags&&(i+="&hashtags="+encodeURIComponent(e.socialShareHashtags)),i+="&url="+encodeURIComponent(e.socialShareUrl||window.location.href),s.isMobile()?s.staticOpenNewWindow(i):window.open(i,"Twitter","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2),[2]}))}))},e}(),h=function(){function e(){}return e.share=function(e){return a(this,void 0,void 0,(function(){var i;return n(this,(function(t){return i="mailto:",e.socialShareTo&&(i+=encodeURIComponent(e.socialShareTo)),i+="?",e.socialShareBody&&(i+="body="+encodeURIComponent(e.socialShareBody)),e.socialShareSubject&&(i+="&subject="+encodeURIComponent(e.socialShareSubject)),e.socialShareCc&&(i+="&cc="+encodeURIComponent(e.socialShareCc)),e.socialShareBcc&&(i+="&bcc="+encodeURIComponent(e.socialShareBcc)),s.staticOpenNewWindow(i),[2]}))}))},e}(),l=function(){function e(){}return e.share=function(e){return a(this,void 0,void 0,(function(){var i;return n(this,(function(t){return i="https://www.linkedin.com/shareArticle?mini=true",i+="&url="+encodeURIComponent(e.socialShareUrl||window.location.href),e.socialShareText&&(i+="&title="+encodeURIComponent(e.socialShareText)),e.socialShareDescription&&(i+="&summary="+encodeURIComponent(e.socialShareDescription)),e.socialShareSource&&(i+="&source="+encodeURIComponent(e.socialShareSource)),window.open(i,"Linkedin","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2),[2]}))}))},e}(),d=function(){function e(){}return e.share=function(e){return a(this,void 0,void 0,(function(){return n(this,(function(i){return window.open("https://www.pinterest.com/pin/create/button/?url="+encodeURIComponent(e.socialShareUrl||window.location.href)+"&media="+encodeURIComponent(e.socialShareMedia)+"&description="+encodeURIComponent(e.socialShareText),"Pinterest","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2),[2]}))}))},e}(),p=function(){function e(){}return e.share=function(e){return a(this,void 0,void 0,(function(){var i;return n(this,(function(t){return i="https://www.reddit.com/",e.socialShareSubreddit?i+="r/"+e.socialShareSubreddit+"/submit?url=":i+="submit?url=",e.socialSharePopupWidth<900&&(e.socialSharePopupWidth=900),e.socialSharePopupHeight<650&&(e.socialSharePopupHeight=650),window.open(i+encodeURIComponent(e.socialShareUrl||window.location.href)+"&title="+encodeURIComponent(e.socialShareText),"Reddit","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2),[2]}))}))},e}(),u=function(){function e(){}return e.share=function(e){return a(this,void 0,void 0,(function(){var i,t;return n(this,(function(o){return i=s.isMobile(),t=i?"https://api.whatsapp.com/send?text=":"https://web.whatsapp.com/send?text=",e.socialShareText&&(t+=encodeURIComponent(e.socialShareText)+"%0A"),t+=encodeURIComponent(e.socialShareUrl||window.location.href),i?s.staticOpenNewWindow(t):window.open(t,"WhatsApp","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2),[2]}))}))},e}(),w=function(){function e(){}return e.share=function(e){return a(this,void 0,void 0,(function(){return n(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,navigator.clipboard.writeText(e.socialShareUrl||window.location.href)];case 1:case 2:return i.sent(),[3,3];case 3:return[2]}}))}))},e}(),b=function(){function e(){}return e.share=function(e){return a(this,void 0,void 0,(function(){var i;return n(this,(function(t){return i="https://news.ycombinator.com/submitlink?u=",i+=encodeURIComponent(e.socialShareUrl||window.location.href),e.socialShareText&&(i+="&t="+encodeURIComponent(e.socialShareText)),s.staticOpenNewWindow(i),[2]}))}))},e}(),f=function(){function e(e){var i=this;(0,o.r)(this,e),this.closed=(0,o.c)(this,"closed",7),this.handleFacebookShare=function(e){return a(i,void 0,void 0,(function(){return n(this,(function(i){switch(i.label){case 0:return[4,r.share(e)];case 1:return i.sent(),[2]}}))}))},this.handleTwitterShare=function(e){return a(i,void 0,void 0,(function(){return n(this,(function(i){switch(i.label){case 0:return[4,c.share(e)];case 1:return i.sent(),[2]}}))}))},this.handleEmailShare=function(e){return a(i,void 0,void 0,(function(){return n(this,(function(i){switch(i.label){case 0:return[4,h.share(e)];case 1:return i.sent(),[2]}}))}))},this.handleLinkedinShare=function(e){return a(i,void 0,void 0,(function(){return n(this,(function(i){switch(i.label){case 0:return[4,l.share(e)];case 1:return i.sent(),[2]}}))}))},this.handlePinterestShare=function(e){return a(i,void 0,void 0,(function(){return n(this,(function(i){switch(i.label){case 0:return[4,d.share(e)];case 1:return i.sent(),[2]}}))}))},this.handleRedditShare=function(e){return a(i,void 0,void 0,(function(){return n(this,(function(i){switch(i.label){case 0:return[4,p.share(e)];case 1:return i.sent(),[2]}}))}))},this.handleWhatsappShare=function(e){return a(i,void 0,void 0,(function(){return n(this,(function(i){switch(i.label){case 0:return[4,u.share(e)];case 1:return i.sent(),[2]}}))}))},this.handleCopyShare=function(e){return a(i,void 0,void 0,(function(){return n(this,(function(i){switch(i.label){case 0:return[4,w.share(e)];case 1:return i.sent(),[2]}}))}))},this.handleHackerNewsShare=function(e){return a(i,void 0,void 0,(function(){return n(this,(function(i){switch(i.label){case 0:return[4,b.share(e)];case 1:return i.sent(),[2]}}))}))}}return e.prototype.hide=function(){var e=this,i=this.el.shadowRoot.querySelector("div.web-social-share");i?(i.classList.add("web-social-share-transition-close"),setTimeout((function(){e.show=!1,i.classList.remove("web-social-share-transition-close"),e.closed.emit(!0)}),200)):(this.show=!1,this.closed.emit(!0))},e.prototype.render=function(){var e=this;return(0,o.h)("div",{class:this.show?"web-social-share web-social-share-open":"web-social-share web-social-share-close"},(0,o.h)("div",{class:"web-social-share-backdrop",onClick:function(){return e.hide()}}),(0,o.h)("div",{class:"web-social-share-action-sheet",onClick:function(){return e.hide()}},(0,o.h)("div",{class:"web-social-share-action-sheet-container"},(0,o.h)("div",{class:"web-social-share-action-sheet-group"},this.renderTargets()))))},e.prototype.renderTargets=function(){var e=this;return this.share&&this.share.config?this.share.config.map((function(i){return(0,o.h)("div",{class:"web-social-share-target"},e.renderButtons(i))})):(0,o.h)("span",null)},e.prototype.renderButtons=function(e){return e.facebook?this.renderButton(e.facebook,"facebook",this.handleFacebookShare,"Facebook"):e.twitter?this.renderButton(e.twitter,"twitter",this.handleTwitterShare,"Twitter"):e.email?this.renderButton(e.email,"email",this.handleEmailShare,"Email"):e.linkedin?this.renderButton(e.linkedin,"linkedin",this.handleLinkedinShare,"Linkedin"):e.pinterest?this.renderButton(e.pinterest,"pinterest",this.handlePinterestShare,"Pinterest"):e.reddit?this.renderButton(e.reddit,"reddit",this.handleRedditShare,"Reddit"):e.whatsapp?this.renderButton(e.whatsapp,"whatsapp",this.handleWhatsappShare,"WhatsApp"):e.copy?this.renderButton(e.copy,"copy",this.handleCopyShare,"Copy"):e.hackernews?this.renderButton(e.hackernews,"hackernews",this.handleHackerNewsShare,"Hacker News"):void 0},e.prototype.renderButton=function(e,i,t,a){var n=this;return(0,o.h)("button",{onClick:function(i){return n.handleShare(i,e,t)},class:"web-social-share-button"},(0,o.h)("div",{class:"web-social-share-button-icon"},(0,o.h)("slot",{name:i})),this.renderName(e,a))},e.prototype.handleShare=function(e,i,t){return a(this,void 0,void 0,(function(){return n(this,(function(o){switch(o.label){case 0:return e.stopPropagation(),[4,t(i)];case 1:return o.sent(),this.hide(),[2]}}))}))},e.prototype.renderName=function(e,i){return this.share.displayNames?(0,o.h)("p",null,e&&e.brandName&&""!==e.brandName?e.brandName:i):(0,o.h)("span",null)},Object.defineProperty(e.prototype,"el",{get:function(){return(0,o.g)(this)},enumerable:!1,configurable:!0}),e}();f.style="div.web-social-share{visibility:hidden;opacity:0;cursor:pointer;-ms-touch-action:manipulation;touch-action:manipulation}div.web-social-share.web-social-share-open{visibility:visible;opacity:1}div.web-social-share.web-social-share-open div.web-social-share-backdrop{opacity:var(--web-social-share-backdrop-opacity, 0.25)}div.web-social-share.web-social-share-open div.web-social-share-action-sheet{opacity:1}div.web-social-share.web-social-share-open div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{height:var(--web-social-share-height, 80px)}@media (max-width: 540px){div.web-social-share.web-social-share-open div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{height:var(--web-social-share-height-small-device, 140px)}}div.web-social-share.web-social-share-open.web-social-share-transition-close div.web-social-share-backdrop{opacity:0}div.web-social-share.web-social-share-open.web-social-share-transition-close div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{height:0}div.web-social-share div.web-social-share-backdrop{opacity:0;-webkit-transition:opacity 0.1s linear;transition:opacity 0.1s linear;background-color:var(--web-social-share-backdrop-background, black);z-index:var(--web-social-share-zindex, 1000);-webkit-transform:translate3d(0, 0, 2px);transform:translate3d(0, 0, 2px);left:0;top:0;position:fixed;height:100%;width:100%}div.web-social-share div.web-social-share-action-sheet{left:0;right:0;top:0;bottom:0;margin:auto;position:fixed;z-index:calc(var(--web-social-share-zindex, 1000) + 1);-webkit-transform:translate3d(0, 0, 3px);transform:translate3d(0, 0, 3px);width:100%;max-width:540px}@media (min-width: 540px){div.web-social-share div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{border-radius:var(--web-social-share-action-sheet-group-border-radius, 8px 8px 0 0)}}div.web-social-share div.web-social-share-action-sheet div.web-social-share-action-sheet-container{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}div.web-social-share div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{-webkit-box-shadow:var(--web-social-share-action-sheet-group-box-shadow, 0 0 8px 4px rgba(0, 0, 0, 0.1));box-shadow:var(--web-social-share-action-sheet-group-box-shadow, 0 0 8px 4px rgba(0, 0, 0, 0.1));z-index:calc(var(--web-social-share-zindex, 1000) + 10);-webkit-transform:translate3d(0, 0, 10px);transform:translate3d(0, 0, 10px);background:var(--web-social-share-action-sheet-group-background, #fafafa);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap;height:0;-webkit-transition-timing-function:cubic-bezier(0.36, 0.66, 0.04, 1);transition-timing-function:cubic-bezier(0.36, 0.66, 0.04, 1);-webkit-transition:height 0.2s ease-in;transition:height 0.2s ease-in}@media (max-width: 540px){div.web-social-share div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{-ms-flex-pack:start;justify-content:flex-start}}div.web-social-share div.web-social-share-target{margin:auto;width:var(--web-social-share-target-width, 4rem);height:var(--web-social-share-target-height, 3rem);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}div.web-social-share div.web-social-share-target button{position:relative;cursor:pointer;border:0;background:transparent;width:var(--web-social-share-button-width, 100%);height:var(--web-social-share-button-height, 100%);font-size:var(--web-social-share-button-font-size)}div.web-social-share div.web-social-share-target p{margin:var(--web-social-share-brand-margin, 2px 0);color:var(--web-social-share-brand-color, inherit);font-size:var(--web-social-share-brand-font-size, 0.6rem)}div.web-social-share div.web-social-share-target div.web-social-share-button-icon{margin:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}::slotted([slot=facebook]),::slotted([slot=twitter]),::slotted([slot=email]),::slotted([slot=linkedin]),::slotted([slot=pinterest]),::slotted([slot=reddit]),::slotted([slot=whatsapp]),::slotted([slot=copy]),::slotted([slot=hackernews]){display:none}"}}]);