"use strict";(self.webpackChunkspotify_back=self.webpackChunkspotify_back||[]).push([[433],{835:(t,e,r)=>{r.d(e,{Z:()=>o});r(791);var a=r(184);const o=()=>(0,a.jsxs)("div",{className:"loader-container",children:[(0,a.jsx)("div",{className:"loader"}),(0,a.jsx)("p",{className:"loader-text",children:"Le premier chargement des donn\xe9es peut prendre de 10 \xe0 30 secondes. Si cela prend trop de temps, n'h\xe9sitez pas \xe0 contacter notre support."})]})},183:(t,e,r)=>{r.d(e,{E:()=>o});const a="https://ec2-35-180-230-197.eu-west-3.compute.amazonaws.com/api/",o={getAudios:async()=>{const t=await fetch("".concat(a,"audio"));if(!t.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration de l\u2019audio");return await t.json()},getSingleAudio:async t=>{const e=await fetch("".concat(a,"audio/").concat(t));if(!e.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration de l\u2019audio");return await e.json()},getLastAudio:async t=>{const e=await fetch("".concat(a,"audio/last"));if(!e.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration de l\u2019audio");return await e.json()},editAudio:async(t,e)=>{const r=localStorage.getItem("userToken"),o=await fetch("".concat(a,"audio/").concat(t),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)},body:JSON.stringify(e)});if(!o.ok)throw new Error("Erreur lors de la modification de l\u2019audio");return await o.json()},uploadAudio:async t=>{const e=localStorage.getItem("userToken"),r=new FormData;r.append("audioFile",t);const o=await fetch("".concat(a,"audio/upload"),{method:"POST",headers:{Authorization:"Bearer ".concat(e)},body:r});if(!o.ok)throw new Error("Erreur lors de l\u2019upload de l\u2019audio");return await o.json()},deleteAudio:async t=>{const e=localStorage.getItem("userToken"),r=await fetch("".concat(a,"audio/").concat(t),{method:"DELETE",headers:{Authorization:"Bearer ".concat(e)}});if(!r.ok)throw new Error("Erreur lors de la suppression de l\u2019audio");return await r.json()},streamAudio:async t=>{const e=await fetch("".concat(a,"audio/stream/").concat(t));if(!e.ok)throw new Error("Erreur lors du streaming de l\u2019audio");return await e.json()},getStreamingCount:async t=>{const e=await fetch("".concat(a,"audio/streamed/").concat(t));if(!e.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration du nombre de stream");return await e.json()},getArtists:async()=>{const t=await fetch("".concat(a,"artist"));if(!t.ok)throw new Error("Erreur lors du chargement des artistes");return await t.json()},getLastArtist:async()=>{const t=await fetch("".concat(a,"artist/last"));return await t.json()},getSingleArtist:async t=>{const e=await fetch("".concat(a,"artist/").concat(t));if(!e.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration de l\u2019artiste");return await e.json()},editArtist:async t=>{const e=localStorage.getItem("userToken"),r=t.id,o=await fetch("".concat(a,"artist/").concat(r),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)},body:JSON.stringify(t)});if(!o.ok)throw new Error("Erreur lors de la modification de l\u2019artiste");return await o.json()},createArtist:async t=>{const e=localStorage.getItem("userToken"),r=await fetch("".concat(a,"artist"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)},body:JSON.stringify(t)});if(!r.ok)throw new Error("Erreur lors de la cr\xe9ation de l\u2019artiste");return await r.json()},deleteArtist:async t=>{const e=localStorage.getItem("userToken"),r=await fetch("".concat(a,"artist/").concat(t),{method:"DELETE",headers:{Authorization:"Bearer ".concat(e)}});if(!r.ok)throw new Error("Erreur lors de la suppression de l\u2019artiste");return await r.json()},getAlbums:async()=>{const t=await fetch("".concat(a,"album"));if(!t.ok)throw new Error("Erreur lors du chargement des albums");return await t.json()},getAllAlbums:async()=>{const t=await fetch("".concat(a,"album/all"));if(!t.ok)throw new Error("Erreur lors du chargement des albums");return await t.json()},getSingleAlbum:async t=>{const e=await fetch("".concat(a,"album/").concat(t));if(!e.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration de l\u2019album");return await e.json()},editAlbum:async(t,e)=>{const r=new FormData;r.append("title",e.title),r.append("artist",e.artistId),r.append("releaseDate",e.releaseDate),r.append("genre",e.genre),e.picture&&e.picture instanceof File&&r.append("albumImage",e.picture);const o=await fetch("".concat(a,"album/").concat(t),{method:"PUT",headers:{Authorization:"Bearer ".concat(token)},body:r});if(!o.ok)throw new Error("Erreur lors de la modification de l\u2019album");return await o.json()},createAlbum:async t=>{console.log(t);const e=await fetch("".concat(a,"album"),{method:"POST",headers:{Authorization:"Bearer ".concat(token)},body:t});if(!e.ok)throw new Error("Erreur lors de la cr\xe9ation de l\u2019album");return await e.json()},deleteAlbum:async t=>{const e=localStorage.getItem("userToken"),r=await fetch("".concat(a,"album/").concat(t),{method:"DELETE",headers:{Authorization:"Bearer ".concat(e)}});if(!r.ok)throw new Error("Erreur lors de la suppression de l\u2019album");return await r.json()},getAdmins:async()=>{const t=localStorage.getItem("userToken"),e=await fetch("".concat(a,"admin"),{headers:{Authorization:"Bearer ".concat(t)}});if(!e.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration des donn\xe9es des administrateurs");return await e.json()},getSingleAdmin:async t=>{const e=localStorage.getItem("userToken"),r=await fetch("".concat(a,"admin/").concat(t),{headers:{Authorization:"Bearer ".concat(e)}});if(!r.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration des donn\xe9es de l\u2019administrateur");return await r.json()},addAdmin:async t=>{const e=localStorage.getItem("userToken"),r=await fetch("".concat(a,"admin"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)},body:JSON.stringify(t)});if(!r.ok)throw new Error("Erreur lors de l\u2019ajout de l\u2019administrateur");return await r.json()},editAdmin:async(t,e)=>{const r=localStorage.getItem("userToken"),o=await fetch("".concat(a,"admin/").concat(t),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)},body:JSON.stringify(e)});if(!o.ok)throw new Error("Erreur lors de la mise \xe0 jour de l\u2019administrateur");return await o.json()},deleteAdmin:async t=>{const e=localStorage.getItem("userToken"),r=await fetch("".concat(a,"admin/").concat(t),{method:"DELETE",headers:{Authorization:"Bearer ".concat(e)}});if(!r.ok)throw new Error("Erreur lors de la suppression de l\u2019administrateur");return await r.json()}}},144:(t,e,r)=>{r.d(e,{Fk:()=>d,OX:()=>o,aS:()=>n,fC:()=>i,rU:()=>l,xD:()=>s,xY:()=>c});const a=()=>new Promise(((t,e)=>{const r=indexedDB.open("mk-bospot",1);r.onupgradeneeded=t=>{const e=t.target.result;e.createObjectStore("audios",{keyPath:"_id"}),e.createObjectStore("artists",{keyPath:"_id"}),e.createObjectStore("albums",{keyPath:"_id"})},r.onerror=t=>{e("Database error: ".concat(t.target.errorCode))},r.onsuccess=e=>{t(e.target.result)}})),o=async t=>{const e=(await a()).transaction("audios","readwrite").objectStore("audios");for(let r of t)e.put(r)},n=async()=>{const t=(await a()).transaction("audios","readonly").objectStore("audios");return new Promise(((e,r)=>{const a=t.getAll();a.onerror=()=>{r("Failed to retrieve data from database.")},a.onsuccess=()=>{e(a.result)}}))},s=async t=>{const e=(await a()).transaction("artists","readwrite").objectStore("artists");for(let r of t)e.put(r)},i=async()=>{const t=(await a()).transaction("artists","readonly").objectStore("artists");return new Promise(((e,r)=>{const a=t.getAll();a.onerror=()=>{r("Failed to retrieve data from database.")},a.onsuccess=()=>{e(a.result)}}))},c=async t=>{(await a()).transaction("artists","readwrite").objectStore("artists").add(t)},d=async t=>{const e=(await a()).transaction("albums","readwrite").objectStore("albums");for(let r of t)e.put(r)},l=async()=>{const t=(await a()).transaction("albums","readonly").objectStore("albums");return new Promise(((e,r)=>{const a=t.getAll();a.onerror=()=>{r("Failed to retrieve data from database.")},a.onsuccess=()=>{e(a.result)}}))}},433:(t,e,r)=>{r.r(e),r.d(e,{default:()=>w});var a=r(791),o=r(288),n=r(144),s=r(183),i=(r(418),r(835)),c=r(184);const d=(0,a.lazy)((()=>r.e(62).then(r.bind(r,927)))),l=async t=>({_id:t._id,title:t.title,artist:t.artist.name,artistId:t.artist._id,releaseDate:t.releaseDate,genre:t.genre.join(", "),picture:u(t.picture[0])}),u=t=>{var e;if(null!==t&&void 0!==t&&null!==(e=t.data)&&void 0!==e&&e.data){const e=new Uint8Array(t.data.data);let r="";return e.forEach((t=>r+=String.fromCharCode(t))),"data:".concat(t.format,";base64,").concat(window.btoa(r))}return o},w=()=>{const[t,e]=(0,a.useState)([]),[r,o]=(0,a.useState)(!0);return(0,a.useEffect)((()=>{(async()=>{o(!0);try{let t=await(0,n.rU)();if(!t.length){const e=await s.E.getAlbums(),r=await Promise.all(e.map(l));await(0,n.Fk)(r),t=r}e(t)}catch(t){console.error(t)}finally{o(!1)}})()}),[]),(0,c.jsxs)("div",{className:"dashboard-list-view",children:[(0,c.jsx)("h2",{children:"Albums Dashboard"}),r?(0,c.jsx)(i.Z,{}):(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(d,{items:t,type:"album"})})]})}},288:t=>{t.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=433.66321a52.chunk.js.map