import{B as A,o as r,c as h,a as e,t as n,C as f,D as b,E as k,f as S,u as d,G as D,F as C,r as re,H as U,q as ne,I as ce,S as he,J as H,w as ue,v as me,n as v,b as le,L as fe,Y as de,K as ie,e as L,M as xe}from"./main.2accec05.js";import{h as N}from"./moment.40bc58bf.js";/* empty css                                                       */import{_ as ke}from"./BlockLeague.e63bf8c3.js";import"./lodash.bc509cb4.js";import"./ImageFile.ab89bd39.js";const be={class:"fs-11"},ve={key:0,class:"px-1"},pe={class:"fs-11 hover:text-blue-600"},we={class:"fs-11 hover:text-blue-600"},ye={class:"fs-11 hover:text-blue-600"},ge={key:1,class:"px-1"},_e={class:"fs-11 hover:text-blue-600"},Ie={class:"fs-11 hover:text-blue-600"},$e={class:"fs-11 hover:text-blue-600"},y=3,Me={__name:"LiveOdds",props:["odds","match","bookmaker"],setup(t){return A(),(s,u)=>{var M,p,g,_,I,$;return r(),h("table",be,[t.odds["handicap-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+y]?(r(),h("tr",ve,[e("td",null,[e("div",pe,n((M=t.odds["handicap-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+y].instantHome)!=null?M:"-"),1)]),e("td",null,[e("div",we,n((p=t.odds["handicap-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+y].instantHandicap)!=null?p:"-"),1)]),e("td",null,[e("div",ye,n((g=t.odds["handicap-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+y].instantAway)!=null?g:"-"),1)])])):f("",!0),t.odds["europeOdds-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+y]?(r(),h("tr",ge,[e("td",null,[e("div",_e,n((_=t.odds["europeOdds-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+y].instantHome)!=null?_:"-"),1)]),e("td",null,[e("div",Ie,n((I=t.odds["europeOdds-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+y].instantDraw)!=null?I:"-"),1)]),e("td",null,[e("div",$e,n(($=t.odds["europeOdds-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+y].instantAway)!=null?$:"-"),1)])])):f("",!0)])}}},Ce={class:"bg-success d-flex justify-content-between text-white p-2 min-w-[400px]"},Oe=e("a",{class:"text-center px-2",target:"_blank"},"FIFA",-1),Te=["title"],He={class:"fs-16 text-truncate"},Le=["title"],Ne={class:"table table-bordered table-nowrap mb-0 text-center"},Se=e("tr",null,[e("th",{scope:"row"},"FT"),e("td",{colspan:"3",class:"w-[150px]"},"ODDS"),e("td",{colspan:"3",class:"w-[150px]"},"FIRST ODDS")],-1),De={key:0},Ue=e("th",{scope:"row"},"AH",-1),Ae={class:"fs-11 hover:text-blue-600"},Be={class:"fs-11 hover:text-blue-600"},Fe={class:"fs-11 hover:text-blue-600"},Ve={class:"fs-11 hover:text-blue-600"},Ee={class:"fs-11 hover:text-blue-600"},ze={class:"fs-11 hover:text-blue-600"},Pe={key:1},Re=e("th",{scope:"row"},"1X2",-1),Ye={class:"fs-11 hover:text-blue-600"},je={class:"fs-11 hover:text-blue-600"},qe={class:"fs-11 hover:text-blue-600"},Ge={class:"fs-11 hover:text-blue-600"},Je={class:"fs-11 hover:text-blue-600"},Ke={class:"fs-11 hover:text-blue-600"},Xe={key:2},Qe=e("th",{scope:"row"},"O/U",-1),We={class:"fs-11 hover:text-blue-600"},Ze={class:"fs-11 hover:text-blue-600"},et={class:"fs-11 hover:text-blue-600"},tt={class:"fs-11 hover:text-blue-600"},st={class:"fs-11 hover:text-blue-600"},at={class:"fs-11 hover:text-blue-600"},ot={colspan:"7",class:"text-center py-1"},c=3,nt={__name:"MatchInfo",props:["odds","match","bookmaker"],setup(t){const s=t;return A(),(u,M)=>{var p,g,_,I,$,m,O,T,x,i,o,a,l,w,B,F,V,E,z,P,R,Y,j,q,G,J,K,X,Q,W,Z,ee,te,se,ae,oe;return r(),h(C,null,[e("div",Ce,[Oe,e("div",{class:"cursor-pointer uppercase fs-14 text-center hover:text-blue-600 px-2 w-[150px]",title:s.match.homeName},n(s.match.homeName),9,Te),e("div",null,[e("span",He,n(s.match.homeScore)+" - "+n(s.match.awayScore),1)]),e("div",{class:"cursor-pointer uppercase fs-14 text-center hover:text-blue-600 px-2 w-[150px]",title:s.match.awayName},n(s.match.awayName),9,Le)]),e("table",Ne,[e("tbody",null,[Se,t.odds["handicap-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c]?(r(),h("tr",De,[Ue,e("td",null,[e("div",Ae,n((g=(p=t.odds["handicap-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c])==null?void 0:p.instantHome)!=null?g:"-"),1)]),e("td",null,[e("div",Be,n((I=(_=t.odds["handicap-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c])==null?void 0:_.instantHandicap)!=null?I:"-"),1)]),e("td",null,[e("div",Fe,n((m=($=t.odds["handicap-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c])==null?void 0:$.instantAway)!=null?m:"-"),1)]),e("td",null,[e("div",Ve,n((T=(O=t.odds["handicap-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c])==null?void 0:O.initialHome)!=null?T:"-"),1)]),e("td",null,[e("div",Ee,n((i=(x=t.odds["handicap-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c])==null?void 0:x.initialDraw)!=null?i:"-"),1)]),e("td",null,[e("div",ze,n((a=(o=t.odds["handicap-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c])==null?void 0:o.initialAway)!=null?a:"-"),1)])])):f("",!0),t.odds["europeOdds-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c]?(r(),h("tr",Pe,[Re,e("td",null,[e("div",Ye,n((w=(l=t.odds["europeOdds-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c])==null?void 0:l.instantHome)!=null?w:"-"),1)]),e("td",null,[e("div",je,n((F=(B=t.odds["europeOdds-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c])==null?void 0:B.instantDraw)!=null?F:"-"),1)]),e("td",null,[e("div",qe,n((E=(V=t.odds["europeOdds-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c])==null?void 0:V.instantAway)!=null?E:"-"),1)]),e("td",null,[e("div",Ge,n((P=(z=t.odds["europeOdds-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c])==null?void 0:z.initialHome)!=null?P:"-"),1)]),e("td",null,[e("div",Je,n((Y=(R=t.odds["europeOdds-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c])==null?void 0:R.initialDraw)!=null?Y:"-"),1)]),e("td",null,[e("div",Ke,n((q=(j=t.odds["europeOdds-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c])==null?void 0:j.initialAway)!=null?q:"-"),1)])])):f("",!0),t.odds["overUnder-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c]?(r(),h("tr",Xe,[Qe,e("td",null,[e("div",We,n((J=(G=t.odds["overUnder-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c])==null?void 0:G.instantOver)!=null?J:"-"),1)]),e("td",null,[e("div",Ze,n((X=(K=t.odds["overUnder-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c])==null?void 0:K.instantHandicap)!=null?X:"-"),1)]),e("td",null,[e("div",et,n((W=(Q=t.odds["overUnder-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c])==null?void 0:Q.instantUnder)!=null?W:"-"),1)]),e("td",null,[e("div",tt,n((ee=(Z=t.odds["overUnder-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c])==null?void 0:Z.initialHome)!=null?ee:"-"),1)]),e("td",null,[e("div",st,n((se=(te=t.odds["overUnder-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c])==null?void 0:te.initialDraw)!=null?se:"-"),1)]),e("td",null,[e("div",at,n((oe=(ae=t.odds["overUnder-"+t.bookmaker.companyIdMain+"-"+t.match.matchId+"-"+c])==null?void 0:ae.initialAway)!=null?oe:"-"),1)])])):f("",!0),e("tr",null,[e("td",ot,[b(d(D),{variant:"outline-info",size:"sm"},{default:k(()=>[S(" view more ")]),_:1})])])])])],64)}}},lt={class:"text-center mb-0 p-2 overflow-hidden"},dt=e("div",{class:"flex-fill fs-16 uppercase p-2"},"L\u1ECBch \u0111\u1EA5u h\xF4m nay",-1),it={class:"d-flex flex-row position-relative mb-2"},rt={class:"flex-fill me-2"},ct={class:"m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary p-2 me-1"},ht={class:"m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary p-2 me-1"},ut={class:"d-flex flex-row position-relative mb-2"},mt={class:"text-center uppercase h-[30px] bg-success text-white fs-12"},ft={style:{width:"5%"}},xt={class:"flex-fill me-2"},kt=e("i",{class:"ri ri-delete-bin-2-line"},null,-1),bt=e("th",{style:{width:"13%"}},"time",-1),vt=e("td",{style:{width:"2%"}},null,-1),pt=e("th",{style:{width:"18%"}},"home",-1),wt=e("th",{style:{width:"20%"}},"score",-1),yt=e("th",{style:{width:"18%"}},"away",-1),gt=e("th",{style:{width:"3%"}},[e("i",{class:"ri-flag-2-fill"})],-1),_t=e("th",{style:{width:"3%"}},"FT",-1),It=e("th",{style:{width:"5%"}},"Data",-1),$t={style:{width:"18%","text-align":"right"}},Mt={class:"min-w-[80px] uppercase"},Ct={class:"h-[calc(100vh-360px)] overflow-auto",id:"simple-bar"},Ot={class:"relative border border-groove"},Tt=e("tr",{class:"h-[0]"},[e("th",{style:{width:"5%"}}),e("th",{style:{width:"13%"}}),e("td",{style:{width:"2%"}}),e("th",{style:{width:"18%"}}),e("th",{style:{width:"20%"}}),e("th",{style:{width:"18%"}}),e("th",{style:{width:"3%"}}),e("th",{style:{width:"3%"}}),e("th",{style:{width:"3%"}}),e("td",{style:{width:"18%"}})],-1),Ht={key:0,class:"text-left bg-success-light"},Lt={key:0,colspan:"10",class:"h-[30px] px-2 fw-bold"},Nt={class:"text-center h-[30px]"},St={class:"d-flex flex-column w-50px fs-11"},Dt=["innerHTML"],Ut={key:1},At=["innerHTML"],Bt=e("td",null,[e("div",null,[e("i",{class:"ri ri-movie-line hover:text-red-500"})])],-1),Ft={class:"relative"},Vt=e("i",{class:"ri ri-rectangle-fill inline-block rotate-[100deg] text-yellow-500 fs-[20px]"},null,-1),Et={class:"absolute fs-10 left-[4px] -top-[1px] text-white"},zt={class:"relative"},Pt=e("i",{class:"ri ri-rectangle-fill inline-block rotate-[100deg] text-red-500 fs-[20px]"},null,-1),Rt={class:"absolute fs-10 left-[4px] -top-[1px] text-white"},Yt={class:"badge text-body fs-14"},jt={key:0,class:"badge rounded-pill border-dark text-body hover:bg-gray-200 cursor-pointer relative top-[-2px]"},qt={key:1},Gt={class:"badge text-body fs-14"},Jt={class:"relative"},Kt=e("i",{class:"ri ri-rectangle-fill inline-block rotate-[100deg] text-red-500 fs-[20px]"},null,-1),Xt={class:"absolute fs-10 left-[4px] -top-[1px] text-white"},Qt={class:"relative"},Wt=e("i",{class:"ri ri-rectangle-fill inline-block rotate-[100deg] text-yellow-500 fs-[20px]"},null,-1),Zt={class:"absolute fs-10 left-[4px] -top-[1px] text-white"},es={key:0,class:"fs-11 hover:text-red-500"},ts={key:0,class:"fs-11 hover:text-red-500"},ss=e("td",null,[e("div",{class:"fs-11 hover:text-red-500"},[e("i",{class:"ri-flag-2-fill"})])],-1),as={key:0,class:"relative"},os=["onMouseenter","onMouseleave"],ns=["onMouseleave"],ls={__name:"BlockLiveScore",setup(t){const s=A(),u=re({overlay:!1,keyword:"",likes:[],showOdd:0,interval:null});U(async()=>{s.getLiveScore(),s.getOdds(),s.getBookmaker(),T()});const M=function(i){return i>=(s.page_show-1)*50},p=ne(()=>{let i={};for(const o of s.odds)i[o.type+"-"+o.companyId+"-"+o.matchId+"-"+o.OddsType]=o;return i}),g=function(i){return Math.floor(x.value.length)===s.page_show*50?i<x.value.length:i<s.page_show*50},_=function(i,o){let l=((N.unix(i).valueOf()-N.unix(o.matchTime).valueOf())/(1e3*60)).toFixed(1);return l<=45&&l>0?parseInt(l)+" '":l>45&&l<60?"Haft Time":l>60&&l<105?parseInt(l)-15+" '":l>105&&l<120?'90 <span class="text-red-500 fs-10 mb-3"> + ('+(parseInt(l)-105)+")</span>":"Updating"},I=function(i){switch(i){case 0:return'<span class="text-black"> Not started </span>';case 1:return'<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> First half </span>';case 2:return'<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> Half time </span>';case 3:return'<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> Second half </span>';case 4:return'<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> Extra time </span>';case 5:return'<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> Penalty </span>';case-1:return'<span class="text-black"> Finished </span>';case-10:return'<span class="text-black"> Cancelled </span>';case-11:return'<span class="text-black"> TBD </span>';case-12:return'<span class="text-black"> Terminated </span>';case-13:return'<span class="text-black"> Interrupted </span>';case-14:return'<span class="text-black"> Postponed </span>'}},$=function(i){s.page_show=1,s.likes.includes(i)?s.likes.splice(s.likes.indexOf(i),1):s.likes.push(i)},m=function(i){switch(s.is_status=i,s.page_show=1,i){case"live":s.statuses=[1,2,3,4,5];break;case"not_start":s.statuses=[0];break;case"first_half":s.statuses=[1];break;case"half_time":s.statuses=[2];break;case"second_half":s.statuses=[3];break;case"extra_time":s.statuses=[4];break;case"penalty":s.statuses=[5];break;case"order":s.statuses=[-1,-10,-11,-12,-14];break;case"reset":s.statuses=[],s.is_status="";break}},O=function(i){let o=i.target;if(Math.ceil(o.scrollTop)===o.scrollHeight-o.offsetHeight){let a=Math.floor(x.value.length/50);s.page_show<a&&(s.page_show=s.page_show+1,o.scrollTop=1)}else Math.ceil(o.scrollTop)<1&&s.page_show>1&&(setTimeout(()=>{o.scrollTop=o.scrollHeight-o.offsetHeight-1},50),s.page_show>1&&(s.page_show=s.page_show-1))},T=function(){u.interval=setInterval(()=>{s.getLiveScoreChange(),s.getOddChange()},60*1e3)};ce(()=>{clearInterval(u.interval)});const x=ne(()=>{let i=s.live_scores.filter(l=>s.is_status?s.statuses.includes(l.status)&&(l.homeName&&l.homeName.toLowerCase().includes(s.keyword.toLowerCase())||l.awayName&&l.awayName.toLowerCase().includes(s.keyword.toLowerCase())):l.homeName&&l.homeName.toLowerCase().includes(s.keyword.toLowerCase())||l.awayName&&l.awayName.toLowerCase().includes(s.keyword.toLowerCase())),o=i.filter(l=>s.likes.includes(l.id)),a=i.filter(l=>!s.likes.includes(l.id));return o.concat(a)});return U(()=>{new he(document.getElementById("simple-bar")).getScrollElement().addEventListener("scroll",O)}),(i,o)=>(r(),H(d(xe),{show:u.overlay},{default:k(()=>[e("div",lt,[dt,e("div",it,[e("div",rt,[ue(e("input",{type:"text",class:"form-control","onUpdate:modelValue":o[0]||(o[0]=a=>d(s).keyword=a),onInput:o[1]||(o[1]=a=>d(s).page_show=1),placeholder:"L\u1ECDc theo t\xEAn \u0111\u1ED9i b\xF3ng",autocomplete:"off",id:"search-options",value:""},null,544),[[me,d(s).keyword]])]),e("span",ct,"T\xECm th\u1EA5y "+n(x.value.length)+" tr\u1EADn",1),e("span",ht,"Trang "+n(d(s).page_show),1)]),e("div",ut,[e("span",{class:"m-0 flex-shrink-1 fs-12 border rounded bg-gray-500 text-white px-1 cursor-pointer me-2",onClick:o[2]||(o[2]=a=>m("reset"))},"Reset"),e("span",{class:v(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":d(s).is_status==="live"}]),onClick:o[3]||(o[3]=a=>m("live"))},"live",2),e("span",{class:v(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":d(s).is_status==="not_start"}]),onClick:o[4]||(o[4]=a=>m("not_start"))},"not start",2),e("span",{class:v(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":d(s).is_status==="first_half"}]),onClick:o[5]||(o[5]=a=>m("first_half"))},"first half",2),e("span",{class:v(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":d(s).is_status==="half_time"}]),onClick:o[6]||(o[6]=a=>m("half_time"))},"half time",2),e("span",{class:v(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":d(s).is_status==="second_half"}]),onClick:o[7]||(o[7]=a=>m("second_half"))},"second half",2),e("span",{class:v(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":d(s).is_status==="extra_time"}]),onClick:o[8]||(o[8]=a=>m("extra_time"))},"extra time",2),e("span",{class:v(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":d(s).is_status==="penalty"}]),onClick:o[9]||(o[9]=a=>m("penalty"))},"penalty",2),e("span",{class:v(["m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2",{"bg-red-400 text-white":d(s).is_status==="order"}]),onClick:o[10]||(o[10]=a=>m("order"))},"order",2)]),e("table",null,[e("tr",mt,[e("th",ft,[e("div",xt,[b(d(D),{size:"sm",class:"btn-outline-warning hover:text-red-500 cursor-pointer",onClick:o[11]||(o[11]=a=>d(s).likes=[])},{default:k(()=>[kt]),_:1})])]),bt,vt,pt,wt,yt,gt,_t,It,e("td",$t,[b(d(de),{variant:"success",size:"sm",dropend:"",class:"bookmaker min-w-[100px]"},{"button-content":k(()=>{var a;return[e("span",Mt,n((a=d(s).bookmaker.companyName)!=null?a:i.choose),1)]}),default:k(()=>[(r(!0),h(C,null,le(d(s).bookmakers,a=>(r(),H(d(fe),{onClick:l=>d(s).bookmaker=a},{default:k(()=>[e("span",null,n(a.companyName),1)]),_:2},1032,["onClick"]))),256))]),_:1})])])]),e("div",Ct,[e("table",Ot,[Tt,(r(!0),h(C,null,le(x.value,(a,l)=>(r(),h(C,{key:l},[M(l)&&g(l)?(r(),h(C,{key:0},[!x.value[l-1]||a.leagueId!==x.value[l-1].leagueId?(r(),h("tr",Ht,[d(s).league_profiles[a.leagueId]?(r(),h("td",Lt,[e("span",null,n(d(s).league_profiles[a.leagueId].name),1)])):f("",!0)])):f("",!0),e("tr",Nt,[e("td",null,[b(d(D),{size:"sm",class:"btn-outline-light text-muted cursor-pointer",onClick:w=>$(a.id)},{default:k(()=>[e("i",{class:v(["ri ri-star-fill hover:text-yellow-500",{"text-yellow-500":d(s).likes.includes(a.id)}])},null,2)]),_:2},1032,["onClick"])]),e("td",null,[e("div",St,[[1,2,3].includes(a)?(r(),h("span",{key:0,innerHTML:_(a.updateTime,a)},null,8,Dt)):(r(),h("span",Ut,n(d(N).unix(a.updateTime).format("LT")),1)),e("span",{class:"lowercase",innerHTML:I(a.status)},null,8,At)])]),Bt,e("td",null,[b(d(ie),{to:"/match-detail/"+a.matchId,class:"cursor-pointer uppercase fw-bold fs-11 w-[100px] text-center inline-block hover:text-blue-600",title:a.homeName},{default:k(()=>[S(n(a.homeName),1)]),_:2},1032,["to","title"])]),e("td",null,[e("span",Ft,[Vt,e("span",Et,n(a.homeYellow),1)]),e("span",zt,[Pt,e("span",Rt,n(a.homeRed),1)]),e("span",null,[e("span",Yt,n(a.homeScore),1),[0].includes(a.status)?(r(),h("span",jt," 1 tip ")):(r(),h("span",qt," - ")),e("span",Gt,n(a.awayScore),1)]),e("span",Jt,[Kt,e("span",Xt,n(a.awayRed),1)]),e("span",Qt,[Wt,e("span",Zt,n(a.awayYellow),1)])]),e("td",null,[b(d(ie),{to:"/match-detail/"+a.matchId,class:"cursor-pointer uppercase fw-bold fs-11 w-[100px] text-center inline-block hover:text-blue-600",title:a.awayName},{default:k(()=>[S(n(a.awayName),1)]),_:2},1032,["to","title"])]),e("td",null,[a.status===1?(r(),h("div",es,n(a.homeCorner)+"-"+n(a.awayCorner),1)):f("",!0)]),e("td",null,[a.status===1?(r(),h("div",ts,n(a.homeHalfScore)+"-"+n(a.awayHalfScore),1)):f("",!0)]),ss,d(s).odds?(r(),h("td",as,[e("div",{onMouseenter:L(w=>{u.showOdd=[],u.showOdd[a.id]=!0},["prevent","stop"]),onMouseleave:L(w=>u.showOdd[a.id]=!1,["prevent","stop"])},[b(Me,{odds:p.value,match:a,bookmaker:d(s).bookmaker},null,8,["odds","match","bookmaker"]),e("div",{onMouseleave:L(w=>u.showOdd[a.id]=!1,["prevent","stop"])},[u.showOdd[a.id]?(r(),H(d(de),{key:0,offset:{mainAxis:-100,crossAxis:-50},class:"odd-match",modelValue:u.showOdd[a.id],"onUpdate:modelValue":w=>u.showOdd[a.id]=w,lass:"m-1"},{default:k(()=>[b(nt,{odds:p.value,match:a,bookmaker:d(s).bookmaker},null,8,["odds","match","bookmaker"])]),_:2},1032,["modelValue","onUpdate:modelValue"])):f("",!0)],40,ns)],40,os)])):f("",!0)])],64)):f("",!0)],64))),128))])])])]),_:1},8,["show"]))}},ds={class:"d-flex mt-1"},is={class:"w-[300px] pe-1"},rs={class:"flex-fill p-2 bg-white"},cs={class:""},bs={__name:"Home",setup(t){return U(()=>{}),(s,u)=>(r(),h("div",ds,[e("div",is,[b(ke)]),e("div",rs,[e("div",cs,[b(ls)])])]))}};export{bs as default};
