(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c(3),s=c(0),a=function(e){var t=e.className,c=void 0===t?"card charizard":t,n=Object(r.useRef)(),a=Object(r.useRef)(),o=Object(r.useRef)();return Object(r.useEffect)((function(){if(n.current&&a.current){var e=function(e){var t=[e.offsetX,e.offsetY];e.preventDefault(),"touchmove"===e.type&&(t=[e.touches[0].clientX,e.touches[0].clientY]);var c=t[0],r=t[1],s=n.current.clientHeight,i=n.current.clientWidth,d=Math.abs(Math.floor(100/i*c)-100),u=Math.abs(Math.floor(100/s*r)-100),j=50-d+(50-u),l=50+(d-50)/1.5,b=50+(u-50)/1.5,h=50+(d-50)/7,f=50+(u-50)/7,m=20+1.5*Math.abs(j),v=(b-50)/2*-1,O=(l-50)/1.5*.5,p="background-position: ".concat(l,"% ").concat(b,"%;"),x="background-position: ".concat(h,"% ").concat(f,"%;"),g="opacity: ".concat(m/100,";"),L="transform: rotateX(".concat(v,"deg) rotateY(").concat(O,"deg)"),M="\n  .card:hover:before { ".concat(p," }  /* gradient */\n  .card:hover:after { ").concat(x," ").concat(g," }   /* sparkles */ \n");if(n.current.classList.remove("animated"),n.current.setAttribute("style",L),a.current.innerHTML=M,"touchmove"===e.type)return!1;clearTimeout(o.current)},t=function(e){a.current.innerHTML="",n.current.setAttribute("style",""),o.current=setTimeout((function(){n.current.classList.add("animated")}),2500)};return n.current.addEventListener("mousemove",e),n.current.addEventListener("mouseout",t),function(){n.current.removeEventListener("mousemove",e),n.current.removeEventListener("mouseout",t)}}}),[n,a]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:c,ref:n}),Object(s.jsx)("style",{class:"hover",ref:a})]})};c(13);function o(){return Object(s.jsxs)("main",{id:"app",children:[Object(s.jsx)("h1",{children:"Pokemon Card, Holo Effect"}),Object(s.jsxs)("section",{class:"cards",children:[Object(s.jsx)(a,{}),Object(s.jsx)(a,{className:"card pika"}),Object(s.jsx)(a,{className:"card eevee"}),Object(s.jsx)(a,{className:"card mewtwo"})]}),Object(s.jsxs)("section",{class:"demo",children:[Object(s.jsx)("div",{class:"card"}),Object(s.jsx)("span",{class:"operator",children:"+"}),Object(s.jsx)("div",{class:"card",children:Object(s.jsx)("span",{children:"color-dodge"})}),Object(s.jsx)("span",{class:"operator",children:"+"}),Object(s.jsx)("div",{class:"card",children:Object(s.jsx)("span",{children:"color-dodge"})})]})]})}var i=document.getElementById("root");Object(n.createRoot)(i).render(Object(s.jsx)(r.StrictMode,{children:Object(s.jsx)(o,{})}))}},[[14,1,2]]]);
//# sourceMappingURL=main.c0c61102.chunk.js.map