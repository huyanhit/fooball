import{j as u,B as p,H as d,u as a,o as i,c,n}from"./main.1a7e7174.js";const l="/build/assets/team-default.bdeac855.png",y=["src","onerror"],_=["src"],k={__name:"ImageFile",props:["item","classProps","category","properties","save"],setup(s){const o=u(null),e=s,r=p(),m=function(t){return t.logo?t.logo.match(/(\w+)(\.\w+)+(?!.*(\w+)(\.\w+)+)/m)[0]:""},f=async function(){o.value.src=l};return d(async()=>{if(e.save&&!r.files[e.category+"_"+e.properties+"_"+e.item.id]){let t=await fetch("/api/get-image-url?id="+e.item.id+"&category="+e.category+"&prop="+e.properties,{method:"GET"});t.status===200&&(r.files[e.category+"_"+e.properties+"_"+e.item.id]=URL.createObjectURL(await t.blob()))}}),(t,g)=>s.save||a(r).files[e.category+"_"+e.properties+"_"+e.item.id]?(i(),c("img",{key:0,class:n(s.classProps),src:a(r).files[e.category+"_"+e.properties+"_"+e.item.id],onerror:"this.src='"+a(l)+"'",ref_key:"img",ref:o},null,10,y)):(i(),c("img",{key:1,src:"/storage/"+s.category+"/"+s.properties+"/"+m(s.item),onerror:f,ref_key:"img",ref:o,class:n(s.classProps)},null,10,_))}};export{k as _};