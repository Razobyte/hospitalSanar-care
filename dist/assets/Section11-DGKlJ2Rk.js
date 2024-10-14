import{r as W,j as s,R as O,C as P,F as v,b as C,c as A}from"./index-tkW9i98Y.js";import{m as x,e as Q,b as G,c as V,d as X,S as Y,A as J,a as K}from"./swiper-DqLYCpTw.js";/* empty css             */import{C as q}from"./Card-D4ZrrJq8.js";function B(l){return l===void 0&&(l=""),`.${l.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function U(l){let{swiper:e,extendParams:h,on:g,emit:w}=l;const u="swiper-pagination";h({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:a=>a,formatFractionTotal:a=>a,bulletClass:`${u}-bullet`,bulletActiveClass:`${u}-bullet-active`,modifierClass:`${u}-`,currentClass:`${u}-current`,totalClass:`${u}-total`,hiddenClass:`${u}-hidden`,progressbarFillClass:`${u}-progressbar-fill`,progressbarOppositeClass:`${u}-progressbar-opposite`,clickableClass:`${u}-clickable`,lockClass:`${u}-lock`,horizontalClass:`${u}-horizontal`,verticalClass:`${u}-vertical`,paginationDisabledClass:`${u}-disabled`}}),e.pagination={el:null,bullets:[]};let N,b=0;function S(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function L(a,t){const{bulletActiveClass:i}=e.params.pagination;a&&(a=a[`${t==="prev"?"previous":"next"}ElementSibling`],a&&(a.classList.add(`${i}-${t}`),a=a[`${t==="prev"?"previous":"next"}ElementSibling`],a&&a.classList.add(`${i}-${t}-${t}`)))}function F(a){const t=a.target.closest(B(e.params.pagination.bulletClass));if(!t)return;a.preventDefault();const i=G(t)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===i)return;e.slideToLoop(i)}else e.slideTo(i)}function y(){const a=e.rtl,t=e.params.pagination;if(S())return;let i=e.pagination.el;i=x(i);let n,p;const j=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,D=e.params.loop?Math.ceil(j/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(p=e.previousRealIndex||0,n=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(n=e.snapIndex,p=e.previousSnapIndex):(p=e.previousIndex||0,n=e.activeIndex||0),t.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const r=e.pagination.bullets;let f,m,z;if(t.dynamicBullets&&(N=Q(r[0],e.isHorizontal()?"width":"height"),i.forEach(o=>{o.style[e.isHorizontal()?"width":"height"]=`${N*(t.dynamicMainBullets+4)}px`}),t.dynamicMainBullets>1&&p!==void 0&&(b+=n-(p||0),b>t.dynamicMainBullets-1?b=t.dynamicMainBullets-1:b<0&&(b=0)),f=Math.max(n-b,0),m=f+(Math.min(r.length,t.dynamicMainBullets)-1),z=(m+f)/2),r.forEach(o=>{const c=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(d=>`${t.bulletActiveClass}${d}`)].map(d=>typeof d=="string"&&d.includes(" ")?d.split(" "):d).flat();o.classList.remove(...c)}),i.length>1)r.forEach(o=>{const c=G(o);c===n?o.classList.add(...t.bulletActiveClass.split(" ")):e.isElement&&o.setAttribute("part","bullet"),t.dynamicBullets&&(c>=f&&c<=m&&o.classList.add(...`${t.bulletActiveClass}-main`.split(" ")),c===f&&L(o,"prev"),c===m&&L(o,"next"))});else{const o=r[n];if(o&&o.classList.add(...t.bulletActiveClass.split(" ")),e.isElement&&r.forEach((c,d)=>{c.setAttribute("part",d===n?"bullet-active":"bullet")}),t.dynamicBullets){const c=r[f],d=r[m];for(let k=f;k<=m;k+=1)r[k]&&r[k].classList.add(...`${t.bulletActiveClass}-main`.split(" "));L(c,"prev"),L(d,"next")}}if(t.dynamicBullets){const o=Math.min(r.length,t.dynamicMainBullets+4),c=(N*o-N)/2-z*N,d=a?"right":"left";r.forEach(k=>{k.style[e.isHorizontal()?d:"top"]=`${c}px`})}}i.forEach((r,f)=>{if(t.type==="fraction"&&(r.querySelectorAll(B(t.currentClass)).forEach(m=>{m.textContent=t.formatFractionCurrent(n+1)}),r.querySelectorAll(B(t.totalClass)).forEach(m=>{m.textContent=t.formatFractionTotal(D)})),t.type==="progressbar"){let m;t.progressbarOpposite?m=e.isHorizontal()?"vertical":"horizontal":m=e.isHorizontal()?"horizontal":"vertical";const z=(n+1)/D;let o=1,c=1;m==="horizontal"?o=z:c=z,r.querySelectorAll(B(t.progressbarFillClass)).forEach(d=>{d.style.transform=`translate3d(0,0,0) scaleX(${o}) scaleY(${c})`,d.style.transitionDuration=`${e.params.speed}ms`})}t.type==="custom"&&t.renderCustom?(r.innerHTML=t.renderCustom(e,n+1,D),f===0&&w("paginationRender",r)):(f===0&&w("paginationRender",r),w("paginationUpdate",r)),e.params.watchOverflow&&e.enabled&&r.classList[e.isLocked?"add":"remove"](t.lockClass)})}function E(){const a=e.params.pagination;if(S())return;const t=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let i=e.pagination.el;i=x(i);let n="";if(a.type==="bullets"){let p=e.params.loop?Math.ceil(t/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&p>t&&(p=t);for(let j=0;j<p;j+=1)a.renderBullet?n+=a.renderBullet.call(e,j,a.bulletClass):n+=`<${a.bulletElement} ${e.isElement?'part="bullet"':""} class="${a.bulletClass}"></${a.bulletElement}>`}a.type==="fraction"&&(a.renderFraction?n=a.renderFraction.call(e,a.currentClass,a.totalClass):n=`<span class="${a.currentClass}"></span> / <span class="${a.totalClass}"></span>`),a.type==="progressbar"&&(a.renderProgressbar?n=a.renderProgressbar.call(e,a.progressbarFillClass):n=`<span class="${a.progressbarFillClass}"></span>`),e.pagination.bullets=[],i.forEach(p=>{a.type!=="custom"&&(p.innerHTML=n||""),a.type==="bullets"&&e.pagination.bullets.push(...p.querySelectorAll(B(a.bulletClass)))}),a.type!=="custom"&&w("paginationRender",i[0])}function T(){e.params.pagination=V(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const a=e.params.pagination;if(!a.el)return;let t;typeof a.el=="string"&&e.isElement&&(t=e.el.querySelector(a.el)),!t&&typeof a.el=="string"&&(t=[...document.querySelectorAll(a.el)]),t||(t=a.el),!(!t||t.length===0)&&(e.params.uniqueNavElements&&typeof a.el=="string"&&Array.isArray(t)&&t.length>1&&(t=[...e.el.querySelectorAll(a.el)],t.length>1&&(t=t.filter(i=>X(i,".swiper")[0]===e.el)[0])),Array.isArray(t)&&t.length===1&&(t=t[0]),Object.assign(e.pagination,{el:t}),t=x(t),t.forEach(i=>{a.type==="bullets"&&a.clickable&&i.classList.add(...(a.clickableClass||"").split(" ")),i.classList.add(a.modifierClass+a.type),i.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.type==="bullets"&&a.dynamicBullets&&(i.classList.add(`${a.modifierClass}${a.type}-dynamic`),b=0,a.dynamicMainBullets<1&&(a.dynamicMainBullets=1)),a.type==="progressbar"&&a.progressbarOpposite&&i.classList.add(a.progressbarOppositeClass),a.clickable&&i.addEventListener("click",F),e.enabled||i.classList.add(a.lockClass)}))}function I(){const a=e.params.pagination;if(S())return;let t=e.pagination.el;t&&(t=x(t),t.forEach(i=>{i.classList.remove(a.hiddenClass),i.classList.remove(a.modifierClass+a.type),i.classList.remove(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.clickable&&(i.classList.remove(...(a.clickableClass||"").split(" ")),i.removeEventListener("click",F))})),e.pagination.bullets&&e.pagination.bullets.forEach(i=>i.classList.remove(...a.bulletActiveClass.split(" ")))}g("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const a=e.params.pagination;let{el:t}=e.pagination;t=x(t),t.forEach(i=>{i.classList.remove(a.horizontalClass,a.verticalClass),i.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass)})}),g("init",()=>{e.params.pagination.enabled===!1?M():(T(),E(),y())}),g("activeIndexChange",()=>{typeof e.snapIndex>"u"&&y()}),g("snapIndexChange",()=>{y()}),g("snapGridLengthChange",()=>{E(),y()}),g("destroy",()=>{I()}),g("enable disable",()=>{let{el:a}=e.pagination;a&&(a=x(a),a.forEach(t=>t.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),g("lock unlock",()=>{y()}),g("click",(a,t)=>{const i=t.target,n=x(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&n&&n.length>0&&!i.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&i===e.navigation.nextEl||e.navigation.prevEl&&i===e.navigation.prevEl))return;const p=n[0].classList.contains(e.params.pagination.hiddenClass);w(p===!0?"paginationShow":"paginationHide"),n.forEach(j=>j.classList.toggle(e.params.pagination.hiddenClass))}});const H=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=x(a),a.forEach(t=>t.classList.remove(e.params.pagination.paginationDisabledClass))),T(),E(),y()},M=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=x(a),a.forEach(t=>t.classList.add(e.params.pagination.paginationDisabledClass))),I()};Object.assign(e.pagination,{enable:H,disable:M,render:E,update:y,init:T,destroy:I})}function ne(){const[l,e]=W.useState(null),h=g=>{e(l===g?null:g)};return s.jsx(s.Fragment,{children:s.jsx(O,{className:"d-md-flex d-lg-flex d-xl-flex d-none justify-content-center align-items-center pt-lg-5 pt-md-5 pt-xl-5 pt-3 pb-lg-5 pb-xl-5 pb-md-5 pb-0",children:s.jsxs(P,{md:10,xs:12,children:[s.jsx("h1",{className:"text-center hed1 pb-lg-4 pb-md-4 pb-xl-4 pb-1",children:"Frequently Asked Questions"}),s.jsxs("div",{className:"card-header mb-3   d-flex justify-content-md-between justify-content-xl-between  justify-content-lg-between justify-content-center px-lg-3 px-xl-3 px-md-2",onClick:()=>h(0),style:{backgroundColor:"#FFD0BB"},children:[s.jsx("h1",{className:"text-center hed3",style:{color:"#585454"},children:" What makes Sanar Care the best diagnostic centre in Gurgaon?"}),s.jsx("span",{className:"icon",children:l===0?s.jsx(v,{className:"p-1  rounded-5 ",size:25,style:{border:"1px solid black ",color:"#585454"}}):s.jsx(C,{className:"p-1 rounded-5",size:25,style:{border:"1px solid black ",color:"#585454"}})})]}),l===0&&s.jsx("ul",{children:s.jsxs("li",{children:[s.jsx("span",{className:"text-center para",children:"Sanar Care is widely recognized as the leading diagnostic centre in Gurgaon due to its state-of-the-art facilities, advanced technology, and highly experienced team of medical professionals. We offer a wide range of diagnostic services, including PET scans, PET-CT scans, DEXA scans, and pathology lab testing. Our commitment to accuracy, efficiency, and patient care sets us apart from the rest."}),s.jsx("i",{children:s.jsx(A,{size:25,className:"rounded-5 bg-[#3b7fbf] text-white p-1"})})]})}),s.jsxs("div",{className:"card-header  d-flex justify-content-md-between justify-content-xl-between  justify-content-lg-between justify-content-center mb-3 gap-5  px-lg-3 px-xl-3 px-md-2",onClick:()=>h(1),style:{backgroundColor:"#B3BDF1"},children:[s.jsx("h1",{className:"text-center hed3",style:{color:"#585454"},children:"How does a PET scan in Gurgaon at Sanar Care work?"}),s.jsx("span",{className:"icon",children:l===1?s.jsx(v,{className:"p-1  rounded-5 ",size:25,style:{border:"1px solid black ",color:"#585454"}}):s.jsx(C,{className:"p-1 rounded-5",size:25,style:{border:"1px solid black ",color:"#585454"}})})]}),l===1&&s.jsx("ul",{children:s.jsxs("li",{children:[s.jsx("span",{className:"text-center para",children:"A PET scan at Sanar Care in Gurgaon utilizes a small amount of radioactive material to produce detailed images of the body's organs and tissues. This imaging technique helps detect various conditions, such as cancer, heart disease, and neurological disorders. Our PET scan procedure is safe, non-invasive, and performed by highly trained radiologists who ensure the utmost precision and patient comfort."}),s.jsx("i",{children:s.jsx(A,{size:25,className:"rounded-5 bg-[#3b7fbf] text-white p-1"})})]})}),s.jsxs("div",{className:"card-header  d-flex justify-content-md-between justify-content-xl-between  justify-content-lg-between justify-content-center mb-3  px-lg-3 px-xl-3 px-md-2",onClick:()=>h(2),style:{backgroundColor:"#99E6FF"},children:[s.jsx("h1",{className:"text-center hed3",style:{color:"#585454"},children:" What is the difference between a PET scan and a PET-CT scan in Gurgaon?"}),s.jsx("span",{className:"icon",children:l===2?s.jsx(v,{className:"p-1  rounded-5 ",size:25,style:{border:"1px solid black ",color:"#585454"}}):s.jsx(C,{className:"p-1 rounded-5",size:25,style:{border:"1px solid black ",color:"#585454"}})})]}),l===2&&s.jsx("ul",{children:s.jsxs("li",{children:[s.jsx("span",{className:"text-center para",children:"While both PET scans and PET-CT scans are valuable diagnostic tools, there is a slight difference between them. A PET scan primarily provides functional information about the body's organs and tissues, while a PET-CT scan combines the functional data from a PET scan with the anatomical information obtained from a CT scan. This combined approach offers a more comprehensive assessment of conditions, leading to more accurate diagnoses and treatment plans."}),s.jsx("i",{children:s.jsx(A,{size:25,className:"rounded-5 bg-[#3b7fbf] text-white p-1"})})]})}),s.jsxs("div",{className:"card-header  d-flex justify-content-md-between justify-content-xl-between  justify-content-lg-between justify-content-center mb-3  px-lg-3 px-xl-3 px-md-2",onClick:()=>h(3),style:{backgroundColor:"#B3BDF1"},children:[s.jsx("h1",{className:"text-center hed3",style:{color:"#585454"},children:"Where can I find a reliable pathology lab near me in Gurgaon?"}),s.jsx("span",{className:"icon",children:l===3?s.jsx(v,{className:"p-1  rounded-5 ",size:25,style:{border:"1px solid black ",color:"#585454"}}):s.jsx(C,{className:"p-1 rounded-5",size:25,style:{border:"1px solid black ",color:"#585454"}})})]}),l===3&&s.jsx("ul",{children:s.jsxs("li",{children:[s.jsx("span",{className:"text-center para",children:"Sanar Care is your trusted destination for a pathology lab near you in Gurgaon. Our fully equipped pathology lab is staffed with skilled technicians and pathologists who perform a wide range of tests, including blood tests, urine tests, genetic testing, and more. We prioritize accuracy, efficiency, and quick turnaround time to ensure that you receive timely and reliable results for your diagnostic needs."}),s.jsx("i",{children:s.jsx(A,{size:25,className:"rounded-5 bg-[#3b7fbf] text-white p-1"})})]})}),s.jsxs("div",{className:"card-header  d-flex justify-content-md-between justify-content-xl-between  justify-content-lg-between justify-content-center mb-3  px-lg-3 px-xl-3 px-md-2",onClick:()=>h(4),style:{backgroundColor:"#B3E6BE"},children:[s.jsx("h1",{className:"text-center hed3",style:{color:"#585454"},children:"Are there any quality pathlabs near me in Gurgaon that offer affordable services?"}),s.jsx("span",{className:"icon",children:l===4?s.jsx(v,{className:"p-1  rounded-5 ",size:25,style:{border:"1px solid black ",color:"#585454"}}):s.jsx(C,{className:"p-1 rounded-5",size:25,style:{border:"1px solid black ",color:"#585454"}})})]}),l===4&&s.jsx("ul",{children:s.jsxs("li",{children:[s.jsx("span",{className:"text-center para",children:"Sanar Care is known for offering high-quality pathology lab services at competitive prices in Gurgaon. We understand the importance of affordability without compromising on the accuracy and reliability of test results. Our transparent pricing policy ensures that you receive the best value for your money, making us a top choice for cost-effective diagnostic services in the region."}),s.jsx("i",{children:s.jsx(A,{size:25,className:"rounded-5 bg-[#3b7fbf] text-white p-1"})})]})}),s.jsxs("div",{className:"card-header  d-flex justify-content-md-between justify-content-xl-between  justify-content-lg-between justify-content-center mb-3  px-lg-3 px-xl-3 px-md-2",onClick:()=>h(5),style:{backgroundColor:"#FFD0BB"},children:[s.jsx("h1",{className:"text-center hed3",style:{color:"#585454"},children:"How much does a DEXA scan cost at   Sanar Care in Gurgaon? ?"}),s.jsx("span",{className:"icon",children:l===5?s.jsx(v,{className:"p-1  rounded-5 ",size:25,style:{border:"1px solid black ",color:"#585454"}}):s.jsx(C,{className:"p-1 rounded-5",size:25,style:{border:"1px solid black ",color:"#585454"}})})]}),l===5&&s.jsx("ul",{children:s.jsxs("li",{children:[s.jsx("span",{className:"text-center para",children:"The cost of a DEXA scan at Sanar Care in Gurgaon depends on various factors, including the specific type of DEXA scan required and any additional services requested. However, we strive to offer competitive pricing without compromising on the quality of our services. For accurate and up-to-date information regarding DEXA scan costs, we recommend reaching out to our friendly staff who will provide you with the necessary details."}),s.jsx("i",{children:s.jsx(A,{size:25,className:"rounded-5 bg-[#3b7fbf] text-white p-1"})})]})}),s.jsxs("div",{className:"card-header  d-flex justify-content-md-between justify-content-xl-between  justify-content-lg-between justify-content-center mb-3  px-lg-3 px-xl-3 px-md-2",onClick:()=>h(6),style:{backgroundColor:"#99E6FF"},children:[s.jsx("h1",{className:"text-center hed3",style:{color:"#585454"},children:"Does Sanar Care Diagnostic Centrein Gurgaon offer MRI scans?"}),s.jsx("span",{className:"icon",children:l===6?s.jsx(v,{className:"p-1  rounded-5 ",size:25,style:{border:"1px solid black ",color:"#585454"}}):s.jsx(C,{className:"p-1 rounded-5",size:25,style:{border:"1px solid black ",color:"#585454"}})})]}),l===6&&s.jsx("ul",{children:s.jsxs("li",{children:[s.jsx("span",{className:"text-center para",children:"Yes, Sanar Care Diagnostic Centre is equipped with high-tech machines for MRI scans, among other diagnostic tests."}),s.jsx("i",{children:s.jsx(A,{size:25,className:"rounded-5 bg-[#3b7fbf] text-white p-1"})})]})})]})})})}const $="/assets/sec114-Cvn8uGW-.png",R="/assets/sec113-D85t4sCy.png",Z="/assets/sec112-BJTaMQrF.png",_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAfCAYAAADwbH0HAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEMSURBVHgB7ZO/jgFRFMbPyDZb7Rb7ADbZYiuFQqJCIZEokHgAhbfQegUt3sAjKNQiamGodIhEIYrjExIy7pk5V1TcX/IVM3N+8907f4gcjreGmb+RPBK3cH6QysklWyBlkR6y5TNthVNE+nylTlouO2zxPTtpBzj/iwwMTl9bGkemQmkDiRmcArI2OD6S05b6hhuskKTgpJGDwZmw9pvA4JDNlEMWOjfMz21Ka0JpJ8TpCk5NW+oJj/hESnD+hHmftGC4JNxkRva77YR1fQSOq8Lcgq/vau953vLmWkbhbOBsKGT1I45mfDP/xTqawa7gv5ggO/7pQWIRx1F80oPYFj0NV/z6xQ6H42kcAUX/J/M3tl1hAAAAAElFTkSuQmCC",ee="/assets/test-CLVWViWv.png";function le(){const l=[{id:0,image:$,name:"Laxman Dang",quote:"I recommend you to select Sanar Care while booking any test. It gives you a very huge discount and you may save your money."},{id:1,image:R,name:"Naman Wasan",quote:"I'm really impressed with how this amazing platform makes availing any medical service required a convenient and a hassle free process. I would strongly recommend for any Diagnostic lab in gurgaon!"},{id:2,image:$,name:"Vinay Kalra",quote:"Great service SANAR CARE-  Diagnostic and Pathology Lab in Gurgaon"},{id:3,image:$,name:"Nikhil Dang",quote:"Thank you so much SANAR CARE-  Diagnostic and Pathology Lab in  Gurgaon, I do really appreciate your services and timing.Thank you!"},{id:4,image:R,name:"Navdeep Kaur",quote:"Its really amazing platform of providing the facilities in such a fantabulous manner. I'm so happy with the service, I would love to recommend this to each and everyone."},{id:5,image:Z,name:"Laxmi Kalra",quote:"Such a nice experience.Higly recommended for all the blood tests, CT Scan and MRI in gurgaon."}];return s.jsxs(O,{className:"section11-container",children:[s.jsx("h1",{className:"hed1 text-center text-white pt-lg-5 pt-md-5 pt-xl-5 pt-3 pb-xl-4 pb-lg-4 pb-md-4 py-lg-0 py-0 pb-0",children:"Patient Testimonials"}),s.jsxs(P,{md:5,xs:8,lg:5,xl:5,xxl:5,className:"d-xl-block d-none",children:[s.jsx("h3",{className:"hed3 text-white text-center",children:"Hear from our customers about their experiences with Sanar Care's services. We value feedback regarding their visits to our labs."}),s.jsx("img",{src:ee,alt:"",className:"img-fluid"})]}),s.jsx(P,{md:5,xs:5,lg:5,xl:5,xxl:5,children:s.jsx("div",{className:"swiper-container mb-lg-5 mb-md-5 mb-xl-5 mb-xxl-5 mb-0",children:s.jsx(Y,{spaceBetween:10,loop:!0,autoplay:{delay:1e3,disableOnInteraction:!1},modules:[U,J],breakpoints:{0:{slidesPerView:1},768:{slidesPerView:1},1e3:{slidesPerView:3}},children:l.map(e=>s.jsx(K,{className:"d-flex justify-content-center  mb-lg-5 mb-md-5 mb-xl-5 mb-xxl-5 mb-0",children:s.jsxs(q,{className:"testimonial-card",children:[s.jsx("div",{style:{position:"relative"},children:s.jsx("img",{src:e.image,alt:"Testimonial",className:"testimonial-image"})}),s.jsx("div",{style:{position:"absolute",top:"170px"},children:s.jsx("img",{src:_,alt:"",className:"img-fluid",style:{backgroundColor:"#46A4D9",borderRadius:"50%",padding:"6px"}})}),s.jsxs(q.Body,{children:[s.jsx("h4",{className:"hed3",style:{color:"#585454"},children:e.name}),s.jsx("p",{className:"para",children:e.quote})]})]})},e.id))})})})]})}export{le as S,ne as a};
