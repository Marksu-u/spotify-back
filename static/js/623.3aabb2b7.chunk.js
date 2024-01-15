"use strict";(self.webpackChunkspotify_back=self.webpackChunkspotify_back||[]).push([[623],{835:(t,a,r)=>{r.d(a,{Z:()=>o});r(791);var e=r(184);const o=()=>(0,e.jsx)("div",{className:"loader-container",children:(0,e.jsx)("div",{className:"loader"})})},183:(t,a,r)=>{r.d(a,{E:()=>o});const e="http://ec2-35-180-230-197.eu-west-3.compute.amazonaws.com:4000/api/",o={getAudios:async()=>{const t=await fetch("".concat(e,"audio"));if(!t.ok)throw new Error("Erreur lors du chargement des audios");return await t.json()},getSingleAudio:async t=>{const a=await fetch("".concat(e,"audio/").concat(t));if(!a.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration de l\u2019audio");return await a.json()},editAudio:async(t,a)=>{const r=await fetch("".concat(e,"audio/").concat(t),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!r.ok)throw new Error("Erreur lors de la modification de l\u2019audio");return await r.json()},uploadAudio:async t=>{const a=new FormData;a.append("audioFile",t);const r=await fetch("".concat(e,"audio/upload"),{method:"POST",body:a});if(!r.ok)throw new Error("Erreur lors de l\u2019upload de l\u2019audio");return await r.json()},deleteAudio:async t=>{const a=await fetch("".concat(e,"audio/").concat(t),{method:"DELETE"});if(!a.ok)throw new Error("Erreur lors de la suppression de l\u2019audio");return await a.json()},streamAudio:async t=>{const a=await fetch("".concat(e,"audio/stream/").concat(t));if(!a.ok)throw new Error("Erreur lors du streaming de l\u2019audio");return await a.json()},getStreamingCount:async t=>{const a=await fetch("".concat(e,"audio/streamed/").concat(t));if(!a.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration du nombre de stream");return await a.json()},getArtists:async()=>{const t=await fetch("".concat(e,"artist/"));if(!t.ok)throw new Error("Erreur lors du chargement des artistes");return await t.json()},getSingleArtist:async t=>{const a=await fetch("".concat(e,"artist/").concat(t));if(!a.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration de l\u2019artiste");return await a.json()},editArtist:async(t,a)=>{const r=await fetch("".concat(e,"artist/").concat(t),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!r.ok)throw new Error("Erreur lors de la modification de l\u2019artiste");return await r.json()},createArtist:async t=>{const a=await fetch("".concat(e,"artist"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!a.ok)throw new Error("Erreur lors de la cr\xe9ation de l\u2019artiste");return await a.json()},deleteArtist:async t=>{const a=await fetch("".concat(e,"artist/").concat(t),{method:"DELETE"});if(!a.ok)throw new Error("Erreur lors de la suppression de l\u2019artiste");return await a.json()},getAlbums:async()=>{const t=await fetch("".concat(e,"album"));if(!t.ok)throw new Error("Erreur lors du chargement des albums");return await t.json()},getSingleAlbum:async t=>{const a=await fetch("".concat(e,"album/").concat(t));if(!a.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration de l\u2019album");return await a.json()},editAlbum:async(t,a)=>{const r=await fetch("".concat(e,"album/").concat(t),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!r.ok)throw new Error("Erreur lors de la modification de l\u2019album");return await r.json()},createAlbum:async t=>{const a=await fetch("".concat(e,"album"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!a.ok)throw new Error("Erreur lors de la cr\xe9ation de l\u2019album");return await a.json()},deleteAlbum:async t=>{const a=await fetch("".concat(e,"album/").concat(t),{method:"DELETE"});if(!a.ok)throw new Error("Erreur lors de la suppression de l\u2019album");return await a.json()},getAdmins:async()=>{const t=localStorage.getItem("userToken"),a=await fetch("".concat(e,"admin/"),{headers:{Authorization:"Bearer ".concat(t)}});if(!a.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration des donn\xe9es des administrateurs");return await a.json()},getSingleAdmin:async t=>{const a=localStorage.getItem("userToken"),r=await fetch("".concat(e,"admin/").concat(t),{headers:{Authorization:"Bearer ".concat(a)}});if(!r.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration des donn\xe9es de l\u2019administrateur");return await r.json()},addAdmin:async t=>{const a=localStorage.getItem("userToken"),r=await fetch("".concat(e,"admin"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify(t)});if(!r.ok)throw new Error("Erreur lors de l\u2019ajout de l\u2019administrateur");return await r.json()},editAdmin:async(t,a)=>{const r=localStorage.getItem("userToken"),o=await fetch("".concat(e,"admin/").concat(t),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)},body:JSON.stringify(a)});if(!o.ok)throw new Error("Erreur lors de la mise \xe0 jour de l\u2019administrateur");return await o.json()},deleteAdmin:async t=>{const a=localStorage.getItem("userToken"),r=await fetch("".concat(e,"admin/").concat(t),{method:"DELETE",headers:{Authorization:"Bearer ".concat(a)}});if(!r.ok)throw new Error("Erreur lors de la suppression de l\u2019administrateur");return await r.json()}}},623:(t,a,r)=>{r.r(a),r.d(a,{default:()=>u});var e=r(791),o=r(183),n=r(907),i=(r(418),r(835)),s=r(184);const c=(0,e.lazy)((()=>r.e(927).then(r.bind(r,927)))),d=(0,e.lazy)((()=>Promise.resolve().then(r.bind(r,321)))),u=()=>{const[t,a]=(0,e.useState)([]),[r,u]=(0,e.useState)(!0),[l,w]=(0,e.useState)(1),[h,m]=(0,e.useState)(!0);(0,e.useEffect)((()=>{f(l)}),[l]);const f=async t=>{try{u(!0);const r=await o.E.getAudios(t,10);r.length>0?(a((t=>[...t,...r.map(E)])),n.B.notify("Audios charg\xe9s avec succ\xe8s !","success"),r.length<10&&m(!1)):m(!1)}catch(r){console.error(r)}finally{u(!1)}},E=t=>({id:t._id,title:t.filename,artist:t.metadata.artist.name,artistId:t.metadata.artist._id,album:t.metadata.album.title,albumId:t.metadata.album._id,date:t.metadata.date,genre:t.metadata.genre.join(", "),image:y(t.metadata.picture[0])}),y=t=>{if(t&&t.data&&t.data.data){const a=new Uint8Array(t.data.data),r=new Blob([a],{type:t.format});return URL.createObjectURL(r)}return null};if(r)return(0,s.jsxs)("div",{className:"dashboard-list-view",children:[(0,s.jsx)("h2",{children:"Audio Dashboard"}),(0,s.jsx)(i.Z,{})]});return(0,s.jsxs)("div",{className:"dashboard-list-view",children:[(0,s.jsx)("h2",{children:"Audio Dashboard"}),r&&(0,s.jsx)(i.Z,{}),h&&!r&&(0,s.jsx)(d,{label:"Charger plus",onClick:()=>{h&&!r&&w((t=>t+1))}}),(0,s.jsx)(c,{items:t,type:"song"})]})}}}]);
//# sourceMappingURL=623.3aabb2b7.chunk.js.map