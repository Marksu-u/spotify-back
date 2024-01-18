"use strict";(self.webpackChunkspotify_back=self.webpackChunkspotify_back||[]).push([[332],{835:(t,a,r)=>{r.d(a,{Z:()=>o});r(791);var e=r(184);const o=()=>(0,e.jsx)("div",{className:"loader-container",children:(0,e.jsx)("div",{className:"loader"})})},183:(t,a,r)=>{r.d(a,{E:()=>o});const e="http://ec2-35-180-230-197.eu-west-3.compute.amazonaws.com:4000/api/",o={getAudios:async(t,a)=>{const r="".concat(e,"audio?page=").concat(t,"&limit=").concat(a),o=await fetch(r);if(!o.ok)throw new Error("Erreur lors du chargement des audios");return await o.json()},getSingleAudio:async t=>{const a=await fetch("".concat(e,"audio/").concat(t));if(!a.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration de l\u2019audio");return await a.json()},editAudio:async(t,a)=>{const r=await fetch("".concat(e,"audio/").concat(t),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!r.ok)throw new Error("Erreur lors de la modification de l\u2019audio");return await r.json()},uploadAudio:async t=>{const a=new FormData;a.append("audioFile",t);const r=await fetch("".concat(e,"audio/upload"),{method:"POST",body:a});if(!r.ok)throw new Error("Erreur lors de l\u2019upload de l\u2019audio");return await r.json()},deleteAudio:async t=>{const a=await fetch("".concat(e,"audio/").concat(t),{method:"DELETE"});if(!a.ok)throw new Error("Erreur lors de la suppression de l\u2019audio");return await a.json()},streamAudio:async t=>{const a=await fetch("".concat(e,"audio/stream/").concat(t));if(!a.ok)throw new Error("Erreur lors du streaming de l\u2019audio");return await a.json()},getStreamingCount:async t=>{const a=await fetch("".concat(e,"audio/streamed/").concat(t));if(!a.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration du nombre de stream");return await a.json()},getArtists:async(t,a)=>{const r=await fetch("".concat(e,"artist/?page=").concat(t,"&limit=").concat(a));if(!r.ok)throw new Error("Erreur lors du chargement des artistes");return await r.json()},getSingleArtist:async t=>{const a=await fetch("".concat(e,"artist/").concat(t));if(!a.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration de l\u2019artiste");return await a.json()},editArtist:async(t,a)=>{const r=await fetch("".concat(e,"artist/").concat(t),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!r.ok)throw new Error("Erreur lors de la modification de l\u2019artiste");return await r.json()},createArtist:async t=>{const a=await fetch("".concat(e,"artist"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!a.ok)throw new Error("Erreur lors de la cr\xe9ation de l\u2019artiste");return await a.json()},deleteArtist:async t=>{const a=await fetch("".concat(e,"artist/").concat(t),{method:"DELETE"});if(!a.ok)throw new Error("Erreur lors de la suppression de l\u2019artiste");return await a.json()},getAlbums:async(t,a)=>{const r=await fetch("".concat(e,"album/?page=").concat(t,"&limit=").concat(a));if(!r.ok)throw new Error("Erreur lors du chargement des albums");return await r.json()},getSingleAlbum:async t=>{const a=await fetch("".concat(e,"album/").concat(t));if(!a.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration de l\u2019album");return await a.json()},editAlbum:async(t,a)=>{const r=await fetch("".concat(e,"album/").concat(t),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!r.ok)throw new Error("Erreur lors de la modification de l\u2019album");return await r.json()},createAlbum:async t=>{const a=await fetch("".concat(e,"album"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!a.ok)throw new Error("Erreur lors de la cr\xe9ation de l\u2019album");return await a.json()},deleteAlbum:async t=>{const a=await fetch("".concat(e,"album/").concat(t),{method:"DELETE"});if(!a.ok)throw new Error("Erreur lors de la suppression de l\u2019album");return await a.json()},getAdmins:async(t,a)=>{const r=localStorage.getItem("userToken"),o=await fetch("".concat(e,"admin/?page=").concat(t,"&limit=").concat(a),{headers:{Authorization:"Bearer ".concat(r)}});if(!o.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration des donn\xe9es des administrateurs");return await o.json()},getSingleAdmin:async t=>{const a=localStorage.getItem("userToken"),r=await fetch("".concat(e,"admin/").concat(t),{headers:{Authorization:"Bearer ".concat(a)}});if(!r.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration des donn\xe9es de l\u2019administrateur");return await r.json()},addAdmin:async t=>{const a=localStorage.getItem("userToken"),r=await fetch("".concat(e,"admin"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify(t)});if(!r.ok)throw new Error("Erreur lors de l\u2019ajout de l\u2019administrateur");return await r.json()},editAdmin:async(t,a)=>{const r=localStorage.getItem("userToken"),o=await fetch("".concat(e,"admin/").concat(t),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)},body:JSON.stringify(a)});if(!o.ok)throw new Error("Erreur lors de la mise \xe0 jour de l\u2019administrateur");return await o.json()},deleteAdmin:async t=>{const a=localStorage.getItem("userToken"),r=await fetch("".concat(e,"admin/").concat(t),{method:"DELETE",headers:{Authorization:"Bearer ".concat(a)}});if(!r.ok)throw new Error("Erreur lors de la suppression de l\u2019administrateur");return await r.json()}}},332:(t,a,r)=>{r.r(a),r.d(a,{default:()=>u});var e=r(791),o=r(183),n=r(907),i=(r(418),r(835)),s=r(184);const c=(0,e.lazy)((()=>r.e(927).then(r.bind(r,927)))),d=(0,e.lazy)((()=>Promise.resolve().then(r.bind(r,321)))),u=()=>{const[t,a]=(0,e.useState)([]),[r,u]=(0,e.useState)(!0),[l,w]=(0,e.useState)(1),[h,m]=(0,e.useState)(!0),[f,E]=(0,e.useState)(16);(0,e.useEffect)((()=>{(async()=>{u(!0);try{const t=await o.E.getAdmins(l,f);t.length>0?(a((a=>[...a,...t.map(p)])),notify("Admin charg\xe9","success"),m(t.length===f)):m(!1)}catch(t){console.error(t)}finally{u(!1)}})(),n.B.notify("Admins charg\xe9s avec succ\xe8s","success")}),[]);const p=t=>({id:t._id,title:t.username,artist:t.email});return(0,s.jsxs)("div",{className:"dashboard-list-view",children:[(0,s.jsx)("h2",{children:"Admin Dashboard"}),r?(0,s.jsx)(i.Z,{}):(0,s.jsxs)(s.Fragment,{children:[h&&(0,s.jsx)(d,{label:"Charger plus",onClick:()=>{h&&w((t=>t+1))}}),(0,s.jsx)(c,{items:t,type:"admin"})]})]})}}}]);
//# sourceMappingURL=332.63a52200.chunk.js.map