(function(){"use strict";var e={581:function(e,t,n){var o=n(9242),r=n(3396);function u(e,t){const n=(0,r.up)("router-link"),o=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",null,[(0,r.Wm)(n,{to:"/home"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1}),(0,r.Uk)(" | "),(0,r.Wm)(n,{to:"/login"},{default:(0,r.w5)((()=>[(0,r.Uk)("Login")])),_:1}),(0,r.Uk)(" | "),(0,r.Wm)(n,{to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("About")])),_:1})]),(0,r.Wm)(o)],64)}var a=n(89);const i={},c=(0,a.Z)(i,[["render",u]]);var l=c,s=n(2483);const f={class:"home"};function d(e,t,n,o,u,a){const i=(0,r.up)("HomeButton");return(0,r.wg)(),(0,r.iD)("div",f,[(0,r.Wm)(i,{msg:"INT222 INFORMATION TECHNOLOGY INTEGRATED PROJECT II"}),(0,r._)("button",{onClick:t[0]||(t[0]=(...e)=>a.fetchEvents&&a.fetchEvents(...e))},"Fetch Events")])}var p=n(7139);const m=e=>((0,r.dD)("data-v-83e8edee"),e=e(),(0,r.Cn)(),e),h={class:"hello"},v=m((()=>(0,r._)("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}," ดูตาราง ",-1))),g=m((()=>(0,r._)("button",null,"สร้างตาราง",-1)));function b(e,t,n,o,u,a){return(0,r.wg)(),(0,r.iD)("div",h,[(0,r._)("h1",null,(0,p.zw)(n.msg),1),v,g])}var w={name:"HomeButton",props:{msg:String}};const y=(0,a.Z)(w,[["render",b],["__scopeId","data-v-83e8edee"]]);var _=y,k=n(4161),O={name:"HomeView",components:{HomeButton:_},methods:{async fetchEvents(){try{const e=localStorage.getItem("token"),t=await k.Z.get("/events",{headers:{Authorization:`Bearer ${e}`}});console.log(t.data)}catch(e){401===e.response.status?console.log("Unauthorized"):console.log("Error:",e.message)}}}};const E=(0,a.Z)(O,[["render",d],["__scopeId","data-v-068fc362"]]);var T=E;const j=(0,r._)("h1",null,"Login",-1),C=(0,r._)("button",{class:"login-button",type:"submit"},"Login",-1);function I(e,t,n,u,a,i){return(0,r.wg)(),(0,r.iD)("div",null,[j,(0,r._)("form",{onSubmit:t[2]||(t[2]=(0,o.iM)(((...e)=>i.login&&i.login(...e)),["prevent"]))},[(0,r.wy)((0,r._)("input",{class:"form",type:"email","onUpdate:modelValue":t[0]||(t[0]=e=>a.email=e),placeholder:"Email",required:""},null,512),[[o.nr,a.email]]),(0,r.wy)((0,r._)("input",{class:"form",type:"password","onUpdate:modelValue":t[1]||(t[1]=e=>a.password=e),placeholder:"Password",required:""},null,512),[[o.nr,a.password]]),C],32)])}n(7658);var x={data(){return{email:"example@example.com",password:"1234"}},methods:{async login(){try{const e=await k.Z.post("http://localhost:8080/login",{email:this.email,password:this.password});localStorage.setItem("token",e.data.token),this.$router.push("/home")}catch(e){console.log(e),this.$router.push("/about")}}}};const P=(0,a.Z)(x,[["render",I]]);var S=P;const A=[{path:"/login",name:"login",component:S},{path:"/home",name:"home",component:T},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,4815))}],N=(0,s.p7)({history:(0,s.PO)("/"),routes:A});var U=N;(0,o.ri)(l).use(U).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var u=t[o]={exports:{}};return e[o].call(u.exports,u,u.exports,n),u.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,u){if(!o){var a=1/0;for(s=0;s<e.length;s++){o=e[s][0],r=e[s][1],u=e[s][2];for(var i=!0,c=0;c<o.length;c++)(!1&u||a>=u)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(i=!1,u<a&&(a=u));if(i){e.splice(s--,1);var l=r();void 0!==l&&(t=l)}}return t}u=u||0;for(var s=e.length;s>0&&e[s-1][2]>u;s--)e[s]=e[s-1];e[s]=[o,r,u]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.4b2c6801.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="front-end:";n.l=function(o,r,u,a){if(e[o])e[o].push(r);else{var i,c;if(void 0!==u)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==t+u){i=f;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+u),i.src=o),e[o]=[r];var d=function(t,n){i.onerror=i.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var u=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=u);var a=n.p+n.u(t),i=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var u=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+u+": "+a+")",i.name="ChunkLoadError",i.type=u,i.request=a,r[1](i)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,u,a=o[0],i=o[1],c=o[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(c)var s=c(n)}for(t&&t(o);l<a.length;l++)u=a[l],n.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return n.O(s)},o=self["webpackChunkfront_end"]=self["webpackChunkfront_end"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(581)}));o=n.O(o)})();
//# sourceMappingURL=app.d2e79db1.js.map