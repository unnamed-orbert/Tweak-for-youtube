"use strict";(self.webpackChunktweaks_for_youtube=self.webpackChunktweaks_for_youtube||[]).push([[542],{5984:(e,t,o)=>{var n=o(4836),a=o(5263);t.Z=void 0;var r=a(o(7294)),i=(0,n(o(2108)).default)(r.createElement("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");t.Z=i},2542:(e,t,o)=>{o.r(t),o.d(t,{default:()=>_});var n=o(7294),a=o(5697),r=o.n(a),i=o(7462),l=o(5987),s=o(6010),c=o(4670),m=o(3871),p=o(9895),u=n.forwardRef((function(e,t){var o=e.classes,a=e.className,r=e.color,c=void 0===r?"primary":r,u=e.position,d=void 0===u?"fixed":u,g=(0,l.Z)(e,["classes","className","color","position"]);return n.createElement(p.Z,(0,i.Z)({square:!0,component:"header",elevation:4,className:(0,s.Z)(o.root,o["position".concat((0,m.Z)(d))],o["color".concat((0,m.Z)(c))],a,"fixed"===d&&"mui-fixed"),ref:t},g))}));const d=(0,c.Z)((function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(u);var g=o(9956),f=o(3832),b=o(4942),h=n.forwardRef((function(e,t){var o=e.classes,a=e.className,r=e.component,c=void 0===r?"div":r,m=e.disableGutters,p=void 0!==m&&m,u=e.variant,d=void 0===u?"regular":u,g=(0,l.Z)(e,["classes","className","component","disableGutters","variant"]);return n.createElement(c,(0,i.Z)({className:(0,s.Z)(o.root,o[d],a,!p&&o.gutters),ref:t},g))}));const v=(0,c.Z)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:(0,b.Z)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(h);var y=o(6447),Z=o(2318),k=o(7812),E=o(5984),w=o(1120);const x=(0,w.Z)((e=>({icon:{transition:`all ${e.transitions.duration.short}ms`},iconButton:{background:e.palette.common.white,border:`2px solid ${e.palette.common.white}`,"&:hover":{background:e.palette.primary.light,border:`2px solid ${e.palette.common.white}`,"& .MuiSvgIcon-root":{color:e.palette.common.white}}},linkRoot:{color:e.palette.common.white,padding:e.spacing(.5),"&:hover":{color:e.palette.common.white}}})));function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},C.apply(this,arguments)}const R=function({url:e,...t}){const o=x();return n.createElement(y.ZP,{title:"Leave a Rating"},n.createElement(k.Z,C({className:o.iconButton,classes:{root:o.linkRoot},href:e,rel:"noreferrer",target:"_blank"},t),n.createElement(E.Z,{className:o.icon,color:"primary"})))};var T=o(3723);const S=(0,w.Z)((e=>({ContainerRoot:({variant:t})=>({..."popup"===t&&{padding:e.spacing(0,2)}}),brand:({variant:t})=>({color:e.palette.common.white,display:"flex",marginRight:"auto",textDecoration:"none",[e.breakpoints.up("sm")]:{position:"popup"===t?"static":"absolute"}}),brandIcon:{background:e.palette.common.white,width:32,height:32,margin:"auto",marginRight:e.spacing(1)}})));function N({logo:e,name:t,title:o,url:a,urlRating:r,position:i,variant:l,version:s}){const c=S({variant:l});return n.createElement(n.Fragment,null,n.createElement(d,{position:"popup"===l?"static":i},n.createElement(v,{disableGutters:!0},n.createElement(f.Z,{classes:{root:c.ContainerRoot}},n.createElement(g.Z,{display:"flex",alignItems:"center",justifyContent:"center"},n.createElement(y.ZP,{title:o||(a?"Get More Info (Website)":"")},n.createElement("a",{className:c.brand,href:a,target:"_blank",rel:"noreferrer"},n.createElement("img",{className:c.brandIcon,alt:"Extension Icon",src:e}),n.createElement(g.Z,null,n.createElement(Z.Z,{variant:"h6",align:"left",style:{lineHeight:1}},t),n.createElement(Z.Z,{variant:"subtitle2",align:"left",style:{lineHeight:1}},n.createElement("span",{style:{color:"white"}},"►")," ",s)))),n.createElement(g.Z,{marginLeft:"auto",display:"flex"},n.createElement(g.Z,{mr:1},n.createElement(R,{url:r})),n.createElement(T.Z,{variant:"icon"})))))),"default"===l&&"fixed"===i&&n.createElement(v,null))}N.defaultProps={variant:"default",position:"fixed"},N.propTypes={logo:r().string,name:r().string,title:r().string,url:r().string,variant:r().oneOf(["default","popup"])};const I=N,L=o.p+"icon-192.png";var B=o(7580),M=o(9421),O=o(77),j=o(8330),A=o(8336);const D=[{symbol:"BAT",title:"Basic Attention Token"},{symbol:"BTC",title:"Bitcoin"},{symbol:"BCH",title:"Bitcoin Cash"},{symbol:"DOGE",title:"Dogecoin"},{symbol:"ETH",title:"Ethereum"},{symbol:"XMR",title:"Monero"},{symbol:"NANO",title:"Nano"},{symbol:"XLM",title:"Stellar"}],P=function(){return n.createElement(j.Z,{dialog:n.createElement(O.Z,null),title:"Make a Donation :)",trigger:n.createElement(B.Z,{isNotLink:!0,variant:"icon"})},n.createElement(g.Z,{textAlign:"center"},n.createElement(g.Z,{mt:2},n.createElement(B.Z,{style:{width:"320px",maxWidth:"100%"}})),n.createElement(M.Z,{gradient:!0,marginY:4}),(e=>e.map((({symbol:e,title:t})=>n.createElement(g.Z,{key:e,mb:2},n.createElement(Z.Z,{gutterBottom:!0},t),n.createElement(g.Z,{maxWidth:320,margin:"auto"},n.createElement(A.Z,{symbol:e}))))))(D)))};var z=o(7510);function G(){return G=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},G.apply(this,arguments)}const _=function(e){return n.createElement(I,G({donation:n.createElement(P,null),name:"Tweaks for YouTube: Por favor baixe a versão atual:",logo:L,url:"https://inzk.dev/tweaks-for-youtube",title:"Mais infos e mudanças / Changelogs",urlRating:z.Z.storeRatingUrl,version:z.Z.version},e))}},3963:(e,t,o)=>{o.d(t,{Z:()=>a});const n=chrome.runtime.getManifest(),a={manifest:n,browser:"chrome",name:n.name,noRelationshipTo:"YouTube™ or Google LLC",packageName:"tweaks-for-youtube",permissions:[["Armazenamento","para salvar as configurações da extensão"],["Scripting",'Para injetar JavaScript e CSS (Ferramenta de "CSS e JavaScript personalizado")']],privacyPolicyText:"Essa extensão não coleta dados pessoal dos usuarios, e não envia nenhum dado para um servidor remoto. os dados coletatos são apenas usados nas configuração da extensão que estão salvas localmente no seu PC.",siteAccess:["www.youtube.com","music.youtube.com","www.youtube-nocookie.com - for embedded videos in privacy-enhanced mode","youtube.googleapis.com - for Google Drive videos"],storeRatingUrl:"https://chrome.google.com/webstore/detail/tweaks-for-youtube/ogkoifddpkoabehfemkolflcjhklmkge/reviews",version:"3.59.0",website:"https://inzk.dev/tweaks-for-youtube",websiteText:`InzkDev / ${n.name}`}},7510:(e,t,o)=>{o.d(t,{Z:()=>n.Z});var n=o(3963)}}]);