(self.webpackChunkpresent_ionic_react=self.webpackChunkpresent_ionic_react||[]).push([[2811],{2456:(t,n,e)=>{"use strict";e.d(n,{c:()=>d});var o,r=e(655),a=e(8873),i=function(t){return t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()},l=function(t){if(void 0===o){var n=void 0!==t.style.animationName,e=void 0!==t.style.webkitAnimationName;o=!n&&e?"-webkit-":""}return o},f=function(t,n,e){var o=n.startsWith("animation")?l(t):"";t.style.setProperty(o+n,e)},c=function(t,n){var e=n.startsWith("animation")?l(t):"";t.style.removeProperty(e+n)},s=[],u=function(t,n){if(void 0===t&&(t=[]),void 0!==n){var e=Array.isArray(n)?n:[n];return(0,r.pr)(t,e)}return t},d=function(t){var n,e,o,d,m,p,y,v,h,g,E,b,S,A=[],T=[],x=[],q=!1,X={},C=[],k=[],w={},P=0,L=!1,R=!1,W=!0,D=!1,N=!0,O=t,B=[],F=[],I=[],z=[],_=[],j=[],M=[],$=[],K=[],Z=[],G="function"==typeof AnimationEffect||"function"==typeof window.AnimationEffect,H="function"==typeof Element&&"function"==typeof Element.prototype.animate&&G,J=function(t,n){return(n&&n.oneTimeCallback?F:B).push({c:t,o:n}),S},Q=function(){if(H)Z.forEach((function(t){t.cancel()})),Z.length=0;else{var t=I.slice();(0,a.r)((function(){t.forEach((function(t){c(t,"animation-name"),c(t,"animation-duration"),c(t,"animation-timing-function"),c(t,"animation-iteration-count"),c(t,"animation-delay"),c(t,"animation-play-state"),c(t,"animation-fill-mode"),c(t,"animation-direction")}))}))}},U=function(){_.forEach((function(t){t&&t.parentNode&&t.parentNode.removeChild(t)})),_.length=0},V=function(){return void 0!==m?m:y?y.getFill():"both"},Y=function(){return void 0!==h?h:void 0!==p?p:y?y.getDirection():"normal"},tt=function(){return L?"linear":void 0!==o?o:y?y.getEasing():"linear"},nt=function(){return R?0:void 0!==g?g:void 0!==e?e:y?y.getDuration():0},et=function(){return void 0!==d?d:y?y.getIterations():1},ot=function(){return void 0!==E?E:void 0!==n?n:y?y.getDelay():0},rt=function(){0!==P&&0==--P&&(function(){mt(),$.forEach((function(t){return t()})),K.forEach((function(t){return t()}));var t=W?1:0,n=C,e=k,o=w;I.forEach((function(t){var r=t.classList;for(var a in n.forEach((function(t){return r.add(t)})),e.forEach((function(t){return r.remove(t)})),o)o.hasOwnProperty(a)&&f(t,a,o[a])})),B.forEach((function(n){return n.c(t,S)})),F.forEach((function(n){return n.c(t,S)})),F.length=0,N=!0,W&&(D=!0),W=!0}(),y&&y.animationFinish())},at=function(n){void 0===n&&(n=!0),U();var e=function(t){return t.forEach((function(t){for(var n in t)if(t.hasOwnProperty(n)){var e,o=t[n];"easing"===n?(t[e="animation-timing-function"]=o,delete t[n]):(e=i(n))!==n&&(t[e]=o,delete t[n])}})),t}(A);I.forEach((function(o){if(e.length>0){var r=function(t){return void 0===t&&(t=[]),t.map((function(t){var n=t.offset,e=[];for(var o in t)t.hasOwnProperty(o)&&"offset"!==o&&e.push(o+": "+t[o]+";");return 100*n+"% { "+e.join(" ")+" }"})).join(" ")}(e),i=function(t,n,e){var o=function(t){var n=t.getRootNode();return n.head||n}(e),r=l(e),a=o.querySelector("#"+t);if(a)return a;var i=(e.ownerDocument||document).createElement("style");return i.id=t,i.textContent="@"+r+"keyframes "+t+" { "+n+" } @"+r+"keyframes "+t+"-alt { "+n+" }",o.appendChild(i),i}(b=void 0!==t?t:function(t){var n=s.indexOf(t);return n<0&&(n=s.push(t)-1),"ion-animation-"+n}(r),r,o);_.push(i),f(o,"animation-duration",nt()+"ms"),f(o,"animation-timing-function",tt()),f(o,"animation-delay",ot()+"ms"),f(o,"animation-fill-mode",V()),f(o,"animation-direction",Y());var c=et()===1/0?"infinite":et().toString();f(o,"animation-iteration-count",c),f(o,"animation-play-state","paused"),n&&f(o,"animation-name",i.id+"-alt"),(0,a.r)((function(){f(o,"animation-name",i.id||null)}))}}))},it=function(t){void 0===t&&(t=!0),function(){j.forEach((function(t){return t()})),M.forEach((function(t){return t()}));var t=T,n=x,e=X;I.forEach((function(o){var r=o.classList;for(var a in t.forEach((function(t){return r.add(t)})),n.forEach((function(t){return r.remove(t)})),e)e.hasOwnProperty(a)&&f(o,a,e[a])}))}(),A.length>0&&(H?(I.forEach((function(t){var n=t.animate(A,{id:O,delay:ot(),duration:nt(),easing:tt(),iterations:et(),fill:V(),direction:Y()});n.pause(),Z.push(n)})),Z.length>0&&(Z[0].onfinish=function(){rt()})):at(t)),q=!0},lt=function(t){if(t=Math.min(Math.max(t,0),.9999),H)Z.forEach((function(n){n.currentTime=n.effect.getComputedTiming().delay+nt()*t,n.pause()}));else{var n="-"+nt()*t+"ms";I.forEach((function(t){A.length>0&&(f(t,"animation-delay",n),f(t,"animation-play-state","paused"))}))}},ft=function(t){Z.forEach((function(t){t.effect.updateTiming({delay:ot(),duration:nt(),easing:tt(),iterations:et(),fill:V(),direction:Y()})})),void 0!==t&&lt(t)},ct=function(t,n){void 0===t&&(t=!0),(0,a.r)((function(){I.forEach((function(e){f(e,"animation-name",b||null),f(e,"animation-duration",nt()+"ms"),f(e,"animation-timing-function",tt()),f(e,"animation-delay",void 0!==n?"-"+n*nt()+"ms":ot()+"ms"),f(e,"animation-fill-mode",V()||null),f(e,"animation-direction",Y()||null);var o=et()===1/0?"infinite":et().toString();f(e,"animation-iteration-count",o),t&&f(e,"animation-name",b+"-alt"),(0,a.r)((function(){f(e,"animation-name",b||null)}))}))}))},st=function(t,n,e){return void 0===t&&(t=!1),void 0===n&&(n=!0),t&&z.forEach((function(o){o.update(t,n,e)})),H?ft(e):ct(n,e),S},ut=function(){q&&(H?Z.forEach((function(t){t.pause()})):I.forEach((function(t){f(t,"animation-play-state","paused")})))},dt=function(){v=void 0,rt()},mt=function(){v&&clearTimeout(v)},pt=function(t){return new Promise((function(n){t&&t.sync&&(R=!0,J((function(){return R=!1}),{oneTimeCallback:!0})),q||it(),D&&(H?(lt(0),ft()):ct(),D=!1),N&&(P=z.length+1,N=!1),J((function(){return n()}),{oneTimeCallback:!0}),z.forEach((function(t){t.play()})),H?(Z.forEach((function(t){t.play()})),0!==A.length&&0!==I.length||rt()):function(){if(mt(),(0,a.r)((function(){I.forEach((function(t){A.length>0&&f(t,"animation-play-state","running")}))})),0===A.length||0===I.length)rt();else{var t=ot()||0,n=nt()||0,e=et()||1;isFinite(e)&&(v=setTimeout(dt,t+n*e+100)),function(t,n){var e,o={passive:!0},r=function(){e&&e()},i=function(n){t===n.target&&(r(),mt(),(0,a.r)((function(){I.forEach((function(t){c(t,"animation-duration"),c(t,"animation-delay"),c(t,"animation-play-state")})),(0,a.r)(rt)})))};t&&(t.addEventListener("webkitAnimationEnd",i,o),t.addEventListener("animationend",i,o),e=function(){t.removeEventListener("webkitAnimationEnd",i,o),t.removeEventListener("animationend",i,o)})}(I[0])}}()}))},yt=function(t,n){var e,o=A[0];return void 0===o||void 0!==o.offset&&0!==o.offset?A=(0,r.pr)([(e={offset:0},e[t]=n,e)],A):o[t]=n,S};return S={parentAnimation:y,elements:I,childAnimations:z,id:O,animationFinish:rt,from:yt,to:function(t,n){var e,o=A[A.length-1];return void 0===o||void 0!==o.offset&&1!==o.offset?A=(0,r.pr)(A,[(e={offset:1},e[t]=n,e)]):o[t]=n,S},fromTo:function(t,n,e){return yt(t,n).to(t,e)},parent:function(t){return y=t,S},play:pt,pause:function(){return z.forEach((function(t){t.pause()})),ut(),S},stop:function(){z.forEach((function(t){t.stop()})),q&&(Q(),q=!1),L=!1,R=!1,N=!0,h=void 0,g=void 0,E=void 0,P=0,D=!1,W=!0},destroy:function(t){return z.forEach((function(n){n.destroy(t)})),function(t){Q(),t&&U()}(t),I.length=0,z.length=0,A.length=0,B.length=0,F.length=0,q=!1,N=!0,S},keyframes:function(t){return A=t,S},addAnimation:function(t){if(null!=t)if(Array.isArray(t))for(var n=0,e=t;n<e.length;n++){var o=e[n];o.parent(S),z.push(o)}else t.parent(S),z.push(t);return S},addElement:function(t){if(null!=t)if(1===t.nodeType)I.push(t);else if(t.length>=0)for(var n=0;n<t.length;n++)I.push(t[n]);else console.error("Invalid addElement value");return S},update:st,fill:function(t){return m=t,st(!0),S},direction:function(t){return p=t,st(!0),S},iterations:function(t){return d=t,st(!0),S},duration:function(t){return H||0!==t||(t=1),e=t,st(!0),S},easing:function(t){return o=t,st(!0),S},delay:function(t){return n=t,st(!0),S},getWebAnimations:function(){return Z},getKeyframes:function(){return A},getFill:V,getDirection:Y,getDelay:ot,getIterations:et,getEasing:tt,getDuration:nt,afterAddRead:function(t){return $.push(t),S},afterAddWrite:function(t){return K.push(t),S},afterClearStyles:function(t){void 0===t&&(t=[]);for(var n=0,e=t;n<e.length;n++){var o=e[n];w[o]=""}return S},afterStyles:function(t){return void 0===t&&(t={}),w=t,S},afterRemoveClass:function(t){return k=u(k,t),S},afterAddClass:function(t){return C=u(C,t),S},beforeAddRead:function(t){return j.push(t),S},beforeAddWrite:function(t){return M.push(t),S},beforeClearStyles:function(t){void 0===t&&(t=[]);for(var n=0,e=t;n<e.length;n++){var o=e[n];X[o]=""}return S},beforeStyles:function(t){return void 0===t&&(t={}),X=t,S},beforeRemoveClass:function(t){return x=u(x,t),S},beforeAddClass:function(t){return T=u(T,t),S},onFinish:J,progressStart:function(t,n){return void 0===t&&(t=!1),z.forEach((function(e){e.progressStart(t,n)})),ut(),L=t,q?st(!1,!0,n):it(),S},progressStep:function(t){return z.forEach((function(n){n.progressStep(t)})),lt(t),S},progressEnd:function(t,n,e){return L=!1,z.forEach((function(o){o.progressEnd(t,n,e)})),void 0!==e&&(g=e),D=!1,W=!0,0===t?("reverse"==(h="reverse"===Y()?"normal":"reverse")&&(W=!1),H?(st(),lt(1-n)):(E=(1-n)*nt()*-1,st(!1,!1))):1===t&&(H?(st(),lt(n)):(E=n*nt()*-1,st(!1,!1))),void 0!==t&&(J((function(){g=void 0,h=void 0,E=void 0}),{oneTimeCallback:!0}),y||pt()),S}}}},2811:(t,n,e)=>{"use strict";e.r(n),e.d(n,{iosTransitionAnimation:()=>u,shadow:()=>i}),e(3495),e(8873);var o=e(2456),r=e(946),a=function(t){return document.querySelector(t+".ion-cloned-element")},i=function(t){return t.shadowRoot||t},l=function(t){var n="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs"),e="ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(null!=n){var o=n.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return null!=o?o.querySelector(e):null}return t.querySelector(e)},f=function(t,n){var e="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs"),o=[];if(null!=e){var r=e.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");null!=r&&(o=r.querySelectorAll("ion-buttons"))}else o=t.querySelectorAll("ion-buttons");for(var a=0,i=o;a<i.length;a++){var l=i[a],f=l.closest("ion-header"),c=f&&!f.classList.contains("header-collapse-condense-inactive"),s=l.querySelector("ion-back-button"),u=l.classList.contains("buttons-collapse"),d="start"===l.slot||""===l.slot;if(null!==s&&d&&(u&&c&&n||!u))return s}return null},c=function(t,n,e,r,l,f){var c=n?"calc(100% - "+(f.right+4)+"px)":f.left-4+"px",s=n?"7px":"-7px",u=n?"-4px":"4px",d=n?"-4px":"4px",m=n?"right":"left",p=n?"left":"right",y=[{offset:0,opacity:0,transform:"translate3d("+s+", "+(l.top-40)+"px, 0) scale(2.1)"},{offset:1,opacity:1,transform:"translate3d("+u+", "+(f.top-46)+"px, 0) scale(1)"}],v=[{offset:0,opacity:1,transform:"translate3d("+u+", "+(f.top-46)+"px, 0) scale(1)"},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate3d("+s+", "+(l.top-40)+"px, 0) scale(2.1)"}],h=e?v:y,g=[{offset:0,opacity:0,transform:"translate3d("+d+", "+(f.top-41)+"px, 0) scale(0.6)"},{offset:1,opacity:1,transform:"translate3d("+d+", "+(f.top-46)+"px, 0) scale(1)"}],E=[{offset:0,opacity:1,transform:"translate3d("+d+", "+(f.top-46)+"px, 0) scale(1)"},{offset:.2,opacity:0,transform:"translate3d("+d+", "+(f.top-41)+"px, 0) scale(0.6)"},{offset:1,opacity:0,transform:"translate3d("+d+", "+(f.top-41)+"px, 0) scale(0.6)"}],b=e?E:g,S=(0,o.c)(),A=(0,o.c)(),T=a("ion-back-button"),x=i(T).querySelector(".button-text"),q=i(T).querySelector("ion-icon");T.text=r.text,T.mode=r.mode,T.icon=r.icon,T.color=r.color,T.disabled=r.disabled,T.style.setProperty("display","block"),T.style.setProperty("position","fixed"),A.addElement(q),S.addElement(x),S.beforeStyles({"transform-origin":m+" center"}).beforeAddWrite((function(){r.style.setProperty("display","none"),T.style.setProperty(m,c)})).afterAddWrite((function(){r.style.setProperty("display",""),T.style.setProperty("display","none"),T.style.removeProperty(m)})).keyframes(h),A.beforeStyles({"transform-origin":p+" center"}).keyframes(b),t.addAnimation([S,A])},s=function(t,n,e,r,i,l){var f,c=n?"calc(100% - "+i.right+"px)":i.left+"px",s=n?"-18px":"18px",u=n?"right":"left",d=[{offset:0,opacity:0,transform:"translate3d("+s+", "+(l.top-4)+"px, 0) scale(0.49)"},{offset:.1,opacity:0},{offset:1,opacity:1,transform:"translate3d(0, "+(i.top-2)+"px, 0) scale(1)"}],m=[{offset:0,opacity:.99,transform:"translate3d(0, "+(i.top-2)+"px, 0) scale(1)"},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate3d("+s+", "+(l.top-4)+"px, 0) scale(0.5)"}],p=e?d:m,y=a("ion-title"),v=(0,o.c)();y.innerText=r.innerText,y.size=r.size,y.color=r.color,v.addElement(y),v.beforeStyles((f={"transform-origin":u+" center",height:"46px",display:"",position:"relative"},f[u]=c,f)).beforeAddWrite((function(){r.style.setProperty("display","none")})).afterAddWrite((function(){r.style.setProperty("display",""),y.style.setProperty("display","none")})).keyframes(p),t.addAnimation(v)},u=function(t,n){try{var e="opacity",a="transform",u="rtl"===t.ownerDocument.dir,d=u?"-99.5%":"99.5%",m=u?"33%":"-33%",p=n.enteringEl,y=n.leavingEl,v="back"===n.direction,h=p.querySelector(":scope > ion-content"),g=p.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),E=p.querySelectorAll(":scope > ion-header > ion-toolbar"),b=(0,o.c)(),S=(0,o.c)();if(b.addElement(p).duration(n.duration||540).easing(n.easing||"cubic-bezier(0.32,0.72,0,1)").fill("both").beforeRemoveClass("ion-page-invisible"),y&&t){var A=(0,o.c)();A.addElement(t),b.addAnimation(A)}if(h||0!==E.length||0!==g.length?(S.addElement(h),S.addElement(g)):S.addElement(p.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),b.addAnimation(S),v?S.beforeClearStyles([e]).fromTo("transform","translateX("+m+")","translateX(0%)").fromTo(e,.8,1):S.beforeClearStyles([e]).fromTo("transform","translateX("+d+")","translateX(0%)"),h){var T=i(h).querySelector(".transition-effect");if(T){var x=T.querySelector(".transition-cover"),q=T.querySelector(".transition-shadow"),X=(0,o.c)(),C=(0,o.c)(),k=(0,o.c)();X.addElement(T).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),C.addElement(x).beforeClearStyles([e]).fromTo(e,0,.1),k.addElement(q).beforeClearStyles([e]).fromTo(e,.03,.7),X.addAnimation([C,k]),S.addAnimation([X])}}var w=p.querySelector("ion-header.header-collapse-condense"),P=function(t,n,e,o,r){var a=f(o,e),i=l(r),u=l(o),d=f(r,e),m=null!==a&&null!==i&&!e,p=null!==u&&null!==d&&e;if(m){var y=i.getBoundingClientRect(),v=a.getBoundingClientRect();s(t,n,e,i,y,v),c(t,n,e,a,y,v)}else if(p){var h=u.getBoundingClientRect(),g=d.getBoundingClientRect();s(t,n,e,u,h,g),c(t,n,e,d,h,g)}return{forward:m,backward:p}}(b,u,v,p,y),L=P.forward,R=P.backward;if(E.forEach((function(t){var n=(0,o.c)();n.addElement(t),b.addAnimation(n);var r=(0,o.c)();r.addElement(t.querySelector("ion-title"));var a,l=(0,o.c)(),f=Array.from(t.querySelectorAll("ion-buttons,[menuToggle]")),c=t.closest("ion-header"),s=c&&c.classList.contains("header-collapse-condense-inactive");a=v?f.filter((function(t){var n=t.classList.contains("buttons-collapse");return n&&!s||!n})):f.filter((function(t){return!t.classList.contains("buttons-collapse")})),l.addElement(a);var p=(0,o.c)();p.addElement(t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));var y=(0,o.c)();y.addElement(i(t).querySelector(".toolbar-background"));var h=(0,o.c)(),g=t.querySelector("ion-back-button");if(g&&h.addElement(g),n.addAnimation([r,l,p,y,h]),l.fromTo(e,.01,1),p.fromTo(e,.01,1),v)s||r.fromTo("transform","translateX("+m+")","translateX(0%)").fromTo(e,.01,1),p.fromTo("transform","translateX("+m+")","translateX(0%)"),h.fromTo(e,.01,1);else if(w||r.fromTo("transform","translateX("+d+")","translateX(0%)").fromTo(e,.01,1),p.fromTo("transform","translateX("+d+")","translateX(0%)"),y.beforeClearStyles([e,"transform"]),(null==c?void 0:c.translucent)?y.fromTo("transform",u?"translateX(-100%)":"translateX(100%)","translateX(0px)"):y.fromTo(e,.01,"var(--opacity)"),L||h.fromTo(e,.01,1),g&&!L){var E=(0,o.c)();E.addElement(i(g).querySelector(".button-text")).fromTo("transform",u?"translateX(-100px)":"translateX(100px)","translateX(0px)"),n.addAnimation(E)}})),y){var W=(0,o.c)(),D=y.querySelector(":scope > ion-content"),N=y.querySelectorAll(":scope > ion-header > ion-toolbar"),O=y.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(D||0!==N.length||0!==O.length?(W.addElement(D),W.addElement(O)):W.addElement(y.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),b.addAnimation(W),v){W.beforeClearStyles([e]).fromTo("transform","translateX(0%)",u?"translateX(-100%)":"translateX(100%)");var B=(0,r.g)(y);b.afterAddWrite((function(){"normal"===b.getDirection()&&B.style.setProperty("display","none")}))}else W.fromTo("transform","translateX(0%)","translateX("+m+")").fromTo(e,1,.8);if(D){var F=i(D).querySelector(".transition-effect");if(F){var I=F.querySelector(".transition-cover"),z=F.querySelector(".transition-shadow"),_=(0,o.c)(),j=(0,o.c)(),M=(0,o.c)();_.addElement(F).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),j.addElement(I).beforeClearStyles([e]).fromTo(e,.1,0),M.addElement(z).beforeClearStyles([e]).fromTo(e,.7,.03),_.addAnimation([j,M]),W.addAnimation([_])}}N.forEach((function(t){var n=(0,o.c)();n.addElement(t);var r=(0,o.c)();r.addElement(t.querySelector("ion-title"));var l=(0,o.c)(),f=t.querySelectorAll("ion-buttons,[menuToggle]"),c=t.closest("ion-header"),s=c&&c.classList.contains("header-collapse-condense-inactive"),d=Array.from(f).filter((function(t){var n=t.classList.contains("buttons-collapse");return n&&!s||!n}));l.addElement(d);var p=(0,o.c)(),y=t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");y.length>0&&p.addElement(y);var h=(0,o.c)();h.addElement(i(t).querySelector(".toolbar-background"));var g=(0,o.c)(),E=t.querySelector("ion-back-button");if(E&&g.addElement(E),n.addAnimation([r,l,p,g,h]),b.addAnimation(n),g.fromTo(e,.99,0),l.fromTo(e,.99,0),p.fromTo(e,.99,0),v){if(s||r.fromTo("transform","translateX(0%)",u?"translateX(-100%)":"translateX(100%)").fromTo(e,.99,0),p.fromTo("transform","translateX(0%)",u?"translateX(-100%)":"translateX(100%)"),h.beforeClearStyles([e,"transform"]),(null==c?void 0:c.translucent)?h.fromTo("transform","translateX(0px)",u?"translateX(-100%)":"translateX(100%)"):h.fromTo(e,"var(--opacity)",0),E&&!R){var S=(0,o.c)();S.addElement(i(E).querySelector(".button-text")).fromTo("transform","translateX(0%)","translateX("+(u?-124:124)+"px)"),n.addAnimation(S)}}else s||r.fromTo("transform","translateX(0%)","translateX("+m+")").fromTo(e,.99,0).afterClearStyles([a,e]),p.fromTo("transform","translateX(0%)","translateX("+m+")").afterClearStyles([a,e]),g.afterClearStyles([e]),r.afterClearStyles([e]),l.afterClearStyles([e])}))}return b}catch(t){throw t}}}}]);