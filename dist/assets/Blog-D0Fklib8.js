import{r as t,s as N,j as e,R as i,C as o,B as b,a as C}from"./index-CLSAfh87.js";import{S as v}from"./Section11-C8-oYNR6.js";import{S as w}from"./Section10-CdonkK_W.js";import"./swiper-CZu1iGeb.js";/* empty css             */import"./Card-DC1jSqN4.js";const k="/assets/Blogs%20page%20banner-CTuPEaDl.png";function F(){const[r,d]=t.useState([]),[n,p]=t.useState(1),a=8;let h="https://www.shopifysolutions.in/website/sanarcare/androidApi/index.php";const x=async()=>{try{const s=await C.post(h,{},{headers:{"Content-Type":"application/json"}});s.data&&s.data.response&&s.data.response.blogs&&d(s.data.response.blogs)}catch{}};t.useEffect(()=>{x()},[]);const m=N(),l=n*a,g=l-a,u=r.slice(g,l),f=Math.ceil(r.length/a),c=[];for(let s=1;s<=f;s++)c.push(s);const j=s=>{p(s)};return e.jsxs(e.Fragment,{children:[e.jsx(i,{style:{backgroundImage:`url(${k})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",height:"400px"},className:"d-md-flex d-none justify-content-center align-items-center",children:e.jsx(o,{md:12,className:"d-flex align-items-center ",children:e.jsxs("div",{className:"px-5 ",children:[e.jsxs("h2",{className:"d-flex gap-4 pl-5 ",children:[e.jsx("span",{className:"hed2",children:"Explore Our"}),"  ",e.jsx("span",{className:"hed1",style:{color:"#FF631A"},children:"Comprehensive"})]}),e.jsxs("h1",{className:"d-flex gap-4 pt-1",children:[e.jsx("span",{className:"hed1",style:{color:"#FF631A"},children:"articles"})," ",e.jsx("span",{className:"hed2",children:"On everything from "})]}),e.jsxs("h2",{className:"d-flex gap-4 pt-1",children:[e.jsx("span",{className:"hed1",style:{color:"#FF631A"},children:"Preventive Care "})," ",e.jsx("span",{className:"hed2",children:"to "})]}),e.jsx("h2",{className:"hed1 pt-2",style:{color:"#46A4D9"},children:"Cutting-edge treatments"})]})})}),e.jsx("div",{className:"d-flex justify-content-center align-items-center",children:e.jsx("h1",{className:"hed1 pt-3",children:"Our Blogs"})}),e.jsx("div",{className:"d-flex justify-content-center align-items-center flex-wrap gap-3",children:u.map((s,y)=>e.jsxs("div",{onClick:()=>m(`/blog/blogdetails/${s.slug}`),style:{width:"400px",cursor:"pointer",height:"auto",padding:"16px",border:"1px solid #ddd",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",display:"flex",flexDirection:"column",backgroundColor:"#fff"},children:[s.image&&e.jsx("img",{src:s.image,alt:s.title,style:{width:"100%",height:"auto",borderRadius:"8px",objectFit:"cover",marginBottom:"16px"}}),e.jsx("h2",{style:{color:"#46A4D9"},className:"hed4 text-center",children:s.title}),e.jsx("p",{style:{color:"#555"},className:"para text-center",children:s.short_description})]},s.id||s.slug||y))}),e.jsx("div",{className:"mt-4 mb-4",style:{display:"flex",justifyContent:"center",gap:"1rem"},children:c.map(s=>e.jsx(b,{onClick:()=>j(s),style:{backgroundColor:n===s?"#46A4D9":"#3b7fbf",border:"0px"},children:s},s))}),e.jsx(v,{}),e.jsx(w,{}),e.jsx(i,{className:"d-xl-none d-flex justify-content-center align-items-center my-3",children:e.jsxs(o,{md:12,className:"fotter-first",children:[e.jsx("h1",{className:"hed3 text-center pt-3 pb-1",children:"Popular Radiology Scan's"}),e.jsxs("div",{className:"d-flex justify-content-center align-items-center gap-1",children:[e.jsx("p",{className:"para text-left with-slash",children:"Coronary CT Angiography In Gurugram"}),e.jsx("p",{className:"para text-left with-slash",children:"X-Ray Neck Lateral View In Gurugram"}),e.jsx("p",{className:"para text-left with-slash",children:"Color Doppler - Carotids In Gurugram"}),e.jsx("p",{className:"para text-left",children:"Ultra Sound - Thyroid In Gurugram"})]})]})})]})}export{F as default};