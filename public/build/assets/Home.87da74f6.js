import{B,r as F,q as S,o as d,c,F as y,b as I,a as e,t as n,C as $,D as k,E as w,f as T,u as v,G as N,H as M,I as A,S as V,J as L,w as j,v as E,n as m,L as z,Y as D,K as U,e as R,M as Y}from"./main.75d33f9f.js";import{h as g}from"./moment.40bc58bf.js";/* empty css                                                       */import{_ as P}from"./BlockLeague.f7225740.js";import"./lodash.bc509cb4.js";import"./ImageFile.a915f826.js";const q={class:"fs-11"},G={class:"px-1"},J={class:"fs-11 hover:text-blue-600"},K={class:"fs-11 hover:text-blue-600"},X={class:"fs-11 hover:text-blue-600"},Q={class:"px-1"},W={class:"fs-11 hover:text-blue-600"},Z={class:"fs-11 hover:text-blue-600"},ee={class:"fs-11 hover:text-blue-600"},se={__name:"LiveOdds",props:["match","bookmaker"],setup(C){const l=B(),s=C,f=F({handicap:{},europeOdds:{}});return f.handicap=S(()=>{let p=[];for(const i in l.odd.handicap)l.odd.handicap[i]&&l.odd.handicap[i][s.match.matchId]&&(p[i]=Object.values(l.odd.handicap[i][s.match.matchId]).filter(t=>t.companyId===s.bookmaker.companyIdMain));return p}),f.europeOdds=S(()=>{let p=[];for(const i in l.odd.europeOdds)l.odd.europeOdds[i]&&l.odd.europeOdds[i][s.match.matchId]&&(p[i]=Object.values(l.odd.europeOdds[i][s.match.matchId]).filter(t=>t.companyId===s.bookmaker.companyIdMain));return p}),(p,i)=>(d(),c("table",q,[f.handicap[1]?(d(!0),c(y,{key:0},I(f.handicap[1],t=>{var u,h,_;return d(),c("tr",G,[e("td",null,[e("div",J,n((u=t.instantHome)!=null?u:"-"),1)]),e("td",null,[e("div",K,n((h=t.instantHandicap)!=null?h:"-"),1)]),e("td",null,[e("div",X,n((_=t.instantAway)!=null?_:"-"),1)])])}),256)):$("",!0),f.europeOdds[1]?(d(!0),c(y,{key:1},I(f.europeOdds[1],t=>{var u,h,_;return d(),c("tr",Q,[e("td",null,[e("div",W,n((u=t.instantHome)!=null?u:"-"),1)]),e("td",null,[e("div",Z,n((h=t.instantDraw)!=null?h:"-"),1)]),e("td",null,[e("div",ee,n((_=t.instantAway)!=null?_:"-"),1)])])}),256)):$("",!0)]))}},te={class:"bg-success d-flex justify-content-between text-white p-2 min-w-[400px]"},oe=e("a",{class:"text-center px-2",target:"_blank"},"FIFA",-1),ae=["title"],ne={class:"fs-16 text-truncate"},le=["title"],re={class:"table table-bordered table-nowrap mb-0 text-center"},de=e("tr",null,[e("th",{scope:"row"},"FT"),e("td",{colspan:"3",class:"w-[150px]"},"ODDS"),e("td",{colspan:"3",class:"w-[150px]"},"FIRST ODDS")],-1),ce=e("th",{scope:"row"},"AH",-1),ie={class:"fs-11 hover:text-blue-600"},ue={class:"fs-11 hover:text-blue-600"},pe={class:"fs-11 hover:text-blue-600"},he={class:"fs-11 hover:text-blue-600"},_e={class:"fs-11 hover:text-blue-600"},fe={class:"fs-11 hover:text-blue-600"},xe=e("th",{scope:"row"},"1X2",-1),ve={class:"fs-11 hover:text-blue-600"},be={class:"fs-11 hover:text-blue-600"},we={class:"fs-11 hover:text-blue-600"},ke={class:"fs-11 hover:text-blue-600"},ye={class:"fs-11 hover:text-blue-600"},me={class:"fs-11 hover:text-blue-600"},ge=e("th",{scope:"row"},"O/U",-1),$e={class:"fs-11 hover:text-blue-600"},Oe={class:"fs-11 hover:text-blue-600"},Ie={class:"fs-11 hover:text-blue-600"},Se={class:"fs-11 hover:text-blue-600"},Ce={class:"fs-11 hover:text-blue-600"},Te={class:"fs-11 hover:text-blue-600"},He={colspan:"7",class:"text-center py-1"},Le={__name:"MatchInfo",props:["match","bookmaker"],setup(C){const l=C,s=B(),f=F({handicap:{},europeOdds:{}});return f.handicap=S(()=>{let p=[];for(const i in s.odd.handicap)s.odd.handicap[i]&&s.odd.handicap[i][l.match.matchId]&&(p[i]=Object.values(s.odd.handicap[i][l.match.matchId]).filter(t=>t.companyId===l.bookmaker.companyIdMain));return p}),f.europeOdds=S(()=>{let p=[];for(const i in s.odd.europeOdds)s.odd.europeOdds[i]&&s.odd.europeOdds[i][l.match.matchId]&&(p[i]=Object.values(s.odd.europeOdds[i][l.match.matchId]).filter(t=>t.companyId===l.bookmaker.companyIdMain));return p}),f.overUnder=S(()=>{let p=[];for(const i in s.odd.overUnder)s.odd.overUnder&&s.odd.overUnder[l.match.matchId]&&(p[i]=Object.values(s.odd.overUnder[l.match.matchId]).filter(t=>t.companyId===l.bookmaker.companyIdMain));return p}),(p,i)=>(d(),c(y,null,[e("div",te,[oe,e("div",{class:"cursor-pointer uppercase fs-14 text-center hover:text-blue-600 px-2 w-[150px]",title:l.match.homeName},n(l.match.homeName),9,ae),e("div",null,[e("span",ne,n(l.match.homeScore)+" - "+n(l.match.awayScore),1)]),e("div",{class:"cursor-pointer uppercase fs-14 text-center hover:text-blue-600 px-2 w-[150px]",title:l.match.awayName},n(l.match.awayName),9,le)]),e("table",re,[e("tbody",null,[de,(d(!0),c(y,null,I(f.handicap[1],t=>{var u,h,_,x,r,a;return d(),c("tr",null,[ce,e("td",null,[e("div",ie,n((u=t==null?void 0:t.instantHome)!=null?u:"-"),1)]),e("td",null,[e("div",ue,n((h=t==null?void 0:t.instantHandicap)!=null?h:"-"),1)]),e("td",null,[e("div",pe,n((_=t==null?void 0:t.instantAway)!=null?_:"-"),1)]),e("td",null,[e("div",he,n((x=t==null?void 0:t.initialHome)!=null?x:"-"),1)]),e("td",null,[e("div",_e,n((r=t==null?void 0:t.initialDraw)!=null?r:"-"),1)]),e("td",null,[e("div",fe,n((a=t==null?void 0:t.initialAway)!=null?a:"-"),1)])])}),256)),(d(!0),c(y,null,I(f.europeOdds[1],t=>{var u,h,_,x,r,a;return d(),c("tr",null,[xe,e("td",null,[e("div",ve,n((u=t==null?void 0:t.instantHome)!=null?u:"-"),1)]),e("td",null,[e("div",be,n((h=t==null?void 0:t.instantDraw)!=null?h:"-"),1)]),e("td",null,[e("div",we,n((_=t==null?void 0:t.instantAway)!=null?_:"-"),1)]),e("td",null,[e("div",ke,n((x=t==null?void 0:t.initialHome)!=null?x:"-"),1)]),e("td",null,[e("div",ye,n((r=t==null?void 0:t.initialDraw)!=null?r:"-"),1)]),e("td",null,[e("div",me,n((a=t==null?void 0:t.initialAway)!=null?a:"-"),1)])])}),256)),(d(!0),c(y,null,I(f.overUnder[1],t=>{var u,h,_,x,r,a;return d(),c("tr",null,[ge,e("td",null,[e("div",$e,n((u=t==null?void 0:t.instantOver)!=null?u:"-"),1)]),e("td",null,[e("div",Oe,n((h=t==null?void 0:t.instantHandicap)!=null?h:"-"),1)]),e("td",null,[e("div",Ie,n((_=t==null?void 0:t.instantUnder)!=null?_:"-"),1)]),e("td",null,[e("div",Se,n((x=t==null?void 0:t.initialHome)!=null?x:"-"),1)]),e("td",null,[e("div",Ce,n((r=t==null?void 0:t.initialDraw)!=null?r:"-"),1)]),e("td",null,[e("div",Te,n((a=t==null?void 0:t.initialAway)!=null?a:"-"),1)])])}),256)),e("tr",null,[e("td",He,[k(v(N),{variant:"outline-info",size:"sm"},{default:w(()=>[T(" view more ")]),_:1})])])])])],64))}},Ne={class:"text-center mb-0 p-2 overflow-hidden"},Me=e("div",{class:"flex-fill fs-16 uppercase p-2"},"L\u1ECBch \u0111\u1EA5u h\xF4m nay",-1),Be={class:"d-flex flex-row position-relative mb-2"},Fe={class:"flex-fill me-2"},De={class:"m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary p-2 me-1"},Ue={class:"m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary p-2 me-1"},Ae={class:"d-flex flex-row position-relative mb-2"},Ve={class:"h-[calc(100vh-330px)] overflow-auto",id:"simple-bar"},je={class:"relative border border-groove"},Ee={class:"text-center uppercase h-[30px] bg-success text-white fs-12"},ze=e("i",{class:"ri ri-delete-bin-2-line"},null,-1),Re=e("th",null," time ",-1),Ye=e("td",null,null,-1),Pe=e("th",null," home ",-1),qe=e("th",null," score ",-1),Ge=e("th",null," away ",-1),Je=e("th",null,[e("i",{class:"ri-flag-2-fill"})],-1),Ke=e("th",null," FT ",-1),Xe=e("th",null," Data ",-1),Qe={key:0,class:"text-left bg-success-light"},We={key:0,colspan:"10",class:"h-[30px] px-2 fw-bold"},Ze={class:"text-center h-[30px]"},es={class:"d-flex flex-column w-50px fs-11"},ss={key:0},ts={key:1},os={key:2},as=["innerHTML"],ns=e("td",null,[e("div",null,[e("i",{class:"ri ri-movie-line hover:text-red-500"})])],-1),ls={class:"relative"},rs=e("i",{class:"ri ri-rectangle-fill inline-block rotate-[100deg] text-yellow-500 fs-[20px]"},null,-1),ds={class:"absolute fs-10 left-[4px] -top-[1px] text-white"},cs={class:"relative"},is=e("i",{class:"ri ri-rectangle-fill inline-block rotate-[100deg] text-red-500 fs-[20px]"},null,-1),us={class:"absolute fs-10 left-[4px] -top-[1px] text-white"},ps={class:"badge text-body fs-14"},hs={key:0,class:"badge rounded-pill border-dark text-body hover:bg-gray-200 cursor-pointer relative top-[-2px]"},_s={key:1},fs={class:"badge text-body fs-14"},xs={class:"relative"},vs=e("i",{class:"ri ri-rectangle-fill inline-block rotate-[100deg] text-red-500 fs-[20px]"},null,-1),bs={class:"absolute fs-10 left-[4px] -top-[1px] text-white"},ws={class:"relative"},ks=e("i",{class:"ri ri-rectangle-fill inline-block rotate-[100deg] text-yellow-500 fs-[20px]"},null,-1),ys={class:"absolute fs-10 left-[4px] -top-[1px] text-white"},ms={key:0,class:"fs-11 hover:text-red-500"},gs=e("div",{class:"fs-11 hover:text-red-500",else:""}," - ",-1),$s={key:0,class:"fs-11 hover:text-red-500"},Os=e("div",{class:"fs-11 hover:text-red-500",else:""}," - ",-1),Is=e("td",null,[e("div",{class:"fs-11 hover:text-red-500"},[e("i",{class:"ri-flag-2-fill"})])],-1),Ss={key:0,class:"relative"},Cs=["onMouseenter"],Ts={__name:"BlockLiveScore",setup(C){const l=B(),s=F({overlay:!1,keyword:"",sortBy:"status",likes:[],bookmaker:{companyIdMain:"31",companyName:"Sbobet"},pageShow:0,is_status:"",statuses:[1,2,3,4,5],showOdd:0,interval:null});M(async()=>{await l.getOdds({save:1800}),await l.getLiveScore({save:1800}),await l.getBookmaker(),_()});const f=function(r){let a=0;r.halfStartTime?a=g.unix(r.updateTime).valueOf()-g.unix(r.halfStartTime).valueOf():a=g.unix(r.updateTime).valueOf()-g.unix(r.matchTime).valueOf();let b=(a/1e3).toFixed(1),o=(a/(1e3*60)).toFixed(1);if(b<60)return b+" s";if(o<=45)return parseInt(o)+" '";if(o>45)return"90 +("+(parseInt(o)-45)+")"},p=function(r){let a=0;r.halfStartTime?a=g.unix(r.updateTime).valueOf()-g.unix(r.halfStartTime).valueOf():a=g.unix(r.updateTime).valueOf()-g.unix(r.matchTime).valueOf()-1e3*60;let b=(a/1e3).toFixed(1),o=(a/(1e3*60)).toFixed(1);if(b<60)return b+" s";if(o<=45)return parseInt(o)+" '";if(o>45)return"90 +("+(parseInt(o)-45)+")"},i=function(r){switch(r){case 0:return'<span class="text-black"> Not started </span>';case 1:return'<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> First half </span>';case 2:return'<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> Half time </span>';case 3:return'<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> Second half </span>';case 4:return'<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> Extra time </span>';case 5:return'<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> Penalty </span>';case-1:return'<span class="text-black"> Finished </span>';case-10:return'<span class="text-black"> Cancelled </span>';case-11:return'<span class="text-black"> TBD </span>';case-12:return'<span class="text-black"> Terminated </span>';case-13:return'<span class="text-black"> Interrupted </span>';case-14:return'<span class="text-black"> Postponed </span>'}},t=function(r){s.pageShow=0,s.likes.includes(r)?s.likes.splice(s.likes.indexOf(r),1):s.likes.push(r)},u=function(r){switch(s.is_status=r,s.pageShow=0,r){case"live":s.statuses=[1,2,3,4,5];break;case"not_start":s.statuses=[0];break;case"first_half":s.statuses=[1];break;case"half_time":s.statuses=[2];break;case"second_half":s.statuses=[3];break;case"extra_time":s.statuses=[4];break;case"penalty":s.statuses=[5];break;case"order":s.statuses=[-1,-10,-11,-12,-14];break;case"reset":s.statuses=[],s.is_status="";break}},h=function(r){let a=r.target;if(Math.ceil(a.scrollTop)===a.scrollHeight-a.offsetHeight){let b=Math.floor(x.value.length/50);s.pageShow<b&&(s.pageShow=s.pageShow+1,a.scrollTop=1)}Math.ceil(a.scrollTop)<1&&s.pageShow>0&&(setTimeout(()=>{a.scrollTop=a.scrollHeight-a.offsetHeight-1},50),s.pageShow>0&&(s.pageShow=s.pageShow-1))},_=function(){s.interval=setInterval(()=>{l.getLiveScore(),l.getOdds()},10*1e3)};A(()=>{clearInterval(s.interval)});const x=S(()=>{l.livescore.sort((o,O)=>o[s.sortBy]-O[s.sortBy]);let r=l.livescore.filter(o=>s.is_status?s.statuses.includes(o.status)&&(o.homeName.toLowerCase().includes(s.keyword.toLowerCase())||o.awayName.toLowerCase().includes(s.keyword.toLowerCase())):o.homeName.toLowerCase().includes(s.keyword.toLowerCase())||o.awayName.toLowerCase().includes(s.keyword.toLowerCase())),a=r.filter(o=>s.likes.includes(o.id)),b=r.filter(o=>!s.likes.includes(o.id));return a.concat(b)});return M(()=>{new V(document.getElementById("simple-bar"),{autoHide:!1}).getScrollElement().addEventListener("scroll",h)}),(r,a)=>(d(),L(v(Y),{show:s.overlay},{default:w(()=>{var b;return[e("div",Ne,[Me,e("div",Be,[e("div",Fe,[j(e("input",{type:"text",class:"form-control","onUpdate:modelValue":a[0]||(a[0]=o=>s.keyword=o),placeholder:"L\u1ECDc theo t\xEAn \u0111\u1ED9i b\xF3ng",autocomplete:"off",id:"search-options",value:""},null,512),[[E,s.keyword]])]),e("span",De,"T\xECm th\u1EA5y "+n(x.value.length)+" tr\u1EADn",1),e("span",Ue,"Trang "+n(s.pageShow+1),1)]),e("div",Ae,[e("span",{class:"m-0 flex-shrink-1 fs-12 border rounded bg-gray-500 text-white px-1 cursor-pointer me-2",onClick:a[1]||(a[1]=o=>u("reset"))},"Reset"),e("span",{class:m(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":s.is_status==="live"}]),onClick:a[2]||(a[2]=o=>u("live"))},"live",2),e("span",{class:m(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":s.is_status==="not_start"}]),onClick:a[3]||(a[3]=o=>u("not_start"))},"not start",2),e("span",{class:m(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":s.is_status==="first_half"}]),onClick:a[4]||(a[4]=o=>u("first_half"))},"first half",2),e("span",{class:m(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":s.is_status==="half_time"}]),onClick:a[5]||(a[5]=o=>u("half_time"))},"half time",2),e("span",{class:m(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":s.is_status==="second_half"}]),onClick:a[6]||(a[6]=o=>u("second_half"))},"second half",2),e("span",{class:m(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":s.is_status==="extra_time"}]),onClick:a[7]||(a[7]=o=>u("extra_time"))},"extra time",2),e("span",{class:m(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":s.is_status==="penalty"}]),onClick:a[8]||(a[8]=o=>u("penalty"))},"penalty",2),e("span",{class:m(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":s.is_status==="order"}]),onClick:a[9]||(a[9]=o=>u("order"))},"order",2)]),e("div",Ve,[e("table",je,[e("tr",Ee,[e("th",null,[k(v(N),{size:"sm",class:"btn-outline-warning hover:text-red-500 cursor-pointer",onClick:a[10]||(a[10]=o=>s.likes=[])},{default:w(()=>[ze]),_:1})]),Re,Ye,Pe,qe,Ge,Je,Ke,Xe,e("td",null,[k(v(D),{variant:"light",size:"sm",text:(b=s.bookmaker.companyName)!=null?b:"choose",dropstart:"",split:"",class:"bookmaker w-[80px]"},{default:w(()=>[(d(!0),c(y,null,I(v(l).bookmaker,o=>(d(),L(v(z),{onClick:O=>s.bookmaker=o},{default:w(()=>[e("span",null,n(o.companyName),1)]),_:2},1032,["onClick"]))),256))]),_:1},8,["text"])])]),(d(!0),c(y,null,I(x.value,(o,O)=>(d(),c(y,{key:O},[O>=s.pageShow*50&&O<(s.pageShow+1)*50?(d(),c(y,{key:0},[!x.value[O-1]||o.leagueId!==x.value[O-1].leagueId?(d(),c("tr",Qe,[v(l).league_profile[o.leagueId]?(d(),c("td",We,[e("span",null,n(v(l).league_profile[o.leagueId].name),1)])):$("",!0)])):$("",!0),e("tr",Ze,[e("td",null,[k(v(N),{size:"sm",class:"btn-outline-light text-muted cursor-pointer",onClick:H=>t(o.id)},{default:w(()=>[e("i",{class:m(["ri ri-star-fill hover:text-yellow-500",{"text-yellow-500":s.likes.includes(o.id)}])},null,2)]),_:2},1032,["onClick"])]),e("td",null,[e("div",es,[[1].includes(o.status)?(d(),c("span",ss,n(f(o)),1)):[3].includes(o.status)?(d(),c("span",ts,n(p(o)),1)):(d(),c("span",os,n(v(g).unix(o.updateTime).format("LT")),1)),e("span",{class:"lowercase",innerHTML:i(o.status)},null,8,as)])]),ns,e("td",null,[k(v(U),{to:"/match-detail/"+o.matchId,class:"cursor-pointer uppercase fw-bold fs-11 w-[100px] text-center inline-block hover:text-blue-600",title:o.homeName},{default:w(()=>[T(n(o.homeName),1)]),_:2},1032,["to","title"])]),e("td",null,[e("span",ls,[rs,e("span",ds,n(o.homeYellow),1)]),e("span",cs,[is,e("span",us,n(o.homeRed),1)]),e("span",null,[e("span",ps,n(o.homeScore),1),[0].includes(o.status)?(d(),c("span",hs," 1 tip ")):(d(),c("span",_s," - ")),e("span",fs,n(o.awayScore),1)]),e("span",xs,[vs,e("span",bs,n(o.awayRed),1)]),e("span",ws,[ks,e("span",ys,n(o.awayYellow),1)])]),e("td",null,[k(v(U),{to:"/match-detail/"+o.matchId,class:"cursor-pointer uppercase fw-bold fs-11 w-[100px] text-center inline-block hover:text-blue-600",title:o.awayName},{default:w(()=>[T(n(o.awayName),1)]),_:2},1032,["to","title"])]),e("td",null,[o.status===1?(d(),c("div",ms,n(o.homeCorner)+"-"+n(o.awayCorner),1)):$("",!0),gs]),e("td",null,[o.status===1?(d(),c("div",$s,n(o.homeHalfScore)+"-"+n(o.awayHalfScore),1)):$("",!0),Os]),Is,v(l).odd?(d(),c("td",Ss,[e("div",{onMouseenter:R(H=>{s.showOdd=[],s.showOdd[o.id]=!0},["prevent","stop"])},[k(se,{match:o,bookmaker:s.bookmaker},null,8,["match","bookmaker"])],40,Cs),s.showOdd[o.id]?(d(),L(v(D),{key:0,class:"odd-match",modelValue:s.showOdd[o.id],"onUpdate:modelValue":H=>s.showOdd[o.id]=H,lass:"m-1"},{"button-content":w(()=>[T(" Custom ")]),default:w(()=>[k(Le,{match:o,bookmaker:s.bookmaker},null,8,["match","bookmaker"])]),_:2},1032,["modelValue","onUpdate:modelValue"])):$("",!0)])):$("",!0)])],64)):$("",!0)],64))),128))])])])]}),_:1},8,["show"]))}},Hs={class:"d-flex mt-1"},Ls={class:"w-[300px] pe-1"},Ns={class:"flex-fill p-2 bg-white"},Ms={class:""},js={__name:"Home",setup(C){return M(()=>{}),(l,s)=>(d(),c("div",Hs,[e("div",Ls,[k(P)]),e("div",Ns,[e("div",Ms,[k(Ts)])])]))}};export{js as default};
