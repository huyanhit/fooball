import{B as O,o as p,c as h,a as e,C as l,u as a,t as i,D as _,f as M,E as $,F as k,r as U,G as C,H as B,q as F,S as A,I as v,w as V,v as E,n as u,b as N,L as z,Y as L,J as f,K as H,e as I,M as P}from"./main.61fb1ad6.js";import{h as R}from"./moment.ef7c3ddb.js";import{F as d,_ as Y}from"./TimeLiveConvert.1dd876e9.js";/* empty css                                                       */import{_ as j}from"./BlockLeague.c0ecc59d.js";import"./_commonjsHelpers.4e997714.js";import"./lodash.e6dffafd.js";import"./ImageFile.20878ecc.js";const q={class:"fs-11"},G={class:"px-1"},J={class:"px-1"},K={__name:"LiveOdds",props:["match"],setup(w){const t=O(),o=w;return(b,g)=>(p(),h("table",q,[e("tr",G,[e("td",null,[l(d,{type:"handicap",field:"instantHome",type_change:"2",odds_type:"3",company_id:a(t).bookmaker.companyIdMain,match_id:o.match.matchId},null,8,["company_id","match_id"])]),e("td",null,[l(d,{type:"handicap",field:"instantHandicap",type_change:"2",odds_type:"3",company_id:a(t).bookmaker.companyIdMain,match_id:o.match.matchId},null,8,["company_id","match_id"])]),e("td",null,[l(d,{type:"handicap",field:"instantAway",type_change:"2",odds_type:"3",company_id:a(t).bookmaker.companyIdMain,match_id:o.match.matchId},null,8,["company_id","match_id"])])]),e("tr",J,[e("td",null,[l(d,{type:"europeOdds",field:"instantHome",type_change:"2",odds_type:"3",company_id:a(t).bookmaker.companyIdMain,match_id:o.match.matchId},null,8,["company_id","match_id"])]),e("td",null,[l(d,{type:"europeOdds",field:"instantDraw",type_change:"2",odds_type:"3",company_id:a(t).bookmaker.companyIdMain,match_id:o.match.matchId},null,8,["company_id","match_id"])]),e("td",null,[l(d,{type:"europeOdds",field:"instantAway",type_change:"2",odds_type:"3",company_id:a(t).bookmaker.companyIdMain,match_id:o.match.matchId},null,8,["company_id","match_id"])])])]))}},X={class:"bg-success d-flex justify-content-between text-white p-2 min-w-[400px]"},Q=e("a",{class:"text-center px-2 text-white",target:"_blank"},"FIFA",-1),W=["title"],Z={class:"fs-14 text-truncate"},ee=["title"],te={class:"mb-0 text-center"},se=e("tr",null,[e("th",{scope:"row"},[e("span",{class:"p-2"},"FT")]),e("td",{colspan:"3",class:"w-[150px] p-2"},[e("span",{class:"p-2"},"ODDS")]),e("td",{colspan:"3",class:"w-[150px] p-2"},[e("span",{class:"p-2"},"FIRST ODDS")])],-1),ae=e("th",{scope:"row p-2"},[e("span",{class:"p-2"},"AH")],-1),oe=e("th",{scope:"row p-2"},[e("span",{class:"p-2"},"1X2")],-1),ne=e("th",{scope:"row"},[e("span",{class:"p-2"},"O/U")],-1),le={colspan:"7",class:"text-center py-1"},de={__name:"MatchInfo",props:["match"],setup(w){const t=w,o=O();return(b,g)=>(p(),h(k,null,[e("div",X,[Q,e("div",{class:"cursor-pointer uppercase fs-14 text-center hover:text-blue-600 px-2 w-[200px]",title:t.match.homeName},i(t.match.homeName),9,W),e("div",null,[e("span",Z,i(t.match.homeScore)+" - "+i(t.match.awayScore),1)]),e("div",{class:"cursor-pointer uppercase fs-14 text-center hover:text-blue-600 px-2 w-[200px]",title:t.match.awayName},i(t.match.awayName),9,ee)]),e("table",te,[se,e("tr",null,[ae,e("td",null,[l(d,{type:"handicap",field:"instantHome",type_change:"2",odds_type:"3",company_id:a(o).bookmaker.companyIdMain,match_id:t.match.matchId},null,8,["company_id","match_id"])]),e("td",null,[l(d,{type:"handicap",field:"instantHandicap",type_change:"2",odds_type:"3",company_id:a(o).bookmaker.companyIdMain,match_id:t.match.matchId},null,8,["company_id","match_id"])]),e("td",null,[l(d,{type:"handicap",field:"instantAway",type_change:"2",odds_type:"3",company_id:a(o).bookmaker.companyIdMain,match_id:t.match.matchId},null,8,["company_id","match_id"])]),e("td",null,[l(d,{type:"handicap",field:"instantHome",type_change:"1",odds_type:"2",company_id:a(o).bookmaker.companyIdMain,match_id:t.match.matchId},null,8,["company_id","match_id"])]),e("td",null,[l(d,{type:"handicap",field:"instantHandicap",type_change:"1",odds_type:"2",company_id:a(o).bookmaker.companyIdMain,match_id:t.match.matchId},null,8,["company_id","match_id"])]),e("td",null,[l(d,{type:"handicap",field:"instantAway",type_change:"1",odds_type:"2",company_id:a(o).bookmaker.companyIdMain,match_id:t.match.matchId},null,8,["company_id","match_id"])])]),e("tr",null,[oe,e("td",null,[l(d,{type:"europeOdds",field:"instantHome",type_change:"2",odds_type:"3",company_id:a(o).bookmaker.companyIdMain,match_id:t.match.matchId},null,8,["company_id","match_id"])]),e("td",null,[l(d,{type:"europeOdds",field:"instantDraw",type_change:"2",odds_type:"3",company_id:a(o).bookmaker.companyIdMain,match_id:t.match.matchId},null,8,["company_id","match_id"])]),e("td",null,[l(d,{type:"europeOdds",field:"instantAway",type_change:"2",odds_type:"3",company_id:a(o).bookmaker.companyIdMain,match_id:t.match.matchId},null,8,["company_id","match_id"])]),e("td",null,[l(d,{type:"europeOdds",field:"instantHome",type_change:"1",odds_type:"2",company_id:a(o).bookmaker.companyIdMain,match_id:t.match.matchId},null,8,["company_id","match_id"])]),e("td",null,[l(d,{type:"europeOdds",field:"instantDraw",type_change:"1",odds_type:"2",company_id:a(o).bookmaker.companyIdMain,match_id:t.match.matchId},null,8,["company_id","match_id"])]),e("td",null,[l(d,{type:"europeOdds",field:"instantAway",type_change:"1",odds_type:"2",company_id:a(o).bookmaker.companyIdMain,match_id:t.match.matchId},null,8,["company_id","match_id"])])]),e("tr",null,[ne,e("td",null,[l(d,{type:"overUnder",field:"initialOver",type_change:"2",odds_type:"3",company_id:a(o).bookmaker.companyIdMain,match_id:t.match.matchId},null,8,["company_id","match_id"])]),e("td",null,[l(d,{type:"overUnder",field:"instantDraw",type_change:"2",odds_type:"3",company_id:a(o).bookmaker.companyIdMain,match_id:t.match.matchId},null,8,["company_id","match_id"])]),e("td",null,[l(d,{type:"overUnder",field:"initialUnder",type_change:"2",odds_type:"3",company_id:a(o).bookmaker.companyIdMain,match_id:t.match.matchId},null,8,["company_id","match_id"])]),e("td",null,[l(d,{type:"overUnder",field:"initialOver",type_change:"1",odds_type:"2",company_id:a(o).bookmaker.companyIdMain,match_id:t.match.matchId},null,8,["company_id","match_id"])]),e("td",null,[l(d,{type:"overUnder",field:"instantDraw",type_change:"1",odds_type:"2",company_id:a(o).bookmaker.companyIdMain,match_id:t.match.matchId},null,8,["company_id","match_id"])]),e("td",null,[l(d,{type:"overUnder",field:"initialUnder",type_change:"1",odds_type:"2",company_id:a(o).bookmaker.companyIdMain,match_id:t.match.matchId},null,8,["company_id","match_id"])])]),e("tr",null,[e("td",le,[l(a($),{variant:"outline-info",size:"sm"},{default:_(()=>[M(" view more ")]),_:1})])])])],64))}},ie={class:"text-center mb-0 p-2 overflow-hidden"},ce=e("div",{class:"flex-fill fs-16 uppercase p-2"},"L\u1ECBch \u0111\u1EA5u h\xF4m nay",-1),re={class:"d-flex flex-row position-relative mb-2"},pe={class:"flex-fill me-2"},he={class:"m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary p-2 me-1"},_e={class:"m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary p-2 me-1"},me={class:"d-flex flex-row position-relative mb-2"},ue={class:"text-center uppercase h-[30px] bg-success text-white fs-12"},ye={style:{width:"5%"}},fe={class:"flex-fill me-2"},we=e("i",{class:"ri ri-delete-bin-2-line"},null,-1),xe=e("th",{style:{width:"13%"}},"time",-1),ke=e("td",{style:{width:"2%"}},null,-1),be=e("th",{style:{width:"18%"}},"home",-1),ge=e("th",{style:{width:"20%"}},"score",-1),ve=e("th",{style:{width:"18%"}},"away",-1),Ie=e("th",{style:{width:"3%"}},[e("i",{class:"ri-flag-2-fill"})],-1),Me=e("th",{style:{width:"3%"}},"FT",-1),$e=e("th",{style:{width:"5%"}},"Data",-1),Ce={style:{width:"18%","text-align":"right"}},Oe={class:"min-w-[80px] uppercase"},Ne={class:"h-[calc(100vh-360px)] overflow-auto",id:"simple-bar"},Le={class:"relative border border-groove"},He=e("tr",{class:"h-[0]"},[e("th",{style:{width:"5%"}}),e("th",{style:{width:"13%"}}),e("td",{style:{width:"2%"}}),e("th",{style:{width:"18%"}}),e("th",{style:{width:"20%"}}),e("th",{style:{width:"18%"}}),e("th",{style:{width:"3%"}}),e("th",{style:{width:"3%"}}),e("th",{style:{width:"3%"}}),e("td",{style:{width:"18%"}})],-1),Se={key:0,class:"text-left bg-success-light"},Te={key:0,colspan:"10",class:"h-[30px] px-2 fw-bold"},De={class:"text-center h-[30px]"},Ue={class:"d-flex flex-column w-50px fs-11"},Be={key:0},Fe={key:1},Ae=["innerHTML"],Ve=e("td",null,[e("div",null,[e("i",{class:"ri ri-movie-line hover:text-red-500"})])],-1),Ee={class:"relative"},ze=e("i",{class:"ri ri-rectangle-fill inline-block rotate-[100deg] text-yellow-500 fs-[20px]"},null,-1),Pe={class:"absolute fs-10 left-[4px] -top-[1px] text-white"},Re={class:"relative"},Ye=e("i",{class:"ri ri-rectangle-fill inline-block rotate-[100deg] text-red-500 fs-[20px]"},null,-1),je={class:"absolute fs-10 left-[4px] -top-[1px] text-white"},qe={class:"badge text-body fs-14"},Ge={key:0,class:"badge rounded-pill border-dark text-body hover:bg-gray-200 cursor-pointer relative top-[-2px]"},Je={key:1},Ke={class:"badge text-body fs-14"},Xe={class:"relative"},Qe=e("i",{class:"ri ri-rectangle-fill inline-block rotate-[100deg] text-red-500 fs-[20px]"},null,-1),We={class:"absolute fs-10 left-[4px] -top-[1px] text-white"},Ze={class:"relative"},et=e("i",{class:"ri ri-rectangle-fill inline-block rotate-[100deg] text-yellow-500 fs-[20px]"},null,-1),tt={class:"absolute fs-10 left-[4px] -top-[1px] text-white"},st={key:0,class:"fs-11 hover:text-red-500"},at={key:0,class:"fs-11 hover:text-red-500"},ot=e("td",null,[e("div",{class:"fs-11 hover:text-red-500"},[e("i",{class:"ri-flag-2-fill"})])],-1),nt={key:0,class:"relative"},lt=["onMouseenter","onMouseleave"],dt=["onMouseleave"],it={__name:"BlockLiveScore",setup(w){const t=O(),o=U({overlay:!1,keyword:"",likes:[],showOdd:0,interval:null});C(async()=>{t.getLiveScore(),t.getOdds(),t.getBookmaker()});const b=function(c){return c>=(t.page_show-1)*50},g=function(c){return Math.floor(y.value.length)===t.page_show*50?c<y.value.length:c<t.page_show*50},S=function(c){switch(c){case 0:return'<span class="text-black"> Not started </span>';case 1:return'<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> First half </span>';case 2:return'<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> Haft time </span>';case 3:return'<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> Second half </span>';case 4:return'<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> Extra time </span>';case 5:return'<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> Penalty </span>';case-1:return'<span class="text-black"> Finished </span>';case-10:return'<span class="text-black"> Cancelled </span>';case-11:return'<span class="text-black"> TBD </span>';case-12:return'<span class="text-black"> Terminated </span>';case-13:return'<span class="text-black"> Interrupted </span>';case-14:return'<span class="text-black"> Postponed </span>'}},T=function(c){t.page_show=1,t.likes.includes(c)?t.likes.splice(t.likes.indexOf(c),1):t.likes.push(c)},m=function(c){switch(t.is_status=c,t.page_show=1,c){case"live":t.statuses=[1,2,3,4,5];break;case"not_start":t.statuses=[0];break;case"first_half":t.statuses=[1];break;case"half_time":t.statuses=[2];break;case"second_half":t.statuses=[3];break;case"extra_time":t.statuses=[4];break;case"penalty":t.statuses=[5];break;case"order":t.statuses=[-1,-10,-11,-12,-14];break;case"reset":t.statuses=[],t.is_status="";break}},D=function(c){let n=c.target;if(Math.ceil(n.scrollTop)===n.scrollHeight-n.offsetHeight){let s=Math.floor(y.value.length/50);t.page_show<s&&(t.page_show=t.page_show+1,n.scrollTop=1)}else Math.ceil(n.scrollTop)<1&&t.page_show>1&&(setTimeout(()=>{n.scrollTop=n.scrollHeight-n.offsetHeight-1},50),t.page_show>1&&(t.page_show=t.page_show-1))};B(()=>{clearInterval(o.intervalL),clearInterval(o.intervalO)});const y=F(()=>{let c=Object.values(t.live_scores).filter(r=>t.is_status?t.statuses.includes(r.status)&&(r.homeName&&r.homeName.toLowerCase().includes(t.keyword.toLowerCase())||r.awayName&&r.awayName.toLowerCase().includes(t.keyword.toLowerCase())):r.homeName&&r.homeName.toLowerCase().includes(t.keyword.toLowerCase())||r.awayName&&r.awayName.toLowerCase().includes(t.keyword.toLowerCase())),n=c.filter(r=>t.likes.includes(r.id)),s=c.filter(r=>!t.likes.includes(r.id));return n.concat(s)});return C(()=>{new A(document.getElementById("simple-bar")).getScrollElement().addEventListener("scroll",D)}),(c,n)=>(p(),v(a(P),{show:o.overlay},{default:_(()=>[e("div",ie,[ce,e("div",re,[e("div",pe,[V(e("input",{type:"text",class:"form-control","onUpdate:modelValue":n[0]||(n[0]=s=>a(t).keyword=s),onInput:n[1]||(n[1]=s=>a(t).page_show=1),placeholder:"L\u1ECDc theo t\xEAn \u0111\u1ED9i b\xF3ng",autocomplete:"off",id:"search-options",value:""},null,544),[[E,a(t).keyword]])]),e("span",he,"T\xECm th\u1EA5y "+i(y.value.length)+" tr\u1EADn",1),e("span",_e,"Trang "+i(a(t).page_show),1)]),e("div",me,[e("span",{class:"m-0 flex-shrink-1 fs-12 border rounded bg-gray-500 text-white px-1 cursor-pointer me-2",onClick:n[2]||(n[2]=s=>m("reset"))},"Reset"),e("span",{class:u(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":a(t).is_status==="live"}]),onClick:n[3]||(n[3]=s=>m("live"))},"live",2),e("span",{class:u(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":a(t).is_status==="not_start"}]),onClick:n[4]||(n[4]=s=>m("not_start"))},"not start",2),e("span",{class:u(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":a(t).is_status==="first_half"}]),onClick:n[5]||(n[5]=s=>m("first_half"))},"first half",2),e("span",{class:u(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":a(t).is_status==="half_time"}]),onClick:n[6]||(n[6]=s=>m("half_time"))},"half time",2),e("span",{class:u(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":a(t).is_status==="second_half"}]),onClick:n[7]||(n[7]=s=>m("second_half"))},"second half",2),e("span",{class:u(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":a(t).is_status==="extra_time"}]),onClick:n[8]||(n[8]=s=>m("extra_time"))},"extra time",2),e("span",{class:u(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":a(t).is_status==="penalty"}]),onClick:n[9]||(n[9]=s=>m("penalty"))},"penalty",2),e("span",{class:u(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":a(t).is_status==="order"}]),onClick:n[10]||(n[10]=s=>m("order"))},"order",2)]),e("table",null,[e("tr",ue,[e("th",ye,[e("div",fe,[l(a($),{size:"sm",class:"btn-outline-warning hover:text-red-500 cursor-pointer",onClick:n[11]||(n[11]=s=>a(t).likes=[])},{default:_(()=>[we]),_:1})])]),xe,ke,be,ge,ve,Ie,Me,$e,e("td",Ce,[l(a(L),{variant:"success",size:"sm",dropend:"",class:"bookmaker min-w-[100px]"},{"button-content":_(()=>{var s;return[e("span",Oe,i((s=a(t).bookmaker.companyName)!=null?s:c.choose),1)]}),default:_(()=>[(p(!0),h(k,null,N(a(t).bookmakers,s=>(p(),v(a(z),{onClick:r=>a(t).bookmaker=s},{default:_(()=>[e("span",null,i(s.companyName),1)]),_:2},1032,["onClick"]))),256))]),_:1})])])]),e("div",Ne,[e("table",Le,[He,(p(!0),h(k,null,N(y.value,(s,r)=>(p(),h(k,{key:r},[b(r)&&g(r)?(p(),h(k,{key:0},[!y.value[r-1]||s.leagueId!==y.value[r-1].leagueId?(p(),h("tr",Se,[a(t).league_profiles[s.leagueId]?(p(),h("td",Te,[e("span",null,i(a(t).league_profiles[s.leagueId].name),1)])):f("",!0)])):f("",!0),e("tr",De,[e("td",null,[l(a($),{size:"sm",class:"btn-outline-light text-muted cursor-pointer",onClick:x=>T(s.id)},{default:_(()=>[e("i",{class:u(["ri ri-star-fill hover:text-yellow-500",{"text-yellow-500":a(t).likes.includes(s.id)}])},null,2)]),_:2},1032,["onClick"])]),e("td",null,[e("div",Ue,[[1,2,3].includes(s.status)?(p(),h("span",Be,[l(Y,{match:s},null,8,["match"])])):(p(),h("span",Fe,i(a(R).unix(s.updateTime).format("LT")),1)),e("span",{class:"fs-10 position-relative",innerHTML:S(s.status)},null,8,Ae)])]),Ve,e("td",null,[l(a(H),{to:"/match-detail/"+s.matchId,class:"cursor-pointer uppercase fw-bold fs-11 w-[100px] text-center inline-block hover:text-blue-600",title:s.homeName},{default:_(()=>[M(i(s.homeName),1)]),_:2},1032,["to","title"])]),e("td",null,[e("span",Ee,[ze,e("span",Pe,i(s.homeYellow),1)]),e("span",Re,[Ye,e("span",je,i(s.homeRed),1)]),e("span",null,[e("span",qe,i(s.homeScore),1),[0].includes(s.status)?(p(),h("span",Ge," 1 tip ")):(p(),h("span",Je," - ")),e("span",Ke,i(s.awayScore),1)]),e("span",Xe,[Qe,e("span",We,i(s.awayRed),1)]),e("span",Ze,[et,e("span",tt,i(s.awayYellow),1)])]),e("td",null,[l(a(H),{to:"/match-detail/"+s.matchId,class:"cursor-pointer uppercase fw-bold fs-11 w-[100px] text-center inline-block hover:text-blue-600",title:s.awayName},{default:_(()=>[M(i(s.awayName),1)]),_:2},1032,["to","title"])]),e("td",null,[s.status===1?(p(),h("div",st,i(s.homeCorner)+"-"+i(s.awayCorner),1)):f("",!0)]),e("td",null,[s.status===1?(p(),h("div",at,i(s.homeHalfScore)+"-"+i(s.awayHalfScore),1)):f("",!0)]),ot,a(t).odds?(p(),h("td",nt,[e("div",{onMouseenter:I(x=>{o.showOdd=[],o.showOdd[s.id]=!0},["prevent","stop"]),onMouseleave:I(x=>o.showOdd[s.id]=!1,["prevent","stop"])},[l(K,{match:s},null,8,["match"]),e("div",{onMouseleave:I(x=>o.showOdd[s.id]=!1,["prevent","stop"])},[o.showOdd[s.id]?(p(),v(a(L),{key:0,offset:{mainAxis:-100,crossAxis:-50},class:"odd-match",modelValue:o.showOdd[s.id],"onUpdate:modelValue":x=>o.showOdd[s.id]=x,lass:"m-1"},{default:_(()=>[l(de,{match:s},null,8,["match"])]),_:2},1032,["modelValue","onUpdate:modelValue"])):f("",!0)],40,dt)],40,lt)])):f("",!0)])],64)):f("",!0)],64))),128))])])])]),_:1},8,["show"]))}},ct={class:"d-flex mt-1"},rt={class:"w-[300px] pe-1"},pt={class:"flex-fill p-2 bg-white"},ht={class:""},bt={__name:"Home",setup(w){return C(()=>{}),(t,o)=>(p(),h("div",ct,[e("div",rt,[l(j)]),e("div",pt,[e("div",ht,[l(it)])])]))}};export{bt as default};