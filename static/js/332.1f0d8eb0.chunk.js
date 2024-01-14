"use strict";(self.webpackChunkspotify_back=self.webpackChunkspotify_back||[]).push([[332],{835:(t,r,a)=>{a.d(r,{Z:()=>o});a(791);var e=a(184);const o=()=>(0,e.jsx)("div",{className:"loader-container",children:(0,e.jsx)("div",{className:"loader"})})},183:(t,r,a)=>{a.d(r,{E:()=>o});const e="https://ec2-35-180-230-197.eu-west-3.compute.amazonaws.com:4000/api/",o={getAudios:async()=>{const t=await fetch("".concat(e,"audio"));if(!t.ok)throw new Error("Erreur lors du chargement des audios");return await t.json()},getSingleAudio:async t=>{const r=await fetch("".concat(e,"audio/").concat(t));if(!r.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration de l\u2019audio");return await r.json()},editAudio:async(t,r)=>{const a=await fetch("".concat(e,"audio/").concat(t),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!a.ok)throw new Error("Erreur lors de la modification de l\u2019audio");return await a.json()},uploadAudio:async t=>{const r=new FormData;r.append("audioFile",t);const a=await fetch("".concat(e,"audio/upload"),{method:"POST",body:r});if(!a.ok)throw new Error("Erreur lors de l\u2019upload de l\u2019audio");return await a.json()},deleteAudio:async t=>{const r=await fetch("".concat(e,"audio/").concat(t),{method:"DELETE"});if(!r.ok)throw new Error("Erreur lors de la suppression de l\u2019audio");return await r.json()},streamAudio:async t=>{const r=await fetch("".concat(e,"audio/stream/").concat(t));if(!r.ok)throw new Error("Erreur lors du streaming de l\u2019audio");return await r.json()},getStreamingCount:async t=>{const r=await fetch("".concat(e,"audio/streamed/").concat(t));if(!r.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration du nombre de stream");return await r.json()},getArtists:async()=>{const t=await fetch("".concat(e,"artist/"));if(!t.ok)throw new Error("Erreur lors du chargement des artistes");return await t.json()},getSingleArtist:async t=>{const r=await fetch("".concat(e,"artist/").concat(t));if(!r.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration de l\u2019artiste");return await r.json()},editArtist:async(t,r)=>{const a=await fetch("".concat(e,"artist/").concat(t),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!a.ok)throw new Error("Erreur lors de la modification de l\u2019artiste");return await a.json()},createArtist:async t=>{const r=await fetch("".concat(e,"artist"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!r.ok)throw new Error("Erreur lors de la cr\xe9ation de l\u2019artiste");return await r.json()},deleteArtist:async t=>{const r=await fetch("".concat(e,"artist/").concat(t),{method:"DELETE"});if(!r.ok)throw new Error("Erreur lors de la suppression de l\u2019artiste");return await r.json()},getAlbums:async()=>{const t=await fetch("".concat(e,"album"));if(!t.ok)throw new Error("Erreur lors du chargement des albums");return await t.json()},getSingleAlbum:async t=>{const r=await fetch("".concat(e,"album/").concat(t));if(!r.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration de l\u2019album");return await r.json()},editAlbum:async(t,r)=>{console.log(r);const a=await fetch("".concat(e,"album/").concat(t),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!a.ok)throw new Error("Erreur lors de la modification de l\u2019album");return await a.json()},createAlbum:async t=>{const r=await fetch("".concat(e,"album"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!r.ok)throw new Error("Erreur lors de la cr\xe9ation de l\u2019album");return await r.json()},deleteAlbum:async t=>{const r=await fetch("".concat(e,"album/").concat(t),{method:"DELETE"});if(!r.ok)throw new Error("Erreur lors de la suppression de l\u2019album");return await r.json()},getAdmins:async()=>{const t=localStorage.getItem("userToken"),r=await fetch("".concat(e,"admin/"),{headers:{Authorization:"Bearer ".concat(t)}});if(!r.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration des donn\xe9es des administrateurs");return await r.json()},getSingleAdmin:async t=>{const r=localStorage.getItem("userToken"),a=await fetch("".concat(e,"admin/").concat(t),{headers:{Authorization:"Bearer ".concat(r)}});if(!a.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration des donn\xe9es de l\u2019administrateur");return await a.json()},addAdmin:async t=>{const r=localStorage.getItem("userToken"),a=await fetch("".concat(e,"admin"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)},body:JSON.stringify(t)});if(!a.ok)throw new Error("Erreur lors de l\u2019ajout de l\u2019administrateur");return await a.json()},editAdmin:async(t,r)=>{const a=localStorage.getItem("userToken"),o=await fetch("".concat(e,"admin/").concat(t),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify(r)});if(!o.ok)throw new Error("Erreur lors de la mise \xe0 jour de l\u2019administrateur");return await o.json()},deleteAdmin:async t=>{const r=localStorage.getItem("userToken"),a=await fetch("".concat(e,"admin/").concat(t),{method:"DELETE",headers:{Authorization:"Bearer ".concat(r)}});if(!a.ok)throw new Error("Erreur lors de la suppression de l\u2019administrateur");return await a.json()}}},332:(t,r,a)=>{a.r(r),a.d(r,{default:()=>d});var e=a(791),o=a(183),n=a(907),s=(a(418),a(835)),i=a(184);const c=(0,e.lazy)((()=>a.e(927).then(a.bind(a,927)))),d=()=>{const[t,r]=(0,e.useState)([]),[a,d]=(0,e.useState)(!0);return(0,e.useEffect)((()=>{(async()=>{try{d(!0);const t=(await o.E.getAdmins()).map((t=>({id:t._id,title:t.username,artist:t.email})));r(t)}catch(t){console.error(t)}finally{d(!1)}})(),n.B.notify("Admins charg\xe9s avec succ\xe8s","success")}),[]),a?(0,i.jsxs)("div",{className:"dashboard-list-view",children:[(0,i.jsx)("h2",{children:"Admin Dashboard"}),(0,i.jsx)(s.Z,{})]}):(0,i.jsxs)("div",{className:"dashboard-list-view",children:[(0,i.jsx)("h2",{children:"Admin Dashboard"}),a&&(0,i.jsx)(s.Z,{}),(0,i.jsx)(c,{items:t,type:"admin"})]})}}}]);
//# sourceMappingURL=332.1f0d8eb0.chunk.js.map