"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[438],{3438:(e,s,a)=>{a.r(s),a.d(s,{default:()=>j});var c=a(5043),n=a(2134),i=a(7955),l=a(2680),d=a(568),r=a(7427),t=a(5842),o=a(9724),m=a(1106),h=a(7256),x=a(579);const j=()=>{const e=(0,n.Zp)(),[s,a]=(0,c.useState)([]),[j,p]=(0,c.useState)(!0),[g,b]=(0,c.useState)(null),v=JSON.parse(sessionStorage.getItem("userSession")),[u,N]=(0,c.useState)([]),_=[{id:"1",sensoricon:m,name:"Multiple Sensor"},{id:"2",sensoricon:t,name:"CO2 Conc"},{id:"3",sensoricon:o,name:"Oxygen Conc"},{id:"4",sensoricon:i,name:"AFM Sensor 1"},{id:"5",sensoricon:l,name:"AFM Sensor 2"},{id:"6",sensoricon:d,name:"NO2 Conc"},{id:"7",sensoricon:r,name:"NO Conc"}];(0,c.useEffect)((()=>{(async()=>{p(!0),b(null);try{let e=v.custom_cname;e=e.toUpperCase(),console.log(e);const s="https://vx69sxxrp0.execute-api.us-east-1.amazonaws.com/Prod/deviceList?company_name="+encodeURIComponent(e),c=await fetch(s);if(c.ok){const e=await c.json();console.log(e),a(e)}else console.log("Failed to fetch data from the server")}catch(g){b(g.message),console.log(g.message)}finally{p(!1)}})()}),[]);return(0,x.jsx)("div",{className:"content",children:(0,x.jsxs)("div",{className:"container-fluid",children:[(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"col-12",children:(0,x.jsxs)("div",{className:"page-title-box",children:[(0,x.jsx)("div",{className:"page-title-right",children:(0,x.jsx)("ol",{className:"breadcrumb m-0",children:(0,x.jsx)("li",{className:"breadcrumb-item active",children:"Device"})})}),(0,x.jsx)("h4",{className:"page-title",children:"Devices"})]})})}),j&&(0,x.jsx)("p",{children:"Loading..."}),g&&(0,x.jsx)("p",{className:"error",children:g}),s&&Object.keys(s).length>0?(0,x.jsx)("div",{className:"row",children:Object.entries(s).map((s=>{let[a,c]=s;return(0,x.jsx)("div",{className:"col-lg-12",children:(0,x.jsxs)("div",{className:"card border",children:[(0,x.jsxs)("div",{className:"card-header bg-blue py-3 text-white",children:[(0,x.jsxs)("div",{className:"card-widgets",children:["Total Devices: ",c.length]}),(0,x.jsx)("h4",{className:"card-title mb-0 text-white",children:a})]}),(0,x.jsx)("div",{className:"card-body",children:(0,x.jsx)("div",{className:"row",children:c.map((s=>(0,x.jsx)("div",{className:"col-3",children:(0,x.jsx)("div",{className:"card border border-success",children:(0,x.jsxs)("div",{className:"card-body",children:[(0,x.jsxs)("div",{className:"d-flex align-items-start collapsed",id:"heading_"+s.device_id,"data-bs-toggle":"collapse",href:"#collapse_"+s.device_id,"aria-expanded":"false","aria-controls":"collapse_"+s.device_id,children:[(0,x.jsx)("img",{className:"me-3 rounded-circle",src:h,alt:"Multiple Devices",width:"40"}),(0,x.jsxs)("div",{className:"w-100",children:[(0,x.jsx)("h4",{className:"mt-0 mb-1",children:s.thing_name}),(0,x.jsx)("span",{className:"font-13",children:"Multiple Devices"})]})]}),s.sensorList&&s.sensorList.length>0&&(0,x.jsx)("div",{id:"collapse_"+s.device_id,className:"collapse","aria-labelledby":"heading_"+s.device_id,"data-bs-parent":"#custom-accordion-one",children:(0,x.jsx)("div",{className:"card-body",children:(0,x.jsx)("table",{class:"table table-centered table-nowrap table-hover mb-0",children:(0,x.jsx)("tbody",{children:s.sensorList.map((s=>(s=>{let{item:a,thingGroup:c}=s;const n=_.find((e=>e.name===a.sensor_name));return(0,x.jsxs)("tr",{onClick:()=>{e("/sensor-details",{state:{thing_name:a.thing_name.replace(/-/g," "),sensor_name:a.sensor_name,thing_group:c}})},children:[(0,x.jsxs)("td",{children:[(0,x.jsx)("img",{className:"rounded-circle bx-shadow-lg",src:n?n.sensoricon:n.multipledevice,alt:a.sensor_name,width:"25"}),(0,x.jsx)("span",{class:"ms-2",children:a.sensor_name})]}),(0,x.jsxs)("td",{children:[(0,x.jsx)("span",{className:"badge badge-soft-info",children:"22.65"}),(0,x.jsx)("span",{className:"badge badge-soft-warning",children:a.unit})]})]},a.sensor_id)})({item:s,thingGroup:a})))})})})})]})})})))})})]})},a)}))}):(0,x.jsx)("h2",{children:"No sensors available"})]})})}}}]);
//# sourceMappingURL=438.f5a6abbc.chunk.js.map