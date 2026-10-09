import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Global single-media playback controller to prevent overlapping sounds
if (typeof window !== 'undefined') {
  document.addEventListener(
    'play',
    (event) => {
      const activeMedia = event.target as HTMLMediaElement;
      const allMedia = document.querySelectorAll('audio, video');
      allMedia.forEach((media) => {
        const el = media as HTMLMediaElement;
        if (el !== activeMedia && !el.paused) {
          el.pause();
        }
      });
    },
    true // Capture phase to intercept all media elements immediately
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
