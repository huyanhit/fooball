import{o as l,c as m,a,t as c,B as v,P as w,O as x,r as M,G as I,H,u as t,I as _,J as r,C as d,f as o,F as u,b as O,Q as T}from"./main.9bb494fa.js";import{h as L}from"./moment.ef7c3ddb.js";import{_ as b}from"./ImageFile.ffa23094.js";import{_ as U,F as i}from"./TimeLiveConvert.1b3b854e.js";import"./_commonjsHelpers.4e997714.js";const S={key:0,class:"fw-bold"},D=["innerHTML"],A=["innerHTML"],$={class:"p-2 inline-block text-red-500"},N=a("td",null,null,-1),F=a("td",null,null,-1),P={key:1,class:"fw-bold"},C=a("td",null,null,-1),B=a("td",null,null,-1),j={class:"p-2 inline-block text-red-500"},E=["innerHTML"],V=["innerHTML"],R={__name:"EventField",props:["event"],setup(p){const e={1:'<i class="ri-football-fill text-green-500"></i>',2:'<i class="ri ri-rectangle-fill inline-block rotate-[100deg] text-red-500 fs-[20px]"></i>',3:'<i class="ri ri-rectangle-fill inline-block rotate-[100deg] text-yellow-500 fs-[20px]"></i>',7:'<i class="ri-git-commit-line text-gray-500"></i>',8:'<i class="ri-football-fill text-red-500"></i> Ph\u1EA3n l\u01B0\u1EDBi nh\xE0',9:'<i class="ri ri-rectangle-fill inline-block rotate-[100deg] text-yellow-500 fs-[20px]"></i><i class="ri ri-rectangle-fill inline-block rotate-[100deg] text-yellow-500 fs-[20px]"></i>',11:'<i class="ri-group-line text-blue-500"></i>',13:'<i class="ri-close-circle-line text-gray-500"></i> H\u1ECFng ph\u1EA1t \u0111\u1EC1n',14:'<i class="ri-vidicon-line text-gray-500"></i>'},n=function(s){return s=s.replace("\u2191",'<i class="ri-arrow-up-line pl-1 pe-2 text-green-500"></i>'),s=s.replace("\u2193",'<i class="ri-arrow-down-line pl-1 pe-2 text-red-500"></i>'),s};return(s,y)=>p.event.homeEvent==="1"?(l(),m("tr",S,[a("td",null,[a("span",{class:"p-2 inline-block",innerHTML:n(p.event.playerName)},null,8,D)]),a("td",null,[a("span",{class:"p-2 inline-block",innerHTML:e[p.event.type]},null,8,A)]),a("td",null,[a("b",null,[a("span",$,c(p.event.minute)+" '",1)])]),N,F])):(l(),m("tr",P,[C,B,a("td",null,[a("b",null,[a("span",j,c(p.event.minute)+" '",1)])]),a("td",null,[a("span",{class:"p-2 inline-block",innerHTML:e[p.event.type]},null,8,E)]),a("td",null,[a("span",{class:"p-2 inline-block",innerHTML:n(p.event.playerName)},null,8,V)])]))}};const G={class:"d-flex flex-column bg-white"},Y={class:"text-center my-3"},J={class:"fw-bold text-red-500 me-1"},Q={class:"fs-18"},q={class:"fs-14 text-black"},z={key:0,class:"d-flex justify-content-around mb-3"},K={class:"d-flex align-items-center justify-content-end text-center w-[35%]"},W={class:"fs-18 fw-bold mx-3 hover:text-blue-600"},X={class:"inline-block mt-2"},Z=a("i",{class:"ri ri-star-fill fs-36 ml-[30px] hover:text-yellow-500"},null,-1),aa={class:"d-flex align-items-center justify-content-center text-center w-[25%]"},ta={class:"fs-48 mr-[20px] fw-bold"},ea={class:"d-flex flex-column align-items-center"},na={key:0,class:"fs-24"},da=["innerHTML"],ia={class:"text-truncate"},sa={title:"Score 1st Half"},ca={title:"Score 2nd Half"},la={class:"fs-48 ml-[20px] fw-bold"},oa={class:"d-flex align-items-center justify-content-start text-center w-[35%]"},pa=a("i",{class:"ri ri-star-fill fs-36 mr-[30px] hover:text-yellow-500"},null,-1),ma={class:"inline-block"},ra={class:"fs-18 fw-bold mx-3 hover:text-blue-600"},_a=a("ul",{class:"nav nav-tabs nav-tabs-custom nav-success bg-white mt-1 p-2 d-flex justify-content-center",role:"tablist"},[a("li",{class:"nav-item",role:"presentation"},[a("a",{class:"nav-link active nav-link py-1 fw-bold"},[a("i",{class:"ri-bubble-chart-line me-1"}),o(" TipsHot ")])]),a("li",{class:"nav-item",role:"presentation"},[a("a",{class:"nav-link py-1 fw-bold"},[a("i",{class:"ri-bubble-chart-line me-1"}),o(" Detail ")])]),a("li",{class:"nav-item",role:"presentation"},[a("a",{class:"nav-link py-1 fw-bold"},[a("i",{class:"ri-bubble-chart-line me-1"}),o(" Analysis ")])]),a("li",{class:"nav-item",role:"presentation"},[a("a",{class:"nav-link py-1 fw-bold"},[a("i",{class:"ri-bubble-chart-line me-1"}),o(" Odds ")])])],-1),ya={class:"bg-white border-top-dashed my-3 p-3"},ha={class:"text-center"},ua=a("div",{class:"fs-24 fw-bold"},[a("span",{class:"mb-3 inline-block"},"Live Odds Analysis")],-1),ba={class:"table table-bordered fs-13"},ka=a("tr",null,[a("th",null,[a("span",{class:"p-2 inline-block w-100 bg-gray-200 text-gray-600"},"Time")]),a("th",null,[a("span",{class:"p-2 inline-block w-100 bg-gray-200 text-gray-600"},"Score")]),a("th",{colspan:"6"},[a("span",{class:"p-2 inline-block w-100 bg-gray-200 text-gray-600"},[a("b",null,"Asian Handicap")])]),a("th",{colspan:"6"},[a("span",{class:"p-2 inline-block w-100 bg-gray-200 text-gray-600"},[a("b",null,"1x2")])]),a("th",{colspan:"6"},[a("span",{class:"p-2 inline-block w-100 bg-gray-200 text-gray-600"},[a("b",null,"Over/Under")])])],-1),ga=a("tr",null,[a("th",null,[a("span",{class:"p-2 inline-block h-100 w-100 bg-gray-200 text-gray-600"}," - ")]),a("th",null,[a("span",{class:"p-2 inline-block h-100 w-100 bg-gray-200 text-gray-600"}," - ")]),a("th",{colspan:"3"},[a("span",{class:"p-2 inline-block w-100 bg-gray-200 text-gray-600"},"First Odds")]),a("th",{colspan:"3"},[a("span",{class:"p-2 inline-block w-100 bg-gray-200 text-gray-600"},"Live Odds")]),a("th",{colspan:"3"},[a("span",{class:"p-2 inline-block w-100 bg-gray-200 text-gray-600"},"First Odds")]),a("th",{colspan:"3"},[a("span",{class:"p-2 inline-block w-100 bg-gray-200 text-gray-600"},"Live Odds")]),a("th",{colspan:"3"},[a("span",{class:"p-2 inline-block w-100 bg-gray-200 text-gray-600"},"First Odds")]),a("th",{colspan:"3"},[a("span",{class:"p-2 inline-block w-100 bg-gray-200 text-gray-600"},"Live Odds")])],-1),fa=a("td",null,[a("span",{class:"p-1 w-100 inline-block bg-green-500 text-white"},"Early")],-1),va=a("td",null,"\xA0",-1),wa=a("td",null,[a("span",{class:"p-1 w-100 inline-block bg-red-500 text-white"},"Live")],-1),xa=a("td",null,"\xA0",-1),Ma=a("td",null,[a("span",{class:"p-1 w-100 inline-block bg-blue-500 text-white"},"InPlay")],-1),Ia=a("td",null,"\xA0",-1),Ha=a("div",null,[a("span",{class:"px-2 bg-green-200 mx-2"}),o(" Historical Data "),a("span",{class:"px-2 bg-blue-200 mx-2"}),o(" Lastest Data ")],-1),Oa={class:"bg-white border-top-dashed my-3 p-3"},Ta={class:"text-center mt-3"},La={class:"d-flex justify-content-around fs-18 fw-bold my-2"},Ua={class:"text-green-500"},Sa={class:"text-red-500"},Da={class:"table table-striped table-bordered mt-3"},Aa={class:"ky_tit"},$a=a("th",null,null,-1),Na={class:"fs-24 text-gray-600 p-3 inline-block"},Fa=a("th",null,[a("span",{class:"text-gray-600 p-3 inline-block"}," Ph\xFAt ")],-1),Pa={class:"fs-24 text-gray-600 p-3 inline-block"},Ca=a("th",null,null,-1),Ba=T('<div class="bg-white border-top-dashed my-3 p-3"><div class="text-center"><div class="fs-24 fw-bold my-2">Team Statistics</div><table class="table table-bordered mt-3"><tbody><tr align="center"><th>Home</th><th>Recent 3 Matches</th><th>Away</th><th>Home</th><th>Recent 10 Matches</th><th>Away</th></tr><tr align="center"><td class="red">2.7</td><td><b>Goal</b></td><td class="">1.7</td><td class="red">3</td><td><b>Goal</b></td><td class="">2</td></tr><tr align="center"><td class="">0.3</td><td><b>Loss</b></td><td class="">0.3</td><td class="red">0.6</td><td><b>Loss</b></td><td class="">0.4</td></tr><tr align="center"><td class="">3</td><td><b>Shot(OT)</b></td><td class="red">7.7</td><td class="">6.3</td><td><b>Shot(OT)</b></td><td class="red">8.6</td></tr><tr align="center"><td class="red">8.3</td><td><b>Corner</b></td><td class="">5.7</td><td class="red">6.9</td><td><b>Corner</b></td><td class="">4.7</td></tr><tr align="center"><td class="">0</td><td><b>Yellow Card</b></td><td class="red">1.3</td><td class="">1</td><td><b>Yellow Card</b></td><td class="red">2.3</td></tr><tr align="center"><td class="">0</td><td><b>Fouls</b></td><td class="">0</td><td class="">14.8</td><td><b>Fouls</b></td><td class="red">18.2</td></tr><tr align="center"><td class="red">55.7%</td><td><b>Possession</b></td><td class="">52%</td><td class="red">58.6%</td><td><b>Possession</b></td><td class="">54.8%</td></tr></tbody></table></div></div>',1),Ja={__name:"MatchDetail",props:["match"],setup(p){const e=v();w();const n=x(),s=M({match:{},homeTeam:{},awayTeam:{},interval:null});I(async()=>{await e.getLiveScore({matchId:n.params.match_id}),await e.getOdds({matchId:n.params.match_id}),await e.getEvents({matchId:n.params.match_id}),await e.getBookmaker(),s.match=e.live_scores[n.params.match_id],s.homeTeam=await e.getTeam(s.match.homeId),s.awayTeam=await e.getTeam(s.match.awayId),y()}),H(()=>{clearInterval(s.intervalL),clearInterval(s.intervalO)});const y=function(){s.intervalL=setInterval(()=>{e.getLiveScore({matchId:n.params.match_id})},600*1e3),s.intervalO=setInterval(()=>{e.getOddChange({matchId:n.params.match_id}),e.getLiveScoreChange()},30*1e3)},k=function(h){switch(h){case 0:return'<span class="text-black"> Not started </span>';case 1:return'<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> First half </span>';case 2:return'<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> Half time </span>';case 3:return'<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> Second half </span>';case 4:return'<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> Extra time </span>';case 5:return'<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> Penalty </span>';case-1:return'<span class="text-black"> Finished </span>';case-10:return'<span class="text-black"> Cancelled </span>';case-11:return'<span class="text-black"> TBD </span>';case-12:return'<span class="text-black"> Terminated </span>';case-13:return'<span class="text-black"> Interrupted </span>';case-14:return'<span class="text-black"> Postponed </span>'}};return(h,ja)=>(l(),m(u,null,[a("div",G,[a("div",Y,[a("span",J,[a("span",Q,c(s.match.leagueName),1)]),a("span",q,c(t(L).unix(s.match.matchTime).format("LLLL")),1)]),s.match?(l(),m("div",z,[a("div",K,[a("div",W,c(s.match.homeName),1),a("div",X,[s.homeTeam.id?(l(),_(b,{key:0,save:"true",item:s.homeTeam,category:"team",properties:"logo",class:"w-[80px]"},null,8,["item"])):r("",!0)]),Z]),a("div",aa,[a("div",ta,c(s.match.homeScore),1),a("div",ea,[t(e).systems?(l(),m("div",na,[d(U,{match:s.match},null,8,["match"])])):r("",!0),a("div",{class:"uppercase fw-bold",innerHTML:k(s.match.status)},null,8,da),a("span",ia,[o(" ("),a("span",sa,c(s.match.homeHalfScore)+" - "+c(s.match.awayHalfScore),1),o(","),a("span",ca,c(s.match.homeScore-s.match.homeHalfScore)+" - "+c(s.match.awayScore-s.match.awayHalfScore),1),o(")")])]),a("div",la,c(s.match.awayScore),1)]),a("div",oa,[pa,a("div",ma,[s.awayTeam.id?(l(),_(b,{key:0,save:"true",item:s.awayTeam,category:"team",properties:"logo",class:"w-[80px]"},null,8,["item"])):r("",!0)]),a("div",ra,c(s.match.awayName),1)])])):r("",!0)]),_a,a("div",ya,[a("div",ha,[ua,a("table",ba,[a("tbody",null,[ka,ga,a("tr",null,[fa,va,a("td",null,[d(i,{type:"handicap",field:"initialHome",type_change:"1",odds_type:"1",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"handicap",field:"initialHandicap",type_change:"1",odds_type:"1",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"handicap",field:"initialAway",type_change:"1",odds_type:"1",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"handicap",field:"instantHome",type_change:"1",odds_type:"1",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"handicap",field:"instantHandicap",type_change:"1",odds_type:"1",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"handicap",field:"instantAway",type_change:"1",odds_type:"1",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"europeOdds",field:"initialHome",type_change:"1",odds_type:"1",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"europeOdds",field:"initialDraw",type_change:"1",odds_type:"1",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"europeOdds",field:"initialAway",type_change:"1",odds_type:"1",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"europeOdds",field:"instantHome",type_change:"1",odds_type:"1",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"europeOdds",field:"instantDraw",type_change:"1",odds_type:"1",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"europeOdds",field:"instantAway",type_change:"1",odds_type:"1",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"overUnder",field:"initialOver",type_change:"1",odds_type:"1",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"overUnder",field:"initialDraw",type_change:"1",odds_type:"1",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"overUnder",field:"initialUnder",type_change:"1",odds_type:"1",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"overUnder",field:"instantOver",type_change:"1",odds_type:"1",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"overUnder",field:"instantDraw",type_change:"1",odds_type:"1",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"overUnder",field:"instantUnder",type_change:"1",odds_type:"1",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])])]),a("tr",null,[wa,xa,a("td",null,[d(i,{type:"handicap",field:"initialHome",type_change:"1",odds_type:"2",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"handicap",field:"initialHandicap",type_change:"1",odds_type:"2",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"handicap",field:"initialAway",type_change:"1",odds_type:"2",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"handicap",field:"instantHome",type_change:"1",odds_type:"2",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"handicap",field:"instantHandicap",type_change:"1",odds_type:"2",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"handicap",field:"instantAway",type_change:"1",odds_type:"2",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"europeOdds",field:"initialHome",type_change:"1",odds_type:"2",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"europeOdds",field:"initialDraw",type_change:"1",odds_type:"2",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"europeOdds",field:"initialAway",type_change:"1",odds_type:"2",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"europeOdds",field:"instantHome",type_change:"1",odds_type:"2",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"europeOdds",field:"instantDraw",type_change:"1",odds_type:"2",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"europeOdds",field:"instantAway",type_change:"1",odds_type:"2",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"overUnder",field:"initialOver",type_change:"1",odds_type:"2",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"overUnder",field:"initialDraw",type_change:"1",odds_type:"2",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"overUnder",field:"initialUnder",type_change:"1",odds_type:"2",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"overUnder",field:"instantOver",type_change:"1",odds_type:"2",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"overUnder",field:"instantDraw",type_change:"1",odds_type:"2",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"overUnder",field:"instantUnder",type_change:"1",odds_type:"2",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])])]),a("tr",null,[Ma,Ia,a("td",null,[d(i,{type:"handicap",field:"initialHome",type_change:"2",odds_type:"3",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"handicap",field:"initialHandicap",type_change:"2",odds_type:"3",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"handicap",field:"initialAway",type_change:"2",odds_type:"3",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"handicap",field:"instantHome",type_change:"2",odds_type:"3",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"handicap",field:"instantHandicap",type_change:"2",odds_type:"3",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"handicap",field:"instantAway",type_change:"2",odds_type:"3",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"europeOdds",field:"initialHome",type_change:"2",odds_type:"3",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"europeOdds",field:"initialDraw",type_change:"2",odds_type:"3",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"europeOdds",field:"initialAway",type_change:"2",odds_type:"3",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"europeOdds",field:"instantHome",type_change:"2",odds_type:"3",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"europeOdds",field:"instantDraw",type_change:"2",odds_type:"3",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"europeOdds",field:"instantAway",type_change:"2",odds_type:"3",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"overUnder",field:"initialOver",type_change:"2",odds_type:"3",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"overUnder",field:"initialDraw",type_change:"2",odds_type:"3",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"overUnder",field:"initialUnder",type_change:"2",odds_type:"3",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"overUnder",field:"instantOver",type_change:"2",odds_type:"3",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"overUnder",field:"instantDraw",type_change:"2",odds_type:"3",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])]),a("td",null,[d(i,{type:"overUnder",field:"instantUnder",type_change:"2",odds_type:"3",company_id:t(e).bookmaker.companyIdMain,match_id:t(n).params.match_id},null,8,["company_id","match_id"])])])])]),Ha])]),a("div",Oa,[a("div",Ta,[a("div",La,[a("span",Ua,c(s.match.homeName),1),a("span",Sa,c(s.match.awayName),1)]),a("table",Da,[a("tbody",null,[a("tr",Aa,[$a,a("th",null,[a("span",Na,c(s.match.homeScore),1)]),Fa,a("th",null,[a("span",Pa,c(s.match.awayScore),1)]),Ca]),(l(!0),m(u,null,O(t(e).events[t(n).params.match_id],(g,f)=>(l(),_(R,{key:f,event:g},null,8,["event"]))),128))])])])]),Ba],64))}};export{Ja as default};
