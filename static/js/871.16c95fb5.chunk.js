"use strict";(self.webpackChunkspotify_back=self.webpackChunkspotify_back||[]).push([[871],{835:(t,e,r)=>{r.d(e,{Z:()=>o});r(791);var a=r(184);const o=()=>(0,a.jsxs)("div",{className:"loader-container",children:[(0,a.jsx)("div",{className:"loader"}),(0,a.jsx)("p",{className:"loader-text",children:"Le premier chargement des donn\xe9es peut prendre de 10 \xe0 30 secondes. Si cela prend trop de temps, n'h\xe9sitez pas \xe0 contacter notre support."})]})},183:(t,e,r)=>{r.d(e,{E:()=>o});const a="https://ec2-35-180-230-197.eu-west-3.compute.amazonaws.com/api/",o={getAudios:async()=>{const t=await fetch("".concat(a,"audio"));if(!t.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration de l\u2019audio");return await t.json()},getSingleAudio:async t=>{const e=await fetch("".concat(a,"audio/").concat(t));if(!e.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration de l\u2019audio");return await e.json()},getLastAudio:async t=>{const e=await fetch("".concat(a,"audio/last"));if(!e.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration de l\u2019audio");return await e.json()},editAudio:async(t,e)=>{const r=localStorage.getItem("userToken"),o=await fetch("".concat(a,"audio/").concat(t),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)},body:JSON.stringify(e)});if(!o.ok)throw new Error("Erreur lors de la modification de l\u2019audio");return await o.json()},uploadAudio:async t=>{const e=localStorage.getItem("userToken"),r=new FormData;r.append("audioFile",t);const o=await fetch("".concat(a,"audio/upload"),{method:"POST",headers:{Authorization:"Bearer ".concat(e)},body:r});if(!o.ok)throw new Error("Erreur lors de l\u2019upload de l\u2019audio");return await o.json()},deleteAudio:async t=>{const e=localStorage.getItem("userToken"),r=await fetch("".concat(a,"audio/").concat(t),{method:"DELETE",headers:{Authorization:"Bearer ".concat(e)}});if(!r.ok)throw new Error("Erreur lors de la suppression de l\u2019audio");return await r.json()},streamAudio:async t=>{const e=await fetch("".concat(a,"audio/stream/").concat(t));if(!e.ok)throw new Error("Erreur lors du streaming de l\u2019audio");return await e.json()},getStreamingCount:async t=>{const e=await fetch("".concat(a,"audio/streamed/").concat(t));if(!e.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration du nombre de stream");return await e.json()},getArtists:async()=>{const t=await fetch("".concat(a,"artist"));if(!t.ok)throw new Error("Erreur lors du chargement des artistes");return await t.json()},getLastArtist:async()=>{const t=await fetch("".concat(a,"artist/last"));return await t.json()},getSingleArtist:async t=>{const e=await fetch("".concat(a,"artist/").concat(t));if(!e.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration de l\u2019artiste");return await e.json()},editArtist:async t=>{const e=localStorage.getItem("userToken"),r=t.id,o=await fetch("".concat(a,"artist/").concat(r),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)},body:JSON.stringify(t)});if(!o.ok)throw new Error("Erreur lors de la modification de l\u2019artiste");return await o.json()},createArtist:async t=>{const e=localStorage.getItem("userToken"),r=await fetch("".concat(a,"artist"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)},body:JSON.stringify(t)});if(!r.ok)throw new Error("Erreur lors de la cr\xe9ation de l\u2019artiste");return await r.json()},deleteArtist:async t=>{const e=localStorage.getItem("userToken"),r=await fetch("".concat(a,"artist/").concat(t),{method:"DELETE",headers:{Authorization:"Bearer ".concat(e)}});if(!r.ok)throw new Error("Erreur lors de la suppression de l\u2019artiste");return await r.json()},getAlbums:async()=>{const t=await fetch("".concat(a,"album"));if(!t.ok)throw new Error("Erreur lors du chargement des albums");return await t.json()},getAllAlbums:async()=>{const t=await fetch("".concat(a,"album/all"));if(!t.ok)throw new Error("Erreur lors du chargement des albums");return await t.json()},getSingleAlbum:async t=>{const e=await fetch("".concat(a,"album/").concat(t));if(!e.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration de l\u2019album");return await e.json()},editAlbum:async(t,e)=>{const r=new FormData;r.append("title",e.title),r.append("artist",e.artistId),r.append("releaseDate",e.releaseDate),r.append("genre",e.genre),e.picture&&e.picture instanceof File&&r.append("albumImage",e.picture);const o=await fetch("".concat(a,"album/").concat(t),{method:"PUT",headers:{Authorization:"Bearer ".concat(token)},body:r});if(!o.ok)throw new Error("Erreur lors de la modification de l\u2019album");return await o.json()},createAlbum:async t=>{console.log(t);const e=await fetch("".concat(a,"album"),{method:"POST",headers:{Authorization:"Bearer ".concat(token)},body:t});if(!e.ok)throw new Error("Erreur lors de la cr\xe9ation de l\u2019album");return await e.json()},deleteAlbum:async t=>{const e=localStorage.getItem("userToken"),r=await fetch("".concat(a,"album/").concat(t),{method:"DELETE",headers:{Authorization:"Bearer ".concat(e)}});if(!r.ok)throw new Error("Erreur lors de la suppression de l\u2019album");return await r.json()},getAdmins:async()=>{const t=localStorage.getItem("userToken"),e=await fetch("".concat(a,"admin"),{headers:{Authorization:"Bearer ".concat(t)}});if(!e.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration des donn\xe9es des administrateurs");return await e.json()},getSingleAdmin:async t=>{const e=localStorage.getItem("userToken"),r=await fetch("".concat(a,"admin/").concat(t),{headers:{Authorization:"Bearer ".concat(e)}});if(!r.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration des donn\xe9es de l\u2019administrateur");return await r.json()},addAdmin:async t=>{const e=localStorage.getItem("userToken"),r=await fetch("".concat(a,"admin"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)},body:JSON.stringify(t)});if(!r.ok)throw new Error("Erreur lors de l\u2019ajout de l\u2019administrateur");return await r.json()},editAdmin:async(t,e)=>{const r=localStorage.getItem("userToken"),o=await fetch("".concat(a,"admin/").concat(t),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)},body:JSON.stringify(e)});if(!o.ok)throw new Error("Erreur lors de la mise \xe0 jour de l\u2019administrateur");return await o.json()},deleteAdmin:async t=>{const e=localStorage.getItem("userToken"),r=await fetch("".concat(a,"admin/").concat(t),{method:"DELETE",headers:{Authorization:"Bearer ".concat(e)}});if(!r.ok)throw new Error("Erreur lors de la suppression de l\u2019administrateur");return await r.json()}}},144:(t,e,r)=>{r.d(e,{Fk:()=>d,OX:()=>o,aS:()=>n,fC:()=>c,rU:()=>l,xD:()=>s,xY:()=>i});const a=()=>new Promise(((t,e)=>{const r=indexedDB.open("mk-bospot",1);r.onupgradeneeded=t=>{const e=t.target.result;e.createObjectStore("audios",{keyPath:"_id"}),e.createObjectStore("artists",{keyPath:"_id"}),e.createObjectStore("albums",{keyPath:"_id"})},r.onerror=t=>{e("Database error: ".concat(t.target.errorCode))},r.onsuccess=e=>{t(e.target.result)}})),o=async t=>{const e=(await a()).transaction("audios","readwrite").objectStore("audios");for(let r of t)e.put(r)},n=async()=>{const t=(await a()).transaction("audios","readonly").objectStore("audios");return new Promise(((e,r)=>{const a=t.getAll();a.onerror=()=>{r("Failed to retrieve data from database.")},a.onsuccess=()=>{e(a.result)}}))},s=async t=>{const e=(await a()).transaction("artists","readwrite").objectStore("artists");for(let r of t)e.put(r)},c=async()=>{const t=(await a()).transaction("artists","readonly").objectStore("artists");return new Promise(((e,r)=>{const a=t.getAll();a.onerror=()=>{r("Failed to retrieve data from database.")},a.onsuccess=()=>{e(a.result)}}))},i=async t=>{(await a()).transaction("artists","readwrite").objectStore("artists").add(t)},d=async t=>{const e=(await a()).transaction("albums","readwrite").objectStore("albums");for(let r of t)e.put(r)},l=async()=>{const t=(await a()).transaction("albums","readonly").objectStore("albums");return new Promise(((e,r)=>{const a=t.getAll();a.onerror=()=>{r("Failed to retrieve data from database.")},a.onsuccess=()=>{e(a.result)}}))}},871:(t,e,r)=>{r.r(e),r.d(e,{default:()=>l});var a=r(791),o=r(183),n=r(144),s=(r(418),r(835)),c=r(184);const i=(0,a.lazy)((()=>r.e(62).then(r.bind(r,927)))),d=async t=>({_id:t._id,title:t.name}),l=()=>{const[t,e]=(0,a.useState)([]),[r,l]=(0,a.useState)(!0);return(0,a.useEffect)((()=>{(async()=>{l(!0);try{let t=await(0,n.fC)();if(!t.length){const e=await o.E.getArtists(),r=await Promise.all(e.map(d));await(0,n.xD)(r),t=r,console.log("Fetched : ",r)}e(t)}catch(t){console.error(t)}finally{l(!1)}})()}),[]),(0,c.jsxs)("div",{className:"dashboard-list-view ",children:[(0,c.jsx)("h2",{children:"Artist Dashboard"}),r?(0,c.jsx)(s.Z,{}):(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(i,{items:t,type:"artist"})})," "]})}}}]);
//# sourceMappingURL=871.16c95fb5.chunk.js.map