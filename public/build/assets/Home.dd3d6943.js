import{B as D,o as i,c as h,a as e,t as o,C as f,D as k,E as b,f as L,u as l,G as S,F as M,r as ie,H as T,q as oe,I as re,S as ce,J as N,w as he,v as ue,n as v,b as ne,L as me,Y as le,K as de,e as H,M as fe}from"./main.7a7e4f03.js";import{h as ke}from"./moment.0bbbd4cb.js";import{_ as xe}from"./TimeLiveConvert.96423906.js";/* empty css                                                       */import{_ as be}from"./BlockLeague.9bd31749.js";import"./_commonjsHelpers.4e997714.js";import"./lodash.e6dffafd.js";import"./ImageFile.fe7d7da1.js";const ve={class:"fs-11"},pe={key:0,class:"px-1"},we={class:"fs-11 hover:text-blue-600"},ye={class:"fs-11 hover:text-blue-600"},ge={class:"fs-11 hover:text-blue-600"},_e={key:1,class:"px-1"},Ie={class:"fs-11 hover:text-blue-600"},$e={class:"fs-11 hover:text-blue-600"},Me={class:"fs-11 hover:text-blue-600"},y=3,Ce={__name:"LiveOdds",props:["odds","match","bookmaker"],setup(t){return D(),(s,m)=>{var $,p,g,_,I,u;return i(),h("table",ve,[t.odds["handicap-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+y]?(i(),h("tr",pe,[e("td",null,[e("div",we,o(($=t.odds["handicap-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+y].instantHome)!=null?$:"-"),1)]),e("td",null,[e("div",ye,o((p=t.odds["handicap-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+y].instantHandicap)!=null?p:"-"),1)]),e("td",null,[e("div",ge,o((g=t.odds["handicap-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+y].instantAway)!=null?g:"-"),1)])])):f("",!0),t.odds["europeOdds-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+y]?(i(),h("tr",_e,[e("td",null,[e("div",Ie,o((_=t.odds["europeOdds-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+y].instantHome)!=null?_:"-"),1)]),e("td",null,[e("div",$e,o((I=t.odds["europeOdds-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+y].instantDraw)!=null?I:"-"),1)]),e("td",null,[e("div",Me,o((u=t.odds["europeOdds-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+y].instantAway)!=null?u:"-"),1)])])):f("",!0)])}}},Oe={class:"bg-success d-flex justify-content-between text-white p-2 min-w-[400px]"},Ne=e("a",{class:"text-center px-2",target:"_blank"},"FIFA",-1),He=["title"],Le={class:"fs-16 text-truncate"},Se=["title"],Te={class:"table table-bordered table-nowrap mb-0 text-center"},De=e("tr",null,[e("th",{scope:"row"},"FT"),e("td",{colspan:"3",class:"w-[150px]"},"ODDS"),e("td",{colspan:"3",class:"w-[150px]"},"FIRST ODDS")],-1),Ue={key:0},Ae=e("th",{scope:"row"},"AH",-1),Be={class:"fs-11 hover:text-blue-600"},Fe={class:"fs-11 hover:text-blue-600"},Ve={class:"fs-11 hover:text-blue-600"},Ee={class:"fs-11 hover:text-blue-600"},ze={class:"fs-11 hover:text-blue-600"},Pe={class:"fs-11 hover:text-blue-600"},Re={key:1},Ye=e("th",{scope:"row"},"1X2",-1),je={class:"fs-11 hover:text-blue-600"},qe={class:"fs-11 hover:text-blue-600"},Ge={class:"fs-11 hover:text-blue-600"},Je={class:"fs-11 hover:text-blue-600"},Ke={class:"fs-11 hover:text-blue-600"},Xe={class:"fs-11 hover:text-blue-600"},Qe={key:2},We=e("th",{scope:"row"},"O/U",-1),Ze={class:"fs-11 hover:text-blue-600"},et={class:"fs-11 hover:text-blue-600"},tt={class:"fs-11 hover:text-blue-600"},st={class:"fs-11 hover:text-blue-600"},at={class:"fs-11 hover:text-blue-600"},ot={class:"fs-11 hover:text-blue-600"},nt={colspan:"7",class:"text-center py-1"},c=3,lt={__name:"MatchInfo",props:["odds","match","bookmaker"],setup(t){const s=t;return D(),(m,$)=>{var p,g,_,I,u,C,O,x,d,n,a,r,w,U,A,B,F,V,E,z,P,R,Y,j,q,G,J,K,X,Q,W,Z,ee,te,se,ae;return i(),h(M,null,[e("div",Oe,[Ne,e("div",{class:"cursor-pointer uppercase fs-14 text-center hover:text-blue-600 px-2 w-[150px]",title:s.match.homeName},o(s.match.homeName),9,He),e("div",null,[e("span",Le,o(s.match.homeScore)+" - "+o(s.match.awayScore),1)]),e("div",{class:"cursor-pointer uppercase fs-14 text-center hover:text-blue-600 px-2 w-[150px]",title:s.match.awayName},o(s.match.awayName),9,Se)]),e("table",Te,[e("tbody",null,[De,t.odds["handicap-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c]?(i(),h("tr",Ue,[Ae,e("td",null,[e("div",Be,o((g=(p=t.odds["handicap-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c])==null?void 0:p.instantHome)!=null?g:"-"),1)]),e("td",null,[e("div",Fe,o((I=(_=t.odds["handicap-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c])==null?void 0:_.instantHandicap)!=null?I:"-"),1)]),e("td",null,[e("div",Ve,o((C=(u=t.odds["handicap-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c])==null?void 0:u.instantAway)!=null?C:"-"),1)]),e("td",null,[e("div",Ee,o((x=(O=t.odds["handicap-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c])==null?void 0:O.initialHome)!=null?x:"-"),1)]),e("td",null,[e("div",ze,o((n=(d=t.odds["handicap-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c])==null?void 0:d.initialDraw)!=null?n:"-"),1)]),e("td",null,[e("div",Pe,o((r=(a=t.odds["handicap-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c])==null?void 0:a.initialAway)!=null?r:"-"),1)])])):f("",!0),t.odds["europeOdds-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c]?(i(),h("tr",Re,[Ye,e("td",null,[e("div",je,o((U=(w=t.odds["europeOdds-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c])==null?void 0:w.instantHome)!=null?U:"-"),1)]),e("td",null,[e("div",qe,o((B=(A=t.odds["europeOdds-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c])==null?void 0:A.instantDraw)!=null?B:"-"),1)]),e("td",null,[e("div",Ge,o((V=(F=t.odds["europeOdds-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c])==null?void 0:F.instantAway)!=null?V:"-"),1)]),e("td",null,[e("div",Je,o((z=(E=t.odds["europeOdds-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c])==null?void 0:E.initialHome)!=null?z:"-"),1)]),e("td",null,[e("div",Ke,o((R=(P=t.odds["europeOdds-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c])==null?void 0:P.initialDraw)!=null?R:"-"),1)]),e("td",null,[e("div",Xe,o((j=(Y=t.odds["europeOdds-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c])==null?void 0:Y.initialAway)!=null?j:"-"),1)])])):f("",!0),t.odds["overUnder-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c]?(i(),h("tr",Qe,[We,e("td",null,[e("div",Ze,o((G=(q=t.odds["overUnder-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c])==null?void 0:q.instantOver)!=null?G:"-"),1)]),e("td",null,[e("div",et,o((K=(J=t.odds["overUnder-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c])==null?void 0:J.instantHandicap)!=null?K:"-"),1)]),e("td",null,[e("div",tt,o((Q=(X=t.odds["overUnder-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c])==null?void 0:X.instantUnder)!=null?Q:"-"),1)]),e("td",null,[e("div",st,o((Z=(W=t.odds["overUnder-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c])==null?void 0:W.initialHome)!=null?Z:"-"),1)]),e("td",null,[e("div",at,o((te=(ee=t.odds["overUnder-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c])==null?void 0:ee.initialDraw)!=null?te:"-"),1)]),e("td",null,[e("div",ot,o((ae=(se=t.odds["overUnder-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c])==null?void 0:se.initialAway)!=null?ae:"-"),1)])])):f("",!0),e("tr",null,[e("td",nt,[k(l(S),{variant:"outline-info",size:"sm"},{default:b(()=>[L(" view more ")]),_:1})])])])])],64)}}},dt={class:"text-center mb-0 p-2 overflow-hidden"},it=e("div",{class:"flex-fill fs-16 uppercase p-2"},"L\u1ECBch \u0111\u1EA5u h\xF4m nay",-1),rt={class:"d-flex flex-row position-relative mb-2"},ct={class:"flex-fill me-2"},ht={class:"m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary p-2 me-1"},ut={class:"m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary p-2 me-1"},mt={class:"d-flex flex-row position-relative mb-2"},ft={class:"text-center uppercase h-[30px] bg-success text-white fs-12"},kt={style:{width:"5%"}},xt={class:"flex-fill me-2"},bt=e("i",{class:"ri ri-delete-bin-2-line"},null,-1),vt=e("th",{style:{width:"13%"}},"time",-1),pt=e("td",{style:{width:"2%"}},null,-1),wt=e("th",{style:{width:"18%"}},"home",-1),yt=e("th",{style:{width:"20%"}},"score",-1),gt=e("th",{style:{width:"18%"}},"away",-1),_t=e("th",{style:{width:"3%"}},[e("i",{class:"ri-flag-2-fill"})],-1),It=e("th",{style:{width:"3%"}},"FT",-1),$t=e("th",{style:{width:"5%"}},"Data",-1),Mt={style:{width:"18%","text-align":"right"}},Ct={class:"min-w-[80px] uppercase"},Ot={class:"h-[calc(100vh-360px)] overflow-auto",id:"simple-bar"},Nt={class:"relative border border-groove"},Ht=e("tr",{class:"h-[0]"},[e("th",{style:{width:"5%"}}),e("th",{style:{width:"13%"}}),e("td",{style:{width:"2%"}}),e("th",{style:{width:"18%"}}),e("th",{style:{width:"20%"}}),e("th",{style:{width:"18%"}}),e("th",{style:{width:"3%"}}),e("th",{style:{width:"3%"}}),e("th",{style:{width:"3%"}}),e("td",{style:{width:"18%"}})],-1),Lt={key:0,class:"text-left bg-success-light"},St={key:0,colspan:"10",class:"h-[30px] px-2 fw-bold"},Tt={class:"text-center h-[30px]"},Dt={class:"d-flex flex-column w-50px fs-11"},Ut={key:0},At={key:1},Bt=["innerHTML"],Ft=e("td",null,[e("div",null,[e("i",{class:"ri ri-movie-line hover:text-red-500"})])],-1),Vt={class:"relative"},Et=e("i",{class:"ri ri-rectangle-fill inline-block rotate-[100deg] text-yellow-500 fs-[20px]"},null,-1),zt={class:"absolute fs-10 left-[4px] -top-[1px] text-white"},Pt={class:"relative"},Rt=e("i",{class:"ri ri-rectangle-fill inline-block rotate-[100deg] text-red-500 fs-[20px]"},null,-1),Yt={class:"absolute fs-10 left-[4px] -top-[1px] text-white"},jt={class:"badge text-body fs-14"},qt={key:0,class:"badge rounded-pill border-dark text-body hover:bg-gray-200 cursor-pointer relative top-[-2px]"},Gt={key:1},Jt={class:"badge text-body fs-14"},Kt={class:"relative"},Xt=e("i",{class:"ri ri-rectangle-fill inline-block rotate-[100deg] text-red-500 fs-[20px]"},null,-1),Qt={class:"absolute fs-10 left-[4px] -top-[1px] text-white"},Wt={class:"relative"},Zt=e("i",{class:"ri ri-rectangle-fill inline-block rotate-[100deg] text-yellow-500 fs-[20px]"},null,-1),es={class:"absolute fs-10 left-[4px] -top-[1px] text-white"},ts={key:0,class:"fs-11 hover:text-red-500"},ss={key:0,class:"fs-11 hover:text-red-500"},as=e("td",null,[e("div",{class:"fs-11 hover:text-red-500"},[e("i",{class:"ri-flag-2-fill"})])],-1),os={key:0,class:"relative"},ns=["onMouseenter","onMouseleave"],ls=["onMouseleave"],ds={__name:"BlockLiveScore",setup(t){const s=D(),m=ie({overlay:!1,keyword:"",likes:[],showOdd:0,interval:null});T(async()=>{s.getLiveScore(),s.getOdds(),s.getBookmaker(),O()});const $=function(d){return d>=(s.page_show-1)*50},p=oe(()=>{let d={};for(const n of s.odds)d[n.type+"-"+n.companyId+"-"+n.matchId+"-"+n.OddsType]=n;return d}),g=function(d){return Math.floor(x.value.length)===s.page_show*50?d<x.value.length:d<s.page_show*50},_=function(d){switch(d){case 0:return'<span class="text-black"> Not started </span>';case 1:return'<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> First half </span>';case 2:return'<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> Haft time </span>';case 3:return'<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> Second half </span>';case 4:return'<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> Extra time </span>';case 5:return'<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> Penalty </span>';case-1:return'<span class="text-black"> Finished </span>';case-10:return'<span class="text-black"> Cancelled </span>';case-11:return'<span class="text-black"> TBD </span>';case-12:return'<span class="text-black"> Terminated </span>';case-13:return'<span class="text-black"> Interrupted </span>';case-14:return'<span class="text-black"> Postponed </span>'}},I=function(d){s.page_show=1,s.likes.includes(d)?s.likes.splice(s.likes.indexOf(d),1):s.likes.push(d)},u=function(d){switch(s.is_status=d,s.page_show=1,d){case"live":s.statuses=[1,2,3,4,5];break;case"not_start":s.statuses=[0];break;case"first_half":s.statuses=[1];break;case"half_time":s.statuses=[2];break;case"second_half":s.statuses=[3];break;case"extra_time":s.statuses=[4];break;case"penalty":s.statuses=[5];break;case"order":s.statuses=[-1,-10,-11,-12,-14];break;case"reset":s.statuses=[],s.is_status="";break}},C=function(d){let n=d.target;if(Math.ceil(n.scrollTop)===n.scrollHeight-n.offsetHeight){let a=Math.floor(x.value.length/50);s.page_show<a&&(s.page_show=s.page_show+1,n.scrollTop=1)}else Math.ceil(n.scrollTop)<1&&s.page_show>1&&(setTimeout(()=>{n.scrollTop=n.scrollHeight-n.offsetHeight-1},50),s.page_show>1&&(s.page_show=s.page_show-1))},O=function(){m.interval=setInterval(()=>{s.getLiveScoreChange(),s.getOddChange()},60*1e3)};re(()=>{clearInterval(m.interval)});const x=oe(()=>{let d=s.live_scores.filter(r=>s.is_status?s.statuses.includes(r.status)&&(r.homeName&&r.homeName.toLowerCase().includes(s.keyword.toLowerCase())||r.awayName&&r.awayName.toLowerCase().includes(s.keyword.toLowerCase())):r.homeName&&r.homeName.toLowerCase().includes(s.keyword.toLowerCase())||r.awayName&&r.awayName.toLowerCase().includes(s.keyword.toLowerCase())),n=d.filter(r=>s.likes.includes(r.id)),a=d.filter(r=>!s.likes.includes(r.id));return n.concat(a)});return T(()=>{new ce(document.getElementById("simple-bar")).getScrollElement().addEventListener("scroll",C)}),(d,n)=>(i(),N(l(fe),{show:m.overlay},{default:b(()=>[e("div",dt,[it,e("div",rt,[e("div",ct,[he(e("input",{type:"text",class:"form-control","onUpdate:modelValue":n[0]||(n[0]=a=>l(s).keyword=a),onInput:n[1]||(n[1]=a=>l(s).page_show=1),placeholder:"L\u1ECDc theo t\xEAn \u0111\u1ED9i b\xF3ng",autocomplete:"off",id:"search-options",value:""},null,544),[[ue,l(s).keyword]])]),e("span",ht,"T\xECm th\u1EA5y "+o(x.value.length)+" tr\u1EADn",1),e("span",ut,"Trang "+o(l(s).page_show),1)]),e("div",mt,[e("span",{class:"m-0 flex-shrink-1 fs-12 border rounded bg-gray-500 text-white px-1 cursor-pointer me-2",onClick:n[2]||(n[2]=a=>u("reset"))},"Reset"),e("span",{class:v(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":l(s).is_status==="live"}]),onClick:n[3]||(n[3]=a=>u("live"))},"live",2),e("span",{class:v(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":l(s).is_status==="not_start"}]),onClick:n[4]||(n[4]=a=>u("not_start"))},"not start",2),e("span",{class:v(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":l(s).is_status==="first_half"}]),onClick:n[5]||(n[5]=a=>u("first_half"))},"first half",2),e("span",{class:v(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":l(s).is_status==="half_time"}]),onClick:n[6]||(n[6]=a=>u("half_time"))},"half time",2),e("span",{class:v(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":l(s).is_status==="second_half"}]),onClick:n[7]||(n[7]=a=>u("second_half"))},"second half",2),e("span",{class:v(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":l(s).is_status==="extra_time"}]),onClick:n[8]||(n[8]=a=>u("extra_time"))},"extra time",2),e("span",{class:v(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":l(s).is_status==="penalty"}]),onClick:n[9]||(n[9]=a=>u("penalty"))},"penalty",2),e("span",{class:v(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":l(s).is_status==="order"}]),onClick:n[10]||(n[10]=a=>u("order"))},"order",2)]),e("table",null,[e("tr",ft,[e("th",kt,[e("div",xt,[k(l(S),{size:"sm",class:"btn-outline-warning hover:text-red-500 cursor-pointer",onClick:n[11]||(n[11]=a=>l(s).likes=[])},{default:b(()=>[bt]),_:1})])]),vt,pt,wt,yt,gt,_t,It,$t,e("td",Mt,[k(l(le),{variant:"success",size:"sm",dropend:"",class:"bookmaker min-w-[100px]"},{"button-content":b(()=>{var a;return[e("span",Ct,o((a=l(s).bookmaker.companyName)!=null?a:d.choose),1)]}),default:b(()=>[(i(!0),h(M,null,ne(l(s).bookmakers,a=>(i(),N(l(me),{onClick:r=>l(s).bookmaker=a},{default:b(()=>[e("span",null,o(a.companyName),1)]),_:2},1032,["onClick"]))),256))]),_:1})])])]),e("div",Ot,[e("table",Nt,[Ht,(i(!0),h(M,null,ne(x.value,(a,r)=>(i(),h(M,{key:r},[$(r)&&g(r)?(i(),h(M,{key:0},[!x.value[r-1]||a.leagueId!==x.value[r-1].leagueId?(i(),h("tr",Lt,[l(s).league_profiles[a.leagueId]?(i(),h("td",St,[e("span",null,o(l(s).league_profiles[a.leagueId].name),1)])):f("",!0)])):f("",!0),e("tr",Tt,[e("td",null,[k(l(S),{size:"sm",class:"btn-outline-light text-muted cursor-pointer",onClick:w=>I(a.id)},{default:b(()=>[e("i",{class:v(["ri ri-star-fill hover:text-yellow-500",{"text-yellow-500":l(s).likes.includes(a.id)}])},null,2)]),_:2},1032,["onClick"])]),e("td",null,[e("div",Dt,[[1,2,3].includes(a.status)?(i(),h("span",Ut,[k(xe,{match:a},null,8,["match"])])):(i(),h("span",At,o(l(ke).unix(a.updateTime).format("LT")),1)),e("span",{class:"fs-10 position-relative",innerHTML:_(a.status)},null,8,Bt)])]),Ft,e("td",null,[k(l(de),{to:"/match-detail/"+a.matchId,class:"cursor-pointer uppercase fw-bold fs-11 w-[100px] text-center inline-block hover:text-blue-600",title:a.homeName},{default:b(()=>[L(o(a.homeName),1)]),_:2},1032,["to","title"])]),e("td",null,[e("span",Vt,[Et,e("span",zt,o(a.homeYellow),1)]),e("span",Pt,[Rt,e("span",Yt,o(a.homeRed),1)]),e("span",null,[e("span",jt,o(a.homeScore),1),[0].includes(a.status)?(i(),h("span",qt," 1 tip ")):(i(),h("span",Gt," - ")),e("span",Jt,o(a.awayScore),1)]),e("span",Kt,[Xt,e("span",Qt,o(a.awayRed),1)]),e("span",Wt,[Zt,e("span",es,o(a.awayYellow),1)])]),e("td",null,[k(l(de),{to:"/match-detail/"+a.matchId,class:"cursor-pointer uppercase fw-bold fs-11 w-[100px] text-center inline-block hover:text-blue-600",title:a.awayName},{default:b(()=>[L(o(a.awayName),1)]),_:2},1032,["to","title"])]),e("td",null,[a.status===1?(i(),h("div",ts,o(a.homeCorner)+"-"+o(a.awayCorner),1)):f("",!0)]),e("td",null,[a.status===1?(i(),h("div",ss,o(a.homeHalfScore)+"-"+o(a.awayHalfScore),1)):f("",!0)]),as,l(s).odds?(i(),h("td",os,[e("div",{onMouseenter:H(w=>{m.showOdd=[],m.showOdd[a.id]=!0},["prevent","stop"]),onMouseleave:H(w=>m.showOdd[a.id]=!1,["prevent","stop"])},[k(Ce,{odds:p.value,match:a,bookmaker:l(s).bookmaker},null,8,["odds","match","bookmaker"]),e("div",{onMouseleave:H(w=>m.showOdd[a.id]=!1,["prevent","stop"])},[m.showOdd[a.id]?(i(),N(l(le),{key:0,offset:{mainAxis:-100,crossAxis:-50},class:"odd-match",modelValue:m.showOdd[a.id],"onUpdate:modelValue":w=>m.showOdd[a.id]=w,lass:"m-1"},{default:b(()=>[k(lt,{odds:p.value,match:a,bookmaker:l(s).bookmaker},null,8,["odds","match","bookmaker"])]),_:2},1032,["modelValue","onUpdate:modelValue"])):f("",!0)],40,ls)],40,ns)])):f("",!0)])],64)):f("",!0)],64))),128))])])])]),_:1},8,["show"]))}},is={class:"d-flex mt-1"},rs={class:"w-[300px] pe-1"},cs={class:"flex-fill p-2 bg-white"},hs={class:""},ws={__name:"Home",setup(t){return T(()=>{}),(s,m)=>(i(),h("div",is,[e("div",rs,[k(be)]),e("div",cs,[e("div",hs,[k(ds)])])]))}};export{ws as default};
