import{B as _,r as w,H as v,S as b,q as x,o as l,I as y,E as u,a as o,w as k,v as S,t as i,n as B,c as n,b as C,F as p,D as g,M as L,u as c,J as H,C as T,K as E}from"./main.6ee2734f.js";import{l as V}from"./lodash.bc509cb4.js";import{_ as M}from"./ImageFile.917fd8b9.js";const j={class:"mb-0 bg-white p-3"},D=o("div",{class:"flex-fill fs-16 uppercase p-2"},"L\u1ECBch \u0111\u1EA5u h\xF4m nay",-1),F={class:"d-flex flex-row position-relative mb-2"},I={class:"flex-fill me-2"},N={class:"m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary p-2 me-1"},P={class:"d-flex flex-row position-relative mb-2"},$={class:"h-[calc(100vh-330px)] overflow-auto",id:"league-bar"},z={class:"list-group overflow-auto"},O={key:0},R={class:"flex-fill"},q={class:"text-muted fs-11"},G={__name:"BlockLeague",setup(A){const r=_(),e=w({overlay:!1,pageShow:0,keyword:"",is_status:"",statuses:[]});v(()=>{h(),new b(document.getElementById("league-bar"),{autoHide:!1}).getScrollElement().addEventListener("scroll",f)});const d=function(a){switch(e.is_status=a,e.pageShow=0,a){case"hot":e.statuses=["111"];break;case"reset":e.statuses=[],e.is_status="";break}},f=function(a){let s=a.target;if(s.scrollTop===s.scrollHeight-s.offsetHeight){let t=Math.floor(Object.keys(r.league_profile).length/100);e.pageShow<t&&(e.pageShow=e.pageShow+1,s.scrollTop=1)}s.scrollTop<1&&e.pageShow>0&&(setTimeout(()=>{s.scrollTop=s.scrollHeight-s.offsetHeight-1},100),e.pageShow>0&&(e.pageShow=e.pageShow-1))},h=async function(){e.overlay=!0,await r.getLeagueProfile(),e.overlay=!1},m=x(()=>Object.values(r.league_profile).filter(a=>e.is_status?e.statuses.includes(a.leagueId):a.name.toLowerCase().includes(e.keyword.toLowerCase())));return(a,s)=>(l(),y(c(E),{show:e.overlay},{default:u(()=>[o("div",j,[D,o("div",F,[o("div",I,[k(o("input",{type:"text",class:"form-control","onUpdate:modelValue":s[0]||(s[0]=t=>e.keyword=t),placeholder:"L\u1ECDc theo t\xEAn \u0111\u1ED9i b\xF3ng",autocomplete:"off",id:"search-options",value:""},null,512),[[S,e.keyword]])]),o("span",N,"Trang "+i(e.pageShow+1),1)]),o("div",P,[o("span",{class:"m-0 flex-shrink-1 fs-12 border rounded bg-gray-500 text-white px-1 cursor-pointer me-2",onClick:s[1]||(s[1]=t=>d("reset"))},"Reset"),o("span",{class:B(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":e.is_status==="hot"}]),onClick:s[2]||(s[2]=t=>d("hot"))}," Hot ",2)]),o("div",$,[o("ul",z,[(l(!0),n(p,null,C(m.value,t=>(l(),n(p,null,[t.id>=e.pageShow*50&&t.id<(e.pageShow+1)*50?(l(),n("li",O,[g(c(H),{class:"d-flex align-items-center list-group-item hover:bg-success-light cursor-pointer",to:"league-detail/"+c(V).kebabCase(t.name)},{default:u(()=>[o("div",{class:"avatar-sm me-2 border border-groove inline-block",style:L("background-color:"+t.color)},[g(M,{id:t.id,category:"league-profile",properties:"logo",classProps:"w-[45px]"},null,8,["id"])],4),o("div",R,[o("div",null,i(t.name),1),o("div",q," V\xF2ng "+i(t.currentRound),1)])]),_:2},1032,["to"])])):T("",!0)],64))),256))])])])]),_:1},8,["show"]))}};export{G as _};