import{r as o,s as w,j as s,R as p,C as x,B as g,a as v}from"./index-CLSAfh87.js";function C(){let m="https://www.shopifysolutions.in/website/sanarcare/androidApi/index.php";const[n,h]=o.useState([]),[t,r]=o.useState(1),[a,l]=o.useState(3),b=w(),f=async()=>{try{const e=await v.post(m,{},{headers:{"Content-Type":"application/json"}});console.log("API Response:",e),console.log("Response Data:",e.data),console.log("Banners:",e.data.response.banners),console.log("Items:",e.data.response.blogs),e.data&&e.data.response&&e.data.response.blogs?h(e.data.response.blogs):console.log("Unexpected response format:",e.data)}catch(e){console.log("Error fetching blog data:",e)}};o.useEffect(()=>{const e=()=>{window.innerWidth<768?l(1):l(3)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),o.useEffect(()=>{f()},[]);const i=t*a,u=i-a,j=n.slice(u,i),c=Math.ceil(n.length/a),d=e=>{e==="prev"&&t>1?r(t-1):e==="next"&&t<c&&r(t+1)};return s.jsx(s.Fragment,{children:s.jsxs(p,{className:"justify-content-center",children:[s.jsx("h1",{className:"text-center hed1 pb-sm-5 pb-3 pt-sm-0 pt-3",style:{color:"#46A4D9"},children:"Our Blogs"}),s.jsxs(x,{md:10,children:[s.jsx(p,{children:j.map((e,y)=>s.jsx(x,{md:6,lg:4,xl:4,className:"d-flex justify-content-center mb-4",children:s.jsxs("div",{onClick:()=>b(`/blog/blogdetails/${e.slug}`),style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",border:"1px solid #ddd",borderRadius:"8px",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"},children:[s.jsx("img",{src:e.image,alt:e.title,style:{width:"100%",height:"auto",objectFit:"cover",borderRadius:"8px 8px 0 0"}}),s.jsx("h4",{style:{color:"#46A4D9",margin:"1rem 0"},className:"px-2 hed4",children:e.title}),s.jsxs("p",{style:{padding:"0 1rem",textAlign:"center"},className:"px-2 para",children:[" ",e.short_description]})]})},y))}),s.jsxs("div",{className:"mt-sm-0 mt-1 mb-sm-4 mb-3",style:{display:"flex",justifyContent:"center",gap:"1rem"},children:[s.jsx(g,{onClick:()=>d("prev"),disabled:t===1,style:{backgroundColor:"#3b7fbf",border:"0px"},children:"<"}),s.jsx(g,{onClick:()=>d("next"),disabled:t===c,style:{backgroundColor:"#3b7fbf",border:"0px"},children:">"})]})]})]})})}export{C as S};
