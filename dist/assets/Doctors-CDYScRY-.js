import{r as t,h as N,j as e,z as q,i as y,k as V,B as S,M as W,e as Z,D as Y,E as J,G as _,R as D,C as F,H as b,I as H,a as $}from"./index-tkW9i98Y.js";import{b as ee}from"./index-DpSOSkKJ.js";import{C as j}from"./Card-D4ZrrJq8.js";import{S as se,a as ae}from"./Section11-DGKlJ2Rk.js";import"./swiper-DqLYCpTw.js";/* empty css             */function k(s,a){return Array.isArray(s)?s.includes(a):s===a}const A=t.createContext({});A.displayName="AccordionContext";const M=t.forwardRef(({as:s="div",bsPrefix:a,className:l,children:n,eventKey:c,...d},r)=>{const{activeEventKey:m}=t.useContext(A);return a=N(a,"accordion-collapse"),e.jsx(q,{ref:r,in:k(m,c),...d,className:y(l,a),children:e.jsx(s,{children:t.Children.only(n)})})});M.displayName="AccordionCollapse";const w=t.createContext({eventKey:""});w.displayName="AccordionItemContext";const B=t.forwardRef(({as:s="div",bsPrefix:a,className:l,onEnter:n,onEntering:c,onEntered:d,onExit:r,onExiting:m,onExited:i,...g},h)=>{a=N(a,"accordion-body");const{eventKey:p}=t.useContext(w);return e.jsx(M,{eventKey:p,onEnter:n,onEntering:c,onEntered:d,onExit:r,onExiting:m,onExited:i,children:e.jsx(s,{ref:h,...g,className:y(l,a)})})});B.displayName="AccordionBody";function te(s,a){const{activeEventKey:l,onSelect:n,alwaysOpen:c}=t.useContext(A);return d=>{let r=s===l?null:s;c&&(Array.isArray(l)?l.includes(s)?r=l.filter(m=>m!==s):r=[...l,s]:r=[s]),n==null||n(r,d),a==null||a(d)}}const E=t.forwardRef(({as:s="button",bsPrefix:a,className:l,onClick:n,...c},d)=>{a=N(a,"accordion-button");const{eventKey:r}=t.useContext(w),m=te(r,n),{activeEventKey:i}=t.useContext(A);return s==="button"&&(c.type="button"),e.jsx(s,{ref:d,onClick:m,...c,"aria-expanded":Array.isArray(i)?i.includes(r):r===i,className:y(l,a,!k(i,r)&&"collapsed")})});E.displayName="AccordionButton";const O=t.forwardRef(({as:s="h2",bsPrefix:a,className:l,children:n,onClick:c,...d},r)=>(a=N(a,"accordion-header"),e.jsx(s,{ref:r,...d,className:y(l,a),children:e.jsx(E,{onClick:c,children:n})})));O.displayName="AccordionHeader";const T=t.forwardRef(({as:s="div",bsPrefix:a,className:l,eventKey:n,...c},d)=>{a=N(a,"accordion-item");const r=t.useMemo(()=>({eventKey:n}),[n]);return e.jsx(w.Provider,{value:r,children:e.jsx(s,{ref:d,...c,className:y(l,a)})})});T.displayName="AccordionItem";const G=t.forwardRef((s,a)=>{const{as:l="div",activeKey:n,bsPrefix:c,className:d,onSelect:r,flush:m,alwaysOpen:i,...g}=V(s,{activeKey:"onSelect"}),h=N(c,"accordion"),p=t.useMemo(()=>({activeEventKey:n,onSelect:r,alwaysOpen:i}),[n,r,i]);return e.jsx(A.Provider,{value:p,children:e.jsx(l,{ref:a,...g,className:y(d,h,m&&`${h}-flush`)})})});G.displayName="Accordion";const f=Object.assign(G,{Button:E,Collapse:M,Item:T,Header:O,Body:B}),oe="/assets/sanarcare%20our%20doctor%20banner-DfADpQIX.jpg",re="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAABcVBMVEUAAADe4+bh5+ng5unN19vM1trd5Ofb4ePW3eHU3eHP2d3M19vK0tXM0tbK2NzK0NbS2tzM2uDk6uzf5+nd4+XZ4OPe5ObQ2d3R2t7K2tzO19vKztfQ19nP09br8PLi4OTd3uLf5Ofa4eXS3d/R2t3P1NrF19rDycrb4+Xe5OfA4eO85Oay7O/N1dvO1tnR3+HL1dv///9Aw1EuvkArvT47wk0wvkI5wUs3wUk2wEg0v0YovDv7+/3w8/U/w1D8/v2e4adZy2hCxFPt8fNnz3RFxVYluzny9PbN8NLE7cq66sCx57iW3p+S3Zx+14o9wk8yv0T4/fnp7e/q+Ovl9+fd9eCp5LGG2ZFu0nv39/rx/PPr7vHa9NzW89nV8tfQ8NW057ut5bSi4qqP3JmK25V11IJdzGtHxlj+/P73+fry7vDt+u7z7O7l7Ozl5+rr5ufJ7s7H7czG7cvA7Ma/68Wr5bKF2JBRyWFKxlocuDANsyMkuADlAAAAMXRSTlMA3O7qVRfiyr+5jmhbRkIsHAf99PPlq6KTbEgnIQz29evm1rOAdG9qZWFfUU46OjIQPwd7aQAAAdZJREFUKM9VkmVzG0EQRFdsgWXLHMcOM/ftHpPuxMxgZjvM/Ouzkk4u53191TNVM02mbDxa9fn9gUjsKfmf0NqSiTHG2zvXrprZ8BaAve/lUhdAJrpxaR58BN7VHKspqbnskQ1jec4ziTZQcXWqiKKsMf38APby/NhcXwRqOlMsYQKTv8CIjtUMcJyX5AtZ8KDKHsw4N8kPONBoo9zNSlPHzm34UoSsGBjmaRX4SoUpegXvn5HNMHqKKhYBXIllYcTI8x38oLL4GcDwMqbluoiQoIlTarEqkGbuVMlqCQGSKKBOBe1iG2WmCIIlN7gSpTL8JFjAgAqufsZjedVVRKpypX3jqfUM0nxHgx0DfeWPU0rnNEG1duEjIT+KksXH0z7QG+wDnbMmdWysjo7RcnjMVWmthTEnTK/CfExI3ESlKY52M+ewA6CUY0IHS/zAKR9avzSB05DY7/pJXaTsEG9ihJDN29h3NYXnOIquMylfBW6FRh/eQe0vzTWlyVPEvJoGFpKEs2bYP7P93Yoj0RHysAh8mtQjAmyDYxfTg/rpUQ94ffPJ5Mc3AGwtLGbgYbTves14mDHD0Xtz8/GZQKZQMNu+lSTxeHl//ZXXxdlgIvgiRab8A/zkeZLz6efhAAAAAElFTkSuQmCC",le=({doctor:s,eventKey:a})=>{const[l,n]=t.useState(!1),c=m=>{const i=[],g=Math.floor(m),h=m%1!==0;for(let p=1;p<=5;p++)p<=g?i.push(e.jsx(Y,{color:"#ff8f00"},p)):p===g+1&&h?i.push(e.jsx(J,{color:"#ff8f00"},p)):i.push(e.jsx(_,{color:"#ff8f00"},p));return i},d=()=>{n(!0)},r=()=>{n(!1)};return e.jsxs("div",{className:"col-xl-12 col-lg-12 col-md-12 d-flex flex-column align-items-center justify-content-center",children:[e.jsxs(j,{className:"doctors-card d-flex flex-row align-items-center text-left p-0",children:[e.jsx(j.Img,{src:s.image||"default-image.png",className:"card-image-container",alt:s.name}),e.jsxs(j.Body,{className:"text-left ps-5",children:[e.jsx(j.Title,{children:e.jsx("h3",{className:"hed3",children:s.name})}),e.jsx("div",{className:"p-0 m-0",children:c(4)}),e.jsxs("div",{className:"p-0 m-0 des2 pt-1",children:[s.desigination,", ",s.hospital]}),e.jsxs("div",{className:"fw-normal exp pt-1",children:[e.jsx("span",{className:"fw-bold",children:"Experience"})," - ",s.experience]}),e.jsxs("div",{className:"des pt-1",children:[e.jsx("span",{className:"fw-bold",children:"Designation"})," - ",s.desigination]}),e.jsx("div",{className:"hed4 pt-1",children:s.hospital})]}),e.jsxs("div",{className:"button-container d-lg-flex d-none flex-column align-items-center gap-1 pe-4 ",children:[e.jsx("div",{className:"d-flex",children:e.jsxs(S,{className:"mb-2 consult-now-btn py-2  bg-light",href:"https://wa.me/7042148149",target:"_blank",children:["WhatsApp",e.jsx("img",{src:re,alt:"WhatsApp",className:"ms-2 img-fluid object-contain",style:{height:"25px",maxWidth:"px"}})]})}),e.jsx(S,{variant:"primary",onClick:d,className:"py-2",children:"Book Appointment"})]})]}),e.jsx(W,{show:l,onHide:r,centered:!0,children:e.jsxs("div",{className:"custom-modal-content",children:[e.jsx(S,{className:"close-button position-relative top-5 left-0 mt-0 me-0",onClick:r,variant:"link",children:e.jsx(ee,{size:24,color:"black"})}),e.jsx(Z,{data:"Contact Us"})]})}),e.jsxs(f,{defaultActiveKey:"1",className:"mb-5 w-100",children:[e.jsxs(f.Item,{eventKey:`${a}-0`,className:"w-100",children:[e.jsx(f.Header,{className:"header-accordion",children:e.jsx("h2",{className:"text-lg hed4",children:"Doctor Profile"})}),e.jsx(f.Body,{className:"para",dangerouslySetInnerHTML:{__html:s.profile_desc}})]}),e.jsxs("div",{className:"d-flex flex-column flex-lg-row",children:[e.jsxs(f.Item,{eventKey:`${a}-1`,className:"flex-grow-1 flex-basis-0",children:[e.jsx(f.Header,{children:e.jsx("h2",{className:"text-lg hed4",children:"Specialization"})}),e.jsx(f.Body,{className:"para",dangerouslySetInnerHTML:{__html:s.specialization_desc}})]}),e.jsxs(f.Item,{eventKey:`${a}-2`,className:"flex-grow-1 flex-basis-0",children:[e.jsx(f.Header,{children:e.jsx("h2",{className:"text-lg hed4",children:"Qualification"})}),e.jsx(f.Body,{className:"para",dangerouslySetInnerHTML:{__html:s.qualification_desc}})]})]})]})]})},ne=le;function ce(){const[s,a]=t.useState([]),[l,n]=t.useState([]),[c,d]=t.useState([]),[r,m]=t.useState([]),[i,g]=t.useState(""),[h,p]=t.useState(""),[C,v]=t.useState(null),[I,R]=t.useState(!0),[K,P]=t.useState(3),[L,U]=t.useState("1");let z="https://www.shopifysolutions.in/website/sanarcare/androidApi/index.php";const X=async()=>{try{v(null),R(!0),console.log("Fetching data from API:",z);const o=new FormData;o.append("view","doctor"),o.append("search",""),o.append("department",""),console.log("Request payload:",Object.fromEntries(o));const x=await $.post(z,o,{headers:{"Content-Type":"multipart/form-data"}});if(console.log("API Response:",x.data),x.data&&x.data.message==="success"){const u=x.data.response;u?(console.log("Doctors received:",u.doctors),console.log("Departments received:",u.departments),a(u.doctors||[]),n(u.doctors||[]),d(u.departments||[]),m(u.departments||[])):(console.log("No response data found"),v("No data received from server"))}else console.log("API returned an unsuccessful response"),v("Failed to fetch data from server")}catch(o){console.error("Error fetching doctor data:",o),v(`An error occurred while fetching data: ${o.message}`)}finally{R(!1)}};t.useEffect(()=>{X()},[]),t.useEffect(()=>{console.log("Filtering doctors with search term:",i);const o=s.filter(x=>x.name.toLowerCase().includes(i.toLowerCase()));console.log("Filtered doctors:",o),n(o)},[i,s]),t.useEffect(()=>{console.log("Filtering departments with search term:",h);const o=c.filter(x=>x.name.toLowerCase().includes(h.toLowerCase()));console.log("Filtered departments:",o),m(o)},[h,c]);const Q=()=>{P(o=>o+1)};return e.jsxs(D,{className:"py-xl-5 py-lg-5 py-md-5 py-0 d-md-flex justify-content-center align-items-start gap-4",children:[e.jsxs(F,{xl:3,lg:4,md:4,className:"px-0 py-lg-3 py-md-3 py-xl-3 d-flex flex-column gap-4",children:[e.jsxs(j,{className:"shadow p-3 mb-4 rounded-3",style:{backgroundColor:"#ffffff",border:"none"},children:[e.jsx("h4",{className:"hed4 px-2 mb-3",style:{color:"#333333",fontWeight:"bold",fontSize:"1.25rem"},children:"Search by Doctors"}),e.jsxs(b,{className:"d-flex flex-column",children:[e.jsxs("div",{className:"position-relative mb-4",children:[e.jsx(b.Control,{type:"search","aria-label":"Search",placeholder:"Enter Doctor Name",className:"form-control-search-page",style:{padding:"10px 45px 10px 15px",borderRadius:"30px",boxShadow:"0px 3px 6px rgba(0, 0, 0, 0.1)"},value:i,onChange:o=>g(o.target.value)}),e.jsx(H,{color:"#4085AD",className:"position-absolute top-50 end-0 translate-middle-y",style:{marginRight:"15px"}})]}),e.jsx("div",{className:"d-flex flex-column gap-2",children:l.map((o,x)=>e.jsx("div",{className:"p-2 rounded-3 shadow-sm",style:{backgroundColor:"#F9F9F9"},children:e.jsx("h5",{className:"m-0",style:{fontSize:"14px",color:"#555"},children:o.name})},x))})]})]}),e.jsxs(j,{className:"shadow p-3 mb-4 rounded-3",style:{backgroundColor:"#ffffff",border:"none"},children:[e.jsx("h4",{className:"hed4 px-2 mb-3",style:{color:"#333333",fontWeight:"bold",fontSize:"1.25rem"},children:"Search by Department"}),e.jsxs(b,{className:"d-flex flex-column",children:[e.jsxs("div",{className:"position-relative mb-4",children:[e.jsx(b.Control,{type:"search","aria-label":"Search",placeholder:"Enter Department Name",className:"form-control-search-page",style:{padding:"10px 45px 10px 15px",borderRadius:"30px",boxShadow:"0px 3px 6px rgba(0, 0, 0, 0.1)"},value:h,onChange:o=>p(o.target.value)}),e.jsx(H,{color:"#4085AD",className:"position-absolute top-50 end-0 translate-middle-y",style:{marginRight:"15px"}})]}),e.jsx("div",{className:"d-flex flex-column gap-2",children:r.map((o,x)=>e.jsx("div",{className:"p-2 rounded-3 shadow-sm",style:{backgroundColor:"#F9F9F9"},children:e.jsx("h5",{className:"m-0",style:{fontSize:"14px",color:"#555"},children:o.name})},x))})]})]})]}),e.jsxs(F,{xl:7,lg:7,md:7,className:"d-flex flex-column align-items-start",children:[I&&e.jsx("div",{children:"Loading..."}),C&&e.jsx("div",{className:"alert alert-danger",children:C}),!I&&!C&&e.jsx(e.Fragment,{children:l.length===0?e.jsx("div",{children:"No doctors found"}):e.jsxs(e.Fragment,{children:[l.slice(0,K).map((o,x)=>e.jsx(f,{activeKey:L,onSelect:u=>U(u),children:e.jsx(ne,{doctor:o,eventKey:x.toString()})},x)),K<l.length&&e.jsx(S,{onClick:Q,className:"mt-0 buttonfirst",children:"Load More"})]})})]})]})}function fe(){return e.jsxs(e.Fragment,{children:[e.jsx(D,{className:"d-flex justify-content-center align-items-center p-0",children:e.jsx("img",{src:oe,className:"img-fluid p-0"})}),e.jsx(ce,{}),e.jsx(se,{}),e.jsx(ae,{}),e.jsx(D,{className:"d-xl-none d-lg-none d-flex justify-content-center align-items-center my-3",children:e.jsxs(F,{md:12,xs:10,className:"fotter-first ",children:[e.jsx("h1",{className:"hed3 text-center pt-3 pb-1",children:"Popular Radiology Scan's"}),e.jsxs("div",{className:"d-flex justify-content-center align-items-center gap-1",children:[e.jsx("p",{className:"para text-left with-slash",children:"Coronary CT Angiography In Gurugram"}),e.jsx("p",{className:"para text-left with-slash",children:"X-Ray Neck Lateral View In Gurugram"}),e.jsx("p",{className:"para text-left with-slash",children:"Color Doppler - Carotids In Gurugram"}),e.jsx("p",{className:"para text-left",children:"Ultra Sound - Thyroid In Gurugram"})]})]})})]})}export{fe as default};