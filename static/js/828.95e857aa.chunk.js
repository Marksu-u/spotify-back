"use strict";(self.webpackChunkspotify_back=self.webpackChunkspotify_back||[]).push([[828],{828:(e,s,a)=>{a.r(s),a.d(s,{default:()=>o});var i=a(791),c=a(183),d=a(907),t=a(184);const r=(0,i.lazy)((()=>Promise.resolve().then(a.bind(a,321)))),l=(0,i.lazy)((()=>a.e(54).then(a.bind(a,54)))),n=e=>{let{type:s,data:a,onClick:n}=e;const[o,m]=(0,i.useState)(!1),[u,h]=(0,i.useState)(null),[j,x]=(0,i.useState)(null),v=e=>{h(a),m(!0),x(e)},b=async(e,s,a)=>{try{if("update"===s){switch(a){case"artist":const s={id:e.id,name:e.title};await c.E.editArtist(e.id,s);break;case"song":await c.E.editAudio(e.id,e);break;case"album":await c.E.editAlbum(e.id,e)}d.B.notify("Mise \xe0 jour r\xe9ussie","success")}else if("delete"===s){switch(a){case"artist":await c.E.deleteArtist(e.id);break;case"song":await c.E.deleteSong(e.id);break;case"album":await c.E.deleteAlbum(e.id)}d.B.notify("Suppression r\xe9ussie","success")}}catch(i){console.error("Erreur lors de l'action:",i),d.B.notify("Erreur lors de l'action","error")}m(!1)};return(0,t.jsxs)("div",{className:"card",onClick:n,children:[(()=>{switch(s){case"artist":return(0,t.jsx)("div",{className:"card",children:(0,t.jsx)("div",{className:"card-content",children:(0,t.jsx)("div",{className:"card-details",children:a.title})})});case"song":return(0,t.jsxs)("div",{className:"card",children:[(0,t.jsx)("div",{className:"card-image",children:(0,t.jsx)("img",{src:a.image,alt:a.album})}),(0,t.jsxs)("div",{className:"card-content",children:[(0,t.jsx)("div",{className:"card-title",children:a.title}),(0,t.jsxs)("div",{className:"card-details",children:[(0,t.jsxs)("div",{children:[a.artist," - ",a.album]}),(0,t.jsx)("div",{children:a.date})]}),(0,t.jsx)("div",{className:"card-genre",children:(0,t.jsx)("div",{children:a.genre})})]})]});case"album":return(0,t.jsxs)("div",{className:"card",children:[(0,t.jsx)("div",{className:"card-image",children:(0,t.jsx)("img",{src:a.image,alt:a.title})}),(0,t.jsxs)("div",{className:"card-content",children:[(0,t.jsx)("div",{className:"card-title",children:a.title}),(0,t.jsx)("div",{className:"card-details",children:(0,t.jsxs)("div",{children:[a.artist," ",a.date]})}),(0,t.jsx)("div",{className:"card-genre",children:(0,t.jsxs)("div",{children:["Genre : ",a.genre]})})]})]});case"admin":return(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)("div",{className:"card-content",children:[(0,t.jsx)("div",{className:"card-title",children:a.title}),(0,t.jsx)("div",{className:"card-details",children:(0,t.jsx)("div",{children:a.artist})})]})});default:return(0,t.jsx)("div",{children:"Donn\xe9es non disponibles"})}})(),(0,t.jsxs)("div",{className:"button-container",children:[(0,t.jsx)(r,{label:"Modifier",onClick:()=>v("update")}),(0,t.jsx)(r,{label:"Supprimer",onClick:()=>v("delete")})]}),o&&(0,t.jsx)(l,{isOpen:o,onClose:()=>{m(!1),h({})},data:u,onSubmit:async(e,a)=>{await b(e,a,s),m(!1)},actionType:j,type:s})]})};n.defaultProps={onClick:()=>{}};const o=n}}]);
//# sourceMappingURL=828.95e857aa.chunk.js.map