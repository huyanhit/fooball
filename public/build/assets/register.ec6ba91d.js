import{r as x,q as b,o,c as d,a as r,t as i,n,u as l,w as m,v as c,F as u,b as g,e as k,f as h,g as w,h as _}from"./main.34ad2b4b.js";import{r as p,e as v,s as $,u as S}from"./index.bdacce64.js";const V={class:"bg-gray-50 dark:bg-gray-900"},q={class:"flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0"},A={class:"w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"},N={class:"p-6 space-y-4 md:space-y-6 sm:p-8"},P=r("h1",{class:"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"}," Sign in to your account ",-1),U={class:"space-y-4 md:space-y-6",action:"#"},B={class:"text-red-500"},C=r("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Your name ",-1),M={class:"error-msg text-red-500 text-xs"},O=r("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Your email",-1),T={class:"error-msg text-red-500 text-xs"},Y=r("label",{for:"password",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Password",-1),D={class:"error-msg text-red-500 text-xs"},F=r("label",{for:"password",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Confirm Password",-1),J={class:"error-msg text-red-500 text-xs"},z={class:"text-center"},E=r("p",{class:"text-center text-sm font-light text-gray-500 dark:text-gray-400"},[h(" You have an account "),r("a",{href:"/form",class:"font-medium text-primary-600 hover:underline dark:text-primary-500"},"Sign in")],-1),j={__name:"register",setup(I){const s=x({error:"",showPass:!1,showAlert:!1,apiMessage:"",form:{name:"",email:"",password:"",password_confirmation:""},rules:{name:{required:p},email:{required:p,email:v},password:{required:p},password_confirmation:{required:p,v:$(b(()=>s.form.password))}}}),t=S(s.rules,s.form),f=async function(y){await t.value.$validate()&&w.callApi("register","POST",JSON.stringify(s.form)).then(a=>{a.status===1?(s.error="",localStorage.setItem("auth",JSON.stringify(a.data)),_.push({path:"task"})):s.error=a.message})};return(y,a)=>(o(),d("section",V,[r("div",q,[r("div",A,[r("div",N,[P,r("form",U,[r("div",B,i(s.error),1),r("div",{class:n({error:l(t).name.$errors.length})},[C,m(r("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>s.form.name=e),class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name",required:""},null,512),[[c,s.form.name]]),(o(!0),d(u,null,g(l(t).name.$errors,e=>(o(),d("div",{class:"input-errors",key:e.$uid},[r("div",M,i(e.$message),1)]))),128))],2),r("div",{class:n({error:l(t).email.$errors.length})},[O,m(r("input",{type:"email","onUpdate:modelValue":a[1]||(a[1]=e=>s.form.email=e),name:"email",id:"email",class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name@company.com",required:""},null,512),[[c,s.form.email]]),(o(!0),d(u,null,g(l(t).email.$errors,e=>(o(),d("div",{class:"input-errors",key:e.$uid},[r("div",T,i(e.$message),1)]))),128))],2),r("div",{class:n({error:l(t).password.$errors.length})},[Y,m(r("input",{type:"password",name:"password","onUpdate:modelValue":a[2]||(a[2]=e=>s.form.password=e),id:"password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},null,512),[[c,s.form.password]]),(o(!0),d(u,null,g(l(t).password.$errors,e=>(o(),d("div",{class:"input-errors",key:e.$uid},[r("div",D,i(e.$message),1)]))),128))],2),r("div",{class:n({error:l(t).password_confirmation.$errors.length})},[F,m(r("input",{type:"password",name:"password","onUpdate:modelValue":a[3]||(a[3]=e=>s.form.password_confirmation=e),id:"password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},null,512),[[c,s.form.password_confirmation]]),(o(!0),d(u,null,g(l(t).password_confirmation.$errors,e=>(o(),d("div",{class:"input-errors",key:e.$uid},[r("div",J,i(e.$message),1)]))),128))],2),r("div",z,[r("button",{onClick:k(f,["prevent"]),class:"text-white bg-blue-950 font-medium rounded-lg text-sm px-5 py-2.5 text-center"},"Register")]),E])])])])]))}};export{j as default};
