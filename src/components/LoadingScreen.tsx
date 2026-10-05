import React, { useEffect, useState } from 'react';
export default function LoadingScreen({ onLoaded }: { onLoaded?: () => void }) {
  const [visible, setVisible] = useState(true);
  useEffect(() => { const t = window.setTimeout(() => { setVisible(false); onLoaded?.(); }, 1500); return () => window.clearTimeout(t); }, [onLoaded]);
  if (!visible) return null;
  return <div className="preloader" aria-hidden="true"><div className="preloader-name">Flynn</div><div className="preloader-role">Senior SDR · B2B Outbound</div></div>;
}
