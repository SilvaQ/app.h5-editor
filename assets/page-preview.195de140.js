import{S as t,i as e,h as a,j as n,m as s,t as o,k as c,l as i,_ as r,aa as d,J as u,y as l,O as p,n as $,x as m,ac as f,ad as g,M as h,p as x,ap as w,aq as y}from"./vendor.6ac7b93b.js";import{P as b}from"./page-container.9d726803.js";import{u as v,g as j,b as k,C as q,W as z,c as C,r as P,d as R}from"./index.538d7bd0.js";function S(t){let e;return{c(){e=u("div"),l(e,"id","canvas-container"),l(e,"class","content-container absolute inset-0 svelte-1lg75l6")},m(a,n){p(a,e,n),t[5](e)},p:$,d(a){a&&m(e),t[5](null)}}}function E(t){let e;return{c(){e=h("导出图片")},m(t,a){p(t,e,a)},d(t){t&&m(e)}}}function L(t){let e,a;return e=new f({props:{size:"small",$$slots:{default:[E]},$$scope:{ctx:t}}}),e.$on("click",t[3]),{c(){n(e.$$.fragment)},m(t,n){s(e,t,n),a=!0},p(t,a){const n={};16384&a&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){a||(o(e.$$.fragment,t),a=!0)},o(t){c(e.$$.fragment,t),a=!1},d(t){i(e,t)}}}function W(t){let e,a;return e=new b({props:{title:"页面预览",layout:"workspace",$$slots:{action:[L],default:[S]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment)},m(t,n){s(e,t,n),a=!0},p(t,[a]){const n={};16385&a&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){a||(o(e.$$.fragment,t),a=!0)},o(t){c(e.$$.fragment,t),a=!1},d(t){i(e,t)}}}function D(t,e,a){let n,s,o,{router:c}=e;const{stage:i,page:u,dispatch:l,zoom:p}=v((t=>t.editor));function $(t){window.addEventListener("resize",(()=>P(t)))}function m(){l("updatePreview",!0),l("updateZoom",1),l("updateSelected",[])}return r(t,i,(t=>a(6,n=t))),r(t,p,(t=>a(7,s=t))),d((()=>{const{id:t}=c.currentRoute.query;!function(){const t=C(o);w(y(R),y($),y(P),y(m))(t)}(),t&&function(t){q.get().database().collection("pages").doc(t).get().then((({data:t})=>{const[e]=t;e&&(l("updatePage",e.page),l("updateWidgets",x(z,e.widgets)),setTimeout((()=>{l("renderStage")}),500))}))}(t)})),t.$$set=t=>{"router"in t&&a(4,c=t.router)},[o,i,p,function(){const{content:t}=j(),e=t.clip().width/k.editor.content.scale*s,a=t.clip().height/k.editor.content.scale*s;((t,e)=>{const a=document.createElement("a");a.download=e,a.href=t,document.body.appendChild(a),a.click(),document.body.removeChild(a)})(n.toDataURL({width:e,height:a,x:t.x(),y:t.y(),pixelRatio:k.editor.content.scale,quality:1}),"stage.png")},c,function(t){g[t?"unshift":"push"]((()=>{o=t,a(0,o)}))}]}class J extends t{constructor(t){super(),e(this,t,D,W,a,{router:4})}}export{J as default};
