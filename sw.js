if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>i(e,t),c={module:{uri:t},exports:o,require:l};s[t]=Promise.all(n.map((e=>c[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.586697f0.css",revision:null},{url:"assets/index.es.7db4c365.js",revision:null},{url:"assets/purify.es.20886f02.js",revision:null},{url:"index.html",revision:"de60b6d8317f87e151d12a51c1078ecf"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"pwa-192x192.png",revision:"59294a9e01a99c8313ab3989c56d45e4"},{url:"pwa-512x512.png",revision:"67e14cf9e4126d0e362b8366e79211ae"},{url:"maskable.png",revision:"e0c0ec6d50d18e94d3114abbcb7a6b2e"},{url:"manifest.webmanifest",revision:"68e14f3debd65928479b55fc4997ccc2"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));