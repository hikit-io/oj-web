import{w as O,o as ye,a as be,b as Ce,c as we,C as ee,g as ke,d as G,e as z,R as Se,I as $e,B as Ne,r as f,f as q,u as Re,t as k,h as W,i as ne,j as Pe,k as De,l as g,m as y,n as u,p as w,q as d,s as P,v as N,x as T,y as Z,z as b,A as $,D as Ie,E as Oe,F as Te,G as Be,H as Le,J as Ve,K as je,L as X,M as ze,N as We,O as x,P as Ee,Q as Ue,S as Fe,T as He,_ as Ae,U as Ke,V as Ye,W as Me}from"./index-a366444d.js";function le(){var e=Object.keys(ee.locks).length;e<=0?document.body.classList.remove("var--lock"):document.body.classList.add("var--lock")}function E(e){ee.locks[e]=1,le()}function U(e){delete ee.locks[e],le()}function Ge(e,a){var{uid:t}=ke();a&&O(a,o=>{o===!1?U(t):o===!0&&e()===!0&&E(t)}),O(e,o=>{a&&a()===!1||(o===!0?E(t):U(t))}),ye(()=>{a&&a()===!1||e()===!0&&E(t)}),be(()=>{a&&a()===!1||e()===!0&&U(t)}),Ce(()=>{a&&a()===!1||e()===!0&&E(t)}),we(()=>{a&&a()===!1||e()===!0&&U(t)})}function qe(e){return["fill","contain","cover","none","scale-down"].includes(e)}var Je={src:{type:String},fit:{type:String,validator:qe,default:"cover"},imageHeight:{type:[String,Number]},imageWidth:{type:[String,Number]},outline:{type:Boolean,default:!1},layout:{type:String,default:"column"},floating:{type:Boolean,default:!1},floatingDuration:{type:Number,default:250},alt:{type:String},title:{type:String},subtitle:{type:String},description:{type:String},elevation:{type:[Number,String]},ripple:{type:Boolean,default:!1},onClick:G(),"onUpdate:floating":G()};function te(e,a,t,o,r,n,i){try{var l=e[n](i),s=l.value}catch(v){t(v);return}l.done?a(s):Promise.resolve(s).then(o,r)}function re(e){return function(){var a=this,t=arguments;return new Promise(function(o,r){var n=e.apply(a,t);function i(s){te(n,o,r,i,l,"next",s)}function l(s){te(n,o,r,i,l,"throw",s)}i(void 0)})}}var{n:Qe,classes:Ze}=W("card"),Xe=500,_e=["src","alt"];function xe(e,a){var t=ne("var-icon"),o=ne("var-button"),r=Pe("ripple");return De((g(),y("div",{ref:"card",class:d(e.classes(e.n(),[e.isRow,e.n("--layout-row")],[e.outline,e.n("--outline")],[e.elevation,e.n("$-elevation--"+e.elevation),e.n("$-elevation--1")])),style:N({zIndex:e.floated?e.zIndex:void 0}),onClick:a[0]||(a[0]=function(){return e.handleClick&&e.handleClick(...arguments)})},[u("div",{ref:"cardFloater",class:d(e.n("floater")),style:N({width:e.floaterWidth,height:e.floaterHeight,top:e.floaterTop,left:e.floaterLeft,overflow:e.floaterOverflow,position:e.floaterPosition,transition:e.floated?"background-color "+e.floatingDuration+"ms, color "+e.floatingDuration+"ms, width "+e.floatingDuration+"ms, height "+e.floatingDuration+"ms, top "+e.floatingDuration+"ms, left "+e.floatingDuration+"ms":void 0})},[w(e.$slots,"image",{},()=>[e.src?(g(),y("img",{key:0,class:d(e.n("image")),style:N({objectFit:e.fit,height:e.toSizeUnit(e.imageHeight),width:e.toSizeUnit(e.imageWidth)}),src:e.src,alt:e.alt},null,14,_e)):P("v-if",!0)]),u("div",{class:d(e.n("container"))},[w(e.$slots,"title",{},()=>[e.title?(g(),y("div",{key:0,class:d(e.n("title"))},Z(e.title),3)):P("v-if",!0)]),w(e.$slots,"subtitle",{},()=>[e.subtitle?(g(),y("div",{key:0,class:d(e.n("subtitle"))},Z(e.subtitle),3)):P("v-if",!0)]),w(e.$slots,"description",{},()=>[e.description?(g(),y("div",{key:0,class:d(e.n("description"))},Z(e.description),3)):P("v-if",!0)]),e.$slots.extra?(g(),y("div",{key:0,class:d(e.n("footer"))},[w(e.$slots,"extra")],2)):P("v-if",!0),e.$slots["floating-content"]&&!e.isRow?(g(),y("div",{key:1,class:d(e.n("floating-content")),style:N({height:e.contentHeight,opacity:e.opacity,transition:"opacity "+e.floatingDuration*2+"ms"})},[w(e.$slots,"floating-content")],6)):P("v-if",!0)],2),e.showFloatingButtons?(g(),y("div",{key:0,class:d(e.classes(e.n("floating-buttons"),e.n("$--box"))),style:N({zIndex:e.zIndex,opacity:e.opacity,transition:"opacity "+e.floatingDuration*2+"ms"})},[w(e.$slots,"close-button",{},()=>[b(o,{"var-card-cover":"",round:"",class:d(e.classes(e.n("close-button"),e.n("$-elevation--6"))),onClick:Ie(e.close,["stop"])},{default:$(()=>[b(t,{"var-card-cover":"",name:"window-close",class:d(e.n("close-button-icon"))},null,8,["class"])]),_:1},8,["class","onClick"])])],6)):P("v-if",!0)],6),u("div",{class:d(e.n("holder")),style:N({width:e.holderWidth,height:e.holderHeight})},null,6)],6)),[[r,{disabled:!e.ripple||e.floater}]])}var oe=z({name:"VarCard",directives:{Ripple:Se},components:{VarIcon:$e,VarButton:Ne},props:Je,setup(e){var a=f(null),t=f(null),o=f("auto"),r=f("auto"),n=f("100%"),i=f("100%"),l=f("auto"),s=f("auto"),v=f(void 0),c=f("hidden"),m=f("0px"),C=f("0"),R=q(()=>e.layout==="row"),I=f(!1),B=f(!1),{zIndex:J}=Re(()=>e.floating,1);Ge(()=>e.floating,()=>!R.value);var L="auto",V="auto",D=null,h=f(null),S=function(){var j=re(function*(){clearTimeout(h.value),clearTimeout(D),h.value=null,h.value=setTimeout(re(function*(){var{width:ae,height:ge,left:me,top:he}=a.value.getBoundingClientRect();o.value=k(ae),r.value=k(ge),n.value=o.value,i.value=r.value,l.value=k(he),s.value=k(me),v.value="fixed",L=l.value,V=s.value,I.value=!0,yield Te(),l.value="0",s.value="0",n.value="100vw",i.value="100vh",m.value="auto",C.value="1",c.value="auto",B.value=!0}),e.ripple?Xe:0)});return function(){return j.apply(this,arguments)}}(),Q=()=>{clearTimeout(D),clearTimeout(h.value),h.value=null,n.value=o.value,i.value=r.value,l.value=L,s.value=V,m.value="0px",C.value="0",I.value=!1,D=setTimeout(()=>{o.value="auto",r.value="auto",n.value="100%",i.value="100%",l.value="auto",s.value="auto",L="auto",V="auto",c.value="hidden",v.value=void 0,B.value=!1},e.floatingDuration)},ce=()=>{T(e["onUpdate:floating"],!1)},pe=j=>{T(e.onClick,j)};return O(()=>e.floating,j=>{R.value||Oe(()=>{j?S():Q()})},{immediate:!0}),{n:Qe,classes:Ze,toSizeUnit:k,card:a,cardFloater:t,holderWidth:o,holderHeight:r,floater:h,floaterWidth:n,floaterHeight:i,floaterTop:l,floaterLeft:s,floaterPosition:v,floaterOverflow:c,contentHeight:m,opacity:C,zIndex:J,isRow:R,close:ce,showFloatingButtons:I,floated:B,handleClick:pe}}});oe.render=xe;const H=oe;H.install=function(e){e.component(H.name,H)};var ea=H;function aa(e){return["row","column"].includes(e)}var na={span:{type:[String,Number],default:24},offset:{type:[String,Number],default:0},direction:{type:String,default:"row",validator:aa},xs:{type:[Object,Number,String]},sm:{type:[Object,Number,String]},md:{type:[Object,Number,String]},lg:{type:[Object,Number,String]},xl:{type:[Object,Number,String]},onClick:G()},ie=Symbol("ROW_BIND_COL_KEY"),se=Symbol("ROW_COUNT_COL_KEY");function ta(){var{bindChildren:e,childProviders:a}=Le(ie),{length:t}=Be(se);return{length:t,cols:a,bindCols:e}}function ra(){var{parentProvider:e,bindParent:a}=Ve(ie),{index:t}=je(se);return(!e||!a||!t)&&console.warn("col must in row"),{index:t,row:e,bindRow:a}}var{n:F,classes:la}=W("col");function oa(e,a){return g(),y("div",{class:d(e.classes(e.n(),e.n("$--box"),[e.span>=0,e.n("--span-"+e.span)],[e.offset,e.n("--offset-"+e.offset)],...e.getSize("xs",e.xs),...e.getSize("sm",e.sm),...e.getSize("md",e.md),...e.getSize("lg",e.lg),...e.getSize("xl",e.xl))),style:N({flexDirection:e.direction,paddingLeft:e.toSizeUnit(e.padding.left),paddingRight:e.toSizeUnit(e.padding.right)}),onClick:a[0]||(a[0]=function(){return e.handleClick&&e.handleClick(...arguments)})},[w(e.$slots,"default")],6)}var ue=z({name:"VarCol",props:na,setup(e){var a=f({left:0,right:0}),t=q(()=>X(e.span)),o=q(()=>X(e.offset)),{row:r,bindRow:n}=ra(),i={setPadding(v){a.value=v}},l=(v,c)=>{var m=[];if(c==null)return m;if(ze(c)){var{offset:C,span:R}=c;Number(R)>=0&&m.push(F("--span-"+v+"-"+R)),C&&m.push(F("--offset-"+v+"-"+C))}else Number(c)>=0&&m.push(F("--span-"+v+"-"+c));return m},s=v=>{T(e.onClick,v)};return O([()=>e.span,()=>e.offset],()=>{r==null||r.computePadding()}),T(n,i),{n:F,classes:la,padding:a,toNumber:X,toSizeUnit:k,getSize:l,span:t,offset:o,handleClick:s}}});ue.render=oa;const A=ue;A.install=function(e){e.component(A.name,A)};var ia=A;function sa(e){return["flex-start","flex-end","center","space-between","space-around"].includes(e)}function ua(e){return["flex-start","center","flex-end"].includes(e)}var da={gutter:{type:[String,Number],default:0},justify:{type:String,default:"flex-start",validator:sa},align:{type:String,default:"flex-start",validator:ua},onClick:G()},{n:fa,classes:va}=W("row");function ca(e,a){return g(),y("div",{class:d(e.classes(e.n(),e.n("$--box"))),style:N({justifyContent:e.justify,alignItems:e.align,margin:e.average?"0 -"+e.average+"px":void 0}),onClick:a[0]||(a[0]=function(){return e.handleClick&&e.handleClick(...arguments)})},[w(e.$slots,"default")],6)}var de=z({name:"VarRow",props:da,setup(e){var{cols:a,bindCols:t,length:o}=ta(),r=q(()=>{var s=We(e.gutter);return s/2}),n=()=>{a.forEach(s=>{s.setPadding({left:r.value,right:r.value})})},i=s=>{T(e.onClick,s)},l={computePadding:n};return O(()=>o.value,n),O(()=>e.gutter,n),t(l),{n:fa,classes:va,average:r,handleClick:i}}});de.render=ca;const K=de;K.install=function(e){e.component(K.name,K)};var pa=K,fe=e=>["mini","small","normal","large"].includes(e),ga=e=>fe(e)||x(e)||Ee(e)||Ue(e),ma=e=>["start","end","center","space-around","space-between"].includes(e),ha={align:{type:String},size:{type:[String,Number,Array],default:"normal",validator:ga},wrap:{type:Boolean,default:!0},direction:{type:String,default:"row"},justify:{type:String,default:"start",validator:ma},inline:{type:Boolean,default:!1}};function p(e){return"calc("+e+" / 2)"}function ya(e,a,t){var{direction:o,justify:r,index:n,lastIndex:i}=t,l="0";return o==="row"&&(r==="start"||r==="center"||r==="end"?n!==i?l=p(e)+" "+a+" "+p(e)+" 0":l=p(e)+" 0":r==="space-around"?l=p(e)+" "+p(a):r==="space-between"&&(n===0?l=p(e)+" "+p(a)+" "+p(e)+" 0":n===i?l=p(e)+" 0 "+p(e)+" "+p(a):l=p(e)+" "+p(a))),o==="column"&&n!==i&&(l="0 0 "+e+" 0"),l}var{n:_,classes:ba}=W("space");const Y=z({name:"VarSpace",props:ha,setup(e,a){var{slots:t}=a,o=(n,i)=>i?["var(--space-size-"+n+"-y)","var(--space-size-"+n+"-x)"]:x(n)?n.map(k):[k(n),k(n)],r=n=>n==="start"||n==="end"?"flex-"+n:n;return()=>{var n,{inline:i,justify:l,align:s,wrap:v,direction:c,size:m}=e,C=(n=T(t.default))!=null?n:[],R=fe(m),[I,B]=o(m,R),J=D=>{var h=[];return D.forEach(S=>{if(S.type!==Fe){if(S.type===He&&x(S.children)){S.children.forEach(Q=>{h.push(Q)});return}h.push(S)}}),h};C=J(C);var L=C.length-1,V=C.map((D,h)=>{var S=ya(I,B,{direction:c,justify:l,index:h,lastIndex:L});return b("div",{style:{margin:S}},[D])});return b("div",{class:ba(_(),_("$--box"),[i,_("--inline")]),style:{flexDirection:c,justifyContent:r(l),alignItems:r(s),flexWrap:v?"wrap":"nowrap",margin:c==="row"?"calc(-1 * "+I+" / 2) 0":void 0}},[V])}}});Y.install=function(e){e.component(Y.name,Y)};var Ca=Y,wa={fullWidth:{type:[Number,String],default:"100%"}},{n:ka,classes:Sa}=W("table");function $a(e,a){return g(),y("div",{class:d(e.classes(e.n(),e.n("$-elevation--1"),e.n("$--box")))},[u("div",{class:d(e.n("main"))},[u("table",{class:d(e.n("table")),style:N({width:e.toSizeUnit(e.fullWidth)})},[w(e.$slots,"default")],6)],2),e.$slots.footer?(g(),y("div",{key:0,class:d(e.n("footer"))},[w(e.$slots,"footer")],2)):P("v-if",!0)],2)}var ve=z({name:"VarTable",props:wa,setup(){return{toSizeUnit:k,n:ka,classes:Sa}}});ve.render=$a;const M=ve;M.install=function(e){e.component(M.name,M)};var Na=M;const Ra={},Pa={style:{padding:"0.8em"}},Da=u("thead",null,[u("tr",null,[u("th",null,"No."),u("th",null,"Nickname"),u("th",null,"Total"),u("th",null,"Win")])],-1),Ia=u("tbody",null,[u("tr",null,[u("td",null,"耗子君"),u("td",null,"124"),u("td",null,"38")]),u("tr",null,[u("td",null,"火猫桑"),u("td",null,"111"),u("td",null,"11")])],-1);function Oa(e,a){const t=ea,o=ia,r=Na,n=Me,i=Ca,l=pa;return g(),Ke(i,{style:{"padding-top":"0.5em","padding-left":"0.5em","padding-right":"0.5em"},direction:"column"},{default:$(()=>[b(l,{gutter:8},{default:$(()=>[b(o,{xs:24,sm:8,md:8,lg:8,xl:8},{default:$(()=>[b(t,{outline:!0,title:"Everyday"})]),_:1}),b(o,{xs:24,sm:16,md:16,lg:16,xl:16},{default:$(()=>[b(t,{outline:!0,title:"Ranking"},{description:$(()=>[u("div",Pa,[b(i,null,{default:$(()=>[b(r,null,{default:$(()=>[Da,Ia]),_:1}),b(n,{type:"primary",size:"large"},{default:$(()=>[Ye(" Rank ")]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})}const Ba=Ae(Ra,[["render",Oa]]);export{Ba as default};