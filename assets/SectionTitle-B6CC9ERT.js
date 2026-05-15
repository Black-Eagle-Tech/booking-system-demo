import{o as c,a as i,v as m,n as x,x as b,l as r,b as l,t as n}from"./index-BrbHKMs7.js";const S={__name:"BaseCard",setup(a){const s=r(50),o=r(50),d=e=>{const t=e.currentTarget.getBoundingClientRect();s.value=(e.clientX-t.left)/t.width*100,o.value=(e.clientY-t.top)/t.height*100},u=()=>{s.value=50,o.value=50},g=b(()=>({background:`
    radial-gradient(
      circle at ${s.value}% ${o.value}%,
      rgba(59,130,246,0.14),
      transparent 45%
    ),
    var(--card-bg)
  `}));return(e,t)=>(c(),i("div",{class:"spotlight glass-card glow-border",onMousemove:d,onMouseleave:u,style:x(g.value)},[m(e.$slots,"default")],36))}},_={class:"mx-auto mb-16 max-w-3xl text-center"},p={class:"mb-5 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300"},h={class:"mb-6 text-4xl font-black tracking-tight text-white md:text-6xl"},v={class:"text-base leading-relaxed text-slate-400 md:text-xl"},k={__name:"SectionTitle",props:{badge:String,title:String,description:String},setup(a){return(s,o)=>(c(),i("div",_,[l("div",p,n(a.badge),1),l("h2",h,n(a.title),1),l("p",v,n(a.description),1)]))}};export{k as _,S as a};
