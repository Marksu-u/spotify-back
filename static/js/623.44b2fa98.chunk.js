"use strict";(self.webpackChunkspotify_back=self.webpackChunkspotify_back||[]).push([[623],{835:(t,a,e)=>{e.d(a,{Z:()=>o});e(791);var r=e(184);const o=()=>(0,r.jsx)("div",{className:"loader-container",children:(0,r.jsx)("div",{className:"loader"})})},183:(t,a,e)=>{e.d(a,{E:()=>o});const r="http://ec2-35-180-230-197.eu-west-3.compute.amazonaws.com:4000/api/",o={getAudios:async()=>{const t="".concat(r,"audio"),a=await fetch(t);if(!a.ok)throw new Error("Erreur lors du chargement des audios");return await a.json()},getSingleAudio:async t=>{const a=await fetch("".concat(r,"audio/").concat(t));if(!a.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration de l\u2019audio");return await a.json()},editAudio:async(t,a)=>{const e=localStorage.getItem("userToken"),o=await fetch("".concat(r,"audio/").concat(t),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)},body:JSON.stringify(a)});if(!o.ok)throw new Error("Erreur lors de la modification de l\u2019audio");return await o.json()},uploadAudio:async t=>{const a=localStorage.getItem("userToken"),e=new FormData;e.append("audioFile",t);const o=await fetch("".concat(r,"audio/upload"),{method:"POST",headers:{Authorization:"Bearer ".concat(a)},body:e});if(!o.ok)throw new Error("Erreur lors de l\u2019upload de l\u2019audio");return await o.json()},deleteAudio:async t=>{const a=localStorage.getItem("userToken"),e=await fetch("".concat(r,"audio/").concat(t),{method:"DELETE",headers:{Authorization:"Bearer ".concat(a)}});if(!e.ok)throw new Error("Erreur lors de la suppression de l\u2019audio");return await e.json()},streamAudio:async t=>{const a=await fetch("".concat(r,"audio/stream/").concat(t));if(!a.ok)throw new Error("Erreur lors du streaming de l\u2019audio");return await a.json()},getStreamingCount:async t=>{const a=await fetch("".concat(r,"audio/streamed/").concat(t));if(!a.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration du nombre de stream");return await a.json()},getArtists:async()=>{const t=await fetch("".concat(r,"artist"));if(!t.ok)throw new Error("Erreur lors du chargement des artistes");return await t.json()},getLastArtist:async()=>{const t=await fetch("".concat(r,"artist/last"));return await t.json()},getSingleArtist:async t=>{const a=await fetch("".concat(r,"artist/").concat(t));if(!a.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration de l\u2019artiste");return await a.json()},editArtist:async t=>{const a=localStorage.getItem("userToken"),e=t.id,o=await fetch("".concat(r,"artist/").concat(e),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify(t)});if(!o.ok)throw new Error("Erreur lors de la modification de l\u2019artiste");return await o.json()},createArtist:async t=>{const a=localStorage.getItem("userToken"),e=await fetch("".concat(r,"artist"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify(t)});if(!e.ok)throw new Error("Erreur lors de la cr\xe9ation de l\u2019artiste");return await e.json()},deleteArtist:async t=>{const a=localStorage.getItem("userToken"),e=await fetch("".concat(r,"artist/").concat(t),{method:"DELETE",headers:{Authorization:"Bearer ".concat(a)}});if(!e.ok)throw new Error("Erreur lors de la suppression de l\u2019artiste");return await e.json()},getAlbums:async()=>{const t=await fetch("".concat(r,"album"));if(!t.ok)throw new Error("Erreur lors du chargement des albums");return await t.json()},getAllAlbums:async()=>{const t=await fetch("".concat(r,"album/all"));if(!t.ok)throw new Error("Erreur lors du chargement des albums");return await t.json()},getSingleAlbum:async t=>{const a=await fetch("".concat(r,"album/").concat(t));if(!a.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration de l\u2019album");return await a.json()},editAlbum:async(t,a)=>{const e=new FormData;e.append("title",a.title),e.append("artist",a.artistId),e.append("releaseDate",a.releaseDate),e.append("genre",a.genre),a.picture&&a.picture instanceof File&&e.append("albumImage",a.picture);const o=await fetch("".concat(r,"album/").concat(t),{method:"PUT",headers:{Authorization:"Bearer ".concat(token)},body:e});if(!o.ok)throw new Error("Erreur lors de la modification de l\u2019album");return await o.json()},createAlbum:async t=>{console.log(t);const a=await fetch("".concat(r,"album"),{method:"POST",headers:{Authorization:"Bearer ".concat(token)},body:t});if(!a.ok)throw new Error("Erreur lors de la cr\xe9ation de l\u2019album");return await a.json()},deleteAlbum:async t=>{const a=localStorage.getItem("userToken"),e=await fetch("".concat(r,"album/").concat(t),{method:"DELETE",headers:{Authorization:"Bearer ".concat(a)}});if(!e.ok)throw new Error("Erreur lors de la suppression de l\u2019album");return await e.json()},getAdmins:async()=>{const t=localStorage.getItem("userToken"),a=await fetch("".concat(r,"admin"),{headers:{Authorization:"Bearer ".concat(t)}});if(!a.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration des donn\xe9es des administrateurs");return await a.json()},getSingleAdmin:async t=>{const a=localStorage.getItem("userToken"),e=await fetch("".concat(r,"admin/").concat(t),{headers:{Authorization:"Bearer ".concat(a)}});if(!e.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration des donn\xe9es de l\u2019administrateur");return await e.json()},addAdmin:async t=>{const a=localStorage.getItem("userToken"),e=await fetch("".concat(r,"admin"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify(t)});if(!e.ok)throw new Error("Erreur lors de l\u2019ajout de l\u2019administrateur");return await e.json()},editAdmin:async(t,a)=>{const e=localStorage.getItem("userToken"),o=await fetch("".concat(r,"admin/").concat(t),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)},body:JSON.stringify(a)});if(!o.ok)throw new Error("Erreur lors de la mise \xe0 jour de l\u2019administrateur");return await o.json()},deleteAdmin:async t=>{const a=localStorage.getItem("userToken"),e=await fetch("".concat(r,"admin/").concat(t),{method:"DELETE",headers:{Authorization:"Bearer ".concat(a)}});if(!e.ok)throw new Error("Erreur lors de la suppression de l\u2019administrateur");return await e.json()}}},144:(t,a,e)=>{e.d(a,{Fk:()=>d,OX:()=>o,aS:()=>n,fC:()=>i,rU:()=>l,xD:()=>s,xY:()=>c});const r=()=>new Promise(((t,a)=>{const e=indexedDB.open("MyDatabase",1);e.onupgradeneeded=t=>{const a=t.target.result;a.createObjectStore("audios",{keyPath:"id"}),a.createObjectStore("artists",{keyPath:"id"}),a.createObjectStore("albums",{keyPath:"id"})},e.onerror=t=>{a("Database error: ".concat(t.target.errorCode))},e.onsuccess=a=>{t(a.target.result)}})),o=async t=>{const a=(await r()).transaction("audios","readwrite").objectStore("audios");for(let e of t)a.put(e)},n=async()=>{const t=(await r()).transaction("audios","readonly").objectStore("audios");return new Promise(((a,e)=>{const r=t.getAll();r.onerror=()=>{e("Failed to retrieve data from database.")},r.onsuccess=()=>{a(r.result)}}))},s=async t=>{const a=(await r()).transaction("artists","readwrite").objectStore("artists");for(let e of t)a.put(e)},i=async()=>{const t=(await r()).transaction("artists","readonly").objectStore("artists");return new Promise(((a,e)=>{const r=t.getAll();r.onerror=()=>{e("Failed to retrieve data from database.")},r.onsuccess=()=>{a(r.result)}}))},c=async t=>{(await r()).transaction("artists","readwrite").objectStore("artists").add(t)},d=async t=>{const a=(await r()).transaction("albums","readwrite").objectStore("albums");for(let e of t)a.put(e)},l=async()=>{const t=(await r()).transaction("albums","readonly").objectStore("albums");return new Promise(((a,e)=>{const r=t.getAll();r.onerror=()=>{e("Failed to retrieve data from database.")},r.onsuccess=()=>{a(r.result)}}))}},623:(t,a,e)=>{e.r(a),e.d(a,{default:()=>w});var r=e(791),o=e(288),n=e(183),s=e(144),i=(e(418),e(835)),c=e(184);const d=(0,r.lazy)((()=>e.e(62).then(e.bind(e,927)))),l=async t=>({id:t._id,title:t.filename,artist:t.metadata.artist.name,artistId:t.metadata.artist._id,album:t.metadata.album.title,albumId:t.metadata.album._id,date:t.metadata.date,genre:t.metadata.genre.join(", "),image:u(t.metadata.picture[0])}),u=t=>{var a;if(null!==t&&void 0!==t&&null!==(a=t.data)&&void 0!==a&&a.data){const a=new Uint8Array(t.data.data);let e="";return a.forEach((t=>e+=String.fromCharCode(t))),"data:".concat(t.format,";base64,").concat(window.btoa(e))}return o},w=()=>{const[t,a]=(0,r.useState)([]),[e,o]=(0,r.useState)(!0);return(0,r.useEffect)((()=>{(async()=>{o(!0);try{let t=await(0,s.aS)();if(!t.length){const a=await n.E.getAudios(),e=await Promise.all(a.map(l));await(0,s.OX)(e),t=e}a(t)}catch(t){console.error(t)}finally{o(!1)}})()}),[]),(0,c.jsxs)("div",{className:"dashboard-list-view",children:[(0,c.jsx)("h2",{children:"Audio Dashboard"}),e?(0,c.jsx)(i.Z,{}):(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(d,{items:t,type:"song"})})]})}},288:t=>{t.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=623.44b2fa98.chunk.js.map