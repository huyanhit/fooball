import{B as O,o as p,c as h,a as e,C as l,u as a,t as i,D as _,f as M,E as $,F as k,r as B,G as C,H as F,q as A,S as V,I as v,w as E,v as z,n as u,b as L,L as P,Y as N,J as f,K as S,e as I,M as R}from"./main.a6947068.js";import{h as Y}from"./moment.ef7c3ddb.js";import{F as d,_ as j}from"./TimeLiveConvert.e644d476.js";/* empty css                                                       */import{_ as q}from"./BlockLeague.7096381d.js";import"./_commonjsHelpers.4e997714.js";import"./lodash.e6dffafd.js";import"./ImageFile.651b320e.js";const G={class:"fs-11"},J={class:"px-1"},K={class:"px-1"},X={__name:"LiveOdds",props:["match"],setup(w){const t=O(),n=w;return(g,b)=>(p(),h("table",G,[e("tr",J,[e("td",null,[l(d,{type:"handicap",field:"instantHome",type_change:"2",odds_type:"3",company_id:a(t).bookmaker.companyIdMain,match_id:n.match.matchId},null,8,["company_id","match_id"])]),e("td",null,[l(d,{type:"handicap",field:"instantHandicap",type_change:"2",odds_type:"3",company_id:a(t).bookmaker.companyIdMain,match_id:n.match.matchId},null,8,["company_id","match_id"])]),e("td",null,[l(d,{type:"handicap",field:"instantAway",type_change:"2",odds_type:"3",company_id:a(t).bookmaker.companyIdMain,match_id:n.match.matchId},null,8,["company_id","match_id"])])]),e("tr",K,[e("td",null,[l(d,{type:"europeOdds",field:"instantHome",type_change:"2",odds_type:"3",company_id:a(t).bookmaker.companyIdMain,match_id:n.match.matchId},null,8,["company_id","match_id"])]),e("td",null,[l(d,{type:"europeOdds",field:"instantDraw",type_change:"2",odds_type:"3",company_id:a(t).bookmaker.companyIdMain,match_id:n.match.matchId},null,8,["company_id","match_id"])]),e("td",null,[l(d,{type:"europeOdds",field:"instantAway",type_change:"2",odds_type:"3",company_id:a(t).bookmaker.companyIdMain,match_id:n.match.matchId},null,8,["company_id","match_id"])])])]))}},Q={class:"bg-success d-flex justify-content-between text-white p-2 min-w-[400px]"},W=e("a",{class:"text-center px-2 text-white",target:"_blank"},"FIFA",-1),Z=["title"],ee={class:"fs-14 text-truncate"},te=["title"],se={class:"mb-0 text-center"},ae=e("tr",null,[e("th",{scope:"row"},[e("span",{class:"p-2"},"FT")]),e("td",{colspan:"3",class:"w-[150px] p-2"},[e("span",{class:"p-2"},"ODDS")]),e("td",{colspan:"3",class:"w-[150px] p-2"},[e("span",{class:"p-2"},"FIRST ODDS")])],-1),ne=e("th",{scope:"row p-2"},[e("span",{class:"p-2"},"AH")],-1),oe=e("th",{scope:"row p-2"},[e("span",{class:"p-2"},"1X2")],-1),le=e("th",{scope:"row"},[e("span",{class:"p-2"},"O/U")],-1),de={colspan:"7",class:"text-center py-1"},ie={__name:"MatchInfo",props:["match"],setup(w){const t=w,n=O();return(g,b)=>(p(),h(k,null,[e("div",Q,[W,e("div",{class:"cursor-pointer uppercase fs-14 text-center hover:text-blue-600 px-2 w-[200px]",title:t.match.homeName},i(t.match.homeName),9,Z),e("div",null,[e("span",ee,i(t.match.homeScore)+" - "+i(t.match.awayScore),1)]),e("div",{class:"cursor-pointer uppercase fs-14 text-center hover:text-blue-600 px-2 w-[200px]",title:t.match.awayName},i(t.match.awayName),9,te)]),e("table",se,[ae,e("tr",null,[ne,e("td",null,[l(d,{type:"handicap",field:"instantHome",type_change:"2",odds_type:"3",company_id:a(n).bookmaker.companyIdMain,match_id:t.match.matchId},null,8,["company_id","match_id"])]),e("td",null,[l(d,{type:"handicap",field:"instantHandicap",type_change:"2",odds_type:"3",company_id:a(n).bookmaker.companyIdMain,match_id:t.match.matchId},null,8,["company_id","match_id"])]),e("td",null,[l(d,{type:"handicap",field:"instantAway",type_change:"2",odds_type:"3",company_id:a(n).bookmaker.companyIdMain,match_id:t.match.matchId},null,8,["company_id","match_id"])]),e("td",null,[l(d,{type:"handicap",field:"instantHome",type_change:"1",odds_type:"2",company_id:a(n).bookmaker.companyIdMain,match_id:t.match.matchId},null,8,["company_id","match_id"])]),e("td",null,[l(d,{type:"handicap",field:"instantHandicap",type_change:"1",odds_type:"2",company_id:a(n).bookmaker.companyIdMain,match_id:t.match.matchId},null,8,["company_id","match_id"])]),e("td",null,[l(d,{type:"handicap",field:"instantAway",type_change:"1",odds_type:"2",company_id:a(n).bookmaker.companyIdMain,match_id:t.match.matchId},null,8,["company_id","match_id"])])]),e("tr",null,[oe,e("td",null,[l(d,{type:"europeOdds",field:"instantHome",type_change:"2",odds_type:"3",company_id:a(n).bookmaker.companyIdMain,match_id:t.match.matchId},null,8,["company_id","match_id"])]),e("td",null,[l(d,{type:"europeOdds",field:"instantDraw",type_change:"2",odds_type:"3",company_id:a(n).bookmaker.companyIdMain,match_id:t.match.matchId},null,8,["company_id","match_id"])]),e("td",null,[l(d,{type:"europeOdds",field:"instantAway",type_change:"2",odds_type:"3",company_id:a(n).bookmaker.companyIdMain,match_id:t.match.matchId},null,8,["company_id","match_id"])]),e("td",null,[l(d,{type:"europeOdds",field:"instantHome",type_change:"1",odds_type:"2",company_id:a(n).bookmaker.companyIdMain,match_id:t.match.matchId},null,8,["company_id","match_id"])]),e("td",null,[l(d,{type:"europeOdds",field:"instantDraw",type_change:"1",odds_type:"2",company_id:a(n).bookmaker.companyIdMain,match_id:t.match.matchId},null,8,["company_id","match_id"])]),e("td",null,[l(d,{type:"europeOdds",field:"instantAway",type_change:"1",odds_type:"2",company_id:a(n).bookmaker.companyIdMain,match_id:t.match.matchId},null,8,["company_id","match_id"])])]),e("tr",null,[le,e("td",null,[l(d,{type:"overUnder",field:"initialOver",type_change:"2",odds_type:"3",company_id:a(n).bookmaker.companyIdMain,match_id:t.match.matchId},null,8,["company_id","match_id"])]),e("td",null,[l(d,{type:"overUnder",field:"instantDraw",type_change:"2",odds_type:"3",company_id:a(n).bookmaker.companyIdMain,match_id:t.match.matchId},null,8,["company_id","match_id"])]),e("td",null,[l(d,{type:"overUnder",field:"initialUnder",type_change:"2",odds_type:"3",company_id:a(n).bookmaker.companyIdMain,match_id:t.match.matchId},null,8,["company_id","match_id"])]),e("td",null,[l(d,{type:"overUnder",field:"initialOver",type_change:"1",odds_type:"2",company_id:a(n).bookmaker.companyIdMain,match_id:t.match.matchId},null,8,["company_id","match_id"])]),e("td",null,[l(d,{type:"overUnder",field:"instantDraw",type_change:"1",odds_type:"2",company_id:a(n).bookmaker.companyIdMain,match_id:t.match.matchId},null,8,["company_id","match_id"])]),e("td",null,[l(d,{type:"overUnder",field:"initialUnder",type_change:"1",odds_type:"2",company_id:a(n).bookmaker.companyIdMain,match_id:t.match.matchId},null,8,["company_id","match_id"])])]),e("tr",null,[e("td",de,[l(a($),{variant:"outline-info",size:"sm"},{default:_(()=>[M(" view more ")]),_:1})])])])],64))}},ce={class:"text-center mb-0 p-2 overflow-hidden"},re=e("div",{class:"flex-fill fs-16 uppercase p-2"},"L\u1ECBch \u0111\u1EA5u h\xF4m nay",-1),pe={class:"d-flex flex-row position-relative mb-2"},he={class:"flex-fill me-2"},_e={class:"m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary p-2 me-1"},me={class:"m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary p-2 me-1"},ue={class:"d-flex flex-row position-relative mb-2"},ye={class:"text-center uppercase h-[30px] bg-success text-white fs-12"},fe={style:{width:"5%"}},we={class:"flex-fill me-2"},xe=e("i",{class:"ri ri-delete-bin-2-line"},null,-1),ke=e("th",{style:{width:"13%"}},"time",-1),ge=e("td",{style:{width:"2%"}},null,-1),be=e("th",{style:{width:"18%"}},"home",-1),ve=e("th",{style:{width:"20%"}},"score",-1),Ie=e("th",{style:{width:"18%"}},"away",-1),Me=e("th",{style:{width:"3%"}},[e("i",{class:"ri-flag-2-fill"})],-1),$e=e("th",{style:{width:"3%"}},"FT",-1),Ce=e("th",{style:{width:"5%"}},"Data",-1),Oe={style:{width:"18%","text-align":"right"}},Le={class:"min-w-[80px] uppercase"},Ne={class:"h-[calc(100vh-360px)] overflow-auto",id:"simple-bar"},Se={class:"relative border border-groove"},He=e("tr",{class:"h-[0]"},[e("th",{style:{width:"5%"}}),e("th",{style:{width:"13%"}}),e("td",{style:{width:"2%"}}),e("th",{style:{width:"18%"}}),e("th",{style:{width:"20%"}}),e("th",{style:{width:"18%"}}),e("th",{style:{width:"3%"}}),e("th",{style:{width:"3%"}}),e("th",{style:{width:"3%"}}),e("td",{style:{width:"18%"}})],-1),Te={key:0,class:"text-left bg-success-light"},De={key:0,colspan:"10",class:"h-[30px] px-2 fw-bold"},Ue={class:"text-center h-[30px]"},Be={class:"d-flex flex-column w-50px fs-11"},Fe={key:0},Ae={key:1},Ve=["innerHTML"],Ee=e("td",null,[e("div",null,[e("i",{class:"ri ri-movie-line hover:text-red-500"})])],-1),ze={class:"relative"},Pe=e("i",{class:"ri ri-rectangle-fill inline-block rotate-[100deg] text-yellow-500 fs-[20px]"},null,-1),Re={class:"absolute fs-10 left-[4px] -top-[1px] text-white"},Ye={class:"relative"},je=e("i",{class:"ri ri-rectangle-fill inline-block rotate-[100deg] text-red-500 fs-[20px]"},null,-1),qe={class:"absolute fs-10 left-[4px] -top-[1px] text-white"},Ge={class:"badge text-body fs-14"},Je=e("span",null," - ",-1),Ke={class:"badge text-body fs-14"},Xe={class:"relative"},Qe=e("i",{class:"ri ri-rectangle-fill inline-block rotate-[100deg] text-red-500 fs-[20px]"},null,-1),We={class:"absolute fs-10 left-[4px] -top-[1px] text-white"},Ze={class:"relative"},et=e("i",{class:"ri ri-rectangle-fill inline-block rotate-[100deg] text-yellow-500 fs-[20px]"},null,-1),tt={class:"absolute fs-10 left-[4px] -top-[1px] text-white"},st={key:0,class:"fs-11 hover:text-red-500"},at={key:0,class:"fs-11 hover:text-red-500"},nt=e("td",null,[e("div",{class:"fs-11 hover:text-red-500"},[e("i",{class:"ri-flag-2-fill"})])],-1),ot={key:0,class:"relative"},lt=["onMouseenter","onMouseleave"],dt=["onMouseleave"],it={__name:"BlockLiveScore",setup(w){const t=O(),n=B({overlay:!1,keyword:"",likes:[],showOdd:0,interval:null});C(async()=>{t.getLiveScore(),t.getOdds(),t.getBookmaker(),U()});const g=function(c){return c>=(t.page_show-1)*50},b=function(c){return Math.floor(y.value.length)===t.page_show*50?c<y.value.length:c<t.page_show*50},H=function(c){switch(c){case 0:return'<span class="text-black"> Not started </span>';case 1:return'<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> First half </span>';case 2:return'<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> Haft time </span>';case 3:return'<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> Second half </span>';case 4:return'<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> Extra time </span>';case 5:return'<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> Penalty </span>';case-1:return'<span class="text-black"> Finished </span>';case-10:return'<span class="text-black"> Cancelled </span>';case-11:return'<span class="text-black"> TBD </span>';case-12:return'<span class="text-black"> Terminated </span>';case-13:return'<span class="text-black"> Interrupted </span>';case-14:return'<span class="text-black"> Postponed </span>'}},T=function(c){t.page_show=1,t.likes.includes(c)?t.likes.splice(t.likes.indexOf(c),1):t.likes.push(c)},m=function(c){switch(t.is_status=c,t.page_show=1,c){case"live":t.statuses=[1,2,3,4,5];break;case"not_start":t.statuses=[0];break;case"first_half":t.statuses=[1];break;case"half_time":t.statuses=[2];break;case"second_half":t.statuses=[3];break;case"extra_time":t.statuses=[4];break;case"penalty":t.statuses=[5];break;case"order":t.statuses=[-1,-10,-11,-12,-14];break;case"reset":t.statuses=[],t.is_status="";break}},D=function(c){let o=c.target;if(Math.ceil(o.scrollTop)===o.scrollHeight-o.offsetHeight){let s=Math.floor(y.value.length/50);t.page_show<s&&(t.page_show=t.page_show+1,o.scrollTop=1)}else Math.ceil(o.scrollTop)<1&&t.page_show>1&&(setTimeout(()=>{o.scrollTop=o.scrollHeight-o.offsetHeight-1},50),t.page_show>1&&(t.page_show=t.page_show-1))},U=function(){n.intervalL=setInterval(()=>{t.getLiveScore()},600*1e3),n.intervalO=setInterval(()=>{t.getOddChange(),t.getLiveScoreChange()},30*1e3)};F(()=>{clearInterval(n.intervalL),clearInterval(n.intervalO)});const y=A(()=>{let c=Object.values(t.live_scores).filter(r=>t.is_status?t.statuses.includes(r.status)&&(r.homeName&&r.homeName.toLowerCase().includes(t.keyword.toLowerCase())||r.awayName&&r.awayName.toLowerCase().includes(t.keyword.toLowerCase())):r.homeName&&r.homeName.toLowerCase().includes(t.keyword.toLowerCase())||r.awayName&&r.awayName.toLowerCase().includes(t.keyword.toLowerCase())),o=c.filter(r=>t.likes.includes(r.id)),s=c.filter(r=>!t.likes.includes(r.id));return o.concat(s)});return C(()=>{new V(document.getElementById("simple-bar")).getScrollElement().addEventListener("scroll",D)}),(c,o)=>(p(),v(a(R),{show:n.overlay},{default:_(()=>[e("div",ce,[re,e("div",pe,[e("div",he,[E(e("input",{type:"text",class:"form-control","onUpdate:modelValue":o[0]||(o[0]=s=>a(t).keyword=s),onInput:o[1]||(o[1]=s=>a(t).page_show=1),placeholder:"L\u1ECDc theo t\xEAn \u0111\u1ED9i b\xF3ng",autocomplete:"off",id:"search-options",value:""},null,544),[[z,a(t).keyword]])]),e("span",_e,"T\xECm th\u1EA5y "+i(y.value.length)+" tr\u1EADn",1),e("span",me,"Trang "+i(a(t).page_show),1)]),e("div",ue,[e("span",{class:"m-0 flex-shrink-1 fs-12 border rounded bg-gray-500 text-white px-1 cursor-pointer me-2",onClick:o[2]||(o[2]=s=>m("reset"))},"Reset"),e("span",{class:u(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":a(t).is_status==="live"}]),onClick:o[3]||(o[3]=s=>m("live"))},"live",2),e("span",{class:u(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":a(t).is_status==="not_start"}]),onClick:o[4]||(o[4]=s=>m("not_start"))},"not start",2),e("span",{class:u(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":a(t).is_status==="first_half"}]),onClick:o[5]||(o[5]=s=>m("first_half"))},"first half",2),e("span",{class:u(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":a(t).is_status==="half_time"}]),onClick:o[6]||(o[6]=s=>m("half_time"))},"half time",2),e("span",{class:u(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":a(t).is_status==="second_half"}]),onClick:o[7]||(o[7]=s=>m("second_half"))},"second half",2),e("span",{class:u(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":a(t).is_status==="extra_time"}]),onClick:o[8]||(o[8]=s=>m("extra_time"))},"extra time",2),e("span",{class:u(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":a(t).is_status==="penalty"}]),onClick:o[9]||(o[9]=s=>m("penalty"))},"penalty",2),e("span",{class:u(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":a(t).is_status==="order"}]),onClick:o[10]||(o[10]=s=>m("order"))},"order",2)]),e("table",null,[e("tr",ye,[e("th",fe,[e("div",we,[l(a($),{size:"sm",class:"btn-outline-warning hover:text-red-500 cursor-pointer",onClick:o[11]||(o[11]=s=>a(t).likes=[])},{default:_(()=>[xe]),_:1})])]),ke,ge,be,ve,Ie,Me,$e,Ce,e("td",Oe,[l(a(N),{variant:"success",size:"sm",dropend:"",class:"bookmaker min-w-[100px]"},{"button-content":_(()=>{var s;return[e("span",Le,i((s=a(t).bookmaker.companyName)!=null?s:c.choose),1)]}),default:_(()=>[(p(!0),h(k,null,L(a(t).bookmakers,s=>(p(),v(a(P),{onClick:r=>a(t).bookmaker=s},{default:_(()=>[e("span",null,i(s.companyName),1)]),_:2},1032,["onClick"]))),256))]),_:1})])])]),e("div",Ne,[e("table",Se,[He,(p(!0),h(k,null,L(y.value,(s,r)=>(p(),h(k,{key:r},[g(r)&&b(r)?(p(),h(k,{key:0},[!y.value[r-1]||s.leagueId!==y.value[r-1].leagueId?(p(),h("tr",Te,[a(t).league_profiles[s.leagueId]?(p(),h("td",De,[e("span",null,i(a(t).league_profiles[s.leagueId].name),1)])):f("",!0)])):f("",!0),e("tr",Ue,[e("td",null,[l(a($),{size:"sm",class:"btn-outline-light text-muted cursor-pointer",onClick:x=>T(s.id)},{default:_(()=>[e("i",{class:u(["ri ri-star-fill hover:text-yellow-500",{"text-yellow-500":a(t).likes.includes(s.id)}])},null,2)]),_:2},1032,["onClick"])]),e("td",null,[e("div",Be,[[1,2,3].includes(s.status)?(p(),h("span",Fe,[l(j,{match:s},null,8,["match"])])):(p(),h("span",Ae,i(a(Y).unix(s.updateTime).format("LT")),1)),e("span",{class:"fs-10 position-relative",innerHTML:H(s.status)},null,8,Ve)])]),Ee,e("td",null,[l(a(S),{to:"/match-detail/"+s.matchId,class:"cursor-pointer uppercase fw-bold fs-11 w-[100px] text-center inline-block hover:text-blue-600",title:s.homeName},{default:_(()=>[M(i(s.homeName),1)]),_:2},1032,["to","title"])]),e("td",null,[e("span",ze,[Pe,e("span",Re,i(s.homeYellow),1)]),e("span",Ye,[je,e("span",qe,i(s.homeRed),1)]),e("span",null,[e("span",Ge,i(s.homeScore),1),Je,e("span",Ke,i(s.awayScore),1)]),e("span",Xe,[Qe,e("span",We,i(s.awayRed),1)]),e("span",Ze,[et,e("span",tt,i(s.awayYellow),1)])]),e("td",null,[l(a(S),{to:"/match-detail/"+s.matchId,class:"cursor-pointer uppercase fw-bold fs-11 w-[100px] text-center inline-block hover:text-blue-600",title:s.awayName},{default:_(()=>[M(i(s.awayName),1)]),_:2},1032,["to","title"])]),e("td",null,[s.status===1?(p(),h("div",st,i(s.homeCorner)+"-"+i(s.awayCorner),1)):f("",!0)]),e("td",null,[s.status===1?(p(),h("div",at,i(s.homeHalfScore)+"-"+i(s.awayHalfScore),1)):f("",!0)]),nt,a(t).odds?(p(),h("td",ot,[e("div",{onMouseenter:I(x=>{n.showOdd=[],n.showOdd[s.id]=!0},["prevent","stop"]),onMouseleave:I(x=>n.showOdd[s.id]=!1,["prevent","stop"])},[l(X,{match:s},null,8,["match"]),e("div",{onMouseleave:I(x=>n.showOdd[s.id]=!1,["prevent","stop"])},[n.showOdd[s.id]?(p(),v(a(N),{key:0,offset:{mainAxis:-100,crossAxis:-50},class:"odd-match",modelValue:n.showOdd[s.id],"onUpdate:modelValue":x=>n.showOdd[s.id]=x,lass:"m-1"},{default:_(()=>[l(ie,{match:s},null,8,["match"])]),_:2},1032,["modelValue","onUpdate:modelValue"])):f("",!0)],40,dt)],40,lt)])):f("",!0)])],64)):f("",!0)],64))),128))])])])]),_:1},8,["show"]))}},ct={class:"d-flex mt-1"},rt={class:"w-[300px] pe-1"},pt={class:"flex-fill p-2 bg-white"},ht={class:""},gt={__name:"Home",setup(w){return C(()=>{}),(t,n)=>(p(),h("div",ct,[e("div",rt,[l(q)]),e("div",pt,[e("div",ht,[l(it)])])]))}};export{gt as default};
