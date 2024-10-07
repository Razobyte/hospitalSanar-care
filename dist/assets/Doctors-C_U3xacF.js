import{r as t,h as j,j as e,z as T,i as N,k as G,G as P,B as w,M as U,e as X,D as L,E as Q,H as W,R as S,C,I as v,J as E,a as q}from"./index-CLSAfh87.js";import{C as u}from"./Card-DC1jSqN4.js";import{S as V}from"./Section10-CdonkK_W.js";import{S as Z}from"./Section11-C8-oYNR6.js";import"./swiper-CZu1iGeb.js";/* empty css             */function I(s,a){return Array.isArray(s)?s.includes(a):s===a}const A=t.createContext({});A.displayName="AccordionContext";const D=t.forwardRef(({as:s="div",bsPrefix:a,className:o,children:l,eventKey:c,...i},n)=>{const{activeEventKey:d}=t.useContext(A);return a=j(a,"accordion-collapse"),e.jsx(T,{ref:n,in:I(d,c),...i,className:N(o,a),children:e.jsx(s,{children:t.Children.only(l)})})});D.displayName="AccordionCollapse";const b=t.createContext({eventKey:""});b.displayName="AccordionItemContext";const R=t.forwardRef(({as:s="div",bsPrefix:a,className:o,onEnter:l,onEntering:c,onEntered:i,onExit:n,onExiting:d,onExited:m,...h},x)=>{a=j(a,"accordion-body");const{eventKey:g}=t.useContext(b);return e.jsx(D,{eventKey:g,onEnter:l,onEntering:c,onEntered:i,onExit:n,onExiting:d,onExited:m,children:e.jsx(s,{ref:x,...h,className:N(o,a)})})});R.displayName="AccordionBody";function J(s,a){const{activeEventKey:o,onSelect:l,alwaysOpen:c}=t.useContext(A);return i=>{let n=s===o?null:s;c&&(Array.isArray(o)?o.includes(s)?n=o.filter(d=>d!==s):n=[...o,s]:n=[s]),l==null||l(n,i),a==null||a(i)}}const M=t.forwardRef(({as:s="button",bsPrefix:a,className:o,onClick:l,...c},i)=>{a=j(a,"accordion-button");const{eventKey:n}=t.useContext(b),d=J(n,l),{activeEventKey:m}=t.useContext(A);return s==="button"&&(c.type="button"),e.jsx(s,{ref:i,onClick:d,...c,"aria-expanded":Array.isArray(m)?m.includes(n):n===m,className:N(o,a,!I(m,n)&&"collapsed")})});M.displayName="AccordionButton";const K=t.forwardRef(({as:s="h2",bsPrefix:a,className:o,children:l,onClick:c,...i},n)=>(a=j(a,"accordion-header"),e.jsx(s,{ref:n,...i,className:N(o,a),children:e.jsx(M,{onClick:c,children:l})})));K.displayName="AccordionHeader";const F=t.forwardRef(({as:s="div",bsPrefix:a,className:o,eventKey:l,...c},i)=>{a=j(a,"accordion-item");const n=t.useMemo(()=>({eventKey:l}),[l]);return e.jsx(b.Provider,{value:n,children:e.jsx(s,{ref:i,...c,className:N(o,a)})})});F.displayName="AccordionItem";const H=t.forwardRef((s,a)=>{const{as:o="div",activeKey:l,bsPrefix:c,className:i,onSelect:n,flush:d,alwaysOpen:m,...h}=G(s,{activeKey:"onSelect"}),x=j(c,"accordion"),g=t.useMemo(()=>({activeEventKey:l,onSelect:n,alwaysOpen:m}),[l,n,m]);return e.jsx(A.Provider,{value:g,children:e.jsx(o,{ref:a,...h,className:N(i,x,d&&`${x}-flush`)})})});H.displayName="Accordion";const f=Object.assign(H,{Button:M,Collapse:D,Item:F,Header:K,Body:R}),Y="/assets/sanarcare%20our%20doctor%20banner-DfADpQIX.jpg";function _(s){return P({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"},child:[]}]})(s)}const $="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAABcVBMVEUAAADe4+bh5+ng5unN19vM1trd5Ofb4ePW3eHU3eHP2d3M19vK0tXM0tbK2NzK0NbS2tzM2uDk6uzf5+nd4+XZ4OPe5ObQ2d3R2t7K2tzO19vKztfQ19nP09br8PLi4OTd3uLf5Ofa4eXS3d/R2t3P1NrF19rDycrb4+Xe5OfA4eO85Oay7O/N1dvO1tnR3+HL1dv///9Aw1EuvkArvT47wk0wvkI5wUs3wUk2wEg0v0YovDv7+/3w8/U/w1D8/v2e4adZy2hCxFPt8fNnz3RFxVYluzny9PbN8NLE7cq66sCx57iW3p+S3Zx+14o9wk8yv0T4/fnp7e/q+Ovl9+fd9eCp5LGG2ZFu0nv39/rx/PPr7vHa9NzW89nV8tfQ8NW057ut5bSi4qqP3JmK25V11IJdzGtHxlj+/P73+fry7vDt+u7z7O7l7Ozl5+rr5ufJ7s7H7czG7cvA7Ma/68Wr5bKF2JBRyWFKxlocuDANsyMkuADlAAAAMXRSTlMA3O7qVRfiyr+5jmhbRkIsHAf99PPlq6KTbEgnIQz29evm1rOAdG9qZWFfUU46OjIQPwd7aQAAAdZJREFUKM9VkmVzG0EQRFdsgWXLHMcOM/ftHpPuxMxgZjvM/Ouzkk4u53191TNVM02mbDxa9fn9gUjsKfmf0NqSiTHG2zvXrprZ8BaAve/lUhdAJrpxaR58BN7VHKspqbnskQ1jec4ziTZQcXWqiKKsMf38APby/NhcXwRqOlMsYQKTv8CIjtUMcJyX5AtZ8KDKHsw4N8kPONBoo9zNSlPHzm34UoSsGBjmaRX4SoUpegXvn5HNMHqKKhYBXIllYcTI8x38oLL4GcDwMqbluoiQoIlTarEqkGbuVMlqCQGSKKBOBe1iG2WmCIIlN7gSpTL8JFjAgAqufsZjedVVRKpypX3jqfUM0nxHgx0DfeWPU0rnNEG1duEjIT+KksXH0z7QG+wDnbMmdWysjo7RcnjMVWmthTEnTK/CfExI3ESlKY52M+ewA6CUY0IHS/zAKR9avzSB05DY7/pJXaTsEG9ihJDN29h3NYXnOIquMylfBW6FRh/eQe0vzTWlyVPEvJoGFpKEs2bYP7P93Yoj0RHysAh8mtQjAmyDYxfTg/rpUQ94ffPJ5Mc3AGwtLGbgYbTves14mDHD0Xtz8/GZQKZQMNu+lSTxeHl//ZXXxdlgIvgiRab8A/zkeZLz6efhAAAAAElFTkSuQmCC",ee=({doctor:s})=>{const[a,o]=t.useState(!1),l=n=>{const d=[],m=Math.floor(n),h=n%1!==0;for(let x=1;x<=5;x++)x<=m?d.push(e.jsx(L,{color:"#ff8f00"},x)):x===m+1&&h?d.push(e.jsx(Q,{color:"#ff8f00"},x)):d.push(e.jsx(W,{color:"#ff8f00"},x));return d},c=()=>{o(!0)},i=()=>{o(!1)};return e.jsxs("div",{className:"col-xl-12 col-lg-12 col-md-12 d-flex flex-column align-items-center justify-content-center",children:[e.jsxs(u,{className:"doctors-card d-flex flex-row align-items-center text-left p-0",children:[e.jsx(u.Img,{src:s.image||"default-image.png",className:"img-fluid card-image-container",alt:s.name}),e.jsxs(u.Body,{className:"text-left ps-5",children:[e.jsx(u.Title,{children:e.jsx("h3",{className:"hed3",children:s.name})}),e.jsx("div",{className:"p-0 m-0",children:l(4)})," ",e.jsxs("div",{className:"p-0 m-0 des2 pt-1",children:[s.desigination,", ",s.hospital]}),e.jsxs("div",{className:"fw-normal exp pt-1",children:[e.jsx("span",{className:"fw-bold",children:"Experience"})," - ",s.experience]}),e.jsxs("div",{className:"des pt-1",children:[e.jsx("span",{className:"fw-bold",children:"Designation"})," - ",s.desigination]}),e.jsx("div",{className:"hed4 pt-1",children:s.hospital})]}),e.jsxs("div",{className:"button-container d-lg-flex d-none flex-column align-items-center gap-1 pe-4 ",children:[e.jsx("div",{className:"d-flex",children:e.jsxs(w,{className:"mb-2 consult-now-btn py-2  bg-light",href:"https://wa.me/7042148149",target:"_blank",children:["WhatsApp",e.jsx("img",{src:$,alt:"WhatsApp",className:" ms-2 img-fluid object-contain",style:{height:"25px",maxWidth:"px"}})]})}),e.jsx(w,{variant:"primary",onClick:c,className:"py-2",children:"Book Appointment"})]})]}),e.jsx(U,{show:a,onHide:i,centered:!0,children:e.jsxs("div",{className:"custom-modal-content",children:[e.jsx(w,{className:"close-button position-relative top-5 left-0 mt-0 me-0",onClick:i,variant:"link",children:e.jsx(_,{size:24,color:"black"})}),e.jsx(X,{data:"Contact Us"})]})}),e.jsxs(f,{defaultActiveKey:"0",className:"mb-5 w-100",children:[e.jsxs(f.Item,{eventKey:"0",className:"w-100",children:[e.jsx(f.Header,{className:"header-accordion",children:e.jsx("h2",{className:"text-lg hed4",children:"Doctor Profile"})}),e.jsx(f.Body,{className:"para",dangerouslySetInnerHTML:{__html:s.profile_desc}})]}),e.jsxs("div",{className:"d-flex flex-column flex-lg-row",children:[e.jsxs(f.Item,{eventKey:"1",className:"flex-grow-1 flex-basis-0",children:[e.jsx(f.Header,{children:e.jsx("h2",{className:"text-lg hed4",children:"Specialization"})}),e.jsx(f.Body,{className:"para",dangerouslySetInnerHTML:{__html:s.specialization_desc}})]}),e.jsxs(f.Item,{eventKey:"2",className:"flex-grow-1 flex-basis-0",children:[e.jsx(f.Header,{children:e.jsx("h2",{className:"text-lg hed4",children:"Qualification"})}),e.jsx(f.Body,{className:"para",dangerouslySetInnerHTML:{__html:s.qualification_desc}})]})]})]})]})},se=ee;function ae(){const[s,a]=t.useState([]),[o,l]=t.useState([]),[c,i]=t.useState([]),[n,d]=t.useState([]),[m,h]=t.useState(""),[x,g]=t.useState(""),[z,k]=t.useState(null);let B="https://www.shopifysolutions.in/website/sanarcare/androidApi/index.php";const O=async()=>{try{const r=new FormData;r.append("view","doctor"),r.append("search",""),r.append("department","");const p=await q.post(B,r,{headers:{"Content-Type":"multipart/form-data"}});if(p.data&&p.data.message==="success"){const y=p.data.response;y&&(a(y.doctors||[]),l(y.doctors||[]),i(y.departments||[]),d(y.departments||[]))}}catch(r){console.error("Error fetching doctor data:",r)}};return t.useEffect(()=>{O()},[]),t.useEffect(()=>{const r=s.filter(p=>p.name.toLowerCase().includes(m.toLowerCase()));l(r),k(r.length===1?r[0]:null)},[m,s]),t.useEffect(()=>{const r=c.filter(p=>p.name.toLowerCase().includes(x.toLowerCase()));d(r)},[x,c]),e.jsxs(S,{className:"py-xl-5 py-lg-5 py-md-5 py-0 d-md-flex justify-content-center align-items-start",children:[e.jsxs(C,{xl:3,lg:4,md:4,className:"px-0 py-lg-3 py-md-3 py-xl-3 d-flex flex-column gap-4",children:[e.jsxs(u,{className:"shadow p-3 mb-4 rounded-3",style:{backgroundColor:"#ffffff",border:"none"},children:[e.jsx("h4",{className:"hed4 px-2 mb-3",style:{color:"#333333",fontWeight:"bold",fontSize:"1.25rem"},children:"Search by Doctors"}),e.jsxs(v,{className:"d-flex flex-column",children:[e.jsxs("div",{className:"position-relative mb-4",children:[e.jsx(v.Control,{type:"search","aria-label":"Search",placeholder:"Enter Doctor Name",className:"form-control-search-page",style:{padding:"10px 45px 10px 15px",borderRadius:"30px",boxShadow:"0px 3px 6px rgba(0, 0, 0, 0.1)"},value:m,onChange:r=>h(r.target.value)}),e.jsx(E,{color:"#4085AD",className:"position-absolute top-50 end-0 translate-middle-y",style:{marginRight:"15px"}})]}),e.jsx("div",{className:"d-flex flex-column gap-2",children:o.map((r,p)=>e.jsx("div",{className:"p-2 rounded-3 shadow-sm",style:{backgroundColor:"#F9F9F9"},children:e.jsx("h5",{className:"m-0",style:{fontSize:"14px",color:"#555"},children:r.name})},p))})]})]}),e.jsxs(u,{className:"shadow p-3 mb-4 rounded-3",style:{backgroundColor:"#ffffff",border:"none"},children:[e.jsx("h4",{className:"hed4 px-2 mb-3",style:{color:"#333333",fontWeight:"bold",fontSize:"1.25rem"},children:"Search by Department"}),e.jsxs(v,{className:"d-flex flex-column",children:[e.jsxs("div",{className:"position-relative mb-4",children:[e.jsx(v.Control,{type:"search","aria-label":"Search",placeholder:"Enter Department Name",className:"form-control-search-page",style:{padding:"10px 45px 10px 15px",borderRadius:"30px",boxShadow:"0px 3px 6px rgba(0, 0, 0, 0.1)"},value:x,onChange:r=>g(r.target.value)}),e.jsx(E,{color:"#4085AD",className:"position-absolute top-50 end-0 translate-middle-y",style:{marginRight:"15px"}})]}),e.jsx("div",{className:"d-flex flex-column gap-2",children:n.map((r,p)=>e.jsx("div",{className:"p-2 rounded-3 shadow-sm",style:{backgroundColor:"#F9F9F9"},children:e.jsx("h5",{className:"m-0",style:{fontSize:"14px",color:"#555"},children:r.name})},p))})]})]})]}),e.jsx(C,{xl:7,lg:7,md:7,className:"d-flex flex-column align-items-start",children:z&&e.jsx(se,{doctor:z})})]})}function ie(){return e.jsxs(e.Fragment,{children:[e.jsx(S,{className:"d-flex justify-content-center align-items-center p-0",children:e.jsx("img",{src:Y,className:"img-fluid p-0"})}),e.jsx(ae,{}),e.jsx(Z,{}),e.jsx(V,{}),e.jsx(S,{className:"d-xl-none d-lg-none d-flex justify-content-center align-items-center my-3",children:e.jsxs(C,{md:12,xs:10,className:"fotter-first ",children:[e.jsx("h1",{className:"hed3 text-center pt-3 pb-1",children:"Popular Radiology Scan's"}),e.jsxs("div",{className:"d-flex justify-content-center align-items-center gap-1",children:[e.jsx("p",{className:"para text-left with-slash",children:"Coronary CT Angiography In Gurugram"}),e.jsx("p",{className:"para text-left with-slash",children:"X-Ray Neck Lateral View In Gurugram"}),e.jsx("p",{className:"para text-left with-slash",children:"Color Doppler - Carotids In Gurugram"}),e.jsx("p",{className:"para text-left",children:"Ultra Sound - Thyroid In Gurugram"})]})]})})]})}export{ie as default};