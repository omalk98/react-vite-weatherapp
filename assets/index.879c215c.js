var Y=Object.defineProperty;var z=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var M=(e,a,c)=>a in e?Y(e,a,{enumerable:!0,configurable:!0,writable:!0,value:c}):e[a]=c,k=(e,a)=>{for(var c in a||(a={}))q.call(a,c)&&M(e,c,a[c]);if(z)for(var c of z(a))X.call(a,c)&&M(e,c,a[c]);return e};import{_ as B,h as A,r as l,j as t,a as n,B as ee,C as E,A as H,S as te,b as ae,c as ne,d as re,e as ie,W as ce,f as se,g as le,i as oe,k as de,F as me,T as ue,l as N,m as I,u as he,n as W,R as j,o as $,p as C,q as b,s as ge,t as fe,v as ye,w as Ne,x as ve,y as pe,z as L,L as T,D as be,E as xe,M as Ce,G as we,H as Se,I as ke,J as Be,K as Te,N as Ee,O as p,P as R,Q as He}from"./vendor.0bc2bd45.js";const Fe=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function c(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=c(r);fetch(r.href,s)}};Fe();async function Ae(e){var r,s;if(e===""||e==="undefined")return;let a=[],i=await(await fetch(`https://pro.openweathermap.org/data/2.5/${isNaN(e)?"find?q=":"weather?id="}${e.split(" ").join(" ")}&appid=f7b7c86c8d83af5ce929fe37a40aa052&units=metric&mode=xml&cnt=50`)).text();if(i=new window.DOMParser().parseFromString(i,"text/xml"),i==="undefined"||!i)return a;if(i.getElementsByTagName("current").length>0)a.unshift(P(i));else{if(Number((r=i.getElementsByTagName("cod")[0])==null?void 0:r.innerHTML)===404||Number((s=i.getElementsByTagName("cod")[0])==null?void 0:s.innerHTML)===400)return a;Number(i.getElementsByTagName("count")[0].innerHTML)>0&&B.forEach(i.getElementsByTagName("item"),u=>{a.unshift(P(u))})}return a}function Ie(e){let a="https://mdbgo.io/ascensus/mdb-advanced/img/";return e>=200&&e<=232?a+="thunderstorm.gif":e>=300&&e<=321||e>=500&&e<=531?a+="rain.gif":e>=600&&e<=622?a+="snow.gif":e>=701&&e<=781?a+="fog.gif":e>=801&&e<=804?a+="clouds.gif":a+="clear.gif",a}function P(e){let a={};return a={id:Number(e.getElementsByTagName("city")[0].getAttribute("id")),background:Ie(e.getElementsByTagName("weather")[0].getAttribute("number")),name:e.getElementsByTagName("city")[0].getAttribute("name"),country:e.getElementsByTagName("country")[0].innerHTML,flag:`https://flagcdn.com/${e.getElementsByTagName("country")[0].innerHTML.toLowerCase()}.svg`,icon:`https://openweathermap.org/img/wn/${e.getElementsByTagName("weather")[0].getAttribute("icon")}@2x.png`,desc:e.getElementsByTagName("weather")[0].getAttribute("value"),temp:{value:Number(e.getElementsByTagName("temperature")[0].getAttribute("value")),feel:Number(e.getElementsByTagName("feels_like")[0].getAttribute("value")),min:Number(e.getElementsByTagName("temperature")[0].getAttribute("min")),max:Number(e.getElementsByTagName("temperature")[0].getAttribute("max"))},pressure:e.getElementsByTagName("pressure")[0].getAttribute("value"),humidity:e.getElementsByTagName("humidity")[0].getAttribute("value"),clouds:e.getElementsByTagName("clouds")[0].getAttribute("value"),wind:{speed:e.getElementsByTagName("speed")[0].getAttribute("value"),direction:e.getElementsByTagName("direction")[0].getAttribute("code")},sun:{rise:A(e.getElementsByTagName("sun")[0].getAttribute("rise")+"Z").format("hh:mm a"),set:A(e.getElementsByTagName("sun")[0].getAttribute("set")+"Z").format("hh:mm a")},coord:{lon:Number(e.getElementsByTagName("coord")[0].getAttribute("lon")),lat:Number(e.getElementsByTagName("coord")[0].getAttribute("lat"))}},a}function ze(e){return l.exports.createElement("svg",k({viewBox:"0 0 320 512"},e),l.exports.createElement("path",{d:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",className:""}))}function D(e){return l.exports.createElement("svg",k({viewBox:"0 0 512 512"},e),l.exports.createElement("path",{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z",className:""}))}function Me(e){return l.exports.createElement("svg",k({viewBox:"0 0 448 512"},e),l.exports.createElement("path",{fill:"currentColor",d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z",className:""}))}function Le(e){return l.exports.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 841.9 595.3"},e),l.exports.createElement("g",{fill:"#61DAFB"},l.exports.createElement("path",{d:"M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"}),l.exports.createElement("circle",{cx:420.9,cy:296.5,r:45.7}),l.exports.createElement("path",{d:"M520.5 78.1z"})))}function Re(e){const a={fontSize:"17pt"};function c(r){return(Number(r)*9/5+32).toFixed(2)}function i(r){e.handler({id:e.city.id,name:e.city.name,country:e.city.country,coord:{lat:e.city.coord.lat,lon:e.city.coord.lon}})}return t("tr",{children:t("td",{style:{borderRadius:"2rem"},children:e.city&&n("div",{className:" p-4 w-100 text-white",style:{fontFamily:"Stencil Std, serif",backgroundImage:"url('"+e.city.background+"')",backgroundRepeat:"no-repeat",backgroundSize:"cover",textShadow:"1px 2px 5px black",borderRadius:"2rem"},children:[n("h2",{className:"mb-1 sfw-normal",style:{fontSize:"20pt"},children:[e.city.name,", ",e.city.country," ",t("img",{style:{width:"3rem",height:"auto"},src:e.city.flag,alt:"flag.svg"})]}),t("div",{style:{fontSize:"10pt",textDecoration:"underline"},children:t("table",{className:"w-100",children:n("tbody",{children:[t("tr",{children:n("td",{colSpan:2,children:[t("strong",{style:{fontSize:"13pt"},children:B.startCase(e.city.desc)}),t("img",{style:{width:"50px",height:"50px"},src:e.city.icon,alt:"icon.png"})]})}),n("tr",{children:[t("td",{children:n("strong",{style:a,children:[t(ee,{})," ",e.tempFormat==="C"?e.city.temp.value:c(e.city.temp.value),"\xB0",e.tempFormat]})}),n("td",{children:["Feels like: ",n("strong",{style:a,children:[e.tempFormat==="C"?e.city.temp.feel:c(e.city.temp.feel),"\xB0",e.tempFormat]})]})]})]})})}),t(E,{style:{fontSize:"13pt"},children:n(H,{defaultActiveKey:"0",children:[n(H.Header,{onClick:i,children:[t(te,{}),"\xA0More Details"]}),t(H.Body,{children:t("table",{className:"w-100",children:n("tbody",{children:[n("tr",{children:[n("td",{children:["Max ",t(ae,{})," ",n("strong",{children:[e.tempFormat==="C"?e.city.temp.max:c(e.city.temp.max),"\xB0",e.tempFormat," "]})]}),n("td",{children:["Min ",t(ne,{})," ",n("strong",{children:[e.tempFormat==="C"?e.city.temp.min:c(e.city.temp.min),"\xB0",e.tempFormat]})]})]}),t("tr",{children:t("td",{colSpan:2,children:t("hr",{className:"text-black"})})}),n("tr",{children:[t("td",{children:n("strong",{children:[t(re,{})," ",e.city.clouds,"% "]})}),t("td",{children:n("strong",{children:[t(ie,{})," ",e.tempFormat==="C"?e.city.wind.speed+" | m/s":(Number(e.city.wind)*2.24).toFixed(2)+" | mi/h"," | ",e.city.wind.direction]})})]}),n("tr",{children:[t("td",{children:n("strong",{children:[t(ce,{})," ",e.city.humidity,"% "]})}),t("td",{children:n("strong",{children:[" ",t(se,{})," ",e.city.pressure," hPa"]})})]}),t("tr",{children:t("td",{colSpan:2,children:t("hr",{className:"text-black"})})}),n("tr",{children:[n("td",{children:["Sunrise ",n("strong",{children:[t(le,{}),t("br",{})," ",e.city.sun.rise]})]}),n("td",{children:[" Sunset ",n("strong",{children:[t(oe,{}),t("br",{})," ",e.city.sun.set]})]})]}),t("tr",{children:t("td",{colSpan:2,children:t("hr",{className:"text-black"})})}),t("tr",{children:n("td",{colSpan:2,style:{textAlign:"center",fontSize:"9pt"},children:["Geo Coords ",t("strong",{children:t(de,{})}),t("br",{})," [lat: ",t("strong",{children:e.city.coord.lat}),", lon: ",t("strong",{children:e.city.coord.lon}),"]"]})}),t("tr",{children:n("td",{colSpan:2,style:{textAlign:"center",fontSize:"9pt"},children:[t("br",{}),"City ID ",n("strong",{children:[t(me,{}),"  ",e.city.id]})]})})]})})})]})})]})})})}function _(e,a,c,i,r){if(e==="undefined"||e===null)return;const s=3,u=Math.ceil(e.length/s);return n("div",{children:[t(ue,{hover:!0,children:t("tbody",{children:Pe(De(e,a,s),c,r)})}),Ge(u,a,i)]})}function Pe(e,a,c){let i=0,r=[];return B.forEach(e,s=>{r.unshift(t(Re,{city:s,handler:c,tempFormat:a},i++))}),r}function De(e,a,c){const i=(a-1)*c,r=i+c;return e.slice(i,r)}function Ge(e,a,c){const i=[];let r=0;for(;r<e;++r)i.push(t("li",{className:"p-1 page-item",children:n(N,{className:"page-link",onClick:c,disabled:r===Number(a)-1,value:r+1,children:[" ",r+1," "]})},1001+r));return e>1&&(i.unshift(t("li",{className:"p-1 page-item",children:t(N,{className:"page-link",onClick:c,disabled:Number(a)===1,value:"prev",children:" \u2770 "})},1e3)),i.push(t("li",{className:"p-1 page-item",children:t(N,{className:"page-link",onClick:c,disabled:Number(a)===e,value:"next",children:" \u2771 "},e)},e+1001))),t("div",{className:"text-center",children:t("ul",{className:"d-flex",style:{listStyleType:"none"},children:i})})}function x(e){function a(c){e.handler()}return t(E,{children:n(I,{onClick:e.handler&&a,variant:"danger",className:"text-center shadow-sm mt-5 position-static",children:[n("b",{children:[t("u",{children:"Error 404"}),":"]})," ",e.text,t("div",{className:"w-100 text-center mt-5",children:t("img",{className:"w-100 m-auto rounded shadow-lg",src:"https://http.cat/404",alt:"error 404"})})]})})}function Oe(e){const[a,c]=l.exports.useState(""),[i,r]=l.exports.useState(!1),[s,u]=l.exports.useState(),{id:o}=he(),d=W();l.exports.useEffect(async()=>{!o||o===void 0||(u(o),await y(o,e.currentPage,e.tempFormat,e.pageHandler,e.recentCitiesHandler),d("/react-vite-weatherapp/home/id/"+o))},[o]),l.exports.useEffect(async()=>{g(e.position)},[e.position]);async function g(m){if(!m){e.errorHandler(t(x,{handler:e.errorHandler,text:"Enable GeoLocation and Reload the Page to get Weather for your current area."}));return}o&&o!==s||await y(`&lat=${m.coords.latitude}&lon=${m.coords.longitude}&cnt=1`,e.currentPage,e.tempFormat,e.pageHandler,e.recentCitiesHandler,!0)}async function f(m){m.preventDefault(),await y(a,e.currentPage,e.tempFormat,e.pageHandler,e.recentCitiesHandler)}async function y(m,v,U,J,Z,Q=!1){e.setPageNo(1),r(!0),e.errorHandler(null),(!m||m=="")&&e.errorHandler(t(x,{handler:e.errorHandler,text:"No String Provided."}));let w=await Ae(m);w?w.length===0?e.errorHandler(t(x,{handler:e.errorHandler,text:"No Data Found"})):(e.setCities(w),e.cardHandler(_(w,v,U,J,Z)),Q||e.recentSearchesHandler(w.map(S=>({id:S.id,name:S.name,country:S.country,coord:{lat:S.coord.lat,lon:S.coord.lon}})))):e.errorHandler(t(x,{handler:e.errorHandler,text:"Bad Request"})),m!=="Blockme"&&r(!1)}function h(m){if(m.includes(",")){let v=m.split(",");return v[0]=B.startCase(v[0]),v[1]=v[1].toUpperCase(),v.join(", ")}else return B.startCase(m)}return t("section",{children:t(E,{className:"w-100 h-100 mt-5 ",children:t(j,{className:"d-flex justify-content-center align-items-center h-100",children:t($,{className:"col-md-8 col-lg-6 col-xl-5",children:t(C,{className:"w-100 h-100 p-2 position-static shadow-lg",style:{textShadow:"1px 2px 8px black",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundColor:"var(--bs-gray-600)",backgroundImage:"url('https://media1.tenor.com/images/69420a9494909231ca2752a175839fec/tenor.gif')"},children:n(C.Body,{className:"position-static",children:[n(C.Title,{style:{fontFamily:"serif",fontSize:"16pt"},className:"mb-4 pb-2 fw-normal text-white text-shadow",children:["Check the weather forecast for\xA0\xA0",t("span",{style:{color:"var(--bs-yellow)"},children:a})]}),n(b,{method:"GET",action:"#",className:"form-inline",onSubmit:f,children:[t(b.Group,{controlId:"weatherSearch",children:n("div",{className:"input-group position-static",children:[t("div",{className:"input-group-prepend position-static",children:t("span",{className:"input-group-text text-white bg-secondary h-100",id:"basic-addon1",children:t(ge,{})})}),t(b.Control,{className:"bg-dark text-white position-static",type:"text",placeholder:"City, CC",onChange:m=>c(h(m.target.value))}),n("div",{className:"position-static",children:[!i&&n(N,{variant:"success",className:"position-static",type:"submit",children:[t(fe,{}),"\xA0Forecast"]}),i&&n(N,{disabled:!0,variant:"secondary",className:"position-static",type:"submit",children:["Loading...\xA0",t(D,{className:"Loading-data"})]})]})]})}),t(b.Group,{controlId:"weatherSearch",children:n("div",{className:"flex mb-4 pb-2 text-white",style:{marginTop:"10px"},children:[n("span",{className:"ps-4",children:[n("div",{className:"form-check form-check-inline",children:[t("input",{id:"wt_C",className:"form-check-input",type:"radio",name:"format",value:"C",defaultChecked:!0,onChange:m=>e.tempHandler(m.target.value)}),t("label",{className:"form-check-label",htmlFor:"celsius",children:"C\xB0"})]}),n("div",{className:"form-check form-check-inline",children:[t("input",{id:"wt_F",className:"form-check-input",type:"radio",name:"format",value:"F",onChange:m=>{e.tempHandler(m.target.value)}}),t("label",{className:"form-check-label",htmlFor:"fahrenheit",children:"F\xB0"})]})]}),t("span",{className:"ms-auto"}),t("span",{children:n("div",{className:"form-check form-check-inline",children:[i&&n(N,{disabled:!0,variant:"secondary",className:"btn-sm",children:["...\xA0",t(D,{className:"Loading-data"})]}),!i&&n(N,{variant:"secondary",className:"btn-sm",value:"Local",onClick:()=>g(e.position),children:[t(ye,{}),"\xA0Local"]})]})}),t("span",{children:t("div",{className:"form-check form-check-inline",children:n(N,{variant:"primary",className:"btn-sm",value:"Clear Cards",onClick:()=>e.cardHandler(),children:[t(Ne,{}),"\xA0Clear Cards"]})})})]})})]})]})})})})})})}function V(e){return t("section",{children:t(E,{className:"w-100 h-100 mt-5 ",children:t(j,{className:"d-flex justify-content-center align-items-center h-100",children:n($,{className:"col-md-8 col-lg-6 col-xl-5",children:[e.error&&e.error,t(I,{className:"text-center position-static",variant:"success",children:n("u",{children:[t("b",{children:"Last Updated:"})," ",A().format("hh:mm:ss a")]})}),t("br",{}),t("br",{}),e.cities]})})})})}function G(e){const{color:a,name:c}=e;return n("div",{className:"cus-tag-hover",children:[t("div",{className:"pin bounce",style:{backgroundColor:a,cursor:"pointer"},title:c}),t("div",{className:"pulse"})]})}function K(e){const[a,c]=l.exports.useState([]),[i,r]=l.exports.useState(),s=ve();l.exports.useEffect(()=>u(),[e.locations,e.searches]);function u(){let g=[];e.position&&!i?r({lat:e.position.coords.latitude,lng:e.position.coords.longitude}):e.searches&&e.searches.length?r({lat:e.searches[0].coord.lat,lng:e.searches[0].coord.lon}):e.locations&&e.locations.length?r({lat:e.locations[0].coord.lat,lng:e.locations[0].coord.lon}):r({lat:0,lng:0}),e.position&&e.position.coords.latitude&&e.position.coords.longitude&&g.push([t(G,{lat:e.position.coords.latitude,lng:e.position.coords.longitude,name:"Home::lat::"+e.position.coords.latitude+"::lon::"+e.position.coords.longitude,color:"orange"},7e3)]),e.locations&&(g=[...g,...o(e.locations,"blue",8e3)]),e.searches&&(g=[...g,...o(e.searches,"red",9e3)]),c(g)}function o(g,f,y){return g.map((h,m)=>t(G,{lat:h.coord.lat,lng:h.coord.lon,name:h.name+","+h.country+"::id::"+h.id+"::lat::"+h.coord.lat+"::lon::"+h.coord.lon,color:f},m+y))}const d=g=>({disableDefaultUI:!0,mapTypeControl:!0,streetViewControl:!0,styles:[{featureType:"poi",elementType:"labels",stylers:[{visibility:"on"}]}]});return t("div",{className:"m-auto",style:s.pathname=="/react-vite-weatherapp/map"?{width:"98vw",height:"90vh"}:{height:"50vh",width:"auto"},children:i&&t(pe,{bootstrapURLKeys:{key:"AIzaSyCmxjmgKUbwrzjna533SkResMBEDHDlCNw"},defaultCenter:{lat:0,lng:0},defaultZoom:0,options:d,center:i,layerTypes:["TrafficLayer","TransitLayer"],children:a})})}function O(e){const[a,c]=l.exports.useState(null),[i,r]=l.exports.useState(1),[s,u]=l.exports.useState("C");l.exports.useEffect(()=>e.setCities(_(a,i,s,o,e.recentCitiesHandler)),[i,a,s]);function o(d){switch(d.target.value){case"prev":i>1&&r(i-1);break;case"next":r(i+1);break;default:r(Number(d.target.value))}}return n("div",{children:[t(Oe,{tempHandler:u,tempFormat:s,errorHandler:e.setError,cardHandler:e.setCities,components:e.cities,currentPage:i,pageHandler:o,setCities:c,setPageNo:r,recentCitiesHandler:e.recentCitiesHandler,recentSearchesHandler:e.recentSearchesHandler,position:e.position}),e.cities&&n(C,{className:" cus-resize-card m-auto mt-5 shadow-lg p-3 position-static",children:[t(C.Title,{style:{fontFamily:"Stencil Std, serif"},className:"text-black text-center",children:"Recently Searched Cities"}),t(I,{variant:"dark",className:"m-auto d-flex position-static",style:{height:"2.8rem"},children:n("span",{className:"d-flex w-100 position-static",style:{marginTop:"-.7rem",fontFamily:"cursive, serif"},children:[n("span",{className:"ms-auto ps-4 pe-4",children:[t("div",{className:"pin bounce position-static",style:{backgroundColor:"orange",cursor:"pointer"},title:"your current/home location"}),t("span",{children:"Home"})]}),n("span",{className:"ps-4 pe-4",children:[t("div",{className:"pin bounce position-static",style:{backgroundColor:"blue",cursor:"pointer"},title:"recently viewed cities, can be seen in the dropdown tab"}),t("span",{children:"Viewed"})]}),n("span",{className:"me-auto ps-4 pe-4 position-static",children:[t("div",{className:"pin bounce position-static",style:{backgroundColor:"red",cursor:"pointer"},title:"recently searched cities using the engine"}),t("span",{children:"Searched"})]})]})}),t(C.Body,{style:{border:"solid black 2px",padding:0,overflow:"hidden",borderRadius:"0.5rem"},children:t(K,{searches:e.searches,locations:e.locations,position:e.position})})]}),t(V,{error:e.error,cities:e.cities})]})}function F(e){const[a,c]=l.exports.useState(!1);return n("li",{className:"cus-nav-item",children:[t("span",{className:"cus-icon-button",onClick:()=>c(!a),children:e.icon}),a&&e.children]})}function We(e){const[a,c]=l.exports.useState("main"),[i,r]=l.exports.useState();function s(d){if(!d||d===void 0)return;const g=[];let f=0;for(;f<d.length;++f)g.push(t(T,{to:"/react-vite-weatherapp/home/"+d[f].id,children:n(o,{leftIcon:t(we,{}),rightIcon:t("img",{className:"ms-auto",style:{height:"1rem",width:"auto"},src:"https://flagcdn.com/"+d[f].country.toLowerCase()+".svg"}),children:[d[f].name,", ",d[f].country]})},500+f));return g}function u(d){r(d.offsetHeight)}function o(d){return n("span",{className:"cus-menu-item",onClick:()=>d.goToMenu&&c(d.goToMenu),children:[t("span",{className:"cus-icon-button",children:d.leftIcon}),d.children,t("span",{className:"cus-icon-right",children:d.rightIcon})]})}return n("div",{className:"cus-dropdown",style:{height:i},children:[t(L,{in:a==="main",unmountOnExit:!0,timeout:500,classNames:"cus-menu-primary",onEnter:u,children:n("div",{className:"cus-menu",children:[t(T,{to:"/react-vite-weatherapp/map",children:t(o,{leftIcon:t(be,{}),children:"World Map"})},777777),t(o,{leftIcon:t(xe,{}),rightIcon:">",goToMenu:"settings",children:"Recently Viewed Cities"})]})}),t(L,{in:a==="settings",unmountOnExit:!0,timeout:500,classNames:"cus-menu-secondary",onEnter:u,children:n("div",{className:"cus-menu",children:[t(o,{leftIcon:t(Me,{}),goToMenu:"main",children:t("u",{children:t("b",{children:"Back"})})}),t(o,{onClick:u,className:"text-center",leftIcon:t(Ce,{}),rightIcon:"v",children:t("u",{children:"Recent Cities Appear Here"})}),e.cityId&&s(e.cityId)]})})]})}function je(){const[e,a]=l.exports.useState(),c=W();function i(r){r.preventDefault(),c("/react-vite-weatherapp/home/"+e)}return t(b,{method:"GET",action:"#",className:"form-inline col-2 ms-auto",style:{marginTop:"0.8rem"},onSubmit:i,children:t(b.Group,{controlId:"citySearch",children:t("div",{className:"input-group",children:n("span",{className:"input-group-prepend d-flex",children:[t("span",{className:"input-group-text text-white bg-secondary",style:{margin:"0",padding:"0"},children:t(Le,{className:"App-logo"})}),n("span",{className:"cus-nav-search d-flex",children:[t(b.Control,{className:"bg-dark text-white",type:"text",placeholder:"CityID",onChange:r=>{a(r.target.value)}}),t(N,{variant:"success",type:"submit",children:t(Se,{})},9999)]})]})})})})}function $e(e){const a={marginTop:"7px"};return t("div",{className:"cus-nav-bar-main",children:t("nav",{className:"cus-navbar",children:n("ul",{className:"cus-navbar-nav",children:[t(T,{to:"/react-vite-weatherapp/home",style:a,className:"Color-spin",children:t(F,{icon:t(ke,{})})}),t(T,{to:"/react-vite-weatherapp/map",style:a,className:"Color-spin",children:t(F,{icon:t(Be,{})})}),t(F,{icon:t(ze,{}),children:t(We,{cityId:e.cityId})}),t(je,{})]})})})}function _e(){const[e,a]=l.exports.useState(localStorage.getItem("cities")?JSON.parse(localStorage.getItem("cities")):[]),[c,i]=l.exports.useState([]),[r,s]=l.exports.useState(null),[u,o]=l.exports.useState(!1),[d,g]=l.exports.useState(()=>{(navigator==null?void 0:navigator.geolocation)?navigator.geolocation.getCurrentPosition(y=>{g(y||{coords:{latitude:0,longitude:0}})},()=>o(t(x,{handler:o,text:"Unable to get GeoLocation."}))):o(t(x,{handler:o,text:"Device does not support GeoLocation."}))});function f(y){if(!y||y===void 0)return;let h=e;(!h||h===void 0)&&(h=[]);let m=0;for(;m<h.length;++m)if(y.id==h[m].id)return;h.length>=6&&h.pop(),h.unshift(y),a(h),localStorage.setItem("cities",JSON.stringify(h))}return n(Te,{basepath:"/react-vite-weatherapp",children:[t($e,{style:{zIndex:1e6},cityId:e}),n(Ee,{style:{zIndex:0},children:[t(p,{exact:!0,path:"/",element:t(R,{to:"/react-vite-weatherapp/home",replace:!0})}),t(p,{exact:!0,path:"/react-vite-weatherapp",element:t(R,{to:"/react-vite-weatherapp/home",replace:!0})}),t(p,{exact:!0,path:"/react-vite-weatherapp/home",element:t(O,{recentSearchesHandler:i,recentCitiesHandler:f,searches:c,locations:e,cities:r,setCities:s,error:u,setError:o,position:d})}),t(p,{exact:!0,path:"/react-vite-weatherapp/home/:id",element:t(O,{recentSearchesHandler:i,recentCitiesHandler:f,searches:c,locations:e,cities:r,setCities:s,error:u,setError:o,position:d})}),t(p,{exact:!0,path:"/react-vite-weatherapp/home/id/:id",element:t(V,{error:u,cities:r})}),t(p,{exact:!0,path:"/react-vite-weatherapp/map",element:t(K,{searches:c,locations:e,position:d})}),t(p,{path:"*",element:t(x,{text:"Page Not Found."})})]})]})}He.render(t(_e,{}),document.getElementById("root"));
