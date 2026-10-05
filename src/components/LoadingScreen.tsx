import React, { useEffect, useState } from 'react';
export default function LoadingScreen({ onLoaded }: { onLoaded: () => void }) {
 const [show,setShow]=useState(true);
 useEffect(()=>{const key='flynn-preloader-seen';if(sessionStorage.getItem(key)){setShow(false);onLoaded();return;}sessionStorage.setItem(key,'1');const t=window.setTimeout(()=>{setShow(false);onLoaded()},1400);return()=>window.clearTimeout(t)},[onLoaded]);
 if(!show)return null;
 return <div className="preloader" role="status" aria-label="Loading Flynn portfolio"><div className="preloader-inner"><div className="preloader-name">Flynn</div><div className="preloader-line"><span/></div><p>Senior SDR · B2B Outbound</p></div></div>;
}
