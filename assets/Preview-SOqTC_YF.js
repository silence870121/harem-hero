import{g as f}from"./girls-Image-C7HY1JYv.js";import{_ as I,h as x,i as S,j as b,k,f as y,o as i,c as n,d,w as h,g as p,b as o,a as e,l as V,v as B,m as D,q as F,p as R,e as $,t as C,F as c,r as g,n as N}from"./index-BMjY9V4_.js";const w=a=>(R("data-v-decf39b7"),a=a(),$(),a),M={class:"search"},P=w(()=>e("label",{for:"girlsId"},"Search girl's ID: ",-1)),T=w(()=>e("button",{type:"submit"},"Search",-1)),U={__name:"girls-Find",setup(a){const u=x(),l=S();let s=b(u.params.id);k((t,r)=>{t.params.id!==r.params.id&&(s.value=t.params.id)});function _(){l.push(`/preview/${s.value}`)}return(t,r)=>{const m=y("router-link");return i(),n("div",M,[d(m,{to:`/preview/${o(u).params.id-1}`},{default:h(()=>[p("previous")]),_:1},8,["to"]),e("form",{onSubmit:F(_,["prevent"])},[P,V(e("input",{type:"number",name:"girlsId",id:"","onUpdate:modelValue":r[0]||(r[0]=v=>D(s)?s.value=v:s=v)},null,512),[[B,o(s),void 0,{number:!0}]]),T],32),d(m,{to:`/preview/${o(u).params.id*1+1}`},{default:h(()=>[p("next")]),_:1},8,["to"])])}}},j=I(U,[["__scopeId","data-v-decf39b7"]]),q={class:"girl"},z={__name:"Preview",props:{id:String},setup(a){let l=b(a.id);return(s,_)=>(i(),n(c,null,[d(j),e("h2",null,[p("girl: "),e("span",null,"ID: "+C(o(l)),1)]),e("ul",q,[(i(),n(c,null,g(6,t=>e("li",null,[e("p",null,[(i(!0),n(c,null,g(t,r=>(i(),n("i",{class:N(["i-carbon:star-filled",{mythic:r>=6,legendary:r>3}])},null,2))),256))]),d(f,{id:o(l),level:t-1,isIcon:""},null,8,["id","level"]),d(f,{id:o(l),level:t-1},null,8,["id","level"])])),64))])],64))}},L=I(z,[["__scopeId","data-v-7012abdd"]]);export{L as default};
