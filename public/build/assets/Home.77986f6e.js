import{B as T,o as i,c as u,u as o,a as e,t as n,C as _,D as p,E as k,f as H,G as L,F as M,r as re,H as S,I as ie,q as ce,S as he,J as O,w as ue,v as me,n as x,b as ne,L as _e,Y as le,K as de,e as N,M as pe}from"./main.76b6883c.js";import{h as fe}from"./moment.0bbbd4cb.js";import{_ as ke}from"./TimeLiveConvert.87cc849b.js";/* empty css                                                       */import{_ as xe}from"./BlockLeague.b03841f6.js";import"./_commonjsHelpers.4e997714.js";import"./lodash.e6dffafd.js";import"./ImageFile.727e49c6.js";const be={class:"fs-11"},ve={key:0,class:"px-1"},we={class:"fs-11 hover:text-blue-600"},ye={class:"fs-11 hover:text-blue-600"},ge={class:"fs-11 hover:text-blue-600"},Ie={key:1,class:"px-1"},$e={class:"fs-11 hover:text-blue-600"},Me={class:"fs-11 hover:text-blue-600"},Ce={class:"fs-11 hover:text-blue-600"},v=3,Oe={__name:"LiveOdds",props:["match","bookmaker"],setup(s){const t=T();return(d,C)=>{var $,w,y,m,g,I;return i(),u("table",be,[o(t).odds["handicap_"+s.bookmaker.companyIdMain+"_"+s.match.matchId+"_"+v]?(i(),u("tr",ve,[e("td",null,[e("div",we,n(($=o(t).odds["handicap_"+s.bookmaker.companyIdMain+"_"+s.match.matchId+"_"+v].instantHome)!=null?$:"_"),1)]),e("td",null,[e("div",ye,n((w=o(t).odds["handicap_"+s.bookmaker.companyIdMain+"_"+s.match.matchId+"_"+v].instantHandicap)!=null?w:"-"),1)]),e("td",null,[e("div",ge,n((y=o(t).odds["handicap_"+s.bookmaker.companyIdMain+"_"+s.match.matchId+"_"+v].instantAway)!=null?y:"-"),1)])])):_("",!0),o(t).odds["europeOdds_"+s.bookmaker.companyIdMain+"_"+s.match.matchId+"_"+v]?(i(),u("tr",Ie,[e("td",null,[e("div",$e,n((m=o(t).odds["europeOdds_"+s.bookmaker.companyIdMain+"_"+s.match.matchId+"_"+v].instantHome)!=null?m:"-"),1)]),e("td",null,[e("div",Me,n((g=o(t).odds["europeOdds_"+s.bookmaker.companyIdMain+"_"+s.match.matchId+"_"+v].instantDraw)!=null?g:"-"),1)]),e("td",null,[e("div",Ce,n((I=o(t).odds["europeOdds_"+s.bookmaker.companyIdMain+"_"+s.match.matchId+"_"+v].instantAway)!=null?I:"-"),1)])])):_("",!0)])}}},Ne={class:"bg-success d-flex justify-content-between text-white p-2 min-w-[400px]"},He=e("a",{class:"text-center px-2",target:"_blank"},"FIFA",-1),Le=["title"],Se={class:"fs-16 text-truncate"},Te=["title"],De={class:"table table-bordered table-nowrap mb-0 text-center"},Ue=e("tr",null,[e("th",{scope:"row"},"FT"),e("td",{colspan:"3",class:"w-[150px]"},"ODDS"),e("td",{colspan:"3",class:"w-[150px]"},"FIRST ODDS")],-1),Ae={key:0},Be=e("th",{scope:"row"},"AH",-1),Fe={class:"fs-11 hover:text-blue-600"},Ve={class:"fs-11 hover:text-blue-600"},Ee={class:"fs-11 hover:text-blue-600"},ze={class:"fs-11 hover:text-blue-600"},Pe={class:"fs-11 hover:text-blue-600"},Re={class:"fs-11 hover:text-blue-600"},Ye={key:1},je=e("th",{scope:"row"},"1X2",-1),qe={class:"fs-11 hover:text-blue-600"},Ge={class:"fs-11 hover:text-blue-600"},Je={class:"fs-11 hover:text-blue-600"},Ke={class:"fs-11 hover:text-blue-600"},Xe={class:"fs-11 hover:text-blue-600"},Qe={class:"fs-11 hover:text-blue-600"},We={key:2},Ze=e("th",{scope:"row"},"O/U",-1),et={class:"fs-11 hover:text-blue-600"},tt={class:"fs-11 hover:text-blue-600"},st={class:"fs-11 hover:text-blue-600"},at={class:"fs-11 hover:text-blue-600"},ot={class:"fs-11 hover:text-blue-600"},nt={class:"fs-11 hover:text-blue-600"},lt={colspan:"7",class:"text-center py-1"},h=3,dt={__name:"MatchInfo",props:["match","bookmaker"],setup(s){const t=s,d=T();return(C,$)=>{var w,y,m,g,I,f,r,l,a,c,b,D,U,A,B,F,V,E,z,P,R,Y,j,q,G,J,K,X,Q,W,Z,ee,te,se,ae,oe;return i(),u(M,null,[e("div",Ne,[He,e("div",{class:"cursor-pointer uppercase fs-14 text-center hover:text-blue-600 px-2 w-[150px]",title:t.match.homeName},n(t.match.homeName),9,Le),e("div",null,[e("span",Se,n(t.match.homeScore)+" - "+n(t.match.awayScore),1)]),e("div",{class:"cursor-pointer uppercase fs-14 text-center hover:text-blue-600 px-2 w-[150px]",title:t.match.awayName},n(t.match.awayName),9,Te)]),e("table",De,[e("tbody",null,[Ue,o(d).odds["handicap_"+s.bookmaker.companyIdMain+"_"+s.match.matchId+"_"+h]?(i(),u("tr",Ae,[Be,e("td",null,[e("div",Fe,n((y=(w=o(d).odds["handicap_"+s.bookmaker.companyIdMain+"_"+s.match.matchId+"_"+h])==null?void 0:w.instantHome)!=null?y:"-"),1)]),e("td",null,[e("div",Ve,n((g=(m=o(d).odds["handicap_"+s.bookmaker.companyIdMain+"_"+s.match.matchId+"_"+h])==null?void 0:m.instantHandicap)!=null?g:"-"),1)]),e("td",null,[e("div",Ee,n((f=(I=o(d).odds["handicap_"+s.bookmaker.companyIdMain+"_"+s.match.matchId+"_"+h])==null?void 0:I.instantAway)!=null?f:"-"),1)]),e("td",null,[e("div",ze,n((l=(r=o(d).odds["handicap_"+s.bookmaker.companyIdMain+"_"+s.match.matchId+"_"+h])==null?void 0:r.initialHome)!=null?l:"-"),1)]),e("td",null,[e("div",Pe,n((c=(a=o(d).odds["handicap_"+s.bookmaker.companyIdMain+"_"+s.match.matchId+"_"+h])==null?void 0:a.initialDraw)!=null?c:"-"),1)]),e("td",null,[e("div",Re,n((D=(b=o(d).odds["handicap_"+s.bookmaker.companyIdMain+"_"+s.match.matchId+"_"+h])==null?void 0:b.initialAway)!=null?D:"-"),1)])])):_("",!0),o(d).odds["europeOdds_"+s.bookmaker.companyIdMain+"_"+s.match.matchId+"_"+h]?(i(),u("tr",Ye,[je,e("td",null,[e("div",qe,n((A=(U=o(d).odds["europeOdds_"+s.bookmaker.companyIdMain+"_"+s.match.matchId+"_"+h])==null?void 0:U.instantHome)!=null?A:"-"),1)]),e("td",null,[e("div",Ge,n((F=(B=o(d).odds["europeOdds_"+s.bookmaker.companyIdMain+"_"+s.match.matchId+"_"+h])==null?void 0:B.instantDraw)!=null?F:"-"),1)]),e("td",null,[e("div",Je,n((E=(V=o(d).odds["europeOdds_"+s.bookmaker.companyIdMain+"_"+s.match.matchId+"_"+h])==null?void 0:V.instantAway)!=null?E:"-"),1)]),e("td",null,[e("div",Ke,n((P=(z=o(d).odds["europeOdds_"+s.bookmaker.companyIdMain+"_"+s.match.matchId+"_"+h])==null?void 0:z.initialHome)!=null?P:"-"),1)]),e("td",null,[e("div",Xe,n((Y=(R=o(d).odds["europeOdds_"+s.bookmaker.companyIdMain+"_"+s.match.matchId+"_"+h])==null?void 0:R.initialDraw)!=null?Y:"-"),1)]),e("td",null,[e("div",Qe,n((q=(j=o(d).odds["europeOdds_"+s.bookmaker.companyIdMain+"_"+s.match.matchId+"_"+h])==null?void 0:j.initialAway)!=null?q:"-"),1)])])):_("",!0),o(d).odds["overUnder_"+s.bookmaker.companyIdMain+"_"+s.match.matchId+"_"+h]?(i(),u("tr",We,[Ze,e("td",null,[e("div",et,n((J=(G=o(d).odds["overUnder_"+s.bookmaker.companyIdMain+"_"+s.match.matchId+"_"+h])==null?void 0:G.instantOver)!=null?J:"-"),1)]),e("td",null,[e("div",tt,n((X=(K=o(d).odds["overUnder_"+s.bookmaker.companyIdMain+"_"+s.match.matchId+"_"+h])==null?void 0:K.instantHandicap)!=null?X:"-"),1)]),e("td",null,[e("div",st,n((W=(Q=o(d).odds["overUnder_"+s.bookmaker.companyIdMain+"_"+s.match.matchId+"_"+h])==null?void 0:Q.instantUnder)!=null?W:"-"),1)]),e("td",null,[e("div",at,n((ee=(Z=o(d).odds["overUnder_"+s.bookmaker.companyIdMain+"_"+s.match.matchId+"_"+h])==null?void 0:Z.initialHome)!=null?ee:"-"),1)]),e("td",null,[e("div",ot,n((se=(te=o(d).odds["overUnder_"+s.bookmaker.companyIdMain+"_"+s.match.matchId+"_"+h])==null?void 0:te.initialDraw)!=null?se:"-"),1)]),e("td",null,[e("div",nt,n((oe=(ae=o(d).odds["overUnder_"+s.bookmaker.companyIdMain+"_"+s.match.matchId+"_"+h])==null?void 0:ae.initialAway)!=null?oe:"-"),1)])])):_("",!0),e("tr",null,[e("td",lt,[p(o(L),{variant:"outline-info",size:"sm"},{default:k(()=>[H(" view more ")]),_:1})])])])])],64)}}},rt={class:"text-center mb-0 p-2 overflow-hidden"},it=e("div",{class:"flex-fill fs-16 uppercase p-2"},"L\u1ECBch \u0111\u1EA5u h\xF4m nay",-1),ct={class:"d-flex flex-row position-relative mb-2"},ht={class:"flex-fill me-2"},ut={class:"m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary p-2 me-1"},mt={class:"m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary p-2 me-1"},_t={class:"d-flex flex-row position-relative mb-2"},pt={class:"text-center uppercase h-[30px] bg-success text-white fs-12"},ft={style:{width:"5%"}},kt={class:"flex-fill me-2"},xt=e("i",{class:"ri ri-delete-bin-2-line"},null,-1),bt=e("th",{style:{width:"13%"}},"time",-1),vt=e("td",{style:{width:"2%"}},null,-1),wt=e("th",{style:{width:"18%"}},"home",-1),yt=e("th",{style:{width:"20%"}},"score",-1),gt=e("th",{style:{width:"18%"}},"away",-1),It=e("th",{style:{width:"3%"}},[e("i",{class:"ri-flag-2-fill"})],-1),$t=e("th",{style:{width:"3%"}},"FT",-1),Mt=e("th",{style:{width:"5%"}},"Data",-1),Ct={style:{width:"18%","text-align":"right"}},Ot={class:"min-w-[80px] uppercase"},Nt={class:"h-[calc(100vh-360px)] overflow-auto",id:"simple-bar"},Ht={class:"relative border border-groove"},Lt=e("tr",{class:"h-[0]"},[e("th",{style:{width:"5%"}}),e("th",{style:{width:"13%"}}),e("td",{style:{width:"2%"}}),e("th",{style:{width:"18%"}}),e("th",{style:{width:"20%"}}),e("th",{style:{width:"18%"}}),e("th",{style:{width:"3%"}}),e("th",{style:{width:"3%"}}),e("th",{style:{width:"3%"}}),e("td",{style:{width:"18%"}})],-1),St={key:0,class:"text-left bg-success-light"},Tt={key:0,colspan:"10",class:"h-[30px] px-2 fw-bold"},Dt={class:"text-center h-[30px]"},Ut={class:"d-flex flex-column w-50px fs-11"},At={key:0},Bt={key:1},Ft=["innerHTML"],Vt=e("td",null,[e("div",null,[e("i",{class:"ri ri-movie-line hover:text-red-500"})])],-1),Et={class:"relative"},zt=e("i",{class:"ri ri-rectangle-fill inline-block rotate-[100deg] text-yellow-500 fs-[20px]"},null,-1),Pt={class:"absolute fs-10 left-[4px] -top-[1px] text-white"},Rt={class:"relative"},Yt=e("i",{class:"ri ri-rectangle-fill inline-block rotate-[100deg] text-red-500 fs-[20px]"},null,-1),jt={class:"absolute fs-10 left-[4px] -top-[1px] text-white"},qt={class:"badge text-body fs-14"},Gt={key:0,class:"badge rounded-pill border-dark text-body hover:bg-gray-200 cursor-pointer relative top-[-2px]"},Jt={key:1},Kt={class:"badge text-body fs-14"},Xt={class:"relative"},Qt=e("i",{class:"ri ri-rectangle-fill inline-block rotate-[100deg] text-red-500 fs-[20px]"},null,-1),Wt={class:"absolute fs-10 left-[4px] -top-[1px] text-white"},Zt={class:"relative"},es=e("i",{class:"ri ri-rectangle-fill inline-block rotate-[100deg] text-yellow-500 fs-[20px]"},null,-1),ts={class:"absolute fs-10 left-[4px] -top-[1px] text-white"},ss={key:0,class:"fs-11 hover:text-red-500"},as={key:0,class:"fs-11 hover:text-red-500"},os=e("td",null,[e("div",{class:"fs-11 hover:text-red-500"},[e("i",{class:"ri-flag-2-fill"})])],-1),ns={key:0,class:"relative"},ls=["onMouseenter","onMouseleave"],ds=["onMouseleave"],rs={__name:"BlockLiveScore",setup(s){const t=T(),d=re({overlay:!1,keyword:"",likes:[],showOdd:0,interval:null});S(async()=>{t.getLiveScore(),t.getOdds(),t.getBookmaker(),I()});const C=function(r){return r>=(t.page_show-1)*50},$=function(r){return Math.floor(f.value.length)===t.page_show*50?r<f.value.length:r<t.page_show*50},w=function(r){switch(r){case 0:return'<span class="text-black"> Not started </span>';case 1:return'<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> First half </span>';case 2:return'<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> Haft time </span>';case 3:return'<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> Second half </span>';case 4:return'<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> Extra time </span>';case 5:return'<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> Penalty </span>';case-1:return'<span class="text-black"> Finished </span>';case-10:return'<span class="text-black"> Cancelled </span>';case-11:return'<span class="text-black"> TBD </span>';case-12:return'<span class="text-black"> Terminated </span>';case-13:return'<span class="text-black"> Interrupted </span>';case-14:return'<span class="text-black"> Postponed </span>'}},y=function(r){t.page_show=1,t.likes.includes(r)?t.likes.splice(t.likes.indexOf(r),1):t.likes.push(r)},m=function(r){switch(t.is_status=r,t.page_show=1,r){case"live":t.statuses=[1,2,3,4,5];break;case"not_start":t.statuses=[0];break;case"first_half":t.statuses=[1];break;case"half_time":t.statuses=[2];break;case"second_half":t.statuses=[3];break;case"extra_time":t.statuses=[4];break;case"penalty":t.statuses=[5];break;case"order":t.statuses=[-1,-10,-11,-12,-14];break;case"reset":t.statuses=[],t.is_status="";break}},g=function(r){let l=r.target;if(Math.ceil(l.scrollTop)===l.scrollHeight-l.offsetHeight){let a=Math.floor(f.value.length/50);t.page_show<a&&(t.page_show=t.page_show+1,l.scrollTop=1)}else Math.ceil(l.scrollTop)<1&&t.page_show>1&&(setTimeout(()=>{l.scrollTop=l.scrollHeight-l.offsetHeight-1},50),t.page_show>1&&(t.page_show=t.page_show-1))},I=function(){d.interval=setInterval(()=>{t.getLiveScore(),t.getOddChange()},60*1e3)};ie(()=>{clearInterval(d.interval)});const f=ce(()=>{let r=t.live_scores.filter(c=>t.is_status?t.statuses.includes(c.status)&&(c.homeName&&c.homeName.toLowerCase().includes(t.keyword.toLowerCase())||c.awayName&&c.awayName.toLowerCase().includes(t.keyword.toLowerCase())):c.homeName&&c.homeName.toLowerCase().includes(t.keyword.toLowerCase())||c.awayName&&c.awayName.toLowerCase().includes(t.keyword.toLowerCase())),l=r.filter(c=>t.likes.includes(c.id)),a=r.filter(c=>!t.likes.includes(c.id));return l.concat(a)});return S(()=>{new he(document.getElementById("simple-bar")).getScrollElement().addEventListener("scroll",g)}),(r,l)=>(i(),O(o(pe),{show:d.overlay},{default:k(()=>[e("div",rt,[it,e("div",ct,[e("div",ht,[ue(e("input",{type:"text",class:"form-control","onUpdate:modelValue":l[0]||(l[0]=a=>o(t).keyword=a),onInput:l[1]||(l[1]=a=>o(t).page_show=1),placeholder:"L\u1ECDc theo t\xEAn \u0111\u1ED9i b\xF3ng",autocomplete:"off",id:"search-options",value:""},null,544),[[me,o(t).keyword]])]),e("span",ut,"T\xECm th\u1EA5y "+n(f.value.length)+" tr\u1EADn",1),e("span",mt,"Trang "+n(o(t).page_show),1)]),e("div",_t,[e("span",{class:"m-0 flex-shrink-1 fs-12 border rounded bg-gray-500 text-white px-1 cursor-pointer me-2",onClick:l[2]||(l[2]=a=>m("reset"))},"Reset"),e("span",{class:x(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":o(t).is_status==="live"}]),onClick:l[3]||(l[3]=a=>m("live"))},"live",2),e("span",{class:x(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":o(t).is_status==="not_start"}]),onClick:l[4]||(l[4]=a=>m("not_start"))},"not start",2),e("span",{class:x(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":o(t).is_status==="first_half"}]),onClick:l[5]||(l[5]=a=>m("first_half"))},"first half",2),e("span",{class:x(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":o(t).is_status==="half_time"}]),onClick:l[6]||(l[6]=a=>m("half_time"))},"half time",2),e("span",{class:x(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":o(t).is_status==="second_half"}]),onClick:l[7]||(l[7]=a=>m("second_half"))},"second half",2),e("span",{class:x(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":o(t).is_status==="extra_time"}]),onClick:l[8]||(l[8]=a=>m("extra_time"))},"extra time",2),e("span",{class:x(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":o(t).is_status==="penalty"}]),onClick:l[9]||(l[9]=a=>m("penalty"))},"penalty",2),e("span",{class:x(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":o(t).is_status==="order"}]),onClick:l[10]||(l[10]=a=>m("order"))},"order",2)]),e("table",null,[e("tr",pt,[e("th",ft,[e("div",kt,[p(o(L),{size:"sm",class:"btn-outline-warning hover:text-red-500 cursor-pointer",onClick:l[11]||(l[11]=a=>o(t).likes=[])},{default:k(()=>[xt]),_:1})])]),bt,vt,wt,yt,gt,It,$t,Mt,e("td",Ct,[p(o(le),{variant:"success",size:"sm",dropend:"",class:"bookmaker min-w-[100px]"},{"button-content":k(()=>{var a;return[e("span",Ot,n((a=o(t).bookmaker.companyName)!=null?a:r.choose),1)]}),default:k(()=>[(i(!0),u(M,null,ne(o(t).bookmakers,a=>(i(),O(o(_e),{onClick:c=>o(t).bookmaker=a},{default:k(()=>[e("span",null,n(a.companyName),1)]),_:2},1032,["onClick"]))),256))]),_:1})])])]),e("div",Nt,[e("table",Ht,[Lt,(i(!0),u(M,null,ne(f.value,(a,c)=>(i(),u(M,{key:c},[C(c)&&$(c)?(i(),u(M,{key:0},[!f.value[c-1]||a.leagueId!==f.value[c-1].leagueId?(i(),u("tr",St,[o(t).league_profiles[a.leagueId]?(i(),u("td",Tt,[e("span",null,n(o(t).league_profiles[a.leagueId].name),1)])):_("",!0)])):_("",!0),e("tr",Dt,[e("td",null,[p(o(L),{size:"sm",class:"btn-outline-light text-muted cursor-pointer",onClick:b=>y(a.id)},{default:k(()=>[e("i",{class:x(["ri ri-star-fill hover:text-yellow-500",{"text-yellow-500":o(t).likes.includes(a.id)}])},null,2)]),_:2},1032,["onClick"])]),e("td",null,[e("div",Ut,[[1,2,3].includes(a.status)?(i(),u("span",At,[p(ke,{match:a},null,8,["match"])])):(i(),u("span",Bt,n(o(fe).unix(a.updateTime).format("LT")),1)),e("span",{class:"fs-10 position-relative",innerHTML:w(a.status)},null,8,Ft)])]),Vt,e("td",null,[p(o(de),{to:"/match-detail/"+a.matchId,class:"cursor-pointer uppercase fw-bold fs-11 w-[100px] text-center inline-block hover:text-blue-600",title:a.homeName},{default:k(()=>[H(n(a.homeName),1)]),_:2},1032,["to","title"])]),e("td",null,[e("span",Et,[zt,e("span",Pt,n(a.homeYellow),1)]),e("span",Rt,[Yt,e("span",jt,n(a.homeRed),1)]),e("span",null,[e("span",qt,n(a.homeScore),1),[0].includes(a.status)?(i(),u("span",Gt," 1 tip ")):(i(),u("span",Jt," - ")),e("span",Kt,n(a.awayScore),1)]),e("span",Xt,[Qt,e("span",Wt,n(a.awayRed),1)]),e("span",Zt,[es,e("span",ts,n(a.awayYellow),1)])]),e("td",null,[p(o(de),{to:"/match-detail/"+a.matchId,class:"cursor-pointer uppercase fw-bold fs-11 w-[100px] text-center inline-block hover:text-blue-600",title:a.awayName},{default:k(()=>[H(n(a.awayName),1)]),_:2},1032,["to","title"])]),e("td",null,[a.status===1?(i(),u("div",ss,n(a.homeCorner)+"-"+n(a.awayCorner),1)):_("",!0)]),e("td",null,[a.status===1?(i(),u("div",as,n(a.homeHalfScore)+"-"+n(a.awayHalfScore),1)):_("",!0)]),os,o(t).odds?(i(),u("td",ns,[e("div",{onMouseenter:N(b=>{d.showOdd=[],d.showOdd[a.id]=!0},["prevent","stop"]),onMouseleave:N(b=>d.showOdd[a.id]=!1,["prevent","stop"])},[p(Oe,{match:a,bookmaker:o(t).bookmaker},null,8,["match","bookmaker"]),e("div",{onMouseleave:N(b=>d.showOdd[a.id]=!1,["prevent","stop"])},[d.showOdd[a.id]?(i(),O(o(le),{key:0,offset:{mainAxis:-100,crossAxis:-50},class:"odd-match",modelValue:d.showOdd[a.id],"onUpdate:modelValue":b=>d.showOdd[a.id]=b,lass:"m-1"},{default:k(()=>[p(dt,{match:a,bookmaker:o(t).bookmaker},null,8,["match","bookmaker"])]),_:2},1032,["modelValue","onUpdate:modelValue"])):_("",!0)],40,ds)],40,ls)])):_("",!0)])],64)):_("",!0)],64))),128))])])])]),_:1},8,["show"]))}},is={class:"d-flex mt-1"},cs={class:"w-[300px] pe-1"},hs={class:"flex-fill p-2 bg-white"},us={class:""},ws={__name:"Home",setup(s){return S(()=>{}),(t,d)=>(i(),u("div",is,[e("div",cs,[p(xe)]),e("div",hs,[e("div",us,[p(rs)])])]))}};export{ws as default};
