(this["webpackJsonpimage-generator"]=this["webpackJsonpimage-generator"]||[]).push([[0],{133:function(e,a,t){e.exports=t.p+"static/media/portrait.9bd3abe0.svg"},134:function(e,a,t){e.exports=t.p+"static/media/landscape.167f273a.svg"},162:function(e,a,t){e.exports=t(261)},167:function(e,a,t){},199:function(e,a,t){},200:function(e,a,t){},255:function(e,a,t){},259:function(e,a,t){},261:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(7),r=t.n(c),i=(t(167),t(153)),o=t(29),s=t(11),m=t(55),u=t.n(m),d=t(13),p=t(304),f=t(305),v=t(311),b=t(101),g=t.n(b),E=t(103),h=t.n(E),y=t(132),x=t.n(y).a.create({baseURL:"https://pixabay.com/api"}),O=t(295),j=t(133),N=t.n(j),k=t(134),S=t.n(k),w=t(292),C=Object(w.a)({root:{maxWidth:345},title:{display:"inline-block",marginBottom:30,fontSize:20},flex:{display:"flex",justifyContent:"center"},img:{height:40,objectFit:"contain",marginBottom:10},card:{display:"flex",flexDirection:"column",alignItems:"center",margin:"0 10px",padding:20,cursor:"pointer",backgroundColor:"#f5f5f5",border:"1px solid #dedede",borderRadius:2,minWidth:180}}),I=function(e){var a=e.onSelect,t=C();return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:t.title},"Qual tipo de imagem quer criar?"),l.a.createElement("div",{className:t.flex},l.a.createElement(O.a,{className:t.card,onClick:function(){return a("horizontal")}},l.a.createElement("img",{className:t.img,src:N.a,alt:"Imagem para Feed"}),"Imagem Horizontal"),l.a.createElement(O.a,{className:t.card,onClick:function(){return a("vertical")}},l.a.createElement("img",{className:t.img,src:S.a,alt:"Imagem para Stories"}),"Imagem Vertical")))},z=[{value:"fashion",label:"Moda",active:!1},{value:"nature",label:"Natureza",active:!1},{value:"backgrounds",label:"Fundos",active:!1},{value:"science",label:"Ci\xeancia",active:!1},{value:"education",label:"Educa\xe7\xe3o",active:!1},{value:"people",label:"Pessoas",active:!1},{value:"feelings",label:"Sentimentos",active:!1},{value:"religion",label:"Religi\xe3o",active:!1},{value:"health",label:"Sa\xfade",active:!1},{value:"places",label:"Locais",active:!1},{value:"animals",label:"Animais",active:!1},{value:"industry",label:"Ind\xfastria",active:!1},{value:"food",label:"Comida",active:!1},{value:"computer",label:"Computador",active:!1},{value:"sports",label:"Esportes",active:!1},{value:"transportation",label:"Transporte",active:!1},{value:"travel",label:"Viagem",active:!1},{value:"buildings",label:"Edif\xedcios",active:!1},{value:"business",label:"Neg\xf3cios",active:!1},{value:"music",label:"M\xfasica",active:!1}],W="8387701-5e4e7d3a7ec1162dbcc87ac47",F=(t(199),t(309)),D=t(297),T=t(308),B=t(301),_=t(302),R=t(300),L=t(312),q=t(303),A=Object(w.a)({title:{padding:"16px 24px 5px 24px","& h2":{display:"flex",justifyContent:"space-between",width:"100%"}},subtitle:{margin:0},select:{width:"100%"},wrapper:{marginTop:15,display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"},chip:{margin:3},dialog:{minWidth:600},footer:{display:"flex",justifyContent:"flex-end",alignItems:"center",padding:"10px 25px 20px 0"}}),P=function(e){var a=e.onSubmit,t=A(),c=Object(n.useState)(!0),r=Object(d.a)(c,2),i=r[0],o=r[1],m=Object(n.useState)([]),p=Object(d.a)(m,2),f=p[0],v=p[1],b=Object(n.useState)(z),g=Object(d.a)(b,2),E=g[0],h=g[1];return l.a.createElement(F.a,{open:i,onClose:function(){o(!1)},"aria-labelledby":"max-width-dialog-title",classes:{paper:t.dialog}},l.a.createElement(D.a,{id:"max-width-dialog-title",classes:{root:t.title}},l.a.createElement("span",null,"Imagem de fundo"),l.a.createElement(T.a,{id:"outlined-search",label:"Filtrar categorias",type:"search",variant:"outlined",size:"small"})),l.a.createElement(B.a,null,l.a.createElement(_.a,{classes:{root:t.subtitle}},"Selecione uma ou mais categorias."),l.a.createElement(R.a,{className:t.select},l.a.createElement("div",{className:t.wrapper},E.map((function(e,a){return l.a.createElement("div",{key:e.value,className:t.chip},l.a.createElement(L.a,{onClick:function(){return function(e,a){v([].concat(Object(s.a)(f),[e]));var t=E;t[a].active=!t[a].active,h(t)}(e,a)},label:e.label,variant:"outlined",clickable:!0,color:e.active?"primary":"default"}))}))),l.a.createElement("div",{className:t.footer},l.a.createElement(q.a,{onClick:function(e){return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.next=3,u.a.awrap(a({selectedOption:f}));case 3:o(!1);case 4:case"end":return t.stop()}}))},variant:"contained",color:"primary",disableElevation:!0},"Buscar Imagens")))))},U=(t(200),function(e){var a=e.backgrounds,t=e.onClick;function n(e,a){t(),localStorage.setItem("background",a)}return l.a.createElement("div",{className:"modalWrapper"},l.a.createElement("div",{className:"modal"},a.map((function(e){return l.a.createElement("div",{key:e.id,className:"card",onClick:function(a){return n(0,e.largeImageURL)}},l.a.createElement("img",{src:e.largeImageURL,alt:""}))}))))}),H=function(e){var a=[];return e.map((function(e){return a.push(e.value),a})),a.join("+")},M=t(138),V=t.n(M),X=function(){V.a.toJpeg(document.getElementById("download"),{quality:.95}).then((function(e){var a=document.createElement("a");a.download="my-image-name.jpeg",a.href=e,a.click()}))},G={overlay:{position:"absolute",top:0,right:0,bottom:0,left:0,width:"100%",height:"100%",zIndex:1e3,transition:"opacity 0.2s"}},J=Object(w.a)(G),K=function(e){var a=e.color,t=e.opacity,n=J();return l.a.createElement("div",{className:n.overlay,style:{backgroundColor:a,opacity:t}})},Q=t(310),$=t(317),Y=t(52),Z=t.n(Y),ee=Object(w.a)({wrapper:{display:"flex",justifyContent:"space-between",alignItems:"center"},content:{display:"flex",alignItems:"center",marginRight:25},switch:{marginLeft:-12,marginRight:5}}),ae=function(e){var a=e.panel,t=e.setPanel,n=e.filterColor,c=e.setFilterColor,r=e.filterOpacity,i=e.setFilterOpacity,s=ee();return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:s.wrapper},l.a.createElement("div",{className:s.content},l.a.createElement(Q.a,{classes:{root:s.switch},checked:a.filter,onChange:function(e){t(Object(o.a)({},a,{filter:e.target.checked}))},value:"filter",color:"primary",inputProps:{"aria-label":"primary checkbox"}}),l.a.createElement("div",null,l.a.createElement(Z.a,{color:n,alpha:100,onChange:function(e){c(e.color)},placement:"bottomLeft"}))),l.a.createElement($.a,{disabled:!a.filter,value:r,min:0,step:.1,max:1,onChange:function(e,a){i(a)},valueLabelDisplay:"auto","aria-labelledby":"discrete-slider"})))},te=Object(w.a)({input:{marginBottom:4,"& div":{height:26,borderRadius:2},"& input":{fontSize:14,fontWeight:400,paddingTop:0,paddingBottom:0}}}),ne=function(e){var a=e.onChange,t=e.value,n=te();return l.a.createElement(T.a,{id:"outlined-size-normal",variant:"outlined",size:"small",value:t,onChange:a,classes:{root:n.input,focused:n.focus}})},le=t(306),ce=t(314),re=t(315),ie=t(83),oe=t.n(ie),se=t(144),me=t.n(se),ue=t(145),de=t.n(ue),pe=t(146),fe=t.n(pe),ve=(t(255),Object(w.a)({wrapper:{display:"flex",flexDirection:"column",marginBottom:15},setup:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},slider:{width:"100%",marginLeft:10},icon:{fontSize:15},paper:{maxHeight:"calc(50% - 96px)"},closeButton:{marginRight:-15}})),be=function(e){var a=e.index,t=e.text,n=e.color,c=e.texts,r=e.setTexts,i=ve(),o=l.a.useState((function(){return["bold"]})),m=Object(d.a)(o,2),u=(m[0],m[1],function(e,t){var n=c;"bold"===t?n[a].fontWeight="normal"===n[a].fontWeight?"bold":"normal":"italic"===t?n[a].fontStyle="normal"===n[a].fontStyle?"italic":"normal":"underline"===t&&(n[a].textDecoration="none"===n[a].textDecoration?"underline":"none"),r(Object(s.a)(n))});return l.a.createElement("div",{className:i.wrapper},l.a.createElement("div",{className:"inputWrapper"},l.a.createElement(ne,{index:a,value:t,onChange:function(e){return function(e){var t=c;t[a].title=e.target.value,r(Object(s.a)(t))}(e)}}),l.a.createElement(p.a,{className:i.closeButton,"aria-label":"remove",onClick:function(){var e=c;e.splice(a,1),r(Object(s.a)(e))}},l.a.createElement(oe.a,{className:i.icon}))),l.a.createElement("div",{className:i.setup},l.a.createElement(Z.a,{color:n,alpha:100,onChange:function(e){var t=c;t[a].color=e.color,r(Object(s.a)(t))},placement:"bottomLeft"}),l.a.createElement(le.a,{id:"font-size",value:c[a].fontSize,onChange:function(e){var t=c;t[a].fontSize=e.target.value,r(Object(s.a)(t))},input:l.a.createElement(ce.a,null),className:"selectFont",MenuProps:{classes:{paper:i.paper}}},l.a.createElement(re.a,{value:14},"14"),l.a.createElement(re.a,{value:16},"16"),l.a.createElement(re.a,{value:18},"18"),l.a.createElement(re.a,{value:20},"20"),l.a.createElement(re.a,{value:22},"22"),l.a.createElement(re.a,{value:24},"24"),l.a.createElement(re.a,{value:26},"26"),l.a.createElement(re.a,{value:28},"28"),l.a.createElement(re.a,{value:30},"30"),l.a.createElement(re.a,{value:32},"32"),l.a.createElement(re.a,{value:34},"34"),l.a.createElement(re.a,{value:36},"36"),l.a.createElement(re.a,{value:38},"38"),l.a.createElement(re.a,{value:40},"40"),l.a.createElement(re.a,{value:42},"42"),l.a.createElement(re.a,{value:44},"44")),l.a.createElement("div",{className:"formatWrapper"},l.a.createElement(p.a,{color:"bold"===c[a].fontWeight?"primary":"default","aria-label":"bold",onClick:function(e){return u(0,"bold")}},l.a.createElement(me.a,{className:i.icon})),l.a.createElement(p.a,{color:"italic"===c[a].fontStyle?"primary":"default","aria-label":"italic",onClick:function(e){return u(0,"italic")}},l.a.createElement(de.a,{className:i.icon})),l.a.createElement(p.a,{color:"underline"===c[a].textDecoration?"primary":"default","aria-label":"underline",onClick:function(e){return u(0,"underline")}},l.a.createElement(fe.a,{className:i.icon})))))},ge={wrapper:{position:"absolute",whiteSpace:"nowrap",zIndex:1300,"& > span":{"& > div":{cursor:"pointer !important"}}}},Ee=Object(w.a)(ge),he=function(e){var a=e.children,t=Ee();return l.a.createElement("div",{className:t.wrapper},a)},ye=t(84),xe=function(e){var a=e.texts,t=e.setTexts;return Object(n.useEffect)((function(){var e=document.getElementsByClassName("text-span-remove");e.length>0&&1===e[e.length-1].getElementsByTagName("span").length&&e[e.length-1].getElementsByTagName("span")[0].remove()}),[a]),l.a.createElement(l.a.Fragment,null,a.map((function(e,n){return l.a.createElement(ye.a,{className:"text-span-remove",style:{color:e.color,fontSize:e.fontSize,fontWeight:e.fontWeight,fontStyle:e.fontStyle,textDecoration:e.textDecoration},key:e.id,position:{x:e.x,y:e.y},onDragStop:function(e,l){var c=a;c[n].x=l.x,c[n].y=l.y,t(Object(s.a)(c))}},e.title)})))},Oe=t(151),je=t.n(Oe),Ne=t(152),ke=t.n(Ne),Se=t(149),we=t.n(Se),Ce=t(150),Ie=t.n(Ce),ze=t(313),We=Object(w.a)({wrapper:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:15},shapeWrapper:{display:"flex",justifyContent:"space-around",alignItems:"center"},opacityWrapper:{minWidth:80},icon:{fontSize:15},iconPopover:{fontSize:20},closeButton:{marginRight:-15}}),Fe=function(e){var a=e.index,t=e.shapes,c=e.setShapes,r=Object(n.useState)(null),i=Object(d.a)(r,2),o=i[0],m=i[1],u=We(),f=function(e,n){var l=t;if("square"===n){if(l[a].square)return null;l[a].circle=!1,l[a].square=!0}else if("circle"===n){if(l[a].circle)return null;l[a].square=!1,l[a].circle=!0}c(Object(s.a)(l)),v()},v=function(){m(null)},b=Boolean(o),g=b?"simple-popover":void 0;return l.a.createElement("div",{className:u.wrapper},l.a.createElement(Z.a,{color:t[a].background,alpha:100,onChange:function(e){var n=t;n[a].background=e.color,c(Object(s.a)(n))},placement:"bottomLeft"}),l.a.createElement(p.a,{"aria-describedby":g,"aria-label":"remove",onClick:function(e){m(e.currentTarget)},color:"primary"},l.a.createElement(we.a,{className:u.iconPopover}),l.a.createElement(Ie.a,{className:u.icon})),l.a.createElement(ze.a,{id:g,open:b,anchorEl:o,onClose:v,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},l.a.createElement("div",{className:u.shapeWrapper},l.a.createElement(p.a,{color:t[a].square?"primary":"default","aria-label":"square",onClick:function(e){return f(0,"square")}},l.a.createElement(je.a,{className:u.icon})),l.a.createElement(p.a,{color:t[a].circle?"primary":"default","aria-label":"circle",onClick:function(e){return f(0,"circle")}},l.a.createElement(ke.a,{className:u.icon})))),l.a.createElement("div",{className:u.opacityWrapper},l.a.createElement($.a,{value:t[a].opacity,min:0,step:.1,max:1,onChange:function(e,n){var l=t;l[a].opacity=n,c(Object(s.a)(l))},valueLabelDisplay:"auto","aria-labelledby":"discrete-slider"})),l.a.createElement(p.a,{className:u.closeButton,"aria-label":"remove",onClick:function(){var e=t;e.splice(a,1),c(Object(s.a)(e))}},l.a.createElement(oe.a,{className:u.icon})))},De={wrapper:{position:"absolute",top:0,right:0,bottom:0,left:0,width:"100%",height:"100%",zIndex:1200}},Te=Object(w.a)(De),Be=function(e){var a=e.children,t=Te();return l.a.createElement("div",{className:t.wrapper},a)},_e=function(e){var a=e.shapes,t=e.setShapes;return l.a.createElement(l.a.Fragment,null,a.map((function(e,n){return l.a.createElement(ye.a,{style:{background:e.background,opacity:e.opacity,borderRadius:e.circle?"50%":"0"},key:e.id,size:{width:e.width,height:e.height},position:{x:e.x,y:e.y},onDragStop:function(e,l){var c=a;c[n].x=l.x,c[n].y=l.y,t(Object(s.a)(c))},onResize:function(e,l,c,r,i){var o=a;o[n].width=c.offsetWidth,o[n].height=c.offsetHeight,t(Object(s.a)(o))},lockAspectRatio:!!e.circle})})))};t(259),t(260);var Re=function(){var e=Object(n.useState)(!0),a=Object(d.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(!1),i=Object(d.a)(r,2),m=i[0],b=i[1],E=Object(n.useState)(!1),y=Object(d.a)(E,2),O=y[0],j=y[1],N=Object(n.useState)(!1),k=Object(d.a)(N,2),S=k[0],w=k[1],C=Object(n.useState)(""),z=Object(d.a)(C,2),F=z[0],D=z[1],T=Object(n.useState)(""),B=Object(d.a)(T,2),_=B[0],R=B[1],L=Object(n.useState)({filter:!1,text:!1,shape:!1}),q=Object(d.a)(L,2),A=q[0],M=q[1],V=Object(n.useState)("#FFF"),G=Object(d.a)(V,2),J=G[0],Q=G[1],$=Object(n.useState)(.2),Y=Object(d.a)($,2),Z=Y[0],ee=Y[1],te=Object(n.useState)([]),ne=Object(d.a)(te,2),le=ne[0],ce=ne[1],re=Object(n.useState)([]),ie=Object(d.a)(re,2),oe=ie[0],se=ie[1];return Object(n.useEffect)((function(){localStorage.setItem("background","")}),[]),l.a.createElement("div",{className:"App"},S&&l.a.createElement(U,{onClick:function(){w(!1),b(!1)},backgrounds:F}),l.a.createElement("div",{className:"canvasWrapper"},t&&l.a.createElement(I,{onSelect:function(e){R(e),c(!1),b(!0)}}),m&&l.a.createElement(P,{onSubmit:function(e){var a;return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==F){t.next=7;break}return t.next=3,u.a.awrap(x.get("?key=".concat(W,"&q=").concat(H(e.selectedOption),"&orientation=").concat(_,"&image_type=photo&pretty=true")));case 3:a=t.sent,D(a.data.hits),w(!0),j(!0);case 7:case"end":return t.stop()}}))}}),O&&l.a.createElement("div",{className:"panelWrapper"},l.a.createElement("aside",{className:"aside"},l.a.createElement("div",{className:"aside-item"},l.a.createElement("span",{className:"aside-title"},"Filtro"),l.a.createElement(ae,{panel:A,setPanel:M,filterColor:J,setFilterColor:Q,filterOpacity:Z,setFilterOpacity:ee})),l.a.createElement("div",{className:"aside-item item-middle"},l.a.createElement("span",{className:"aside-title-text"},"Textos",l.a.createElement(p.a,{onClick:function(){var e={id:g.a.generate(),y:180,x:200,title:"Novo texto...",color:"#000000",fontSize:16,fontWeight:"normal",fontStyle:"normal",textDecoration:"none"};ce([].concat(Object(s.a)(le),[e])),A.text||M(Object(o.a)({},A,{text:!0}))},color:"primary","aria-label":"add text",className:"iconAddText"},l.a.createElement(h.a,null))),le.map((function(e,a){return l.a.createElement(be,{key:e.id,index:a,text:e.title,color:e.color,background:e.background,padding:e.padding,texts:le,setTexts:ce})}))),l.a.createElement("div",{className:"aside-item item-middle"},l.a.createElement("span",{className:"aside-title-text"},"Formas",l.a.createElement(p.a,{onClick:function(){var e={id:g.a.generate(),background:"#FFF",opacity:1,width:120,height:120,x:180,y:200,square:!0,circle:!1};se([].concat(Object(s.a)(oe),[e])),A.shape||M(Object(o.a)({},A,{shape:!0}))},color:"primary","aria-label":"add shape",className:"iconAddText"},l.a.createElement(h.a,null))),oe.map((function(e,a){return l.a.createElement(Fe,{key:e.id,index:a,shapes:oe,setShapes:se})})))),l.a.createElement("div",{className:"panel"},l.a.createElement("div",{id:"download",className:"canvas".concat(" ","horizontal"===_?"portrait":"landscape"),style:{background:"url('".concat(localStorage.getItem("background"),"')"),backgroundSize:"cover"}},A.filter&&l.a.createElement(K,{color:J,opacity:Z}),A.text&&l.a.createElement(he,null,l.a.createElement(xe,{texts:le,setTexts:ce})),A.shape&&l.a.createElement(Be,null,l.a.createElement(_e,{shapes:oe,setShapes:se})))),l.a.createElement(f.a,{onClick:X,"aria-label":"Download",className:"fab",color:"primary"},l.a.createElement(v.a,null)))))},Le=t(50),qe={image:""},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_IMAGE_CONFIG":return Object(o.a)({},e,{image:a.image});default:return e}},Pe={token:""},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_AUTH_TOKEN":return Object(o.a)({},e,{token:a.token});default:return e}},He=Object(Le.b)({auth:Ue,imageGenerator:Ae}),Me=Object(Le.c)(He,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());var Ve=function(){return l.a.createElement(i.a,{store:Me},l.a.createElement(Re,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(Ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[162,1,2]]]);
//# sourceMappingURL=main.344d33c5.chunk.js.map