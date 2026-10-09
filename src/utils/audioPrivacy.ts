// Timestamp ranges (seconds) where prospect contact/email info is spoken
export const PRIVACY_MUTE_RANGES: Record<string, { start: number; end: number }[]> = {
  'call-1': [{ start: 88, end: 98 }],
  'call-2': [],
  'call-3': [{ start: 74, end: 83 }],
  'call-4': [{ start: 203, end: 213 }],
};

let audioCtx: AudioContext | null = null;
let beepOsc: OscillatorNode | null = null;
let beepGain: GainNode | null = null;

export function playPrivacyBeep(): void {
  try {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtx = new AudioContextClass();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    if (beepOsc) return;

    beepOsc = audioCtx.createOscillator();
    beepGain = audioCtx.createGain();

    beepOsc.type = 'sine';
    beepOsc.frequency.setValueAtTime(950, audioCtx.currentTime);

    beepGain.gain.setValueAtTime(0.04, audioCtx.currentTime);

    beepOsc.connect(beepGain);
    beepGain.connect(audioCtx.destination);
    beepOsc.start();
  } catch {
    // Graceful fallback if AudioContext restricted
  }
}

export function stopPrivacyBeep(): void {
  try {
    if (beepOsc) {
      beepOsc.stop();
      beepOsc.disconnect();
      beepOsc = null;
    }
    if (beepGain) {
      beepGain.disconnect();
      beepGain = null;
    }
  } catch {
    // Ignore teardown errors
  }
}