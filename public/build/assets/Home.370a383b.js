import{B as A,o as r,c,a as e,t as n,C as f,D as v,E as k,f as F,u as d,G as D,F as T,r as re,H as U,q as ne,I as ce,S as he,J as L,w as ue,v as me,n as b,b as le,L as fe,Y as de,K as ie,e as N,M as xe}from"./main.897290e7.js";import{h as p}from"./moment.40bc58bf.js";/* empty css                                                       */import{_ as ke}from"./BlockLeague.cb1ca8ce.js";import"./lodash.bc509cb4.js";import"./ImageFile.9415f562.js";const ve={class:"fs-11"},be={key:0,class:"px-1"},pe={class:"fs-11 hover:text-blue-600"},we={class:"fs-11 hover:text-blue-600"},ye={class:"fs-11 hover:text-blue-600"},ge={key:1,class:"px-1"},_e={class:"fs-11 hover:text-blue-600"},Ie={class:"fs-11 hover:text-blue-600"},$e={class:"fs-11 hover:text-blue-600"},g=3,Me={__name:"LiveOdds",props:["odds","match","bookmaker"],setup(t){return A(),(s,u)=>{var O,w,_,I,$,M;return r(),c("table",ve,[t.odds["handicap-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+g]?(r(),c("tr",be,[e("td",null,[e("div",pe,n((O=t.odds["handicap-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+g].instantHome)!=null?O:"-"),1)]),e("td",null,[e("div",we,n((w=t.odds["handicap-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+g].instantHandicap)!=null?w:"-"),1)]),e("td",null,[e("div",ye,n((_=t.odds["handicap-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+g].instantAway)!=null?_:"-"),1)])])):f("",!0),t.odds["europeOdds-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+g]?(r(),c("tr",ge,[e("td",null,[e("div",_e,n((I=t.odds["europeOdds-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+g].instantHome)!=null?I:"-"),1)]),e("td",null,[e("div",Ie,n(($=t.odds["europeOdds-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+g].instantDraw)!=null?$:"-"),1)]),e("td",null,[e("div",$e,n((M=t.odds["europeOdds-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+g].instantAway)!=null?M:"-"),1)])])):f("",!0)])}}},Oe={class:"bg-success d-flex justify-content-between text-white p-2 min-w-[400px]"},Te=e("a",{class:"text-center px-2",target:"_blank"},"FIFA",-1),Ce=["title"],Se={class:"fs-16 text-truncate"},He=["title"],Le={class:"table table-bordered table-nowrap mb-0 text-center"},Ne=e("tr",null,[e("th",{scope:"row"},"FT"),e("td",{colspan:"3",class:"w-[150px]"},"ODDS"),e("td",{colspan:"3",class:"w-[150px]"},"FIRST ODDS")],-1),Fe={key:0},De=e("th",{scope:"row"},"AH",-1),Ue={class:"fs-11 hover:text-blue-600"},Ae={class:"fs-11 hover:text-blue-600"},Be={class:"fs-11 hover:text-blue-600"},Ve={class:"fs-11 hover:text-blue-600"},Ee={class:"fs-11 hover:text-blue-600"},ze={class:"fs-11 hover:text-blue-600"},Pe={key:1},Re=e("th",{scope:"row"},"1X2",-1),Ye={class:"fs-11 hover:text-blue-600"},je={class:"fs-11 hover:text-blue-600"},qe={class:"fs-11 hover:text-blue-600"},Ge={class:"fs-11 hover:text-blue-600"},Je={class:"fs-11 hover:text-blue-600"},Ke={class:"fs-11 hover:text-blue-600"},Xe={key:2},Qe=e("th",{scope:"row"},"O/U",-1),We={class:"fs-11 hover:text-blue-600"},Ze={class:"fs-11 hover:text-blue-600"},et={class:"fs-11 hover:text-blue-600"},tt={class:"fs-11 hover:text-blue-600"},st={class:"fs-11 hover:text-blue-600"},at={class:"fs-11 hover:text-blue-600"},ot={colspan:"7",class:"text-center py-1"},h=3,nt={__name:"MatchInfo",props:["odds","match","bookmaker"],setup(t){const s=t;return A(),(u,O)=>{var w,_,I,$,M,C,m,S,H,x,l,o,a,i,y,B,V,E,z,P,R,Y,j,q,G,J,K,X,Q,W,Z,ee,te,se,ae,oe;return r(),c(T,null,[e("div",Oe,[Te,e("div",{class:"cursor-pointer uppercase fs-14 text-center hover:text-blue-600 px-2 w-[150px]",title:s.match.homeName},n(s.match.homeName),9,Ce),e("div",null,[e("span",Se,n(s.match.homeScore)+" - "+n(s.match.awayScore),1)]),e("div",{class:"cursor-pointer uppercase fs-14 text-center hover:text-blue-600 px-2 w-[150px]",title:s.match.awayName},n(s.match.awayName),9,He)]),e("table",Le,[e("tbody",null,[Ne,t.odds["handicap-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+h]?(r(),c("tr",Fe,[De,e("td",null,[e("div",Ue,n((_=(w=t.odds["handicap-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+h])==null?void 0:w.instantHome)!=null?_:"-"),1)]),e("td",null,[e("div",Ae,n(($=(I=t.odds["handicap-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+h])==null?void 0:I.instantHandicap)!=null?$:"-"),1)]),e("td",null,[e("div",Be,n((C=(M=t.odds["handicap-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+h])==null?void 0:M.instantAway)!=null?C:"-"),1)]),e("td",null,[e("div",Ve,n((S=(m=t.odds["handicap-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+h])==null?void 0:m.initialHome)!=null?S:"-"),1)]),e("td",null,[e("div",Ee,n((x=(H=t.odds["handicap-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+h])==null?void 0:H.initialDraw)!=null?x:"-"),1)]),e("td",null,[e("div",ze,n((o=(l=t.odds["handicap-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+h])==null?void 0:l.initialAway)!=null?o:"-"),1)])])):f("",!0),t.odds["europeOdds-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+h]?(r(),c("tr",Pe,[Re,e("td",null,[e("div",Ye,n((i=(a=t.odds["europeOdds-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+h])==null?void 0:a.instantHome)!=null?i:"-"),1)]),e("td",null,[e("div",je,n((B=(y=t.odds["europeOdds-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+h])==null?void 0:y.instantDraw)!=null?B:"-"),1)]),e("td",null,[e("div",qe,n((E=(V=t.odds["europeOdds-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+h])==null?void 0:V.instantAway)!=null?E:"-"),1)]),e("td",null,[e("div",Ge,n((P=(z=t.odds["europeOdds-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+h])==null?void 0:z.initialHome)!=null?P:"-"),1)]),e("td",null,[e("div",Je,n((Y=(R=t.odds["europeOdds-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+h])==null?void 0:R.initialDraw)!=null?Y:"-"),1)]),e("td",null,[e("div",Ke,n((q=(j=t.odds["europeOdds-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+h])==null?void 0:j.initialAway)!=null?q:"-"),1)])])):f("",!0),t.odds["overUnder-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+h]?(r(),c("tr",Xe,[Qe,e("td",null,[e("div",We,n((J=(G=t.odds["overUnder-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+h])==null?void 0:G.instantOver)!=null?J:"-"),1)]),e("td",null,[e("div",Ze,n((X=(K=t.odds["overUnder-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+h])==null?void 0:K.instantHandicap)!=null?X:"-"),1)]),e("td",null,[e("div",et,n((W=(Q=t.odds["overUnder-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+h])==null?void 0:Q.instantUnder)!=null?W:"-"),1)]),e("td",null,[e("div",tt,n((ee=(Z=t.odds["overUnder-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+h])==null?void 0:Z.initialHome)!=null?ee:"-"),1)]),e("td",null,[e("div",st,n((se=(te=t.odds["overUnder-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+h])==null?void 0:te.initialDraw)!=null?se:"-"),1)]),e("td",null,[e("div",at,n((oe=(ae=t.odds["overUnder-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+h])==null?void 0:ae.initialAway)!=null?oe:"-"),1)])])):f("",!0),e("tr",null,[e("td",ot,[v(d(D),{variant:"outline-info",size:"sm"},{default:k(()=>[F(" view more ")]),_:1})])])])])],64)}}},lt={class:"text-center mb-0 p-2 overflow-hidden"},dt=e("div",{class:"flex-fill fs-16 uppercase p-2"},"L\u1ECBch \u0111\u1EA5u h\xF4m nay",-1),it={class:"d-flex flex-row position-relative mb-2"},rt={class:"flex-fill me-2"},ct={class:"m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary p-2 me-1"},ht={class:"m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary p-2 me-1"},ut={class:"d-flex flex-row position-relative mb-2"},mt={class:"text-center uppercase h-[30px] bg-success text-white fs-12"},ft={style:{width:"5%"}},xt={class:"flex-fill me-2"},kt=e("i",{class:"ri ri-delete-bin-2-line"},null,-1),vt=e("th",{style:{width:"13%"}},"time",-1),bt=e("td",{style:{width:"2%"}},null,-1),pt=e("th",{style:{width:"18%"}},"home",-1),wt=e("th",{style:{width:"20%"}},"score",-1),yt=e("th",{style:{width:"18%"}},"away",-1),gt=e("th",{style:{width:"3%"}},[e("i",{class:"ri-flag-2-fill"})],-1),_t=e("th",{style:{width:"3%"}},"FT",-1),It=e("th",{style:{width:"5%"}},"Data",-1),$t={style:{width:"18%","text-align":"right"}},Mt={class:"min-w-[80px] uppercase"},Ot={class:"h-[calc(100vh-360px)] overflow-auto",id:"simple-bar"},Tt={class:"relative border border-groove"},Ct=e("tr",{class:"h-[0]"},[e("th",{style:{width:"5%"}}),e("th",{style:{width:"13%"}}),e("td",{style:{width:"2%"}}),e("th",{style:{width:"18%"}}),e("th",{style:{width:"20%"}}),e("th",{style:{width:"18%"}}),e("th",{style:{width:"3%"}}),e("th",{style:{width:"3%"}}),e("th",{style:{width:"3%"}}),e("td",{style:{width:"18%"}})],-1),St={key:0,class:"text-left bg-success-light"},Ht={key:0,colspan:"10",class:"h-[30px] px-2 fw-bold"},Lt={class:"text-center h-[30px]"},Nt={class:"d-flex flex-column w-50px fs-11"},Ft={key:0},Dt={key:1},Ut={key:2},At=["innerHTML"],Bt=e("td",null,[e("div",null,[e("i",{class:"ri ri-movie-line hover:text-red-500"})])],-1),Vt={class:"relative"},Et=e("i",{class:"ri ri-rectangle-fill inline-block rotate-[100deg] text-yellow-500 fs-[20px]"},null,-1),zt={class:"absolute fs-10 left-[4px] -top-[1px] text-white"},Pt={class:"relative"},Rt=e("i",{class:"ri ri-rectangle-fill inline-block rotate-[100deg] text-red-500 fs-[20px]"},null,-1),Yt={class:"absolute fs-10 left-[4px] -top-[1px] text-white"},jt={class:"badge text-body fs-14"},qt={key:0,class:"badge rounded-pill border-dark text-body hover:bg-gray-200 cursor-pointer relative top-[-2px]"},Gt={key:1},Jt={class:"badge text-body fs-14"},Kt={class:"relative"},Xt=e("i",{class:"ri ri-rectangle-fill inline-block rotate-[100deg] text-red-500 fs-[20px]"},null,-1),Qt={class:"absolute fs-10 left-[4px] -top-[1px] text-white"},Wt={class:"relative"},Zt=e("i",{class:"ri ri-rectangle-fill inline-block rotate-[100deg] text-yellow-500 fs-[20px]"},null,-1),es={class:"absolute fs-10 left-[4px] -top-[1px] text-white"},ts={key:0,class:"fs-11 hover:text-red-500"},ss={key:0,class:"fs-11 hover:text-red-500"},as=e("td",null,[e("div",{class:"fs-11 hover:text-red-500"},[e("i",{class:"ri-flag-2-fill"})])],-1),os={key:0,class:"relative"},ns=["onMouseenter","onMouseleave"],ls=["onMouseleave"],ds={__name:"BlockLiveScore",setup(t){const s=A(),u=re({overlay:!1,keyword:"",likes:[],showOdd:0,interval:null});U(async()=>{s.getLiveScore(),s.getOdds(),s.getBookmaker(),H()});const O=function(l){return l>=(s.page_show-1)*50},w=ne(()=>{let l={};for(const o of s.odds)l[o.type+"-"+o.companyId+"-"+o.matchId+"-"+o.OddsType]=o;return l}),_=function(l){return Math.floor(x.value.length)===s.page_show*50?l<x.value.length:l<s.page_show*50},I=function(l){let o=0;l.halfStartTime?o=p.unix(l.updateTime).valueOf()-p.unix(l.halfStartTime).valueOf():o=p.unix(l.updateTime).valueOf()-p.unix(l.matchTime).valueOf();let a=(o/1e3).toFixed(1),i=(o/(1e3*60)).toFixed(1);if(a<60)return a+" s";if(i<=45)return parseInt(i)+" '";if(i>45)return"90 +("+(parseInt(i)-45)+")"},$=function(l){let o=0;l.halfStartTime?o=p.unix(l.updateTime).valueOf()-p.unix(l.halfStartTime).valueOf():o=p.unix(l.updateTime).valueOf()-p.unix(l.matchTime).valueOf()-1e3*60;let a=(o/1e3).toFixed(1),i=(o/(1e3*60)).toFixed(1);if(a<60)return a+" s";if(i<=45)return parseInt(i)+" '";if(i>45)return"90 +("+(parseInt(i)-45)+")"},M=function(l){switch(l){case 0:return'<span class="text-black"> Not started </span>';case 1:return'<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> First half </span>';case 2:return'<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> Half time </span>';case 3:return'<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> Second half </span>';case 4:return'<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> Extra time </span>';case 5:return'<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> Penalty </span>';case-1:return'<span class="text-black"> Finished </span>';case-10:return'<span class="text-black"> Cancelled </span>';case-11:return'<span class="text-black"> TBD </span>';case-12:return'<span class="text-black"> Terminated </span>';case-13:return'<span class="text-black"> Interrupted </span>';case-14:return'<span class="text-black"> Postponed </span>'}},C=function(l){s.page_show=1,s.likes.includes(l)?s.likes.splice(s.likes.indexOf(l),1):s.likes.push(l)},m=function(l){switch(s.is_status=l,s.page_show=1,l){case"live":s.statuses=[1,2,3,4,5];break;case"not_start":s.statuses=[0];break;case"first_half":s.statuses=[1];break;case"half_time":s.statuses=[2];break;case"second_half":s.statuses=[3];break;case"extra_time":s.statuses=[4];break;case"penalty":s.statuses=[5];break;case"order":s.statuses=[-1,-10,-11,-12,-14];break;case"reset":s.statuses=[],s.is_status="";break}},S=function(l){let o=l.target;if(Math.ceil(o.scrollTop)===o.scrollHeight-o.offsetHeight){let a=Math.floor(x.value.length/50);s.page_show<a&&(s.page_show=s.page_show+1,o.scrollTop=1)}else Math.ceil(o.scrollTop)<1&&s.page_show>1&&(setTimeout(()=>{o.scrollTop=o.scrollHeight-o.offsetHeight-1},50),s.page_show>1&&(s.page_show=s.page_show-1))},H=function(){u.interval=setInterval(()=>{s.getLiveScoreChange(),s.getOddChange()},60*1e3)};ce(()=>{clearInterval(u.interval)});const x=ne(()=>{let l=s.live_scores.filter(i=>s.is_status?s.statuses.includes(i.status)&&(i.homeName.toLowerCase().includes(s.keyword.toLowerCase())||i.awayName.toLowerCase().includes(s.keyword.toLowerCase())):i.homeName.toLowerCase().includes(s.keyword.toLowerCase())||i.awayName.toLowerCase().includes(s.keyword.toLowerCase())),o=l.filter(i=>s.likes.includes(i.id)),a=l.filter(i=>!s.likes.includes(i.id));return o.concat(a)});return U(()=>{new he(document.getElementById("simple-bar")).getScrollElement().addEventListener("scroll",S)}),(l,o)=>(r(),L(d(xe),{show:u.overlay},{default:k(()=>[e("div",lt,[dt,e("div",it,[e("div",rt,[ue(e("input",{type:"text",class:"form-control","onUpdate:modelValue":o[0]||(o[0]=a=>d(s).keyword=a),placeholder:"L\u1ECDc theo t\xEAn \u0111\u1ED9i b\xF3ng",autocomplete:"off",id:"search-options",value:""},null,512),[[me,d(s).keyword]])]),e("span",ct,"T\xECm th\u1EA5y "+n(x.value.length)+" tr\u1EADn",1),e("span",ht,"Trang "+n(d(s).page_show),1)]),e("div",ut,[e("span",{class:"m-0 flex-shrink-1 fs-12 border rounded bg-gray-500 text-white px-1 cursor-pointer me-2",onClick:o[1]||(o[1]=a=>m("reset"))},"Reset"),e("span",{class:b(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":d(s).is_status==="live"}]),onClick:o[2]||(o[2]=a=>m("live"))},"live",2),e("span",{class:b(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":d(s).is_status==="not_start"}]),onClick:o[3]||(o[3]=a=>m("not_start"))},"not start",2),e("span",{class:b(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":d(s).is_status==="first_half"}]),onClick:o[4]||(o[4]=a=>m("first_half"))},"first half",2),e("span",{class:b(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":d(s).is_status==="half_time"}]),onClick:o[5]||(o[5]=a=>m("half_time"))},"half time",2),e("span",{class:b(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":d(s).is_status==="second_half"}]),onClick:o[6]||(o[6]=a=>m("second_half"))},"second half",2),e("span",{class:b(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":d(s).is_status==="extra_time"}]),onClick:o[7]||(o[7]=a=>m("extra_time"))},"extra time",2),e("span",{class:b(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":d(s).is_status==="penalty"}]),onClick:o[8]||(o[8]=a=>m("penalty"))},"penalty",2),e("span",{class:b(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":d(s).is_status==="order"}]),onClick:o[9]||(o[9]=a=>m("order"))},"order",2)]),e("table",null,[e("tr",mt,[e("th",ft,[e("div",xt,[v(d(D),{size:"sm",class:"btn-outline-warning hover:text-red-500 cursor-pointer",onClick:o[10]||(o[10]=a=>d(s).likes=[])},{default:k(()=>[kt]),_:1})])]),vt,bt,pt,wt,yt,gt,_t,It,e("td",$t,[v(d(de),{variant:"success",size:"sm",dropend:"",class:"bookmaker min-w-[100px]"},{"button-content":k(()=>{var a;return[e("span",Mt,n((a=d(s).bookmaker.companyName)!=null?a:l.choose),1)]}),default:k(()=>[(r(!0),c(T,null,le(d(s).bookmakers,a=>(r(),L(d(fe),{onClick:i=>d(s).bookmaker=a},{default:k(()=>[e("span",null,n(a.companyName),1)]),_:2},1032,["onClick"]))),256))]),_:1})])])]),e("div",Ot,[e("table",Tt,[Ct,(r(!0),c(T,null,le(x.value,(a,i)=>(r(),c(T,{key:i},[O(i)&&_(i)?(r(),c(T,{key:0},[!x.value[i-1]||a.leagueId!==x.value[i-1].leagueId?(r(),c("tr",St,[d(s).league_profiles[a.leagueId]?(r(),c("td",Ht,[e("span",null,n(d(s).league_profiles[a.leagueId].name),1)])):f("",!0)])):f("",!0),e("tr",Lt,[e("td",null,[v(d(D),{size:"sm",class:"btn-outline-light text-muted cursor-pointer",onClick:y=>C(a.id)},{default:k(()=>[e("i",{class:b(["ri ri-star-fill hover:text-yellow-500",{"text-yellow-500":d(s).likes.includes(a.id)}])},null,2)]),_:2},1032,["onClick"])]),e("td",null,[e("div",Nt,[[1].includes(a.status)?(r(),c("span",Ft,n(I(a)),1)):[3].includes(a.status)?(r(),c("span",Dt,n($(a)),1)):(r(),c("span",Ut,n(d(p).unix(a.updateTime).format("LT")),1)),e("span",{class:"lowercase",innerHTML:M(a.status)},null,8,At)])]),Bt,e("td",null,[v(d(ie),{to:"/match-detail/"+a.matchId,class:"cursor-pointer uppercase fw-bold fs-11 w-[100px] text-center inline-block hover:text-blue-600",title:a.homeName},{default:k(()=>[F(n(a.homeName),1)]),_:2},1032,["to","title"])]),e("td",null,[e("span",Vt,[Et,e("span",zt,n(a.homeYellow),1)]),e("span",Pt,[Rt,e("span",Yt,n(a.homeRed),1)]),e("span",null,[e("span",jt,n(a.homeScore),1),[0].includes(a.status)?(r(),c("span",qt," 1 tip ")):(r(),c("span",Gt," - ")),e("span",Jt,n(a.awayScore),1)]),e("span",Kt,[Xt,e("span",Qt,n(a.awayRed),1)]),e("span",Wt,[Zt,e("span",es,n(a.awayYellow),1)])]),e("td",null,[v(d(ie),{to:"/match-detail/"+a.matchId,class:"cursor-pointer uppercase fw-bold fs-11 w-[100px] text-center inline-block hover:text-blue-600",title:a.awayName},{default:k(()=>[F(n(a.awayName),1)]),_:2},1032,["to","title"])]),e("td",null,[a.status===1?(r(),c("div",ts,n(a.homeCorner)+"-"+n(a.awayCorner),1)):f("",!0)]),e("td",null,[a.status===1?(r(),c("div",ss,n(a.homeHalfScore)+"-"+n(a.awayHalfScore),1)):f("",!0)]),as,d(s).odds?(r(),c("td",os,[e("div",{onMouseenter:N(y=>{u.showOdd=[],u.showOdd[a.id]=!0},["prevent","stop"]),onMouseleave:N(y=>u.showOdd[a.id]=!1,["prevent","stop"])},[v(Me,{odds:w.value,match:a,bookmaker:d(s).bookmaker},null,8,["odds","match","bookmaker"]),e("div",{onMouseleave:N(y=>u.showOdd[a.id]=!1,["prevent","stop"])},[u.showOdd[a.id]?(r(),L(d(de),{key:0,offset:{mainAxis:-100,crossAxis:-50},class:"odd-match",modelValue:u.showOdd[a.id],"onUpdate:modelValue":y=>u.showOdd[a.id]=y,lass:"m-1"},{default:k(()=>[v(nt,{odds:w.value,match:a,bookmaker:d(s).bookmaker},null,8,["odds","match","bookmaker"])]),_:2},1032,["modelValue","onUpdate:modelValue"])):f("",!0)],40,ls)],40,ns)])):f("",!0)])],64)):f("",!0)],64))),128))])])])]),_:1},8,["show"]))}},is={class:"d-flex mt-1"},rs={class:"w-[300px] pe-1"},cs={class:"flex-fill p-2 bg-white"},hs={class:""},bs={__name:"Home",setup(t){return U(()=>{}),(s,u)=>(r(),c("div",is,[e("div",rs,[v(ke)]),e("div",cs,[e("div",hs,[v(ds)])])]))}};export{bs as default};
