let APP_VERSION = '1.0.4';

self.importScripts('./third_party/workbox-v6.5.3/workbox-sw.js');
workbox.setConfig({
    modulePathPrefix: './third_party/workbox-v6.5.3/',
    debug: false
});
const {Route, RegExpRoute, NavigationRoute, Router,registerRoute} = workbox.routing;
const {NetworkFirst} = workbox.strategies;


workbox.routing.registerRoute(new Route(({ request, sameOrigin }) => {
    console.log("request",request.url);
    return sameOrigin;
}, new NetworkFirst({cacheName: "roots"})));





self.addEventListener('message', (event) => {
    if (event.data.type === 'GET_VERSION') {
        event.ports[0].postMessage(APP_VERSION);
    }
});
