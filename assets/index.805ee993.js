var Z=Object.defineProperty;var M=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var P=(e,n,i)=>n in e?Z(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i,w=(e,n)=>{for(var i in n||(n={}))Q.call(n,i)&&P(e,i,n[i]);if(M)for(var i of M(n))Y.call(n,i)&&P(e,i,n[i]);return e};import{_ as B,h as A,r as s,j as t,a as r,B as q,C as T,A as H,S as X,b as ee,c as te,d as ne,e as re,W as ae,f as ce,g as ie,i as le,k as se,F as oe,T as de,l as y,m as z,u as me,R as j,n as W,o as x,p as v,q as ue,s as he,t as ge,v as fe,w as ye,x as Ne,y as R,z as ve,D as be,M as xe,L as I,G as pe,E as Ce,H as we,I as Se,J as ke,K as Be,N as Te,O as S,P as Ee,Q as He}from"./vendor.5f8fa307.js";const Fe=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function i(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerpolicy&&(l.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?l.credentials="include":a.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function c(a){if(a.ep)return;a.ep=!0;const l=i(a);fetch(a.href,l)}};Fe();async function Ae(e){var a,l;if(e===""||e==="undefined")return;let n=[],c=await(await fetch(`https://pro.openweathermap.org/data/2.5/${isNaN(e)?"find?q=":"weather?id="}${e.split(" ").join(" ")}&appid=f7b7c86c8d83af5ce929fe37a40aa052&units=metric&mode=xml&cnt=50`)).text();if(c=new window.DOMParser().parseFromString(c,"text/xml"),c==="undefined"||!c)return n;if(c.getElementsByTagName("current").length>0)n.unshift(L(c));else{if(Number((a=c.getElementsByTagName("cod")[0])==null?void 0:a.innerHTML)===404||Number((l=c.getElementsByTagName("cod")[0])==null?void 0:l.innerHTML)===400)return n;Number(c.getElementsByTagName("count")[0].innerHTML)>0&&B.forEach(c.getElementsByTagName("item"),o=>{n.unshift(L(o))})}return n}function Ie(e){let n="https://mdbgo.io/ascensus/mdb-advanced/img/";return e>=200&&e<=232?n+="thunderstorm.gif":e>=300&&e<=321||e>=500&&e<=531?n+="rain.gif":e>=600&&e<=622?n+="snow.gif":e>=701&&e<=781?n+="fog.gif":e>=801&&e<=804?n+="clouds.gif":n+="clear.gif",n}function L(e){let n={};return n={id:Number(e.getElementsByTagName("city")[0].getAttribute("id")),background:Ie(e.getElementsByTagName("weather")[0].getAttribute("number")),name:e.getElementsByTagName("city")[0].getAttribute("name"),country:e.getElementsByTagName("country")[0].innerHTML,flag:`https://flagcdn.com/${e.getElementsByTagName("country")[0].innerHTML.toLowerCase()}.svg`,icon:`http://openweathermap.org/img/wn/${e.getElementsByTagName("weather")[0].getAttribute("icon")}@2x.png`,desc:e.getElementsByTagName("weather")[0].getAttribute("value"),temp:{value:Number(e.getElementsByTagName("temperature")[0].getAttribute("value")),feel:Number(e.getElementsByTagName("feels_like")[0].getAttribute("value")),min:Number(e.getElementsByTagName("temperature")[0].getAttribute("min")),max:Number(e.getElementsByTagName("temperature")[0].getAttribute("max"))},pressure:e.getElementsByTagName("pressure")[0].getAttribute("value"),humidity:e.getElementsByTagName("humidity")[0].getAttribute("value"),clouds:e.getElementsByTagName("clouds")[0].getAttribute("value"),wind:e.getElementsByTagName("speed")[0].getAttribute("value"),sun:{rise:A(e.getElementsByTagName("sun")[0].getAttribute("rise")+"Z").format("hh:mm a"),set:A(e.getElementsByTagName("sun")[0].getAttribute("set")+"Z").format("hh:mm a")},coord:{lon:Number(e.getElementsByTagName("coord")[0].getAttribute("lon")),lat:Number(e.getElementsByTagName("coord")[0].getAttribute("lat"))}},n}function ze(e){return s.exports.createElement("svg",w({viewBox:"0 0 320 512"},e),s.exports.createElement("path",{d:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",className:""}))}function D(e){return s.exports.createElement("svg",w({viewBox:"0 0 512 512"},e),s.exports.createElement("path",{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z",className:""}))}function Me(e){return s.exports.createElement("svg",w({viewBox:"0 0 448 512"},e),s.exports.createElement("path",{fill:"currentColor",d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z",className:""}))}function Pe(e){return s.exports.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 841.9 595.3"},e),s.exports.createElement("g",{fill:"#61DAFB"},s.exports.createElement("path",{d:"M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"}),s.exports.createElement("circle",{cx:420.9,cy:296.5,r:45.7}),s.exports.createElement("path",{d:"M520.5 78.1z"})))}function Re(e){const n={fontSize:"17pt"};function i(a){return(Number(a)*9/5+32).toFixed(2)}function c(a){e.handler({id:e.city.id,name:e.city.name,country:e.city.country,coord:{lat:e.city.coord.lat,lon:e.city.coord.lon}})}return t("tr",{children:t("td",{style:{borderRadius:"2rem"},children:e.city&&r("div",{className:" p-4 w-100 text-white",style:{fontFamily:"Stencil Std, serif",backgroundImage:"url('"+e.city.background+"')",backgroundRepeat:"no-repeat",backgroundSize:"cover",textShadow:"1px 2px 5px black",borderRadius:"2rem"},children:[r("h2",{className:"mb-1 sfw-normal",style:{fontSize:"20pt"},children:[e.city.name,", ",e.city.country," ",t("img",{style:{width:"3rem",height:"auto"},src:e.city.flag,alt:"flag.svg"})]}),t("div",{style:{fontSize:"10pt",textDecoration:"underline"},children:t("table",{className:"w-100",children:r("tbody",{children:[t("tr",{children:r("td",{colSpan:2,children:[t("strong",{style:{fontSize:"13pt"},children:B.startCase(e.city.desc)}),t("img",{style:{width:"50px",height:"50px"},src:e.city.icon,alt:"icon.png"})]})}),r("tr",{children:[t("td",{children:r("strong",{style:n,children:[t(q,{})," ",e.tempFormat==="C"?e.city.temp.value:i(e.city.temp.value),"\xB0",e.tempFormat]})}),r("td",{children:["Feels like: ",r("strong",{style:n,children:[e.tempFormat==="C"?e.city.temp.feel:i(e.city.temp.feel),"\xB0",e.tempFormat]})]})]})]})})}),t(T,{style:{fontSize:"13pt"},children:r(H,{defaultActiveKey:"0",children:[r(H.Header,{onClick:c,children:[t(X,{}),"\xA0More Details"]}),t(H.Body,{children:t("table",{className:"w-100",children:r("tbody",{children:[r("tr",{children:[r("td",{children:["Max ",t(ee,{})," ",r("strong",{children:[e.tempFormat==="C"?e.city.temp.max:i(e.city.temp.max),"\xB0",e.tempFormat," "]})]}),r("td",{children:["Min ",t(te,{})," ",r("strong",{children:[e.tempFormat==="C"?e.city.temp.min:i(e.city.temp.min),"\xB0",e.tempFormat]})]})]}),t("tr",{children:t("td",{colSpan:2,children:t("hr",{className:"text-black"})})}),r("tr",{children:[t("td",{children:r("strong",{children:[t(ne,{})," ",e.city.clouds,"% "]})}),t("td",{children:r("strong",{children:[t(re,{})," ",e.tempFormat==="C"?e.city.wind+" | m/s":(Number(e.city.wind)*2.24).toFixed(2)+" | mi/h"]})})]}),r("tr",{children:[t("td",{children:r("strong",{children:[t(ae,{})," ",e.city.humidity,"% "]})}),t("td",{children:r("strong",{children:[" ",t(ce,{})," ",e.city.pressure," hPa"]})})]}),t("tr",{children:t("td",{colSpan:2,children:t("hr",{className:"text-black"})})}),r("tr",{children:[r("td",{children:["Sunrise ",r("strong",{children:[t(ie,{}),t("br",{})," ",e.city.sun.rise]})]}),r("td",{children:[" Sunset ",r("strong",{children:[t(le,{}),t("br",{})," ",e.city.sun.set]})]})]}),t("tr",{children:t("td",{colSpan:2,children:t("hr",{className:"text-black"})})}),t("tr",{children:r("td",{colSpan:2,style:{textAlign:"center",fontSize:"9pt"},children:["Geo Coords ",t("strong",{children:t(se,{})}),t("br",{})," [lat: ",t("strong",{children:e.city.coord.lat}),", lon: ",t("strong",{children:e.city.coord.lon}),"]"]})}),t("tr",{children:r("td",{colSpan:2,style:{textAlign:"center",fontSize:"9pt"},children:[t("br",{}),"City ID ",r("strong",{children:[t(oe,{}),"  ",e.city.id]})]})})]})})})]})})]})})})}function $(e,n,i,c,a){if(e==="undefined"||e===null)return;const l=3,o=Math.ceil(e.length/l);return r("div",{children:[t(de,{hover:!0,children:t("tbody",{children:Le(De(e,n,l),i,a)})}),Ge(o,n,c)]})}function Le(e,n,i){let c=0,a=[];return B.forEach(e,l=>{a.unshift(t(Re,{city:l,handler:i,tempFormat:n},c++))}),a}function De(e,n,i){const c=(n-1)*i,a=c+i;return e.slice(c,a)}function Ge(e,n,i){const c=[];let a=0;for(;a<e;++a)c.push(t("li",{className:"p-1 page-item",children:r(y,{className:"page-link",onClick:i,disabled:a===Number(n)-1,value:a+1,children:[" ",a+1," "]})},1001+a));return e>1&&(c.unshift(t("li",{className:"p-1 page-item",children:t(y,{className:"page-link",onClick:i,disabled:Number(n)===1,value:"prev",children:" \u2770 "})},1e3)),c.push(t("li",{className:"p-1 page-item",children:t(y,{className:"page-link",onClick:i,disabled:Number(n)===e,value:"next",children:" \u2771 "},e)},e+1001))),t("div",{className:"text-center",children:t("ul",{className:"d-flex",style:{listStyleType:"none"},children:c})})}function k(e){function n(i){e.handler()}return t(T,{children:r(z,{onClick:e.handler&&n,variant:"danger",className:"text-center shadow-sm mt-5 position-static",children:[r("b",{children:[t("u",{children:"Error 404"}),":"]})," ",e.text,t("div",{className:"w-100 text-center mt-5",children:t("img",{className:"w-100 m-auto rounded shadow-lg",src:"https://http.cat/404",alt:"error 404"})})]})})}function Oe(e){const[n,i]=s.exports.useState(""),[c,a]=s.exports.useState(!1),[l,o]=s.exports.useState(),[g,u]=s.exports.useState(),{id:d}=me();s.exports.useEffect(async()=>{!d||d===void 0||(u(d),await f(d,e.currentPage,e.tempFormat,e.pageHandler,e.recentCitiesHandler))},[d]),s.exports.useEffect(async()=>{navigator.geolocation&&navigator.geolocation.getCurrentPosition(m,()=>{e.errorHandler(t(k,{handler:e.errorHandler,text:"Problem Getting Geolocation."}))})},[l]);async function m(h){!h||(l||o(h),!(d&&d!==g)&&await f(`&lat=${h.coords.latitude}&lon=${h.coords.longitude}&cnt=1`,e.currentPage,e.tempFormat,e.pageHandler,e.recentCitiesHandler,!0))}async function b(h){h.preventDefault(),await f(n,e.currentPage,e.tempFormat,e.pageHandler,e.recentCitiesHandler)}async function f(h,N,V,K,U,J=!1){e.setPageNo(1),a(!0),e.errorHandler(null),(!h||h=="")&&e.errorHandler(t(k,{handler:e.errorHandler,text:"No String Provided."}));let p=await Ae(h);p?p.length===0?e.errorHandler(t(k,{handler:e.errorHandler,text:"No Data Found"})):(e.setCities(p),e.cardHandler($(p,N,V,K,U)),J||e.recentSearchesHandler(p.map(C=>({id:C.id,name:C.name,country:C.country,coord:{lat:C.coord.lat,lon:C.coord.lon}})))):e.errorHandler(t(k,{handler:e.errorHandler,text:"Bad Request"})),h!=="Blockme"&&a(!1)}function E(h){if(h.includes(",")){let N=h.split(",");return N[0]=B.startCase(N[0]),N[1]=N[1].toUpperCase(),N.join(", ")}else return B.startCase(h)}return t("section",{children:t(T,{className:"w-100 h-100 mt-5 ",children:t(j,{className:"d-flex justify-content-center align-items-center h-100",children:t(W,{className:"col-md-8 col-lg-6 col-xl-5",children:t(x,{className:"w-100 h-100 p-2 position-static shadow-lg",style:{textShadow:"1px 2px 8px black",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundColor:"var(--bs-gray-600)",backgroundImage:"url('https://media1.tenor.com/images/69420a9494909231ca2752a175839fec/tenor.gif')"},children:r(x.Body,{className:"position-static",children:[r(x.Title,{style:{fontFamily:"serif",fontSize:"16pt"},className:"mb-4 pb-2 fw-normal text-white text-shadow",children:["Check the weather forecast for\xA0\xA0",t("span",{style:{color:"var(--bs-yellow)"},children:n})]}),r(v,{method:"GET",action:"#",className:"form-inline",onSubmit:b,children:[t(v.Group,{controlId:"weatherSearch",children:r("div",{className:"input-group position-static",children:[t("div",{className:"input-group-prepend position-static",children:t("span",{className:"input-group-text text-white bg-secondary h-100",id:"basic-addon1",children:t(ue,{})})}),t(v.Control,{className:"bg-dark text-white position-static",type:"text",placeholder:"City, CC",onChange:h=>i(E(h.target.value))}),!c&&r(y,{variant:"success",className:"position-static",type:"submit",children:[t(he,{}),"\xA0Forecast"]}),c&&r(y,{disabled:!0,variant:"secondary",className:"position-static",type:"submit",children:["Loading...\xA0",t(D,{className:"Loading-data"})]})]})}),t(v.Group,{controlId:"weatherSearch",children:r("div",{className:"flex mb-4 pb-2 text-white",style:{marginTop:"10px"},children:[r("span",{className:"ps-4",children:[r("div",{className:"form-check form-check-inline",children:[t("input",{id:"wt_C",className:"form-check-input",type:"radio",name:"format",value:"C",defaultChecked:!0,onChange:h=>e.tempHandler(h.target.value)}),t("label",{className:"form-check-label",htmlFor:"celsius",children:"C\xB0"})]}),r("div",{className:"form-check form-check-inline",children:[t("input",{id:"wt_F",className:"form-check-input",type:"radio",name:"format",value:"F",onChange:h=>{e.tempHandler(h.target.value)}}),t("label",{className:"form-check-label",htmlFor:"fahrenheit",children:"F\xB0"})]})]}),t("span",{className:"ms-auto"}),t("span",{className:"",children:r("div",{className:"form-check form-check-inline",children:[c&&r(y,{disabled:!0,variant:"secondary",className:"btn-sm",children:["...\xA0",t(D,{className:"Loading-data"})]}),!c&&r(y,{variant:"secondary",className:"btn-sm",value:"Local",onClick:()=>m(l),children:[t(ge,{}),"\xA0Local"]})]})}),t("span",{className:"",children:t("div",{className:"form-check form-check-inline",children:r(y,{variant:"primary",className:"btn-sm",value:"Clear Cards",onClick:()=>e.cardHandler(),children:[t(fe,{}),"\xA0Clear Cards"]})})})]})})]})]})})})})})})}function je(e){return t("section",{children:t(T,{className:"w-100 h-100 mt-5 ",children:t(j,{className:"d-flex justify-content-center align-items-center h-100",children:r(W,{className:"col-md-8 col-lg-6 col-xl-5",children:[e.error&&e.error,t(z,{className:"text-center position-static",variant:"success",children:r("u",{children:[t("b",{children:"Last Updated:"})," ",A().format("hh:mm:ss a")]})}),e.children,e.cities]})})})})}function G(e){const{color:n,name:i}=e;return r("div",{className:"cus-tag-hover",children:[t("div",{className:"pin bounce",style:{backgroundColor:n,cursor:"pointer"},title:i}),t("div",{className:"pulse"})]})}function _(e){const[n,i]=s.exports.useState([]),[c,a]=s.exports.useState(()=>{o()}),l=ye();s.exports.useEffect(()=>o(),[e.locations,e.searches]);function o(){let d=[];navigator.geolocation.getCurrentPosition(m=>{if(!m){a({lat:0,lng:0});return}a({lat:m.coords.latitude,lng:m.coords.longitude}),d.push([t(G,{lat:m.coords.latitude,lng:m.coords.longitude,name:"Home::lat::"+m.coords.latitude+"::lon::"+m.coords.longitude,color:"orange"},7e3)]),e.locations&&(d=[...d,...g(e.locations,"blue",8e3)]),e.searches&&(d=[...d,...g(e.searches,"red",9e3)]),i(d)})}function g(d,m,b){return d.map((f,E)=>t(G,{lat:f.coord.lat,lng:f.coord.lon,name:f.name+","+f.country+"::id::"+f.id+"::lat::"+f.coord.lat+"::lon::"+f.coord.lon,color:m},E+b))}const u=d=>({disableDefaultUI:!0,mapTypeControl:!0,streetViewControl:!0,styles:[{featureType:"poi",elementType:"labels",stylers:[{visibility:"on"}]}]});return t("div",{className:"m-auto",style:l.pathname=="/map"?{width:"98vw",height:"90vh"}:{height:"50vh",width:"40vw"},children:c&&t(Ne,{bootstrapURLKeys:{key:"AIzaSyCmxjmgKUbwrzjna533SkResMBEDHDlCNw"},defaultCenter:c,defaultZoom:0,options:u,children:n})})}function O(e){const[n,i]=s.exports.useState(null),[c,a]=s.exports.useState(1),[l,o]=s.exports.useState(null),[g,u]=s.exports.useState(!1),[d,m]=s.exports.useState("C");s.exports.useEffect(()=>o($(n,c,d,b,e.recentCitiesHandler)),[c,n,d]);function b(f){switch(f.target.value){case"prev":c>1&&a(c-1);break;case"next":a(c+1);break;default:a(Number(f.target.value))}}return r("div",{children:[t(Oe,{tempHandler:m,tempFormat:d,errorHandler:u,cardHandler:o,components:l,currentPage:c,pageHandler:b,setCities:i,setPageNo:a,recentCitiesHandler:e.recentCitiesHandler,recentSearchesHandler:e.recentSearchesHandler}),r(je,{error:g,cities:l,children:[r(x,{className:"m-auto mt-5 shadow-lg p-3 position-relative",style:{height:"50vh",width:"40vw",backgroundColor:"var(--bs-gray-200)"},children:[t(x.Title,{style:{fontFamily:"Stencil Std, serif"},className:"text-black text-center",children:"Recently Searched Cities"}),t(z,{variant:"dark",className:"m-auto d-flex",style:{height:"2.8rem"},children:r("span",{className:"d-flex w-100",style:{marginTop:"-.7rem",fontFamily:"cursive, serif"},children:[r("span",{className:"ms-auto ps-4 pe-4",children:[t("div",{className:"pin bounce position-static",style:{backgroundColor:"orange",cursor:"pointer"},title:"your current/home location"}),t("span",{children:"Home"})]}),r("span",{className:"ps-4 pe-4",children:[t("div",{className:"pin bounce position-static",style:{backgroundColor:"blue",cursor:"pointer"},title:"recently viewed cities, can be seen in the dropdown tab"}),t("span",{children:"Viewed"})]}),r("span",{className:"me-auto ps-4 pe-4 position-static",children:[t("div",{className:"pin bounce position-static",style:{backgroundColor:"red",cursor:"pointer"},title:"recently searched cities using the engine"}),t("span",{children:"Searched"})]})]})}),t(x.Body,{style:{border:"solid black 2px",padding:0,overflow:"hidden",borderRadius:"0.5rem"},children:t(_,{searches:e.searches,locations:e.locations})})]}),t("br",{}),t("br",{})]})]})}function F(e){const[n,i]=s.exports.useState(!1);return r("li",{className:"cus-nav-item",children:[t("span",{className:"cus-icon-button",onClick:()=>i(!n),children:e.icon}),n&&e.children]})}function We(e){const[n,i]=s.exports.useState("main"),[c,a]=s.exports.useState();function l(u){if(!u||u===void 0)return;const d=[];let m=0;for(;m<u.length;++m)d.push(t(I,{to:"/home/"+u[m].id,children:r(g,{leftIcon:t(pe,{}),rightIcon:t("img",{className:"ms-auto",style:{height:"1rem",width:"auto"},src:"https://flagcdn.com/"+u[m].country.toLowerCase()+".svg"}),children:[u[m].name,", ",u[m].country]})},500+m));return d}function o(u){a(u.offsetHeight)}function g(u){return r("span",{className:"cus-menu-item",onClick:()=>u.goToMenu&&i(u.goToMenu),children:[t("span",{className:"cus-icon-button",children:u.leftIcon}),u.children,t("span",{className:"cus-icon-right",children:u.rightIcon})]})}return r("div",{className:"cus-dropdown",style:{height:c},children:[t(R,{in:n==="main",unmountOnExit:!0,timeout:500,classNames:"cus-menu-primary",onEnter:o,children:r("div",{className:"cus-menu",children:[t(g,{leftIcon:t(ve,{}),children:"World Map"}),t(g,{leftIcon:t(be,{}),rightIcon:">",goToMenu:"settings",children:"Recently Viewed Cities"})]})}),t(R,{in:n==="settings",unmountOnExit:!0,timeout:500,classNames:"cus-menu-secondary",onEnter:o,children:r("div",{className:"cus-menu",children:[t(g,{leftIcon:t(Me,{}),goToMenu:"main",children:t("u",{children:t("b",{children:"Back"})})}),t(g,{onClick:o,className:"text-center",leftIcon:t(xe,{}),rightIcon:"v",children:t("u",{children:"Recent Cities Appear Here"})}),e.cityId&&l(e.cityId)]})})]})}function $e(){const[e,n]=s.exports.useState(),i=Ce();function c(a){a.preventDefault(),i("/home/"+e)}return t(v,{method:"GET",action:"#",className:"form-inline col-2 ms-auto cus-nav-search",style:{marginTop:"0.8rem"},onSubmit:c,children:t(v.Group,{controlId:"citySearch",children:r("div",{className:"input-group",children:[t("div",{className:"input-group-prepend",children:t("span",{className:"input-group-text text-white bg-secondary",style:{margin:"0",padding:"0"},children:t(Pe,{className:"App-logo"})})}),t(v.Control,{className:"bg-dark text-white",type:"text",placeholder:"CityID",onChange:a=>{n(a.target.value)}}),t(y,{variant:"success",type:"submit",children:t(we,{})},9999)]})})})}function _e(e){const n={marginTop:"7px"};return t("div",{className:"cus-nav-bar-main",children:t("nav",{className:"cus-navbar",children:r("ul",{className:"cus-navbar-nav",children:[t(I,{to:"/home",style:n,className:"Color-spin",children:t(F,{icon:t(Se,{})})}),t(I,{to:"/map",style:n,className:"Color-spin",children:t(F,{icon:t(ke,{})})}),t(F,{icon:t(ze,{}),children:t(We,{cityId:e.cityId})}),t($e,{})]})})})}function Ve(){const[e,n]=s.exports.useState(localStorage.getItem("cities")?JSON.parse(localStorage.getItem("cities")):[]),[i,c]=s.exports.useState([]);function a(l){if(!l||l===void 0)return;let o=e;(!o||o===void 0)&&(o=[]);let g=0;for(;g<o.length;++g)if(l.id==o[g].id)return;o.length>=6&&o.pop(),o.unshift(l),n(o),localStorage.setItem("cities",JSON.stringify(o))}return r(Be,{children:[t(_e,{style:{zIndex:1e6},cityId:e}),r(Te,{style:{zIndex:0},children:[t(S,{exact:!0,path:"/",element:t(Ee,{to:"/home",replace:!0})}),t(S,{exact:!0,path:"/home",element:t(O,{recentSearchesHandler:c,recentCitiesHandler:a,searches:i,locations:e})}),t(S,{exact:!0,path:"/home/:id",element:t(O,{recentSearchesHandler:c,recentCitiesHandler:a,searches:i,locations:e})}),t(S,{exact:!0,path:"/map",element:t(_,{searches:i,locations:e})}),t(S,{path:"*",element:t(k,{text:"Page Not Found."})})]})]})}He.render(t(Ve,{}),document.getElementById("root"));
