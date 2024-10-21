import{r as u,s as k,j as o,R as y,C as j,a as B}from"./index-Bs8YtzlX.js";import{m as p,c as P,S,A as L,a as D}from"./swiper-DWbAbxUX.js";import{I as A,a as O}from"./index-DwNuE1vN.js";function R(w){let{swiper:e,extendParams:b,on:d,emit:x}=w;b({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function C(a){let t;return a&&typeof a=="string"&&e.isElement&&(t=e.el.querySelector(a),t)?t:(a&&(typeof a=="string"&&(t=[...document.querySelectorAll(a)]),e.params.uniqueNavElements&&typeof a=="string"&&t&&t.length>1&&e.el.querySelectorAll(a).length===1?t=e.el.querySelector(a):t&&t.length===1&&(t=t[0])),a&&!t?a:t)}function m(a,t){const n=e.params.navigation;a=p(a),a.forEach(s=>{s&&(s.classList[t?"add":"remove"](...n.disabledClass.split(" ")),s.tagName==="BUTTON"&&(s.disabled=t),e.params.watchOverflow&&e.enabled&&s.classList[e.isLocked?"add":"remove"](n.lockClass))})}function g(){const{nextEl:a,prevEl:t}=e.navigation;if(e.params.loop){m(t,!1),m(a,!1);return}m(t,e.isBeginning&&!e.params.rewind),m(a,e.isEnd&&!e.params.rewind)}function f(a){a.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),x("navigationPrev"))}function v(a){a.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),x("navigationNext"))}function h(){const a=e.params.navigation;if(e.params.navigation=P(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(a.nextEl||a.prevEl))return;let t=C(a.nextEl),n=C(a.prevEl);Object.assign(e.navigation,{nextEl:t,prevEl:n}),t=p(t),n=p(n);const s=(r,E)=>{r&&r.addEventListener("click",E==="next"?v:f),!e.enabled&&r&&r.classList.add(...a.lockClass.split(" "))};t.forEach(r=>s(r,"next")),n.forEach(r=>s(r,"prev"))}function i(){let{nextEl:a,prevEl:t}=e.navigation;a=p(a),t=p(t);const n=(s,r)=>{s.removeEventListener("click",r==="next"?v:f),s.classList.remove(...e.params.navigation.disabledClass.split(" "))};a.forEach(s=>n(s,"next")),t.forEach(s=>n(s,"prev"))}d("init",()=>{e.params.navigation.enabled===!1?c():(h(),g())}),d("toEdge fromEdge lock unlock",()=>{g()}),d("destroy",()=>{i()}),d("enable disable",()=>{let{nextEl:a,prevEl:t}=e.navigation;if(a=p(a),t=p(t),e.enabled){g();return}[...a,...t].filter(n=>!!n).forEach(n=>n.classList.add(e.params.navigation.lockClass))}),d("click",(a,t)=>{let{nextEl:n,prevEl:s}=e.navigation;n=p(n),s=p(s);const r=t.target;if(e.params.navigation.hideOnClick&&!s.includes(r)&&!n.includes(r)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===r||e.pagination.el.contains(r)))return;let E;n.length?E=n[0].classList.contains(e.params.navigation.hiddenClass):s.length&&(E=s[0].classList.contains(e.params.navigation.hiddenClass)),x(E===!0?"navigationShow":"navigationHide"),[...n,...s].filter(N=>!!N).forEach(N=>N.classList.toggle(e.params.navigation.hiddenClass))}});const l=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),h(),g()},c=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),i()};Object.assign(e.navigation,{enable:l,disable:c,update:g,init:h,destroy:i})}function T(){const w="https://www.shopifysolutions.in/website/sanarcare/androidApi/index.php",[e,b]=u.useState([]),[d,x]=u.useState(1),[C,m]=u.useState(0),g=k(),f=u.useRef(null),v=u.useRef(null),h=async i=>{try{const l=new FormData;l.append("view","blog"),l.append("page",i);const c=await B.post(w,l,{headers:{"Content-Type":"multipart/form-data"}});c.data&&c.data.response&&c.data.response.blogs?(b(a=>[...a,...c.data.response.blogs]),m(c.data.response.count)):console.log("Unexpected response format:",c.data)}catch(l){console.log("Error fetching blog data:",l)}};return u.useEffect(()=>{h(d)},[d]),o.jsxs(y,{className:"justify-content-center",children:[o.jsx("h1",{className:"text-center hed1 pb-sm-5 pb-3 pt-sm-0 pt-3",children:"Our Blogs"}),o.jsxs(j,{md:10,xs:10,lg:10,xxl:10,className:"position-relative",children:[o.jsx(S,{modules:[L,R],spaceBetween:30,slidesPerView:1,loop:!0,navigation:{prevEl:f.current,nextEl:v.current},onBeforeInit:i=>{i.params.navigation.prevEl=f.current,i.params.navigation.nextEl=v.current},autoplay:{delay:3e3,disableOnInteraction:!1},breakpoints:{480:{slidesPerView:2,spaceBetween:20},640:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:3,spaceBetween:30},1024:{slidesPerView:3,spaceBetween:30},1400:{slidesPerView:4,spaceBetween:30}},className:"pb-4",children:e.map((i,l)=>o.jsx(D,{children:o.jsxs("div",{onClick:()=>g(`/blog/blogdetails/${i.slug}`),className:"blog-slide",children:[o.jsx("img",{src:i.image,alt:i.title,className:"blog-image"}),o.jsx("h4",{className:"px-2 hed4 blog-title text-center",children:i.title}),o.jsx("p",{className:"px-2 para blog-description text-center",children:i.short_description})]})},i.slug||l))}),o.jsx("div",{ref:f,className:"custom-swiper-button-prev",children:o.jsx(A,{})}),o.jsx("div",{ref:v,className:"custom-swiper-button-next",children:o.jsx(O,{})})]})]})}export{R as N,T as S};
